import { Button } from "./ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCalendlyGate } from "./CalendlyLeadGate";

const CTABanner = () => {
  const { openGate } = useCalendlyGate();
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-secondary/10 to-accent/10" />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Automate Your{" "}
            <span className="text-secondary">Growth?</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Book a free 15-minute automation audit call. We&apos;ll analyze your
            workflows and show you exactly where automation can save time and
            increase revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="cta"
              size="xl"
              onClick={() => openGate({ source: "cta-banner" })}
            >
              <span className="flex items-center gap-2">
                Book Free Automation Audit
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>

            {/* Premium Contact Us Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-medium rounded-lg overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(124, 58, 237, 0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(124, 58, 237, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(124, 58, 237, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.6)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(124, 58, 237, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(124, 58, 237, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <MessageCircle className="w-5 h-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
                <span className="text-foreground">Contact Us</span>
                <ArrowRight className="w-4 h-4 text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </motion.div>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No commitment required • Takes less than 15 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
