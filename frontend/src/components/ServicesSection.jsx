// import { Button } from "../components/ui/button";
// import { ArrowRight, Bot, MessageSquare, ShoppingCart, Settings, Sparkles } from "lucide-react";
// import { useState, useEffect } from "react";
// import { supabase } from "../lib/supabase";

// const iconMap = {
//   Bot,
//   MessageSquare,
//   ShoppingCart,
//   Settings,
//   Sparkles,
//   ArrowRight,
// };

// const ServicesSection = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchServices = async () => {
//       setLoading(true);

//       const { data, error } = await supabase
//         .from("services")
//         .select("*")
//         .eq("is_active", true)
//         .order("order_index", { ascending: true });

//       if (error) {
//         console.error("Error fetching services:", error);
//         setServices([]);
//       } else {
//         setServices(data || []);
//       }

//       setLoading(false);
//     };

//     fetchServices();
//   }, []);

//   return (
//     <section id="services" className="py-24 bg-background">
//       <div className="section-container">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
//             Our Services
//           </p>
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
//             Revenue-Critical Automations
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             We focus on automations that directly impact your bottom line. No fluff, just results.
//           </p>
//         </div>

//         {loading && (
//           <div className="text-center text-muted-foreground">
//             Loading services...
//           </div>
//         )}

//         {!loading && (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service) => {
//               const IconComponent = iconMap[service.icon] || ArrowRight;

//               return (
//                 <div
//                   key={service.id}
//                   className={`group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-secondary/30 ${
//                     service.featured ? "md:col-span-2 lg:col-span-1" : ""
//                   } ${service.premium ? "bg-gradient-to-br from-card to-secondary/5" : ""}`}
//                 >
//                   {/* Icon */}
//                   <div
//                     className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
//                       service.premium
//                         ? "bg-secondary/10 text-secondary"
//                         : "bg-accent/10 text-accent"
//                     }`}
//                   >
//                     <IconComponent className="w-6 h-6" />
//                   </div>

//                   {/* Content */}
//                   <h3 className="text-xl font-bold text-foreground mb-3">
//                     {service.name}
//                   </h3>

//                   <div className="space-y-3 mb-6">
//                     <div>
//                       <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
//                         Problem
//                       </p>
//                       <p className="text-sm text-foreground/80">
//                         {service.problem}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
//                         Solution
//                       </p>
//                       <p className="text-sm text-foreground/80">
//                         {service.solution}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-xs font-medium text-accent uppercase tracking-wide mb-1">
//                         Outcome
//                       </p>
//                       <p className="text-sm font-medium text-foreground">
//                         {service.outcome}
//                       </p>
//                     </div>
//                   </div>

//                   {service.flow && (
//                     <div className="mb-6 p-3 bg-muted/50 rounded-lg">
//                       <p className="text-xs font-mono text-muted-foreground">
//                         {service.flow}
//                       </p>
//                     </div>
//                   )}

//                   {service.tools && (
//                     <div className="mb-6 flex flex-wrap gap-2">
//                       {service.tools.split(", ").map((tool, index) => (
//                         <span
//                           key={index}
//                           className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
//                         >
//                           {tool}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {/* CTA */}
//                   <Button
//                     variant={
//                       service.is_whatsapp
//                         ? "whatsapp"
//                         : service.premium
//                         ? "secondary"
//                         : "cta"
//                     }
//                     size="sm"
//                     className="w-full"
//                     asChild
//                   >
//                     <a
//                       href={
//                         service.is_whatsapp
//                           ? "https://wa.me/918341374436"
//                           : "#contact"
//                       }
//                     >
//                       {service.cta}
//                       <ArrowRight className="w-4 h-4" />
//                     </a>
//                   </Button>

//                   {service.premium && (
//                     <div className="absolute top-4 right-4">
//                       <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
//                         Premium
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


// import { Button } from "../components/ui/button";
// import { ArrowRight, Bot, MessageSquare, ShoppingCart, Settings, Sparkles } from "lucide-react";

// const services = [
//   {
//     icon: ArrowRight,
//     name: "Lead-to-Sales Automation",
//     problem: "Leads are generated but not followed up quickly",
//     solution: "Automated instant responses and sales routing",
//     outcome: "Higher lead conversion and faster sales",
//     flow: "Website/Ads → WhatsApp → CRM → Sales Rep",
//     cta: "Book Free Audit",
//     featured: true,
//   },
//   {
//     icon: MessageSquare,
//     name: "WhatsApp AI Chatbots",
//     problem: "Manual replies and missed customer inquiries",
//     solution: "AI-powered WhatsApp chatbot",
//     outcome: "24/7 lead qualification and appointment booking",
//     cta: "Chat on WhatsApp",
//     isWhatsApp: true,
//   },
//   {
//     icon: ShoppingCart,
//     name: "E-commerce Automation",
//     problem: "Manual order confirmation, shipping updates, and refunds",
//     solution: "Automated e-commerce workflows",
//     outcome: "Reduced workload and improved customer experience",
//     flow: "Order → Confirmation → Shipping → Refunds",
//     cta: "Book Free Audit",
//   },
//   {
//     icon: Settings,
//     name: "Internal Operations",
//     problem: "Repetitive internal tasks waste time",
//     solution: "Workflow automation across business tools",
//     outcome: "Time saved and improved team efficiency",
//     tools: "Google Sheets, Email, Slack, Notion",
//     cta: "Book Free Audit",
//   },
//   {
//     icon: Sparkles,
//     name: "AI Agents (Premium)",
//     problem: "Sales and support teams are overloaded",
//     solution: "AI-powered sales and support agents",
//     outcome: "Lower costs and scalable operations",
//     cta: "Contact Us",
//     premium: true,
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="py-24 bg-background">
//       <div className="section-container">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p>
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
//             Revenue-Critical Automations
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             We focus on automations that directly impact your bottom line. No fluff, just results.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={service.name}
//               className={`group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-secondary/30 ${
//                 service.featured ? 'md:col-span-2 lg:col-span-1' : ''
//               } ${service.premium ? 'bg-gradient-to-br from-card to-secondary/5' : ''}`}
//             >
//               {/* Icon */}
//               <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
//                 service.premium ? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'
//               }`}>
//                 <service.icon className="w-6 h-6" />
//               </div>

//               {/* Content */}
//               <h3 className="text-xl font-bold text-foreground mb-3">{service.name}</h3>
              
//               <div className="space-y-3 mb-6">
//                 <div>
//                   <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Problem</p>
//                   <p className="text-sm text-foreground/80">{service.problem}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Solution</p>
//                   <p className="text-sm text-foreground/80">{service.solution}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs font-medium text-accent uppercase tracking-wide mb-1">Outcome</p>
//                   <p className="text-sm font-medium text-foreground">{service.outcome}</p>
//                 </div>
//               </div>

//               {service.flow && (
//                 <div className="mb-6 p-3 bg-muted/50 rounded-lg">
//                   <p className="text-xs font-mono text-muted-foreground">{service.flow}</p>
//                 </div>
//               )}

//               {service.tools && (
//                 <div className="mb-6 flex flex-wrap gap-2">
//                   {service.tools.split(', ').map((tool) => (
//                     <span key={tool} className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground">
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* CTA */}
//               <Button
//                 variant={service.isWhatsApp ? "whatsapp" : service.premium ? "secondary" : "cta"}
//                 size="sm"
//                 className="w-full"
//                 asChild
//               >
//                 <a href={service.isWhatsApp ? "https://wa.me/918341374436" : "#contact"}>
//                   {service.cta}
//                   <ArrowRight className="w-4 h-4" />
//                 </a>
//               </Button>

//               {service.premium && (
//                 <div className="absolute top-4 right-4">
//                   <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
//                     Premium
//                   </span>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


// import { Button } from "../components/ui/button";
// import { ArrowRight, Bot, Globe, Cpu } from "lucide-react";
// import { useState, useEffect } from "react";
// import { supabase } from "../lib/supabase";
// import { motion, AnimatePresence } from "framer-motion";

// const categoryConfig = {
//   automation: {
//     title: "Automation Services",
//     icon: Bot,
//   },
//   web: {
//     title: "Web Services",
//     icon: Globe,
//   },
//   agents: {
//     title: "AI Agents",
//     icon: Cpu,
//   },
// };

// const ServicesSection = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       setLoading(true);

//       const { data, error } = await supabase
//         .from("services")
//         .select("*")
//         .eq("is_active", true)
//         .order("order_index", { ascending: true });

//       if (error) {
//         console.error("Error fetching services:", error);
//         setServices([]);
//       } else {
//         setServices(data || []);
//       }

//       setLoading(false);
//     };

//     fetchServices();
//   }, []);

//   const groupedServices = {
//     automation: services.filter((s) => s.category === "automation"),
//     web: services.filter((s) => s.category === "web"),
//     agents: services.filter((s) => s.category === "agents"),
//   };

//   return (
//     <section id="services" className="py-28 bg-background relative overflow-hidden">
//       {/* subtle futuristic grid */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       <div className="section-container relative z-10">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
//             Our Services
//           </p>
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Scalable Systems, Built For Growth
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             Click a category to explore the systems we design and deploy.
//           </p>
//         </div>

//         {loading && (
//           <div className="text-center text-muted-foreground">
//             Loading services...
//           </div>
//         )}

//         {!loading && (
//           <div className="space-y-6">

//             {Object.keys(categoryConfig).map((categoryKey) => {
//               const CategoryIcon = categoryConfig[categoryKey].icon;
//               const isActive = activeCategory === categoryKey;

//               return (
//                 <div key={categoryKey}>

//                   {/* Top Category Card */}
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     onClick={() =>
//                       setActiveCategory(isActive ? null : categoryKey)
//                     }
//                     className={`cursor-pointer bg-card border border-border rounded-2xl p-8 transition-all duration-300 ${
//                       isActive
//                         ? "border-secondary shadow-elevated"
//                         : "hover:border-secondary/30 hover:shadow-card"
//                     }`}
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-4">
//                         <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
//                           <CategoryIcon className="w-7 h-7" />
//                         </div>
//                         <h3 className="text-2xl font-bold">
//                           {categoryConfig[categoryKey].title}
//                         </h3>
//                       </div>

//                       <ArrowRight
//                         className={`w-6 h-6 transition-transform ${
//                           isActive ? "rotate-90 text-secondary" : ""
//                         }`}
//                       />
//                     </div>
//                   </motion.div>

//                   {/* Expandable Services */}
//                   <AnimatePresence>
//                     {isActive && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.4 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="grid md:grid-cols-2 gap-6 mt-6">

//                           {groupedServices[categoryKey].map((service) => (
//                             <div
//                               key={service.id}
//                               className="bg-muted/40 border border-border rounded-xl p-6 hover:border-secondary/30 transition-all"
//                             >
//                               <h4 className="text-lg font-semibold mb-2">
//                                 {service.name}
//                               </h4>

//                               {service.problem && (
//                                 <p className="text-sm text-muted-foreground mb-2">
//                                   {service.problem}
//                                 </p>
//                               )}

//                               {service.outcome && (
//                                 <p className="text-sm text-accent font-medium mb-4">
//                                   {service.outcome}
//                                 </p>
//                               )}

//                               <Button size="sm" variant="outline" asChild>
//                                 <a href="#contact">
//                                   {service.cta || "Get Started"}
//                                   <ArrowRight className="w-4 h-4" />
//                                 </a>
//                               </Button>
//                             </div>
//                           ))}

//                           {groupedServices[categoryKey].length === 0 && (
//                             <div className="text-muted-foreground text-sm">
//                               No services configured in this category.
//                             </div>
//                           )}

//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                 </div>
//               );
//             })}

//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;



// import { Button } from "../components/ui/button";
// import { ArrowRight, Bot, Globe, Cpu } from "lucide-react";
// import { useState, useEffect } from "react";
// import { supabase } from "../lib/supabase";
// import { motion, AnimatePresence } from "framer-motion";

// const categoryIcons = {
//   automation: Bot,
//   web: Globe,
//   agents: Cpu,
// };

// const categoryTitles = {
//   automation: "Automation Services",
//   web: "Web Services",
//   agents: "AI Agents",
// };

// const ServicesSection = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState(null);

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     setLoading(true);

//     const { data, error } = await supabase
//       .from("services")
//       .select("*")
//       .eq("is_active", true)
//       .order("order_index", { ascending: true });

//     if (error) {
//       console.error("Services fetch error:", error);
//       setServices([]);
//     } else {
//       setServices(data || []);
//     }

//     setLoading(false);
//   };

//   const groupedServices = services.reduce((acc, service) => {
//     if (!acc[service.category]) acc[service.category] = [];
//     acc[service.category].push(service);
//     return acc;
//   }, {});

//   const categories = Object.keys(groupedServices);

//   return (
//     <section
//       id="services"
//       className="py-28 bg-background relative overflow-hidden"
//     >
//       <div className="section-container relative z-10">

//         {/* Header */}

//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
//             Our Services
//           </p>

//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Scalable Systems Built for Growth
//           </h2>

//           <p className="text-muted-foreground text-lg">
//             Explore automation systems designed to eliminate manual work
//             and increase conversions.
//           </p>
//         </div>

//         {/* Loading */}

//         {loading && (
//           <div className="grid md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="h-32 bg-muted animate-pulse rounded-xl"
//               />
//             ))}
//           </div>
//         )}

//         {!loading && (

//           <div className="space-y-6">

//             {categories.map((category) => {

//               const CategoryIcon = categoryIcons[category] || Bot;
//               const isActive = activeCategory === category;

//               return (

//                 <div key={category}>

//                   {/* Category Card */}

//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     onClick={() =>
//                       setActiveCategory(isActive ? null : category)
//                     }
//                     className={`cursor-pointer bg-card border border-border rounded-2xl p-8 transition-all duration-300 ${
//                       isActive
//                         ? "border-secondary shadow-elevated"
//                         : "hover:border-secondary/30 hover:shadow-card"
//                     }`}
//                   >

//                     <div className="flex items-center justify-between">

//                       <div className="flex items-center gap-4">

//                         <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
//                           <CategoryIcon className="w-7 h-7" />
//                         </div>

//                         <h3 className="text-2xl font-bold">
//                           {categoryTitles[category] || category}
//                         </h3>

//                       </div>

//                       <ArrowRight
//                         className={`w-6 h-6 transition-transform ${
//                           isActive ? "rotate-90 text-secondary" : ""
//                         }`}
//                       />

//                     </div>

//                   </motion.div>

//                   {/* Services */}

//                   <AnimatePresence>

//                     {isActive && (

//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.4 }}
//                         className="overflow-hidden"
//                       >

//                         <div className="grid md:grid-cols-2 gap-6 mt-6">

//                           {groupedServices[category].map((service) => (

//                             <div
//                               key={service.id}
//                               className="bg-muted/40 border border-border rounded-xl p-6 hover:border-secondary/30 transition-all"
//                             >

//                               <h4 className="text-lg font-semibold mb-2">
//                                 {service.name}
//                               </h4>

//                               {service.problem && (
//                                 <p className="text-sm text-muted-foreground mb-2">
//                                   {service.problem}
//                                 </p>
//                               )}

//                               {service.outcome && (
//                                 <p className="text-sm text-accent font-medium mb-4">
//                                   {service.outcome}
//                                 </p>
//                               )}

//                               <Button size="sm" variant="outline" asChild>
//                                 <a href="#contact">
//                                   {service.cta || "Get Started"}
//                                   <ArrowRight className="w-4 h-4 ml-1" />
//                                 </a>
//                               </Button>

//                             </div>

//                           ))}

//                         </div>

//                       </motion.div>

//                     )}

//                   </AnimatePresence>

//                 </div>

//               );

//             })}

//           </div>

//         )}

//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import { Button } from "../components/ui/button";
import {
  ArrowRight,
  Bot,
  Globe,
  Cpu,
  MessageSquare,
  ShoppingCart,
  Settings,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = {
  automation: [
    {
      name: "Lead-to-Sales Automation",
      description:
        "Website/Ads → WhatsApp → CRM → Sales Rep. Instant response + routing.",
      outcome: "Higher lead conversion & faster sales",
      cta: "Book Free Audit",
    },
    {
      name: "E-commerce Automation",
      description:
        "Order → Confirmation → Shipping → Refunds automation.",
      outcome: "Reduced workload & improved CX",
      cta: "Book Free Audit",
    },
    {
      name: "Internal Operations Automation",
      description:
        "Workflow automation across Sheets, Email, Slack & Notion.",
      outcome: "Time saved & better team efficiency",
      cta: "Book Free Audit",
    },
  ],

  web: [
    {
      name: "High-Converting Landing Pages",
      description:
        "Conversion-focused websites designed for performance marketing.",
      outcome: "Higher ad ROI & better lead capture",
      cta: "Book Free Audit",
    },
    {
      name: "Performance Optimization",
      description:
        "Speed, UX & funnel optimization for existing websites.",
      outcome: "Improved conversion rates",
      cta: "Book Free Audit",
    },
  ],

  agents: [
    {
      name: "WhatsApp AI Chatbots",
      description:
        "AI-powered 24/7 chatbot for lead qualification & booking.",
      outcome: "Zero missed leads",
      cta: "Chat on WhatsApp",
      isWhatsApp: true,
    },
    {
      name: "AI Sales Agents (Premium)",
      description:
        "AI-powered sales & support agents handling conversations at scale.",
      outcome: "Lower cost & scalable growth",
      cta: "Contact Us",
      premium: true,
    },
  ],
};

const categoryConfig = {
  automation: { title: "Automation Services", icon: Bot },
  web: { title: "Web Services", icon: Globe },
  agents: { title: "AI Agents", icon: Cpu },
};

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section
      id="services"
      className="relative py-28 bg-surface overflow-hidden"
    >
      {/* Futuristic Grid Background */}
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Revenue-Critical Systems
          </h2>
          <p className="text-muted-foreground text-lg">
            Click a category to explore our automation solutions.
          </p>
        </div>

        <div className="space-y-6">
          {Object.keys(categoryConfig).map((key) => {
            const Icon = categoryConfig[key].icon;
            const isActive = activeCategory === key;

            return (
              <div key={key}>
                {/* Category Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() =>
                    setActiveCategory(isActive ? null : key)
                  }
                  className={`cursor-pointer bg-card border border-border rounded-2xl p-8 transition-all duration-300 ${
                    isActive
                      ? "border-secondary shadow-elevated"
                      : "hover:border-secondary/40 hover:shadow-card"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold">
                        {categoryConfig[key].title}
                      </h3>
                    </div>

                    <ArrowRight
                      className={`w-6 h-6 transition-transform ${
                        isActive ? "rotate-90 text-secondary" : ""
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        {servicesData[key].map((service) => (
                          <div
                            key={service.name}
                            className={`bg-muted/40 border border-border rounded-xl p-6 hover:border-secondary/40 transition-all ${
                              service.premium
                                ? "bg-gradient-to-br from-card to-secondary/10"
                                : ""
                            }`}
                          >
                            <h4 className="text-lg font-semibold mb-2">
                              {service.name}
                            </h4>

                            <p className="text-sm text-muted-foreground mb-3">
                              {service.description}
                            </p>

                            <p className="text-sm font-medium text-accent mb-4">
                              {service.outcome}
                            </p>

                            <Button
  variant={service.isWhatsApp ? "whatsapp" : service.premium ? "secondary" : "cta"}
  size="sm"
  className="w-full"
  asChild
>
                              <a
                                href={
                                  service.isWhatsApp
                                    ? "https://wa.me/918341374436"
                                    : "#contact"
                                }
                              >
                                {service.cta}
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </a>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;