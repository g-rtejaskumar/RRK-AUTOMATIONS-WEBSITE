// Calendly helpers — single source of truth for the booking URL + prefill.

const FALLBACK_URL = "https://calendly.com/rrkautomations/new-meeting";

export const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || FALLBACK_URL;

/**
 * Build a Calendly URL with the booker's details pre-filled so they don't
 * retype what the gate already collected.
 * Calendly reads `name` and `email` from the query string.
 */
export function buildCalendlyUrl({ name, email } = {}) {
  try {
    const url = new URL(CALENDLY_URL);
    if (name) url.searchParams.set("name", name);
    if (email) url.searchParams.set("email", email);
    return url.toString();
  } catch {
    return CALENDLY_URL;
  }
}
