// ============================================================
// submit-lead — Supabase Edge Function
//
// Required secrets (supabase secrets set ...):
//   EMAILJS_SERVICE_ID            — EmailJS service id
//   EMAILJS_TEMPLATE_ID_INTERNAL  — EmailJS template id for team notification
//   EMAILJS_PUBLIC_KEY            — EmailJS public key (user_id)
//   EMAILJS_PRIVATE_KEY          — EmailJS private key (accessToken)
//   LEAD_NOTIFY_TO               — comma-separated team emails (the recipients)
// Auto-provided by Supabase:
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
//
// Contract:
//   1. Store lead in Supabase (service role, bypasses RLS).
//   2. Notify the team via EmailJS (internal template).
//   3. Notification failure NEVER fails lead submission.
// ============================================================

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { internalLeadEmail } from "./emails.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

// Non-secret EmailJS identifiers (safe in code; same as ship in browser SDKs).
// Overridable via env. Keys (public/private) are read from env only — never here.
const EMAILJS_SERVICE_ID = Deno.env.get("EMAILJS_SERVICE_ID") ?? "service_rrk";
const EMAILJS_TEMPLATE_ID_INTERNAL =
  Deno.env.get("EMAILJS_TEMPLATE_ID_INTERNAL") ?? "template_ng5iiok";

// Send one EmailJS message to a single recipient. Server-side call uses the
// private key as accessToken (requires "Allow EmailJS API for non-browser
// applications" enabled in the EmailJS account security settings).
async function sendEmailJS(
  templateId: string,
  templateParams: Record<string, unknown>
) {
  const publicKey = Deno.env.get("EMAILJS_PUBLIC_KEY");
  const privateKey = Deno.env.get("EMAILJS_PRIVATE_KEY");

  if (!EMAILJS_SERVICE_ID || !publicKey || !privateKey || !templateId) {
    throw new Error("EmailJS not fully configured");
  }

  const res = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: templateParams,
    }),
  });

  if (!res.ok) {
    throw new Error(`EmailJS ${res.status}: ${await res.text()}`);
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

    const { name, email, phone, business_name, message, company_website, source } =
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
      const team = (Deno.env.get("LEAD_NOTIFY_TO") ?? "")
        .split(",")
        .map((e) => e.trim())
        .filter(Boolean);

      const templateId = EMAILJS_TEMPLATE_ID_INTERNAL;
      const leadSource =
        source && String(source).trim() ? String(source).trim() : "Website";

      // EmailJS sends to one "To Email" per call, so notify each recipient.
      const jobs = team.map((recipient) =>
        sendEmailJS(templateId, {
          to_email: recipient,
          reply_to: lead.email,
          subject: `New lead: ${lead.name}${
            lead.business_name ? ` — ${lead.business_name}` : ""
          }`,
          name: lead.name,
          email: lead.email,
          phone: lead.phone ?? "",
          business: lead.business_name ?? "",
          message: lead.message,
          lead_source: leadSource,
          timestamp: data.created_at,
          message_html: internalLeadEmail(lead),
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
