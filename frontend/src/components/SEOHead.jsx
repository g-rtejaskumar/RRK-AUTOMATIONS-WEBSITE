import { useEffect } from "react";

const defaults = {
  siteName: "RRK Automations",
  baseUrl: "https://rrkautomations.com",
  image: "https://rrkautomations.com/logorrk.png",
  imageAlt: "RRK Automations logo",
};

/**
 * Lightweight per-page SEO component.
 * Updates document.title, metadata, canonical, and JSON-LD on mount.
 */
export default function SEOHead({
  title,
  description,
  path = "/",
  keywords,
  image = defaults.image,
  imageAlt = defaults.imageAlt,
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData = [],
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} - ${defaults.siteName}`
      : `${defaults.siteName} - AI & WhatsApp Automation Agency`;

    document.title = fullTitle;

    const setMeta = (name, content) => {
      if (!content) return;

      const attribute = name.startsWith("og:") ? "property" : "name";
      let el = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute, name);
        document.head.appendChild(el);
      }

      el.setAttribute("content", content);
    };

    const desc =
      description ||
      "AI-powered automation systems that turn leads into revenue in 48 hours.";

    setMeta("description", desc);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:type", ogType);
    setMeta("og:site_name", defaults.siteName);
    setMeta("og:title", fullTitle);
    setMeta("og:description", desc);
    setMeta("og:url", `${defaults.baseUrl}${path}`);
    setMeta("og:image", image);
    setMeta("og:image:alt", imageAlt);
    setMeta("twitter:card", twitterCard);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);
    setMeta("twitter:image", image);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${defaults.baseUrl}${path}`);

    const createdScripts = structuredData.filter(Boolean).map((entry, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-head", `structured-data-${index}`);
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      createdScripts.forEach((script) => script.remove());
    };
  }, [
    title,
    description,
    path,
    keywords,
    image,
    imageAlt,
    ogType,
    twitterCard,
    structuredData,
  ]);

  return null;
}
