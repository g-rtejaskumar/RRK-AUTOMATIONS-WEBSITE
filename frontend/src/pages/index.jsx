import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import HeroSection from "../components/HeroSection";
import TrustedBySection from "../components/TrustedBySection";
import ProblemSolutionSection from "../components/ProblemSolutionSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyUsSection from "../components/WhyUsSection";
import CTABanner from "../components/CTABanner";
import FeaturesGrid from "../components/FeaturesGrid";
import PortfolioSection from "../components/PortfolioSection";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        path="/"
        description="Your global partner for every technical service a business needs. AI-powered automation, WhatsApp chatbots, full-stack development, and enterprise systems."
        keywords="Full-Stack Technical Services, AI Automation, WhatsApp Chatbots, Business Software Development, Lead Generation, E-commerce Solutions, AI Agents, Mobile App Development, Web Development, Cloud Architecture, DevOps, Cybersecurity, ERP CRM Integration, Warehouse Management Systems, Digital Transformation"
      />

      {/* Structured Data: WebSite + WebPage */}
      <script type="application/ld+json">
      {JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "RRK Automations",
          "url": "https://rrkautomations.com",
          "description": "Global AI & WhatsApp automation agency delivering custom automation systems in 48 hours.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://rrkautomations.com/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "RRK Automations — Global AI & WhatsApp Automation Agency",
          "url": "https://rrkautomations.com/",
          "description": "Global AI-powered automation systems and WhatsApp chatbots that turn leads into customers. Worldwide delivery in 48 hours.",
          "isPartOf": {
            "@type": "WebSite",
            "url": "https://rrkautomations.com"
          },
          "about": {
            "@type": "ProfessionalService",
            "name": "RRK Automations",
            "areaServed": "Worldwide"
          }
        }
      ])}
      </script>
      <HeroSection />
      <TrustedBySection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <PortfolioSection />
      <TestimonialsSection />
      <WhyUsSection />
      <CTABanner />
    </Layout>
  );
};

export default Index;
