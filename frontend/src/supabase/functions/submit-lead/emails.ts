// ============================================================
// Email templates for the submit-lead function (Phase 2 wiring).
// Plain inline-styled HTML — email clients ignore <style>/external CSS.
// ============================================================

export interface Lead {
  name: string;
  email: string;
  phone: string | null;
  business_name: string | null;
  message: string;
}

const BRAND = "#7C3AED";
const INK = "#0E0E13";
const PAPER = "#13131A";
const TEXT = "#F4F4F5";
const MUTED = "#9CA3AF";
const SITE = "https://rrkautomations.com";
const WHATSAPP = "https://wa.me/918341374436";

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shell(title: string, inner: string): string {
  return `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<title>${esc(title)}</title></head>
<body style="margin:0;padding:0;background:${INK};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${INK};padding:32px 16px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${PAPER};border:1px solid #262631;border-radius:16px;overflow:hidden;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
<tr><td style="padding:24px 32px;border-bottom:1px solid #262631;">
<span style="font-size:18px;font-weight:700;color:${TEXT};">RRK</span><span style="font-size:18px;font-weight:700;color:${BRAND};">Automations</span>
</td></tr>
${inner}
<tr><td style="padding:20px 32px;border-top:1px solid #262631;">
<p style="margin:0;font-size:12px;color:${MUTED};">RRK Automations · <a href="${SITE}" style="color:${MUTED};">rrkautomations.com</a></p>
</td></tr>
</table>
</td></tr></table>
</body></html>`;
}

function row(label: string, value: string): string {
  return `<tr>
<td style="padding:8px 0;font-size:13px;color:${MUTED};width:120px;vertical-align:top;">${esc(label)}</td>
<td style="padding:8px 0;font-size:14px;color:${TEXT};">${value}</td>
</tr>`;
}

/** Sent to the team for every new lead. */
export function internalLeadEmail(lead: Lead): string {
  const phone = lead.phone
    ? `<a href="tel:${esc(lead.phone)}" style="color:${BRAND};">${esc(lead.phone)}</a>`
    : `<span style="color:${MUTED};">—</span>`;
  const inner = `<tr><td style="padding:28px 32px;">
<p style="margin:0 0 4px;font-size:13px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:${BRAND};">New lead</p>
<h1 style="margin:0 0 20px;font-size:22px;font-weight:700;color:${TEXT};">${esc(lead.name)}</h1>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${row("Email", `<a href="mailto:${esc(lead.email)}" style="color:${BRAND};">${esc(lead.email)}</a>`)}
${row("Phone", phone)}
${row("Business", esc(lead.business_name ?? "—"))}
${row("Message", esc(lead.message).replace(/\n/g, "<br>"))}
</table>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
<tr><td style="border-radius:8px;background:${BRAND};">
<a href="mailto:${esc(lead.email)}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:600;color:#fff;text-decoration:none;">Reply to ${esc(lead.name)}</a>
</td></tr></table>
</td></tr>`;
  return shell(`New lead: ${lead.name}`, inner);
}

/** Auto-reply sent to the lead. */
export function leadConfirmationEmail(lead: Lead): string {
  const first = esc(lead.name.split(" ")[0] || lead.name);
  const inner = `<tr><td style="padding:28px 32px;">
<h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:${TEXT};">Thanks, ${first} — we've got it.</h1>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${MUTED};">
Your message reached the RRK Automations team. We reply within 24 hours, usually much sooner.
</p>
<p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:${MUTED};">
Need a faster answer? Message us on WhatsApp and we'll jump in.
</p>
<table role="presentation" cellpadding="0" cellspacing="0">
<tr><td style="border-radius:8px;background:#1F8E4C;">
<a href="${WHATSAPP}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:600;color:#fff;text-decoration:none;">Chat on WhatsApp</a>
</td></tr></table>
<p style="margin:24px 0 0;font-size:13px;color:${MUTED};">— The RRK Automations team</p>
</td></tr>`;
  return shell("Thanks for reaching out to RRK Automations", inner);
}
