import { Button } from "../components/ui/button";
import { MessageCircle, Calendar, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background">

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse" />

      <div className="section-container relative z-10 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Tech Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/30 mb-8 backdrop-blur-md"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">
              48-Hour Automation Delivery • Limited Weekly Slots
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            AI & WhatsApp{" "}
            <span className="text-accent drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
              Automations
            </span>{" "}
            That Turn Leads Into Customers
            <br />
            <span className="text-secondary drop-shadow-[0_0_15px_rgba(124,58,237,0.6)]">
              Deployed in 48 Hours
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            We design automation systems for agencies, startups, and growing
            businesses — helping you capture leads, follow up instantly, and
            convert prospects automatically.
          </motion.p>

          {/* Benefits */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-muted-foreground"
          >
            <span className="px-3 py-1 rounded-full border border-border">
              ⚡ Instant Lead Responses
            </span>
            <span className="px-3 py-1 rounded-full border border-border">
              🤖 AI Lead Qualification
            </span>
            <span className="px-3 py-1 rounded-full border border-border">
              📈 Revenue-Focused Workflows
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="cta" size="xl" className="w-full sm:w-auto">
              <a
                href="https://calendly.com/rrkautomations/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Free Automation Audit
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
              <a
                href="https://wa.me/918341374436"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={fadeUp}
            className="mt-16 pt-10 border-t border-border"
          >
            <p className="text-muted-foreground text-sm mb-4">
              Trusted automation partner for scaling businesses
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="font-semibold text-lg">
                50+ Automation Workflows Deployed
              </div>

              <div className="hidden sm:block w-px h-6 bg-border" />

              <div className="font-semibold text-lg">
                48 Hour Deployment
              </div>

              <div className="hidden sm:block w-px h-6 bg-border" />

              <div className="font-semibold text-lg">
                Founder-Led Execution
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;