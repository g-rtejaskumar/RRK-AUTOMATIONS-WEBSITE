import { motion } from "framer-motion";
import { Clock, MessageSquare, Workflow, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Slow Lead Responses",
    description:
      "Manual replies cause delays and potential customers move to competitors before you respond.",
  },
  {
    icon: MessageSquare,
    title: "Missed Follow-Ups",
    description:
      "Leads often go cold because teams forget to follow up or lose track of conversations.",
  },
  {
    icon: Workflow,
    title: "Manual Processes",
    description:
      "Repetitive tasks and scattered tools waste time that could be spent closing deals.",
  },
];

const solutions = [
  {
    icon: TrendingUp,
    title: "AI Lead Qualification",
    description:
      "Automatically respond to leads, ask qualifying questions, and filter serious prospects.",
  },
  {
    icon: MessageSquare,
    title: "Instant WhatsApp Responses",
    description:
      "Respond instantly to every lead with automated conversations that guide them toward booking.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description:
      "Connect your tools and automate repetitive tasks so your team focuses on closing deals.",
  },
];

const ProblemSolutionSection = () => {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">

      <div className="section-container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-destructive font-semibold text-sm uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Common Problems
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Businesses Struggle With Leads
          </h2>

          <p className="text-muted-foreground text-lg">
            Many businesses lose potential revenue because their lead handling
            process is slow, manual, and inconsistent.
          </p>
        </motion.div>

        {/* Problems */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="p-6 rounded-xl border border-destructive/20 bg-background hover:border-destructive/40 hover:shadow-[0_16px_48px_-12px_rgba(239,68,68,0.15)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {problem.title}
                </h3>

                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary/50" />
            <div className="w-10 h-10 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Automation Fixes This
          </h2>
        </motion.div>

        {/* Solutions */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="p-6 rounded-xl border border-secondary/20 bg-background hover:border-secondary/40 hover:shadow-[0_16px_48px_-12px_rgba(124,58,237,0.2)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {solution.title}
                </h3>

                <p className="text-muted-foreground">
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProblemSolutionSection;