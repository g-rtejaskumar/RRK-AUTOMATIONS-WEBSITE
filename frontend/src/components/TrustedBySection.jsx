import { motion } from "framer-motion";

const integrations = [
  "WhatsApp Business",
  "Make (Integromat)",
  "n8n",
  "Zapier",
  "OpenAI / GPT",
  "Google Sheets",
  "Notion",
  "HubSpot",
  "Slack",
  "Calendly",
];

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wider">
            Tools & Platforms We Integrate With
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-2.5 rounded-full border border-border bg-card/60 text-sm text-muted-foreground hover:border-secondary/40 hover:text-foreground transition-all duration-200"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
