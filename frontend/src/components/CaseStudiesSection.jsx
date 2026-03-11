import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock } from "lucide-react";

const caseStudies = [
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

const CaseStudiesSection = () => {
  return (
    <section className="py-28 bg-muted/30">

      <div className="section-container">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Real Automation Results
          </h2>

          <p className="text-muted-foreground text-lg">
            See how businesses are using automation systems to respond faster,
            capture more leads, and increase revenue.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-3 gap-8">

          {caseStudies.map((study, index) => {
            const Icon = study.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 rounded-xl border bg-background hover:shadow-lg transition-all"
              >

                <Icon className="w-8 h-8 text-secondary mb-5" />

                <h3 className="text-xl font-semibold mb-3">
                  {study.industry}
                </h3>

                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground">
                    Problem:
                  </span>{" "}
                  {study.problem}
                </p>

                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground">
                    Automation:
                  </span>{" "}
                  {study.solution}
                </p>

                <p className="text-sm font-medium text-secondary">
                  Result: {study.result}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;