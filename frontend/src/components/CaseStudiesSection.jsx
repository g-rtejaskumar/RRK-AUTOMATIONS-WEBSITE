import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Real Automation Results
          </h2>

          <p className="text-muted-foreground text-lg">
            See how businesses are using automation systems to respond faster,
            capture more leads, and increase revenue.
          </p>
        </motion.div>

        {/* Visual Showcase — constrained height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="mb-20 rounded-2xl overflow-hidden border border-border shadow-2xl relative group cursor-pointer"
        >
          <div className="max-h-[400px] overflow-hidden">
            <img
              src="/dashboard_mockup.png"
              alt="AI Analytics Dashboard"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
             <div>
                <p className="text-white font-bold text-xl mb-1 text-left">Modern AI Dashboards</p>
                <p className="text-white/70 text-sm text-left">Real-time lead tracking & conversion analytics</p>
             </div>
             <Link
               to="/contact"
               className="bg-secondary hover:bg-secondary/80 text-white text-xs font-bold px-5 py-2.5 rounded-full hidden sm:flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/40"
             >
               LIVE DEMO
               <ArrowRight className="w-3.5 h-3.5" />
             </Link>
          </div>
        </motion.div>

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
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 rounded-xl border bg-background hover:border-secondary/40 hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.25)] transition-all duration-300 group"
              >

                <div className="w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>

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