// import { Button } from "@/components/ui/button";
// import { MessageCircle, Calendar, ArrowRight, Zap } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary/20">
      
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }}
//         />
//       </div>

//       {/* Gradient Orbs */}
//       <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
//       <div
//         className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
//         style={{ animationDelay: "-3s" }}
//       />

//       <div className="section-container relative z-10 py-20">
//         <div className="max-w-4xl mx-auto text-center">

//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/30 mb-8 animate-fade-up">
//             <Zap className="w-4 h-4 text-accent" />
//             <span className="text-sm font-medium text-primary-foreground/90">
//               ⚡ Automation Delivered in 48 Hours • Limited Weekly Slots
//             </span>
//           </div>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up">
//             We Design Automation Agents That Work 24/7, Every Project is delivered in 48 hours{" "}
//             <span className="text-accent">
//               Turn Leads Into Revenue in 48 Hours
//             </span>
//           </h1>

//           <p
//             className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up"
//             style={{ animationDelay: "0.2s" }}
//           >
//             For startups, agencies, and businesses that want faster sales,
//             better follow-ups, and less manual work.
//           </p>

//           {/* CTA Buttons */}
//           <div
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
//             style={{ animationDelay: "0.3s" }}
//           >
//             <Button variant="cta" size="xl" className="w-full sm:w-auto">
//               <a
//                 href="https://calendly.com/rrkautomations/new-meeting"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <Calendar className="w-5 h-5" />
//                 Book a Free Automation Audit
//                 <ArrowRight className="w-5 h-5" />
//               </a>
//             </Button>

//             <Button
//               variant="hero-outline"
//               size="xl"
//               className="w-full sm:w-auto"
//             >
//               <a
//                 href="https://wa.me/918341374436"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <MessageCircle className="w-5 h-5" />
//                 Chat on WhatsApp
//               </a>
//             </Button>
//           </div>

//           {/* Social Proof */}
//           <div
//             className="mt-16 pt-10 border-t border-primary-foreground/10 animate-fade-up"
//             style={{ animationDelay: "0.4s" }}
//           >
//             <p className="text-primary-foreground/60 text-sm mb-4">
//               Early-stage automation partner for growing businesses
//             </p>

//             <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
//               <div className="text-primary-foreground font-semibold text-lg">
//                 Founder-led execution
//               </div>
//               <div className="hidden sm:block w-px h-6 bg-primary-foreground/20" />
//               <div className="text-primary-foreground font-semibold text-lg">
//                 Custom-built automations
//               </div>
//               <div className="hidden sm:block w-px h-6 bg-primary-foreground/20" />
//               <div className="text-primary-foreground font-semibold text-lg">
//                 ROI-focused workflows
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import { Button } from "../components/ui/button";
// import { MessageCircle, Calendar, ArrowRight, Zap } from "lucide-react";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background">

//       {/* 🔥 Animated Grid Background */}
//       <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
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

//       {/* 🔥 Glow Orbs */}
//       <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse" />

//       <div className="section-container relative z-10 py-20">
//         <motion.div
//           className="max-w-4xl mx-auto text-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >

//           {/* ⚡ Tech Badge */}
//           <motion.div
//             variants={fadeUp}
//             className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/30 mb-8 backdrop-blur-md"
//           >
//             <Zap className="w-4 h-4 text-accent" />
//             <span className="text-sm font-medium">
//               Automation Delivered in 48 Hours • Limited Weekly Slots
//             </span>
//           </motion.div>

//           {/* 🚀 Main Heading */}
//           <motion.h1
//             variants={fadeUp}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
//           >
//             We Build{" "}
//             <span className="text-accent drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
//               AI Automation Agents
//             </span>{" "}
//             That Work 24/7
//             <br />
//             <span className="text-secondary drop-shadow-[0_0_15px_rgba(124,58,237,0.6)]">
//               Turn Leads Into Revenue in 48 Hours
//             </span>
//           </motion.h1>

//           {/* 📄 Subtext */}
//           <motion.p
//             variants={fadeUp}
//             className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
//           >
//             For startups, agencies, and businesses that want faster sales,
//             better follow-ups, and zero manual chaos.
//           </motion.p>

//           {/* 🎯 CTA Buttons */}
//           <motion.div
//             variants={fadeUp}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <Button variant="cta" size="xl" className="w-full sm:w-auto">
//               <a
//                 href="https://calendly.com/rrkautomations/new-meeting"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <Calendar className="w-5 h-5" />
//                 Book a Free Automation Audit
//                 <ArrowRight className="w-5 h-5" />
//               </a>
//             </Button>

//             <Button
//               variant="hero-outline"
//               size="xl"
//               className="w-full sm:w-auto"
//             >
//               <a
//                 href="https://wa.me/918341374436"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <MessageCircle className="w-5 h-5" />
//                 Chat on WhatsApp
//               </a>
//             </Button>
//           </motion.div>

//           {/* 🔒 Social Proof */}
//           <motion.div
//             variants={fadeUp}
//             className="mt-16 pt-10 border-t border-border"
//           >
//             <p className="text-muted-foreground text-sm mb-4">
//               Founder-led automation partner for scaling businesses
//             </p>

//             <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
//               <div className="font-semibold text-lg">
//                 Founder-led execution
//               </div>
//               <div className="hidden sm:block w-px h-6 bg-border" />
//               <div className="font-semibold text-lg">
//                 Custom-built automations
//               </div>
//               <div className="hidden sm:block w-px h-6 bg-border" />
//               <div className="font-semibold text-lg">
//                 ROI-focused workflows
//               </div>
//             </div>
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




import { Button } from "../components/ui/button";
import { MessageCircle, Calendar, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background">

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
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

      {/* Glow Orbs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse" />

      <div className="section-container relative z-10 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Tech Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/30 mb-8 backdrop-blur-md"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">
              48-Hour Automation Delivery • Limited Weekly Slots
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            AI & WhatsApp{" "}
            <span className="text-accent drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
              Automations
            </span>{" "}
            That Turn Leads Into Customers
            <br />
            <span className="text-secondary drop-shadow-[0_0_15px_rgba(124,58,237,0.6)]">
              Deployed in 48 Hours
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            We design automation systems for agencies, startups, and growing
            businesses — helping you capture leads, follow up instantly, and
            convert prospects automatically.
          </motion.p>

          {/* Benefits */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-muted-foreground"
          >
            <span className="px-3 py-1 rounded-full border border-border">
              ⚡ Instant Lead Responses
            </span>
            <span className="px-3 py-1 rounded-full border border-border">
              🤖 AI Lead Qualification
            </span>
            <span className="px-3 py-1 rounded-full border border-border">
              📈 Revenue-Focused Workflows
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >

            <Button
              asChild
              variant="cta"
              size="xl"
              className="w-full sm:w-auto"
            >
              <a
                href="https://calendly.com/rrkautomations/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Free Automation Audit
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="hero-outline"
              size="xl"
              className="w-full sm:w-auto"
            >
              <a
                href="https://wa.me/918341374436"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>

          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={fadeUp}
            className="mt-16 pt-10 border-t border-border"
          >
            <p className="text-muted-foreground text-sm mb-4">
              Trusted automation partner for scaling businesses
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="font-semibold text-lg">
                9+ Automation Systems Delivered
              </div>

              <div className="hidden sm:block w-px h-6 bg-border" />

              <div className="font-semibold text-lg">
                48 Hour Deployment
              </div>

              <div className="hidden sm:block w-px h-6 bg-border" />

              <div className="font-semibold text-lg">
                Founder-Led Execution
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;