import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import HeroSection from "../components/HeroSection";
import { lazy, Suspense } from "react";

const TrustedBySection = lazy(() => import("../components/TrustedBySection"));
const ProblemSolutionSection = lazy(() => import("../components/ProblemSolutionSection"));
const HowItWorksSection = lazy(() => import("../components/HowItWorksSection"));
const TestimonialsSection = lazy(() => import("../components/TestimonialsSection"));
const CTABanner = lazy(() => import("../components/CTABanner"));
const FeaturesGrid = lazy(() => import("../components/FeaturesGrid"));
const PortfolioSection = lazy(() => import("../components/PortfolioSection"));

const Index = () => {
  return (
    <Layout>
      <SEOHead
        path="/"
        description="Your global partner for every technical service a business needs. AI-powered automation, WhatsApp chatbots, full-stack development, and enterprise systems."
        keywords="Full-Stack Technical Services, AI Automation, WhatsApp Chatbots, Business Software Development, Lead Generation, E-commerce Solutions, AI Agents, Mobile App Development, Web Development, Cloud Architecture, DevOps, Cybersecurity, ERP CRM Integration, Warehouse Management Systems, Digital Transformation"
      />

      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "RRK Automations",
            url: "https://rrkautomations.com",
            description:
              "Global AI & WhatsApp automation agency delivering custom automation systems in 48 hours.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://rrkautomations.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "RRK Automations - Global AI & WhatsApp Automation Agency",
            url: "https://rrkautomations.com/",
            description:
              "Global AI-powered automation systems and WhatsApp chatbots that turn leads into customers. Worldwide delivery in 48 hours.",
            isPartOf: {
              "@type": "WebSite",
              url: "https://rrkautomations.com",
            },
            about: {
              "@type": "ProfessionalService",
              name: "RRK Automations",
              areaServed: "Worldwide",
            },
          },
        ])}
      </script>
      <HeroSection />
      <Suspense fallback={<div className="py-20 text-center"><div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin mx-auto" /></div>}>
        <ProblemSolutionSection />
        <HowItWorksSection />
        <FeaturesGrid />
        <TrustedBySection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTABanner source="homepage-final-cta" />
      </Suspense>
    </Layout>
  );
};

export default Index;
