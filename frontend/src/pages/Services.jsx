import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServicesSection from "../components/ServicesSection";
import CTABanner from "../components/CTABanner";
import TrustedBySection from "../components/TrustedBySection";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Services"
        description="Comprehensive technical services for businesses worldwide. AI automation, full-stack web/mobile development, enterprise software, and cloud solutions."
        path="/services"
        keywords="Full-Stack Development, Mobile App Development, AI Automation, WhatsApp Chatbots, Enterprise Software, Cloud Architecture, DevOps Services, Cybersecurity Audit, Database Management, ERP Integration, CRM Setup, WMS Development, Digital Transformation"
      />

      {/* Structured Data: Service & Breadcrumb */}
      <script type="application/ld+json">
      {JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI & WhatsApp Automation",
          "provider": {
            "@type": "Organization",
            "name": "RRK Automations"
          },
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Automation Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Lead-to-Sales Automation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "WhatsApp Business Automation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-commerce Workflow Automation"
                }
              }
            ]
          }
        },
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
              "name": "Services",
              "item": "https://rrkautomations.com/services"
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
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Automation Services That{" "}
              <span className="text-secondary">Drive Growth</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              From AI-powered chatbots to full sales automation pipelines — we build
              systems that save time and increase revenue.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection />
      <TrustedBySection />
      <CTABanner />
    </Layout>
  );
};

export default Services;
