import { motion } from "framer-motion";
import { Clock, MessageSquare, Workflow, TrendingUp } from "lucide-react";

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
    <section className="py-24 bg-muted/30">

      <div className="section-container">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Businesses Struggle With Leads
          </h2>

          <p className="text-muted-foreground text-lg">
            Many businesses lose potential revenue because their lead handling
            process is slow, manual, and inconsistent.
          </p>
        </div>

        {/* Problems */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border bg-background"
              >
                <Icon className="w-8 h-8 text-destructive mb-4" />

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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Automation Fixes This
          </h2>
        </div>

        {/* Solutions */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border bg-background"
              >
                <Icon className="w-8 h-8 text-secondary mb-4" />

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