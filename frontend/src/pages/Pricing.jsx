import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTABanner from "../components/CTABanner";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <Layout>
      <SEOHead
        title="Pricing"
        description="Transparent automation pricing starting from ₹25,000 / $299. Choose from Starter, Growth, or Business plans. No hidden fees."
        path="/pricing"
        keywords="automation pricing, WhatsApp automation cost, AI chatbot pricing, business automation plans"
      />

      {/* Structured Data: Breadcrumb */}
      <script type="application/ld+json">
      {JSON.stringify({
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
      })}
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
      <FAQSection />
      <CTABanner />
    </Layout>
  );
};

export default Pricing;
