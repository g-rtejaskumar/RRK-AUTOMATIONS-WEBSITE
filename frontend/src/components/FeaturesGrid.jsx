import { motion } from "framer-motion";
import { Zap, MessageSquare, BarChart3, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Instant Response",
    description: "Never lose a lead to slow replies. Our systems respond to WhatsApp & Website queries in under 30 seconds.",
    icon: Zap,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "AI Qualification",
    description: "Our AI agents qualify leads, answer FAQs, and book appointments so your team only talks to hot prospects.",
    icon: MessageSquare,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Custom Workflows",
    description: "From CRM syncing to automated follow-ups, we build workflows that fit your specific business needs.",
    icon: BarChart3,
    color: "text-white",
    bgColor: "bg-white/10",
  },
  {
    title: "48-Hour Deployment",
    description: "Why wait months? We design, build, and deploy your automation system in as little as 48 hours.",
    icon: ShieldCheck,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            Built for <span className="text-secondary">Speed</span>. <br />
            Optimized for <span className="text-accent italic">Revenue</span>.
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just build bots. We build revenue-generating systems that streamline your entire sales and operations pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card/40 border border-border hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default FeaturesGrid;
