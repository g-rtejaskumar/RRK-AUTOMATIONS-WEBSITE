import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Layout>
      <SEOHead
        title="Contact Us"
        description="Get in touch with RRK Automations. Book a free automation audit, chat on WhatsApp, or send us a message. We respond within 24 hours."
        path="/contact"
        keywords="contact RRK Automations, book automation audit, WhatsApp automation consultation"
      />

      {/* Structured Data: ContactPage & Breadcrumb */}
      <script type="application/ld+json">
      {JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "RRK Automations",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "rrkautomations@gmail.com",
              "url": "https://wa.me/918341374436"
            }
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
              "name": "Contact",
              "item": "https://rrkautomations.com/contact"
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
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Let&apos;s Build Your{" "}
              <span className="text-secondary">Automation</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Book a free audit call, send us a message, or chat on WhatsApp. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <FAQSection />
    </Layout>
  );
};

export default Contact;
