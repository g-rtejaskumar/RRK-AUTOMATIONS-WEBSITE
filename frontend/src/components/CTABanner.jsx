import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTABanner = () => {
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
            <Button variant="cta" size="xl">
              <a
                href="https://calendly.com/rrkautomations/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Book Free Automation Audit
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

            <Button variant="outline" size="xl">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us
              </Link>
            </Button>
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
