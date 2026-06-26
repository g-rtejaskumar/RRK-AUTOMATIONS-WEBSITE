import fs from "node:fs";
import path from "node:path";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  getRelatedServices,
} from "../src/lib/serviceSchemas.js";

const pages = [
  {
    name: "AI Chatbots",
    slug: "ai-chatbots",
    eyebrow: "AI Chatbots",
    seo: {
      title: "AI Chatbots",
      description:
        "Custom AI chatbots that answer customer questions, qualify leads, and book calls around the clock across web, WhatsApp, and Instagram. Live in 48 hours.",
    },
    faqCount: 4,
  },
  {
    name: "WhatsApp Automation",
    slug: "whatsapp-automation",
    eyebrow: "WhatsApp Automation",
    seo: {
      title: "WhatsApp Automation",
      description:
        "WhatsApp Business API automation: instant replies, automated follow-ups, order and appointment notifications, and broadcast campaigns. Set up in 48 hours.",
    },
    faqCount: 4,
  },
  {
    name: "Business Automation",
    slug: "business-automation",
    eyebrow: "Business Automation",
    seo: {
      title: "Business Automation",
      description:
        "End-to-end business process automation: lead intake, CRM updates, invoicing, onboarding, and reporting connected across your tools. Built in days, not months.",
    },
    faqCount: 4,
  },
  {
    name: "Workflow Automation",
    slug: "workflow-automation",
    eyebrow: "Workflow Automation",
    seo: {
      title: "Workflow Automation",
      description:
        "Custom workflow automation with n8n, Make, and Zapier. Connect your apps, sync data, and trigger actions automatically with reliable, monitored workflows.",
    },
    faqCount: 4,
  },
  {
    name: "Real Estate Automation",
    slug: "real-estate-automation",
    eyebrow: "Real Estate Automation",
    seo: {
      title: "Real Estate Automation",
      description: "Automate real estate lead capture from Zillow, social media, and websites. Qualify buyers, schedule property tours, and follow up instantly. Ready in 48 hours."
    },
    faqCount: 4,
  },
  {
    name: "Ecommerce Automation",
    slug: "ecommerce-automation",
    eyebrow: "Ecommerce Automation",
    seo: {
      title: "Ecommerce Automation",
      description: "Automate cart abandonment flows, Shopify order alerts, inventory updates, and order confirmations via WhatsApp and SMS. Ready in 48 hours."
    },
    faqCount: 4,
  },
  {
    name: "Agency Automation",
    slug: "agency-automation",
    eyebrow: "Agency Automation",
    seo: {
      title: "Agency Automation",
      description: "Automate your marketing or creative agency. Sync client onboarding, project setup, Slack alerts, CRM updates, and report generation in 48 hours."
    },
    faqCount: 4,
  },
  {
    name: "Legal Automation",
    slug: "legal-automation",
    eyebrow: "Legal Automation",
    seo: {
      title: "Legal Automation",
      description: "Automate law firm workflows: client intake forms, legal document drafting, court deadline trackers, and secure client file intake. Ready in 48 hours."
    },
    faqCount: 4,
  },
  {
    name: "Healthcare Automation",
    slug: "healthcare-automation",
    eyebrow: "Healthcare Automation",
    seo: {
      title: "Healthcare Automation",
      description: "Secure healthcare workflow automation. Automate patient scheduling reminders, secure intake forms, EHR synchronization, and invoice updates. Ready in 48 hours."
    },
    faqCount: 4,
  },
  {
    name: "SaaS Automation",
    slug: "saas-automation",
    eyebrow: "SaaS Automation",
    seo: {
      title: "SaaS Automation",
      description: "Automate SaaS operations: connect payment systems (Stripe) to CRM pipelines, trigger user onboarding emails, sync analytics, and route customer success tasks. Ready in 48 hours."
    },
    faqCount: 4,
  },
  {
    name: "Consulting Automation",
    slug: "consulting-automation",
    eyebrow: "Consulting Automation",
    seo: {
      title: "Consulting Automation",
      description: "Automate consulting lead qualification, client scheduling, retainer invoicing, secure document sign-offs, and onboarding setups. Ready in 48 hours."
    },
    faqCount: 4,
  },
  {
    name: "Education Automation",
    slug: "education-automation",
    eyebrow: "Education Automation",
    seo: {
      title: "Education Automation",
      description: "Wired educational workflow automation. Automate student course enrollment, WhatsApp study alerts, tuition fee notifications, and certificate generation. Ready in 48 hours."
    },
    faqCount: 4,
  },
  {
    name: "Finance Automation",
    slug: "finance-automation",
    eyebrow: "Finance Automation",
    seo: {
      title: "Finance Automation",
      description: "Automate accounting and finance workflows: sync billing systems to ledger books, track invoices, generate expense alerts, and update financial dashboards. Ready in 48 hours."
    },
    faqCount: 4,
  },
  {
    name: "Local Services Automation",
    slug: "local-services-automation",
    eyebrow: "Local Services Automation",
    seo: {
      title: "Local Services Automation",
      description: "Automate contracting and service businesses: online appointment scheduling, WhatsApp booking confirmations, dispatch notices, and automatic reviews. Ready in 48 hours."
    },
    faqCount: 4,
  },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function read(relativePath) {
  return fs.readFileSync(path.resolve(relativePath), "utf8");
}

function validateSharedMarkup() {
  const serviceLanding = read("src/components/ServiceLanding.jsx");
  const navbar = read("src/components/Navbar.jsx");
  const footer = read("src/components/Footer.jsx");

  assert((serviceLanding.match(/<h1\b/g) ?? []).length === 1, "ServiceLanding must contain exactly one h1.");
  assert(serviceLanding.includes("Related services"), "ServiceLanding must include related service internal links.");
  assert(navbar.includes('alt="RRK Automations logo"'), "Navbar logo alt text must be descriptive.");
  assert(footer.includes('alt="RRK Automations logo"'), "Footer logo alt text must be descriptive.");
}

function validatePageFile(page) {
  const source = read(`src/pages/${page.name.replace(/\s+/g, "")}.jsx`);
  assert(source.includes(`slug="${page.slug}"`), `${page.name}: slug missing from page file.`);
  assert(source.includes(`title: "${page.seo.title}"`), `${page.name}: title missing from page file.`);
  assert(source.includes(page.seo.description), `${page.name}: description missing from page file.`);
}

function validateSchema(page) {
  const faqItems = Array.from({ length: page.faqCount }, (_, index) => ({
    q: `Question ${index + 1}`,
    a: `Answer ${index + 1}`,
  }));

  const serviceSchema = buildServiceSchema(page);
  assert(serviceSchema["@type"] === "Service", `${page.name}: Service schema type must be Service.`);
  assert(serviceSchema.url === `https://rrkautomations.com/${page.slug}`, `${page.name}: Service schema URL mismatch.`);
  assert(serviceSchema.provider?.name === "RRK Automations", `${page.name}: Service provider missing.`);

  const breadcrumbSchema = buildBreadcrumbSchema(page);
  assert(breadcrumbSchema["@type"] === "BreadcrumbList", `${page.name}: breadcrumb schema type must be BreadcrumbList.`);
  assert(breadcrumbSchema.itemListElement.length === 3, `${page.name}: breadcrumb schema must have 3 items.`);
  assert(
    breadcrumbSchema.itemListElement[2].item === `https://rrkautomations.com/${page.slug}`,
    `${page.name}: breadcrumb current item mismatch.`,
  );

  const faqSchema = buildFaqSchema(faqItems);
  assert(faqSchema["@type"] === "FAQPage", `${page.name}: FAQ schema type must be FAQPage.`);
  assert(faqSchema.mainEntity.length === page.faqCount, `${page.name}: FAQ schema count mismatch.`);

  const relatedLinks = getRelatedServices(page.slug);
  assert(relatedLinks.length >= 2, `${page.name}: related services missing.`);

  return {
    page: `/${page.slug}`,
    service: "ok",
    breadcrumb: "ok",
    faq: "ok",
    relatedLinks: relatedLinks.length,
  };
}

validateSharedMarkup();
pages.forEach(validatePageFile);
const results = pages.map(validateSchema);
console.table(results);
console.log("Service SEO validation passed.");
