import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Briefcase, Globe, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const highlights = [
  {
    title: "AI Automation Systems",
    description: "Lead capture, WhatsApp flows, CRM sync, and reporting dashboards.",
    icon: Sparkles,
  },
  {
    title: "Full-Stack Web Apps",
    description: "Client portals, internal tools, admin panels, and custom workflows.",
    icon: Briefcase,
  },
  {
    title: "High-Converting Sites",
    description: "Landing pages and brand sites built to drive qualified leads.",
    icon: Globe,
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />

      <div className="section-container relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Proof of Execution You Can Explore
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Browse real projects, live builds, and production-ready systems we have delivered.
            See the full portfolio and the results behind each deployment.
          </p>

          <div className="grid gap-4 mb-8">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/40"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Button variant="cta" size="lg" asChild>
            <a
              href="https://rrk-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>

        <motion.a
          href="https://rrk-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open RRK Automations portfolio"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative rounded-2xl border border-border bg-card/40 overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="p-8 relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Live Portfolio
              </div>
              <ExternalLink className="w-4 h-4 text-secondary" />
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-border/60 bg-background/40 p-5">
                <p className="text-sm text-muted-foreground">Featured Build</p>
                <h3 className="text-lg font-semibold mt-1">
                  RRK Client Automation Stack
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  End-to-end lead handling, WhatsApp response flows, and reporting.
                </p>
              </div>

              <div className="rounded-xl border border-border/60 bg-background/40 p-5">
                <p className="text-sm text-muted-foreground">Recent Work</p>
                <h3 className="text-lg font-semibold mt-1">
                  Conversion-Optimized Web Experiences
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Modern UI, fast delivery, and measurable growth outcomes.
                </p>
              </div>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-secondary font-semibold text-sm">
              Explore the full portfolio
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default PortfolioSection;
