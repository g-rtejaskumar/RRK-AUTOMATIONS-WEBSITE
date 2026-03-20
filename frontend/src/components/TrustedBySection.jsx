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
  // Double the array for seamless infinite scroll
  const scrollItems = [...integrations, ...integrations];

  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
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
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {scrollItems.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="flex-shrink-0 mx-3 px-6 py-3 rounded-full border border-border bg-card/60 text-sm text-muted-foreground hover:border-secondary/40 hover:text-foreground transition-all duration-200 cursor-default whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
