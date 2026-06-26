import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock, ArrowRight } from "lucide-react";
import { useCalendlyGate } from "./CalendlyLeadGate";

const defaultCaseStudies = [
  {
    industry: "Marketing Agency",
    problem:
      "Leads were coming in but responses were slow and follow-ups were inconsistent.",
    solution:
      "Implemented AI WhatsApp automation that instantly responded and qualified leads.",
    result: "Lead response time reduced from 10 minutes to under 30 seconds.",
    icon: Zap,
  },
  {
    industry: "Real Estate Business",
    problem:
      "Sales team struggled to track and respond to incoming property inquiries.",
    solution:
      "Automated lead capture from WhatsApp and synced it with CRM workflows.",
    result: "Lead management became fully automated and response rate increased.",
    icon: TrendingUp,
  },
  {
    industry: "Coaching Business",
    problem:
      "Manual follow-ups were taking hours every day and many leads went cold.",
    solution:
      "Built automation workflows for follow-ups and appointment booking.",
    result: "Saved 10+ hours per week and increased booked calls.",
    icon: Clock,
  },
];

export default function CaseStudiesSection({
  items = defaultCaseStudies,
  eyebrow = "Case Studies",
  title = "Real Automation Results",
  description = "See how businesses are using automation systems to respond faster, capture more leads, and increase revenue.",
  featureTitle = "Modern AI Dashboards",
  featureDescription = "Real-time lead tracking & conversion analytics",
  featureAlt = "AI Analytics Dashboard",
  featureImage = "/dashboard_mockup.png",
  density = "normal",
  showDemoCta = true,
  demoSource = "case-studies-demo",
}) {
  const { openGate } = useCalendlyGate();
  const sectionPadding = density === "compact" ? "py-20" : "py-28";
  const visualMargin = density === "compact" ? "mb-14" : "mb-20";
  const headerMargin = density === "compact" ? "mb-14" : "mb-20";

  return (
    <section className={`${sectionPadding} bg-muted/30`}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mx-auto max-w-3xl text-center ${headerMargin}`}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
            {eyebrow}
          </p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border shadow-2xl ${visualMargin}`}
        >
          <div className="max-h-[400px] overflow-hidden">
            <img
              src={featureImage}
              alt={featureAlt}
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-left text-xl font-bold text-white">{featureTitle}</p>
              <p className="text-left text-sm text-white/70">{featureDescription}</p>
            </div>
            {showDemoCta && (
              <button
                type="button"
                onClick={() => openGate({ source: demoSource })}
                className="hidden items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-secondary/80 hover:shadow-lg hover:shadow-secondary/40 sm:flex"
              >
                LIVE DEMO
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((study, index) => {
            const Icon = study.icon;

            return (
              <motion.div
                key={`${study.industry}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-xl border bg-background p-8 transition-all duration-300 hover:border-secondary/40 hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.25)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-secondary/20 bg-secondary/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-secondary" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{study.industry}</h3>

                <p className="mb-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Problem:</span>{" "}
                  {study.problem}
                </p>

                <p className="mb-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Automation:</span>{" "}
                  {study.solution}
                </p>

                <p className="text-sm font-medium text-secondary">Result: {study.result}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
