const BASE_URL = "https://rrkautomations.com";

const ORGANIZATION = {
  "@type": "Organization",
  name: "RRK Automations",
  url: BASE_URL,
  logo: `${BASE_URL}/logorrk.png`,
  image: `${BASE_URL}/logorrk.png`,
  email: "rrkautomations@gmail.com",
  sameAs: ["https://linkedin.com/company/rrk-automations"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "rrkautomations@gmail.com",
      url: "https://wa.me/918341374436",
      availableLanguage: "English",
    },
  ],
};

export const RELATED_SERVICES = {
  "ai-chatbots": [
    {
      slug: "whatsapp-automation",
      title: "WhatsApp Automation",
      description: "Automate replies, follow-ups, and updates on the official WhatsApp Business Platform.",
    },
    {
      slug: "business-automation",
      title: "Business Automation",
      description: "Connect lead intake, billing, onboarding, and reporting across your tools.",
    },
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Build custom n8n, Make, and Zapier workflows that run reliably in the background.",
    },
  ],
  "whatsapp-automation": [
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Answer questions, qualify leads, and book calls across web, WhatsApp, and Instagram.",
    },
    {
      slug: "business-automation",
      title: "Business Automation",
      description: "Automate repetitive business processes without changing the tools your team already uses.",
    },
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Connect CRMs, stores, forms, and internal apps with monitored automation workflows.",
    },
  ],
  "business-automation": [
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Move data between apps and trigger the operational steps your team repeats every day.",
    },
    {
      slug: "whatsapp-automation",
      title: "WhatsApp Automation",
      description: "Send fast replies, reminders, and broadcast messages from real business events.",
    },
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Deploy trained AI assistants that qualify prospects and support customers around the clock.",
    },
  ],
  "workflow-automation": [
    {
      slug: "business-automation",
      title: "Business Automation",
      description: "Automate lead, billing, onboarding, and reporting workflows across your business stack.",
    },
    {
      slug: "whatsapp-automation",
      title: "WhatsApp Automation",
      description: "Trigger customer messages and updates automatically from the systems you already use.",
    },
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Add AI-powered qualification and support flows on top of your connected automation stack.",
    },
  ],
  "real-estate-automation": [
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Answer questions, qualify leads, and book property tours across web and WhatsApp.",
    },
    {
      slug: "whatsapp-automation",
      title: "WhatsApp Automation",
      description: "Send automated property alerts, booking confirmations, and agent follow-ups.",
    },
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Sync lead details from Zillow or web forms straight to your real estate CRM.",
    },
  ],
  "ecommerce-automation": [
    {
      slug: "whatsapp-automation",
      title: "WhatsApp Automation",
      description: "Send instant cart abandonment reminders, order status updates, and delivery alerts.",
    },
    {
      slug: "business-automation",
      title: "Business Automation",
      description: "Automate stock alerts, sync inventory, and push order details directly to invoicing.",
    },
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Qualify customer support requests and suggest products based on user conversations.",
    },
  ],
  "agency-automation": [
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Connect lead capture forms to Slack, client onboarding templates, and reporting dashboards.",
    },
    {
      slug: "business-automation",
      title: "Business Automation",
      description: "Automate monthly client reporting, billing notifications, and project space setup.",
    },
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Qualify new inbound inquiries before scheduling calls on your calendar.",
    },
  ],
  "legal-automation": [
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Automate document generation, sync client intake forms, and streamline legal deadlines.",
    },
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Qualify prospective clients online 24/7 and route urgent issues appropriately.",
    },
    {
      slug: "business-automation",
      title: "Business Automation",
      description: "Sync billing hours, trigger client retainers, and centralize legal data secure and error-free.",
    },
  ],
  "healthcare-automation": [
    {
      slug: "whatsapp-automation",
      title: "WhatsApp Automation",
      description: "Send HIPAA-compliant appointment reminders, intake form links, and schedule updates.",
    },
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Provide patients with 24/7 answers to clinic policies, hours, and appointment FAQs.",
    },
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Sync patient intake data securely to EHRs and notify medical staff of new appointments.",
    },
  ],
  "saas-automation": [
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Connect user signups to CRM tracking, customer success alerts, and product onboarding flows.",
    },
    {
      slug: "business-automation",
      title: "Business Automation",
      description: "Automate subscription analytics, revenue alerts, and billing dispute resolution paths.",
    },
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Leverage AI to resolve customer support tickets and guide users through platform onboarding.",
    },
  ],
  "consulting-automation": [
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Pre-screen consulting inquiries, scope budgets, and direct qualified leads to calendar slots.",
    },
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Automate client discovery collection, agreement generation, and kickoff tasks.",
    },
    {
      slug: "business-automation",
      title: "Business Automation",
      description: "Simplify billing, gather client feedback, and sync project updates across platforms.",
    },
  ],
  "education-automation": [
    {
      slug: "whatsapp-automation",
      title: "WhatsApp Automation",
      description: "Send students course enrollment confirmations, assignment deadlines, and reminders.",
    },
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Help students navigate program offerings, admissions steps, and tuition details 24/7.",
    },
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Automate certificates of completion, update class lists, and sync grades to databases.",
    },
  ],
  "finance-automation": [
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Automate tax document uploads, update client files, and send secure monthly summaries.",
    },
    {
      slug: "business-automation",
      title: "Business Automation",
      description: "Connect invoicing systems, track cashflow metrics, and flags anomalies dynamically.",
    },
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Qualify new clients, gather initial financial scopes, and answer account status queries.",
    },
  ],
  "local-services-automation": [
    {
      slug: "whatsapp-automation",
      title: "WhatsApp Automation",
      description: "Send automated booking alerts, dispatch notices, and invoice links directly to customer phones.",
    },
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description: "Answer service FAQs, collect site locations, and book repair appointments 24/7.",
    },
    {
      slug: "workflow-automation",
      title: "Workflow Automation",
      description: "Sync Yelp and Google leads to scheduling tools and trigger quick review requests.",
    },
  ],
};

export function buildServiceSchema({ slug, seo, eyebrow }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seo.title,
    serviceType: eyebrow,
    description: seo.description,
    url: `${BASE_URL}/${slug}`,
    areaServed: "Worldwide",
    provider: ORGANIZATION,
  };
}

export function buildBreadcrumbSchema({ slug, seo }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${BASE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: seo.title,
        item: `${BASE_URL}/${slug}`,
      },
    ],
  };
}

export function buildFaqSchema(faqs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getRelatedServices(slug) {
  return RELATED_SERVICES[slug] ?? [];
}
