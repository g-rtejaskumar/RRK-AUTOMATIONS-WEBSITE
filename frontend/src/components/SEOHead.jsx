import { useEffect } from "react";

const defaults = {
  siteName: "RRK Automations",
  baseUrl: "https://rrkautomations.com",
  image: "https://rrkautomations.com/logorrk.png",
};

/**
 * Lightweight per-page SEO component.
 * Updates document.title and meta tags on mount.
 */
export default function SEOHead({ title, description, path = "/", keywords }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — ${defaults.siteName}`
      : `${defaults.siteName} — AI & WhatsApp Automation Agency`;

    document.title = fullTitle;

    const setMeta = (name, content) => {
      if (!content) return;
      let el =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(name.startsWith("og:") || name.startsWith("twitter:") ? "property" : "name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const desc = description || "AI-powered automation systems that turn leads into revenue in 48 hours.";

    setMeta("description", desc);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:title", fullTitle);
    setMeta("og:description", desc);
    setMeta("og:url", `${defaults.baseUrl}${path}`);
    setMeta("og:image", defaults.image);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);

    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${defaults.baseUrl}${path}`);
  }, [title, description, path, keywords]);

  return null;
}
