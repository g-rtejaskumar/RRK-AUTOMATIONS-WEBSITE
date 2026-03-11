import { motion } from "framer-motion";
import { Zap, MessageCircle, Workflow } from "lucide-react";

const demos = [
  {
    title: "Instant Lead Response",
    description:
      "Respond to every lead within seconds using automated WhatsApp replies.",
    icon: MessageCircle,
  },
  {
    title: "AI Lead Qualification",
    description:
      "Automation asks qualifying questions and filters serious prospects.",
    icon: Zap,
  },
  {
    title: "CRM Workflow Automation",
    description:
      "Automatically move leads into CRM pipelines and notify sales teams.",
    icon: Workflow,
  },
];

const AutomationDemoSection = () => {
  return (
    <section className="py-28 bg-muted/30">
      <div className="section-container">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            See Automation in Action
          </h2>

          <p className="text-muted-foreground text-lg">
            Our automation systems handle repetitive tasks so your team can focus on closing deals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {demos.map((demo, index) => {
            const Icon = demo.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="p-8 border rounded-xl bg-card"
              >
                <Icon className="w-8 h-8 text-secondary mb-4" />

                <h3 className="text-xl font-bold mb-2">
                  {demo.title}
                </h3>

                <p className="text-muted-foreground">
                  {demo.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AutomationDemoSection;