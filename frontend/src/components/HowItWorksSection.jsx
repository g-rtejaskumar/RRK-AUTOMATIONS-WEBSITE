import { Phone, Cog, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Free Automation Audit",
    description:
      "In a short strategy call we analyze your workflows, lead flow, and tools to identify automation opportunities.",
    highlight: "15 Minute Call",
  },
  {
    icon: Cog,
    number: "02",
    title: "We Build & Deploy",
    description:
      "Our team designs, builds, and tests your custom automation system tailored to your business workflow.",
    highlight: "48–72 Hour Setup",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Your Automation Runs 24/7",
    description:
      "Your system automatically captures leads, follows up instantly, and helps convert more prospects into customers.",
    highlight: "More Conversions",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-28 bg-background overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            From Idea to Automation in 72 Hours
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple 3-step process to transform your manual workflows into
            automated systems that work 24/7.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Timeline */}
          <div className="hidden md:block absolute top-28 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-secondary/20 via-secondary to-accent/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative text-center group"
            >
              {/* Icon */}
              <div className="relative inline-flex mb-8">
                <div className="w-24 h-24 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-elevated flex items-center justify-center group-hover:border-secondary/40 transition-all duration-300">
                  <step.icon className="w-9 h-9 text-secondary drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]" />
                </div>
                <span className="absolute -top-3 -right-3 w-9 h-9 bg-gradient-to-br from-secondary to-accent text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="px-6">
                <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-5">
                  {step.highlight}
                </span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <Button variant="cta" size="xl">
            <a
              href="https://calendly.com/rrkautomations/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Book Your Free Automation Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Takes less than 15 minutes • No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;