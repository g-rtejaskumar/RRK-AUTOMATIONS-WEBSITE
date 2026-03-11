// import { Phone, Cog, TrendingUp } from "lucide-react";

// const steps = [
//   {
//     icon: Phone,
//     number: "01",
//     title: "Free Automation Audit",
//     description: "15-minute call to understand your workflows and identify automation opportunities.",
//     highlight: "15 Minutes",
//   },
//   {
//     icon: Cog,
//     number: "02",
//     title: "We Build & Test",
//     description: "Our team builds, tests, and deploys your custom automation solution.",
//     highlight: "48-72 Hours",
//   },
//   {
//     icon: TrendingUp,
//     number: "03",
//     title: "You Get Results",
//     description: "Start seeing more sales or time saved immediately after deployment.",
//     highlight: "Instant ROI",
//   },
// ];

// const HowItWorksSection = () => {
//   return (
//     <section id="how-it-works" className="py-24 bg-muted/30">
//       <div className="section-container">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Process</p>
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
//             How It Works
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             From audit to automation in less than 72 hours. Simple, fast, effective.
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="grid md:grid-cols-3 gap-8 relative">
//           {/* Connection Line (Desktop) */}
//           <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-secondary/20 via-secondary to-accent/20" />

//           {steps.map((step, index) => (
//             <div key={step.title} className="relative text-center group">
//               {/* Number Badge */}
//               <div className="relative inline-flex mb-6">
//                 <div className="w-20 h-20 rounded-2xl bg-card shadow-elevated flex items-center justify-center border border-border group-hover:border-secondary/30 transition-all duration-300 group-hover:shadow-glow">
//                   <step.icon className="w-8 h-8 text-secondary" />
//                 </div>
//                 <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground text-sm font-bold rounded-full flex items-center justify-center">
//                   {step.number}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="px-4">
//                 <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-4">
//                   {step.highlight}
//                 </span>
//                 <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
//                 <p className="text-muted-foreground">{step.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorksSection;


// import { Phone, Cog, TrendingUp } from "lucide-react";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     icon: Phone,
//     number: "01",
//     title: "Free Automation Audit",
//     description:
//       "15-minute call to understand your workflows and identify automation opportunities.",
//     highlight: "15 Minutes",
//   },
//   {
//     icon: Cog,
//     number: "02",
//     title: "We Build & Test",
//     description:
//       "Our team builds, tests, and deploys your custom automation solution.",
//     highlight: "48–72 Hours",
//   },
//   {
//     icon: TrendingUp,
//     number: "03",
//     title: "You Get Results",
//     description:
//       "Start seeing more sales or time saved immediately after deployment.",
//     highlight: "Instant ROI",
//   },
// ];

// const HowItWorksSection = () => {
//   return (
//     <section
//       id="how-it-works"
//       className="relative py-28 bg-background overflow-hidden"
//     >
//       {/* Subtle Futuristic Grid */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       <div className="section-container relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-20"
//         >
//           <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
//             Process
//           </p>
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             How It Works
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             From audit to automation in less than 72 hours. Simple, fast, effective.
//           </p>
//         </motion.div>

//         {/* Steps */}
//         <div className="grid md:grid-cols-3 gap-10 relative">

//           {/* Timeline Line */}
//           <div className="hidden md:block absolute top-28 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-secondary/20 via-secondary to-accent/20" />

//           {steps.map((step, index) => (
//             <motion.div
//               key={step.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15, duration: 0.6 }}
//               className="relative text-center group"
//             >
//               {/* Icon Card */}
//               <div className="relative inline-flex mb-8">
//                 <div className="w-24 h-24 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-elevated flex items-center justify-center group-hover:border-secondary/40 transition-all duration-300">
//                   <step.icon className="w-9 h-9 text-secondary drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]" />
//                 </div>

//                 {/* Step Number */}
//                 <span className="absolute -top-3 -right-3 w-9 h-9 bg-gradient-to-br from-secondary to-accent text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
//                   {step.number}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="px-6">
//                 <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-5">
//                   {step.highlight}
//                 </span>

//                 <h3 className="text-xl font-bold mb-4">
//                   {step.title}
//                 </h3>

//                 <p className="text-muted-foreground leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorksSection;



import { Phone, Cog, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Free Automation Audit",
    description:
      "In a short strategy call we analyze your workflows, lead flow, and tools to identify automation opportunities.",
    highlight: "15 Minute Call",
  },
  {
    icon: Cog,
    number: "02",
    title: "We Build & Deploy",
    description:
      "Our team designs, builds, and tests your custom automation system tailored to your business workflow.",
    highlight: "48–72 Hour Setup",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Your Automation Runs 24/7",
    description:
      "Your system automatically captures leads, follows up instantly, and helps convert more prospects into customers.",
    highlight: "More Conversions",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-28 bg-background overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Process
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            From Idea to Automation in 72 Hours
          </h2>

          <p className="text-muted-foreground text-lg">
            A simple 3-step process to transform your manual workflows into
            automated systems that work 24/7.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 relative">

          {/* Timeline */}
          <div className="hidden md:block absolute top-28 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-secondary/20 via-secondary to-accent/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative text-center group"
            >

              {/* Icon */}
              <div className="relative inline-flex mb-8">
                <div className="w-24 h-24 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-elevated flex items-center justify-center group-hover:border-secondary/40 transition-all duration-300">
                  <step.icon className="w-9 h-9 text-secondary drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]" />
                </div>

                {/* Step number */}
                <span className="absolute -top-3 -right-3 w-9 h-9 bg-gradient-to-br from-secondary to-accent text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="px-6">

                <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-5">
                  {step.highlight}
                </span>

                <h3 className="text-xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <Button
            asChild
            variant="cta"
            size="xl"
          >
            <a
              href="https://calendly.com/rrkautomations/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Book Your Free Automation Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Takes less than 15 minutes • No commitment required
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorksSection;