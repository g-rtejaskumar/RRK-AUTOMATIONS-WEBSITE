import { Button } from "./ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useCalendlyGate } from "./CalendlyLeadGate";

export default function CTABanner({
  title = "Ready to Automate Your Growth?",
  description = "Book a free 15-minute automation audit call. We'll analyze your workflows and show you exactly where automation can save time and increase revenue.",
  primaryLabel = "Book Free Audit",
  note = "No commitment required - takes less than 15 minutes",
  source = "cta-banner",
  secondaryLabel = "Ask on WhatsApp",
  secondaryHref = "https://wa.me/918341374436",
}) {
  const { openGate } = useCalendlyGate();

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-secondary/10 to-accent/10" />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              variant="cta"
              size="xl"
              className="w-full sm:w-auto"
              onClick={() => openGate({ source })}
            >
              <span className="flex items-center gap-2">
                {primaryLabel}
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>

            <Button variant="outline" size="xl" className="w-full sm:w-auto" asChild>
              <a
                href={secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                {secondaryLabel}
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">{note}</p>
        </motion.div>
      </div>
    </section>
  );
}
