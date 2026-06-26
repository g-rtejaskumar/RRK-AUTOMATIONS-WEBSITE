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

const paddingByDensity = {
  normal: "py-16",
  compact: "py-12",
};

export default function TrustedBySection({
  title = "Tools & Platforms We Integrate With",
  density = "normal",
}) {
  const scrollItems = [...integrations, ...integrations];
  const padding = paddingByDensity[density] ?? paddingByDensity.normal;

  return (
    <section className={`${padding} overflow-hidden border-y border-border bg-background`}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {title}
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee">
          {scrollItems.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="mx-3 flex-shrink-0 whitespace-nowrap rounded-full border border-border bg-card/60 px-6 py-3 text-sm text-muted-foreground transition-all duration-200 hover:border-secondary/40 hover:text-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
