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

const Index = () => {
  return (
    <Layout>
      <SEOHead
        path="/"
        description="RRK Automations builds AI-powered automation systems and WhatsApp chatbots that turn leads into customers. Deployed in 48 hours."
        keywords="AI automation, WhatsApp automation, lead automation, business automation, RRK Automations"
      />
      <HeroSection />
      <TrustedBySection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <TestimonialsSection />
      <WhyUsSection />
      <CTABanner />
    </Layout>
  );
};

export default Index;
