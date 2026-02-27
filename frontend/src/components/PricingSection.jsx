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




import { Button } from "../components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const PricingSection = () => {
  const [pricing, setPricing] = useState([]);
  const [isIndian, setIsIndian] = useState(true);
  const [loading, setLoading] = useState(true);
  const currency = isIndian ? "INR" : "USD";

  useEffect(() => {
    const fetchPricing = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("pricing_plans")
        .select("*")
        .eq("currency", currency)
        .order("order_index", { ascending: true });

      if (error) {
        console.error("Error fetching pricing:", error);
        setPricing([]);
      } else {
        setPricing(data || []);
      }

      setLoading(false);
    };

    fetchPricing();
  }, [currency]);

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="section-container">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Pricing
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Transparent Pricing, Real Results
          </h2>

          <p className="text-muted-foreground text-lg mb-8">
            Prices are starting points. Final pricing is discussed on call based on your specific needs.
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

        {/* Loading State */}
        {loading && (
          <div className="text-center text-muted-foreground">
            Loading pricing...
          </div>
        )}

        {/* Pricing Cards */}
        {!loading && (
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? "border-secondary shadow-elevated scale-105 z-10"
                    : "border-border shadow-card hover:shadow-elevated hover:border-secondary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    starting
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
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
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
