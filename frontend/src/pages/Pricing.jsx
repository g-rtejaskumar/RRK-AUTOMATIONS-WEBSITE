import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import PricingSection from "../components/PricingSection";
import CTABanner from "../components/CTABanner";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Headphones, Zap } from "lucide-react";

const trustPoints = [
  { icon: Clock, text: "48-Hour Delivery" },
  { icon: ShieldCheck, text: "100% Satisfaction Guarantee" },
  { icon: Headphones, text: "Dedicated Support" },
  { icon: Zap, text: "No Hidden Fees" },
];

const Pricing = () => {
  return (
    <Layout>
      <SEOHead
        title="Pricing"
        description="Global automation pricing starting from $299 USD / €275 EUR. Transparent plans for businesses worldwide. No hidden fees."
        path="/pricing"
        keywords="AI Automation Pricing, WhatsApp Chatbot Cost, Business Automation Plans, Lead Generation Pricing, E-commerce Automation Cost, AI Agent Price, Autonomous Agent Subscription, Workflow Automation ROI, Agentic AI Investment, LLM Business Cost, OpenAI Enterprise Pricing, WhatsApp Business API Cost, Automated Messaging Plans, Conversational AI ROI, WhatsApp Sales Funnel Price, Lead Qualification System Cost, Automated Sales Follow-up Price, CRM Integration Pricing, HubSpot Automation Cost, Salesforce Integration Price, Automated Scheduling Tool Cost, Calendly Pricing, Automation ROI Guide, Cost-effective AI Solutions, Affordable Business Automation"
      />

      {/* Structured Data: Breadcrumb + Product Offers */}
      <script type="application/ld+json">
      {JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://rrkautomations.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Pricing",
              "item": "https://rrkautomations.com/pricing"
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "RRK Automations Services",
          "description": "AI automation, WhatsApp chatbots, and custom technical systems for businesses.",
          "brand": {
            "@type": "Brand",
            "name": "RRK Automations"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Starter Plan",
              "price": "299",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://rrkautomations.com/pricing"
            },
            {
              "@type": "Offer",
              "name": "Growth Plan",
              "price": "599",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://rrkautomations.com/pricing"
            },
            {
              "@type": "Offer",
              "name": "Business Plan",
              "price": "999",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://rrkautomations.com/pricing"
            }
          ]
        }
      ])}
      </script>

      {/* Hero */}
      <section className="page-hero py-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Pricing Plans
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Simple, Transparent{" "}
              <span className="text-secondary">Pricing</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose a plan that fits your business. All plans include deployment within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <PricingSection />

      {/* Trust Banner */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-border bg-gradient-to-r from-secondary/5 via-card to-accent/5 p-8 sm:p-12"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-2">
                Why Businesses Choose Us
              </h3>
              <p className="text-muted-foreground">
                Every plan includes these guarantees — no exceptions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/90">{point.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Custom Plan CTA */}
            <div className="mt-10 text-center">
              <p className="text-muted-foreground text-sm">
                Need a custom plan?{" "}
                <a
                  href="/contact"
                  className="text-secondary font-semibold hover:underline"
                >
                  Let's talk →
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Pricing;
