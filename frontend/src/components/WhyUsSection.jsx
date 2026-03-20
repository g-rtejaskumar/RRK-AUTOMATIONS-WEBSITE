import { Zap, User, Target, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
  {
    icon: Zap,
    title: "48-Hour Delivery",
    description:
      "Most automations are live within 48–72 hours. No waiting weeks for simple workflows.",
  },
  {
    icon: User,
    title: "Founder-Led Execution",
    description:
      "You work directly with senior automation specialists, not junior project managers.",
  },
  {
    icon: Target,
    title: "ROI-Focused",
    description:
      "Every automation we build is designed to either increase revenue or save time measurably.",
  },
  {
    icon: MessageCircle,
    title: "AI & WhatsApp Specialists",
    description:
      "Deep expertise in the two most impactful automation channels for modern businesses.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-28 bg-background overflow-hidden">
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
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Not Your Typical Agency
          </h2>
          <p className="text-muted-foreground text-lg">
            A lean automation partner built for speed, clarity, and measurable impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 text-center hover:border-secondary/40 hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-secondary drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]" />
              </div>
              <h3 className="text-lg font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;