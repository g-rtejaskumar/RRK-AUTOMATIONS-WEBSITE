// import { Zap, User, Target, MessageCircle } from "lucide-react";
// import { useEffect, useState } from "react";
// import { supabase } from "../lib/supabase";

// /**
//  * Map DB icon string → Lucide component
//  * DB must store EXACT string names like:
//  * "Zap", "User", "Target", "MessageCircle"
//  */
// const iconMap = {
//   Zap,
//   User,
//   Target,
//   MessageCircle,
// };

// const WhyUsSection = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchWhyUs = async () => {
//       setLoading(true);

//       const { data, error } = await supabase
//         .from("why_us_items")
//         .select("*")
//         .eq("is_active", true)
//         .order("order_index", { ascending: true });

//       if (error) {
//         console.error("Error fetching why us items:", error);
//         setItems([]);
//       } else {
//         setItems(data || []);
//       }

//       setLoading(false);
//     };

//     fetchWhyUs();
//   }, []);

//   return (
//     <section id="why-us" className="py-24 bg-primary text-primary-foreground">
//       <div className="section-container">

//         {/* Header (Keep Static or Make Dynamic Later) */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
//             Why Choose Us
//           </p>
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Not Your Typical Agency
//           </h2>
//           <p className="text-primary-foreground/70 text-lg">
//             We're a lean team that moves fast and delivers results.
//           </p>
//         </div>

//         {/* Loading State */}
//         {loading && (
//           <div className="text-center text-primary-foreground/60">
//             Loading...
//           </div>
//         )}

//         {/* Grid */}
//         {!loading && (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {items.map((item) => {
//               const IconComponent = iconMap[item.icon] || Zap;

//               return (
//                 <div key={item.id} className="text-center group">
//                   <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
//                     <IconComponent className="w-8 h-8 text-accent" />
//                   </div>

//                   <h3 className="text-xl font-bold mb-3">
//                     {item.title}
//                   </h3>

//                   <p className="text-primary-foreground/70">
//                     {item.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default WhyUsSection;


// import { Zap, User, Target, MessageCircle } from "lucide-react";

// const differentiators = [
//   {
//     icon: Zap,
//     title: "48-Hour Delivery",
//     description: "Most automations are live within 48-72 hours. No waiting weeks for simple workflows.",
//   },
//   {
//     icon: User,
//     title: "Founder-Led Execution",
//     description: "You work directly with senior automation specialists, not junior project managers.",
//   },
//   {
//     icon: Target,
//     title: "ROI-Focused",
//     description: "Every automation we build is designed to either increase revenue or save time measurably.",
//   },
//   {
//     icon: MessageCircle,
//     title: "AI & WhatsApp Specialists",
//     description: "Deep expertise in the two most impactful automation channels for modern businesses.",
//   },
// ];

// const WhyUsSection = () => {
//   return (
//     <section id="why-us" className="py-24 bg-primary text-primary-foreground">
//       <div className="section-container">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</p>
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Not Your Typical Agency
//           </h2>
//           <p className="text-primary-foreground/70 text-lg">
//             We're a lean team that moves fast and delivers results. No bureaucracy, no endless meetings.
//           </p>
//         </div>

//         {/* Differentiators Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {differentiators.map((item) => (
//             <div
//               key={item.title}
//               className="text-center group"
//             >
//               <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
//                 <item.icon className="w-8 h-8 text-accent" />
//               </div>
//               <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//               <p className="text-primary-foreground/70">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUsSection;


import { Zap, User, Target, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
  {
    icon: Zap,
    title: "48-Hour Delivery",
    description:
      "Most automations are live within 48–72 hours. No waiting weeks for simple workflows.",
  },
  {
    icon: User,
    title: "Founder-Led Execution",
    description:
      "You work directly with senior automation specialists, not junior project managers.",
  },
  {
    icon: Target,
    title: "ROI-Focused",
    description:
      "Every automation we build is designed to either increase revenue or save time measurably.",
  },
  {
    icon: MessageCircle,
    title: "AI & WhatsApp Specialists",
    description:
      "Deep expertise in the two most impactful automation channels for modern businesses.",
  },
];

const WhyUsSection = () => {
  return (
    <section
      id="why-us"
      className="relative py-28 bg-background overflow-hidden"
    >
      {/* Subtle Tech Grid */}
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
            Why Choose Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Not Your Typical Agency
          </h2>

          <p className="text-muted-foreground text-lg">
            A lean automation partner built for speed, clarity, and measurable impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 text-center hover:border-secondary/40 hover:shadow-elevated transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-secondary drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;