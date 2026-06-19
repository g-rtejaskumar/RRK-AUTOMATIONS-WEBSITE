// ============================================================
// submit-lead — Supabase Edge Function
//
// PHASE 1 STATUS: placeholder, NOT deployed.
// Phase 2 connects this by setting secrets and running:
//   supabase functions deploy submit-lead
//
// Required secrets (supabase secrets set ...):
//   RESEND_API_KEY   — Resend API key
//   RESEND_FROM      — verified sender, e.g. "RRK Automations <leads@rrkautomations.com>"
//   LEAD_NOTIFY_TO   — comma-separated team emails (the 5 recipients)
// Auto-provided by Supabase:
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
//
// Contract:
//   1. Store lead in Supabase (service role, bypasses RLS).
//   2. Email the team (internal template) + the lead (confirmation template).
//   3. Notification failure NEVER fails lead submission.
// ============================================================

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { internalLeadEmail, leadConfirmationEmail } from "./emails.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

async function sendEmail(payload: Record<string, unknown>) {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set — skipping email (Phase 2).");
    return;
  }
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${await res.text()}`);
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { name, email, phone, business_name, message, company_website } =
      await req.json();

    // Honeypot — silently accept bots without storing
    if (company_website) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const lead = {
      name: String(name).trim().substring(0, 100),
      email: String(email).trim().toLowerCase().substring(0, 255),
      phone: phone ? String(phone).trim().substring(0, 20) : null,
      business_name: business_name
        ? String(business_name).trim().substring(0, 100)
        : null,
      message: String(message).trim().substring(0, 2000),
      status: "new",
    };

    // 1. Store lead (source of truth) — failure here DOES fail the request.
    const { data, error } = await supabase
      .from("leads")
      .insert([lead])
      .select()
      .single();

    if (error) throw error;

    // 2. Notifications — best effort. Wrapped so a failure can never
    //    fail the submission the user already completed.
    try {
      const from =
        Deno.env.get("RESEND_FROM") ?? "RRK Automations <onboarding@resend.dev>";
      const team = (Deno.env.get("LEAD_NOTIFY_TO") ?? "")
        .split(",")
        .map((e) => e.trim())
        .filter(Boolean);

      const jobs: Promise<void>[] = [];

      if (team.length > 0) {
        jobs.push(
          sendEmail({
            from,
            to: team,
            reply_to: lead.email,
            subject: `New lead: ${lead.name}${
              lead.business_name ? ` — ${lead.business_name}` : ""
            }`,
            html: internalLeadEmail(lead),
          })
        );
      }

      jobs.push(
        sendEmail({
          from,
          to: [lead.email],
          subject: "Thanks for reaching out to RRK Automations",
          html: leadConfirmationEmail(lead),
        })
      );

      const results = await Promise.allSettled(jobs);
      results
        .filter((r) => r.status === "rejected")
        .forEach((r) =>
          console.error("Lead email failed:", (r as PromiseRejectedResult).reason)
        );
    } catch (notifyErr) {
      console.error("Notification block failed (lead still saved):", notifyErr);
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("submit-lead error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
