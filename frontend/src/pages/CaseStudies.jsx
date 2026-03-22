import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import CaseStudiesSection from "../components/CaseStudiesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTABanner from "../components/CTABanner";
import { motion } from "framer-motion";

const CaseStudies = () => {
  return (
    <Layout>
      <SEOHead
        title="Case Studies"
        description="See how businesses are using RRK Automations to respond faster, capture more leads, and increase revenue with AI & WhatsApp automation."
        path="/case-studies"
        keywords="automation case studies, WhatsApp automation results, AI automation success stories"
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
            "name": "Case Studies",
            "item": "https://rrkautomations.com/case-studies"
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
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Real Automation{" "}
              <span className="text-secondary">Results</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              See how businesses across industries are using our automation systems
              to grow faster and work smarter.
            </p>
          </motion.div>
        </div>
      </section>

      <CaseStudiesSection />
      <TestimonialsSection />
      <CTABanner />
    </Layout>
  );
};

export default CaseStudies;
