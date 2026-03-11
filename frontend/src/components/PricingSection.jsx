// import { Button } from "../components/ui/button";
// import { Check, ArrowRight, Star } from "lucide-react";
// import { useState } from "react";

// const indianPricing = [
//   {
//     name: "Starter Automation",
//     price: "₹25,000",
//     description: "Perfect for testing the waters",
//     features: [
//       "1 Automation Workflow",
//       "WhatsApp or Email Integration",
//       "48-hour Delivery",
//       "7-day Bug Support",
//     ],
//     cta: "Book Free Audit",
//     popular: false,
//   },
//   {
//     name: "Growth Automation",
//     price: "₹50,000",
//     description: "Most popular for growing businesses",
//     features: [
//       "2–3 Automation Workflows",
//       "CRM + WhatsApp Integration",
//       "7-Day Priority Support",
//       "Performance Dashboard",
//     ],
//     cta: "Book Free Audit",
//     popular: true,
//   },
//   {
//     name: "Business Automation",
//     price: "₹1,00,000+",
//     description: "Full automation suite for scale",
//     features: [
//       "Full Sales Automation",
//       "AI Chatbot Included",
//       "Priority Support",
//       "Custom Integrations",
//       "Dedicated Account Manager",
//     ],
//     cta: "Contact Us",
//     popular: false,
//   },
// ];

// const foreignPricing = [
//   {
//     name: "Starter",
//     price: "$299",
//     description: "Perfect for testing the waters",
//     features: [
//       "1 Automation Workflow",
//       "WhatsApp or Email Integration",
//       "48-hour Delivery",
//       "7-day Bug Support",
//     ],
//     cta: "Book Free Audit",
//     popular: false,
//   },
//   {
//     name: "Growth",
//     price: "$599",
//     description: "Most popular for growing businesses",
//     features: [
//       "2–3 Automation Workflows",
//       "CRM + WhatsApp Integration",
//       "7-Day Priority Support",
//       "Performance Dashboard",
//     ],
//     cta: "Book Free Audit",
//     popular: true,
//   },
//   {
//     name: "Scale",
//     price: "$1,200+",
//     description: "Full automation suite for scale",
//     features: [
//       "Full Sales Automation",
//       "AI Chatbot Included",
//       "Priority Support",
//       "Custom Integrations",
//       "Dedicated Account Manager",
//     ],
//     cta: "Contact Us",
//     popular: false,
//   },
// ];

// const PricingSection = () => {
//   const [isIndian, setIsIndian] = useState(true);
//   const pricing = isIndian ? indianPricing : foreignPricing;

//   return (
//     <section id="pricing" className="py-24 bg-background">
//       <div className="section-container">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Pricing</p>
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
//             Transparent Pricing, Real Results
//           </h2>
//           <p className="text-muted-foreground text-lg mb-8">
//             Prices are starting points. Final pricing is discussed on call based on your specific needs.
//           </p>

//           {/* Currency Toggle */}
//           <div className="inline-flex items-center gap-2 p-1 bg-muted rounded-lg">
//             <button
//               onClick={() => setIsIndian(true)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                 isIndian ? 'bg-card shadow-card text-foreground' : 'text-muted-foreground hover:text-foreground'
//               }`}
//             >
//               🇮🇳 INR
//             </button>
//             <button
//               onClick={() => setIsIndian(false)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                 !isIndian ? 'bg-card shadow-card text-foreground' : 'text-muted-foreground hover:text-foreground'
//               }`}
//             >
//               🌍 USD
//             </button>
//           </div>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {pricing.map((plan, index) => (
//             <div
//               key={plan.name}
//               className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 ${
//                 plan.popular
//                   ? 'border-secondary shadow-elevated scale-105 z-10'
//                   : 'border-border shadow-card hover:shadow-elevated hover:border-secondary/30'
//               }`}
//             >
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                   <span className="inline-flex items-center gap-1 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
//                     <Star className="w-3 h-3" />
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               <div className="mb-6">
//                 <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
//                 <p className="text-muted-foreground text-sm">{plan.description}</p>
//               </div>

//               <div className="mb-6">
//                 <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
//                 <span className="text-muted-foreground text-sm ml-2">starting</span>
//               </div>

//               <ul className="space-y-3 mb-8">
//                 {plan.features.map((feature) => (
//                   <li key={feature} className="flex items-start gap-3">
//                     <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
//                     <span className="text-foreground/80 text-sm">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <Button
//                 variant={plan.popular ? "cta" : "outline"}
//                 size="lg"
//                 className="w-full"
//                 asChild
//               >
//                 <a href="#contact">
//                   {plan.cta}
//                   <ArrowRight className="w-4 h-4" />
//                 </a>
//               </Button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;



// const [pricing, setPricing] = useState([])
// const [isIndian, setIsIndian] = useState(true)

// useEffect(() => {
//   const fetchPricing = async () => {
//     const { data } = await supabase
//       .from("pricing_plans")
//       .select("*")
//       .eq("currency", isIndian ? "INR" : "USD")
//       .order("order_index", { ascending: true })

//     setPricing(data || [])
//   }

//   fetchPricing()
// }, [isIndian])




// import { Button } from "../components/ui/button";
// import { Check, ArrowRight, Star } from "lucide-react";
// import { useState, useEffect } from "react";
// import { supabase } from "../lib/supabase";

// const PricingSection = () => {
//   const [pricing, setPricing] = useState([]);
//   const [isIndian, setIsIndian] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const currency = isIndian ? "INR" : "USD";

//   useEffect(() => {
//     const fetchPricing = async () => {
//       setLoading(true);

//       const { data, error } = await supabase
//         .from("pricing_plans")
//         .select("*")
//         .eq("currency", currency)
//         .order("order_index", { ascending: true });

//       if (error) {
//         console.error("Error fetching pricing:", error);
//         setPricing([]);
//       } else {
//         setPricing(data || []);
//       }

//       setLoading(false);
//     };

//     fetchPricing();
//   }, [currency]);

//   return (
//     <section id="pricing" className="py-24 bg-background">
//       <div className="section-container">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
//             Pricing
//           </p>

//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
//             Transparent Pricing, Real Results
//           </h2>

//           <p className="text-muted-foreground text-lg mb-8">
//             Prices are starting points. Final pricing is discussed on call based on your specific needs.
//           </p>

//           {/* Currency Toggle */}
//           <div className="inline-flex items-center gap-2 p-1 bg-muted rounded-lg">
//             <button
//               onClick={() => setIsIndian(true)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                 isIndian
//                   ? "bg-card shadow-card text-foreground"
//                   : "text-muted-foreground hover:text-foreground"
//               }`}
//             >
//               🇮🇳 INR
//             </button>

//             <button
//               onClick={() => setIsIndian(false)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                 !isIndian
//                   ? "bg-card shadow-card text-foreground"
//                   : "text-muted-foreground hover:text-foreground"
//               }`}
//             >
//               🌍 USD
//             </button>
//           </div>
//         </div>

//         {/* Loading State */}
//         {loading && (
//           <div className="text-center text-muted-foreground">
//             Loading pricing...
//           </div>
//         )}

//         {/* Pricing Cards */}
//         {!loading && (
//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {pricing.map((plan) => (
//               <div
//                 key={plan.id}
//                 className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 ${
//                   plan.popular
//                     ? "border-secondary shadow-elevated scale-105 z-10"
//                     : "border-border shadow-card hover:shadow-elevated hover:border-secondary/30"
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                     <span className="inline-flex items-center gap-1 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
//                       <Star className="w-3 h-3" />
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 <div className="mb-6">
//                   <h3 className="text-xl font-bold text-foreground mb-2">
//                     {plan.name}
//                   </h3>
//                   <p className="text-muted-foreground text-sm">
//                     {plan.description}
//                   </p>
//                 </div>

//                 <div className="mb-6">
//                   <span className="text-4xl font-extrabold text-foreground">
//                     {plan.price}
//                   </span>
//                   <span className="text-muted-foreground text-sm ml-2">
//                     starting
//                   </span>
//                 </div>

//                 <ul className="space-y-3 mb-8">
//                   {plan.features?.map((feature, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
//                       <span className="text-foreground/80 text-sm">
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 <Button
//                   variant={plan.popular ? "cta" : "outline"}
//                   size="lg"
//                   className="w-full"
//                   asChild
//                 >
//                   <a href="#contact">
//                     {plan.cta}
//                     <ArrowRight className="w-4 h-4" />
//                   </a>
//                 </Button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PricingSection;

// import { Button } from "../components/ui/button";
// import { Check, ArrowRight, Star } from "lucide-react";
// import { useState, useEffect } from "react";
// import { supabase } from "../lib/supabase";
// import { motion } from "framer-motion";

// const PricingSection = () => {
//   const [pricing, setPricing] = useState([]);
//   const [isIndian, setIsIndian] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const currency = isIndian ? "INR" : "USD";

//   useEffect(() => {
//     const fetchPricing = async () => {
//       setLoading(true);

//       const { data, error } = await supabase
//         .from("pricing_plans")
//         .select("*")
//         .eq("currency", currency)
//         .order("order_index", { ascending: true });

//       if (error) {
//         console.error("Error fetching pricing:", error);
//         setPricing([]);
//       } else {
//         setPricing(data || []);
//       }

//       setLoading(false);
//     };

//     fetchPricing();
//   }, [currency]);

//   return (
//     <section
//       id="pricing"
//       className="relative py-28 bg-background overflow-hidden"
//     >
//       {/* Subtle Tech Grid */}
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
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
//             Pricing
//           </p>

//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Transparent Pricing. Maximum ROI.
//           </h2>

//           <p className="text-muted-foreground text-lg mb-8">
//             Clear tiers built for growth. No hidden complexity.
//           </p>

//           {/* Currency Toggle */}
//           <div className="inline-flex items-center gap-2 p-1 bg-muted rounded-lg">
//             <button
//               onClick={() => setIsIndian(true)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                 isIndian
//                   ? "bg-card shadow-card text-foreground"
//                   : "text-muted-foreground hover:text-foreground"
//               }`}
//             >
//               🇮🇳 INR
//             </button>

//             <button
//               onClick={() => setIsIndian(false)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                 !isIndian
//                   ? "bg-card shadow-card text-foreground"
//                   : "text-muted-foreground hover:text-foreground"
//               }`}
//             >
//               🌍 USD
//             </button>
//           </div>
//         </div>

//         {/* Loading */}
//         {loading && (
//           <div className="text-center text-muted-foreground">
//             Loading pricing...
//           </div>
//         )}

//         {/* Pricing Cards */}
//         {!loading && (
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {pricing.map((plan) => (
//               <motion.div
//                 key={plan.id}
//                 whileHover={{ y: -8 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//                 className={`relative rounded-2xl p-8 border transition-all duration-300 ${
//                   plan.popular
//                     ? "border-secondary shadow-elevated bg-gradient-to-br from-card to-secondary/5 scale-105"
//                     : "border-border bg-card hover:border-secondary/30 hover:shadow-card"
//                 }`}
//               >
//                 {/* Popular Badge */}
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                     <span className="inline-flex items-center gap-1 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full shadow-elevated">
//                       <Star className="w-3 h-3" />
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 {/* Plan Info */}
//                 <div className="mb-6">
//                   <h3 className="text-xl font-bold mb-2">
//                     {plan.name}
//                   </h3>
//                   <p className="text-muted-foreground text-sm">
//                     {plan.description}
//                   </p>
//                 </div>

//                 {/* Price */}
//                 <div className="mb-8">
//                   <span className="text-4xl font-extrabold">
//                     {plan.price}
//                   </span>
//                   <span className="text-muted-foreground text-sm ml-2">
//                     starting
//                   </span>
//                 </div>

//                 {/* Features */}
//                 <ul className="space-y-3 mb-10">
//                   {plan.features?.map((feature, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
//                       <span className="text-foreground/80 text-sm">
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* CTA */}
//                 <Button
//                   variant={plan.popular ? "cta" : "outline"}
//                   size="lg"
//                   className="w-full"
//                   asChild
//                 >
//                   <a href="#contact">
//                     {plan.cta}
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   </a>
//                 </Button>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PricingSection;

import { Button } from "../components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const indianPricing = [
  {
    name: "Starter Automation",
    price: "₹25,000",
    description: "Perfect for testing the waters",
    features: [
      "1 Automation Workflow",
      "WhatsApp or Email Integration",
      "48-hour Delivery",
      "7-day Bug Support",
    ],
    cta: "Book Free Audit",
    popular: false,
  },
  {
    name: "Growth Automation",
    price: "₹50,000",
    description: "Most popular for growing businesses",
    features: [
      "2–3 Automation Workflows",
      "CRM + WhatsApp Integration",
      "7-Day Priority Support",
      "Performance Dashboard",
    ],
    cta: "Book Free Audit",
    popular: true,
  },
  {
    name: "Business Automation",
    price: "₹1,00,000+",
    description: "Full automation suite for scale",
    features: [
      "Full Sales Automation",
      "AI Chatbot Included",
      "Priority Support",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const foreignPricing = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for testing the waters",
    features: [
      "1 Automation Workflow",
      "WhatsApp or Email Integration",
      "48-hour Delivery",
      "7-day Bug Support",
    ],
    cta: "Book Free Audit",
    popular: false,
  },
  {
    name: "Growth",
    price: "$599",
    description: "Most popular for growing businesses",
    features: [
      "2–3 Automation Workflows",
      "CRM + WhatsApp Integration",
      "7-Day Priority Support",
      "Performance Dashboard",
    ],
    cta: "Book Free Audit",
    popular: true,
  },
  {
    name: "Scale",
    price: "$1,200+",
    description: "Full automation suite for scale",
    features: [
      "Full Sales Automation",
      "AI Chatbot Included",
      "Priority Support",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const PricingSection = () => {
  const [isIndian, setIsIndian] = useState(true);
  const pricing = isIndian ? indianPricing : foreignPricing;

  return (
    <section id="pricing" className="relative py-28 bg-background overflow-hidden">

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Pricing
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Transparent Pricing. Maximum ROI.
          </h2>

          <p className="text-muted-foreground text-lg mb-8">
            Clear tiers built for growth. No hidden complexity.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-2 p-1 bg-muted rounded-lg">
            <button
              onClick={() => setIsIndian(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                isIndian
                  ? "bg-card shadow-card text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🇮🇳 INR
            </button>

            <button
              onClick={() => setIsIndian(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !isIndian
                  ? "bg-card shadow-card text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🌍 USD
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "tween", stiffness: 200 }}
              className={`relative rounded-2xl p-8 border transition-colors transition-shadow duration-200 ${
                plan.popular
                  ? "border-secondary shadow-elevated bg-gradient-to-br from-card to-secondary/5 scale-105"
                  : "border-border bg-card hover:border-secondary/30 hover:shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full shadow-elevated">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-extrabold">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm ml-2">
                  starting
                </span>
              </div>

              <ul className="space-y-3 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "cta" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contact">
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;


// import { Button } from "../components/ui/button";
// import { Check, ArrowRight, Star } from "lucide-react";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const indianPricing = [
//   {
//     name: "Starter Automation",
//     price: "₹25,000",
//     description: "Best for small businesses testing automation",
//     roi: "Save hours of manual follow-ups",
//     features: [
//       "1 Automation Workflow",
//       "WhatsApp or Email Integration",
//       "48-hour Delivery",
//       "7-day Bug Support",
//     ],
//     cta: "Book Automation Audit",
//     popular: false,
//   },
//   {
//     name: "Growth Automation",
//     price: "₹50,000",
//     description: "Best for agencies generating daily leads",
//     roi: "Respond to leads instantly & increase conversions",
//     features: [
//       "2–3 Automation Workflows",
//       "CRM + WhatsApp Integration",
//       "7-Day Priority Support",
//       "Performance Dashboard",
//     ],
//     cta: "Book Automation Audit",
//     popular: true,
//   },
//   {
//     name: "Business Automation",
//     price: "₹1,00,000+",
//     description: "Full automation suite for scaling businesses",
//     roi: "Complete sales automation system",
//     features: [
//       "Full Sales Automation",
//       "AI Chatbot Included",
//       "Priority Support",
//       "Custom Integrations",
//       "Dedicated Account Manager",
//     ],
//     cta: "Schedule Consultation",
//     popular: false,
//   },
// ];

// const foreignPricing = [
//   {
//     name: "Starter",
//     price: "$299",
//     description: "Best for testing automation workflows",
//     roi: "Automate first lead responses",
//     features: [
//       "1 Automation Workflow",
//       "WhatsApp or Email Integration",
//       "48-hour Delivery",
//       "7-day Bug Support",
//     ],
//     cta: "Book Automation Audit",
//     popular: false,
//   },
//   {
//     name: "Growth",
//     price: "$599",
//     description: "Most popular for growing businesses",
//     roi: "Capture and qualify leads automatically",
//     features: [
//       "2–3 Automation Workflows",
//       "CRM + WhatsApp Integration",
//       "7-Day Priority Support",
//       "Performance Dashboard",
//     ],
//     cta: "Book Automation Audit",
//     popular: true,
//   },
//   {
//     name: "Scale",
//     price: "$1,200+",
//     description: "Automation infrastructure for scaling teams",
//     roi: "Complete automation ecosystem",
//     features: [
//       "Full Sales Automation",
//       "AI Chatbot Included",
//       "Priority Support",
//       "Custom Integrations",
//       "Dedicated Account Manager",
//     ],
//     cta: "Schedule Consultation",
//     popular: false,
//   },
// ];

// const PricingSection = () => {
//   const [isIndian, setIsIndian] = useState(true);
//   const pricing = isIndian ? indianPricing : foreignPricing;

//   return (
//     <section id="pricing" className="relative py-28 bg-background overflow-hidden">

//       {/* Grid Background */}
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
//         <div className="text-center max-w-3xl mx-auto mb-16">

//           <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
//             Pricing
//           </p>

//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Transparent Pricing. Maximum ROI.
//           </h2>

//           <p className="text-muted-foreground text-lg mb-6">
//             Automation systems designed to save time, capture leads faster, and increase revenue.
//           </p>

//           {/* Trust Signals */}
//           <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
//             <span>⚡ 48–72 Hour Deployment</span>
//             <span>🤖 Custom Automation Systems</span>
//             <span>📈 Built for Revenue Growth</span>
//           </div>

//           {/* Currency Toggle */}
//           <div className="inline-flex items-center gap-2 p-1 bg-muted rounded-lg">
//             <button
//               onClick={() => setIsIndian(true)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition ${
//                 isIndian
//                   ? "bg-card shadow-card text-foreground"
//                   : "text-muted-foreground"
//               }`}
//             >
//               🇮🇳 India Pricing
//             </button>

//             <button
//               onClick={() => setIsIndian(false)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition ${
//                 !isIndian
//                   ? "bg-card shadow-card text-foreground"
//                   : "text-muted-foreground"
//               }`}
//             >
//               🌍 International Pricing
//             </button>
//           </div>

//         </div>

//         {/* Pricing Cards */}
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

//           {pricing.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               className={`relative rounded-2xl p-8 border ${
//                 plan.popular
//                   ? "border-secondary shadow-elevated bg-gradient-to-br from-card to-secondary/5 scale-105"
//                   : "border-border bg-card"
//               }`}
//             >

//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                   <span className="inline-flex items-center gap-1 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
//                     <Star className="w-3 h-3" />
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               <h3 className="text-xl font-bold mb-2">{plan.name}</h3>

//               <p className="text-muted-foreground text-sm mb-4">
//                 {plan.description}
//               </p>

//               <p className="text-accent text-sm font-medium mb-6">
//                 {plan.roi}
//               </p>

//               <div className="mb-8">
//                 <span className="text-4xl font-extrabold">
//                   {plan.price}
//                 </span>
//                 <span className="text-muted-foreground text-sm ml-2">
//                   starting
//                 </span>
//               </div>

//               <ul className="space-y-3 mb-10">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <Check className="w-5 h-5 text-accent mt-0.5" />
//                     <span className="text-sm text-foreground/80">
//                       {feature}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <Button
//                 variant={plan.popular ? "cta" : "outline"}
//                 size="lg"
//                 className="w-full"
//                 asChild
//               >
//                 <a href="#contact">
//                   {plan.cta}
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </a>
//               </Button>

//               <p className="text-xs text-muted-foreground text-center mt-3">
//                 Limited onboarding slots each week
//               </p>

//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default PricingSection;



// import { Button } from "../components/ui/button";
// import { Check, ArrowRight, Star } from "lucide-react";
// import { useState, useEffect } from "react";
// import { supabase } from "../lib/supabase";
// import { motion } from "framer-motion";

// const PricingSection = () => {
//   const [pricing, setPricing] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isIndian, setIsIndian] = useState(true);

//   useEffect(() => {
//     fetchPricing();
//   }, []);

//   const fetchPricing = async () => {
//     setLoading(true);

//     const { data, error } = await supabase
//       .from("pricing_plans")
//       .select("*")
//       .order("order_index", { ascending: true });

//     if (error) {
//       console.error("Pricing fetch error:", error);
//       setPricing([]);
//     } else {
//       setPricing(data || []);
//     }

//     setLoading(false);
//   };

//   const getPrice = (plan) => {
//     return isIndian ? plan.price_inr : plan.price_usd;
//   };

//   return (
//     <section
//       id="pricing"
//       className="relative py-28 bg-background overflow-hidden"
//     >
//       <div className="section-container relative z-10">

//         {/* Header */}

//         <div className="text-center max-w-3xl mx-auto mb-16">

//           <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
//             Pricing
//           </p>

//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Transparent Pricing. Maximum ROI.
//           </h2>

//           <p className="text-muted-foreground text-lg mb-8">
//             Automation systems designed to increase revenue and eliminate manual work.
//           </p>

//           {/* Currency Toggle */}

//           <div className="inline-flex items-center gap-2 p-1 bg-muted rounded-lg">

//             <button
//               onClick={() => setIsIndian(true)}
//               className={`px-4 py-2 rounded-md text-sm font-medium ${
//                 isIndian
//                   ? "bg-card shadow-card"
//                   : "text-muted-foreground"
//               }`}
//             >
//               🇮🇳 INR
//             </button>

//             <button
//               onClick={() => setIsIndian(false)}
//               className={`px-4 py-2 rounded-md text-sm font-medium ${
//                 !isIndian
//                   ? "bg-card shadow-card"
//                   : "text-muted-foreground"
//               }`}
//             >
//               🌍 USD
//             </button>

//           </div>

//         </div>

//         {/* Loading */}

//         {loading && (
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {[1,2,3].map((i) => (
//               <div
//                 key={i}
//                 className="h-72 bg-muted rounded-xl animate-pulse"
//               />
//             ))}
//           </div>
//         )}

//         {/* Pricing Cards */}

//         {!loading && (

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

//             {pricing.map((plan) => {

//               const features =
//                 typeof plan.features === "string"
//                   ? JSON.parse(plan.features)
//                   : plan.features || [];

//               return (

//                 <motion.div
//                   key={plan.id}
//                   whileHover={{ y: -8 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                   className={`relative rounded-2xl p-8 border ${
//                     plan.popular
//                       ? "border-secondary shadow-elevated bg-gradient-to-br from-card to-secondary/5 scale-105"
//                       : "border-border bg-card hover:border-secondary/30 hover:shadow-card"
//                   }`}
//                 >

//                   {/* Popular Badge */}

//                   {plan.popular && (
//                     <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                       <span className="inline-flex items-center gap-1 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
//                         <Star className="w-3 h-3" />
//                         Most Popular
//                       </span>
//                     </div>
//                   )}

//                   {/* Plan Info */}

//                   <div className="mb-6">
//                     <h3 className="text-xl font-bold mb-2">
//                       {plan.name}
//                     </h3>

//                     <p className="text-muted-foreground text-sm">
//                       {plan.description}
//                     </p>
//                   </div>

//                   {/* Price */}

//                   <div className="mb-8">
//                     <span className="text-4xl font-extrabold">
//                       {isIndian ? `₹${getPrice(plan)}` : `$${getPrice(plan)}`}
//                     </span>
//                     <span className="text-muted-foreground text-sm ml-2">
//                       starting
//                     </span>
//                   </div>

//                   {/* Features */}

//                   <ul className="space-y-3 mb-10">

//                     {features.map((feature, index) => (
//                       <li
//                         key={index}
//                         className="flex items-start gap-3"
//                       >
//                         <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />

//                         <span className="text-sm text-foreground/80">
//                           {feature}
//                         </span>

//                       </li>
//                     ))}

//                   </ul>

//                   {/* CTA */}

//                   <Button
//                     variant={plan.popular ? "cta" : "outline"}
//                     size="lg"
//                     className="w-full"
//                     asChild
//                   >

//                     <a href="#contact">

//                       {plan.cta || "Get Started"}

//                       <ArrowRight className="w-4 h-4 ml-2" />

//                     </a>

//                   </Button>

//                 </motion.div>

//               );

//             })}

//           </div>

//         )}

//       </div>
//     </section>
//   );
// };

// export default PricingSection;