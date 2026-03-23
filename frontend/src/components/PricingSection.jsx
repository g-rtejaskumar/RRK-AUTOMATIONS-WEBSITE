import { Button } from "../components/ui/button";
import { Check, ArrowRight, Star, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

const PricingSection = () => {
  const [isIndian, setIsIndian] = useState(true);
  const [pricingPlans, setPricingPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("pricing_plans")
      .select("*")
      .order("order_index", { ascending: true });
    
    if (data) {
      setPricingPlans(data);
    }
    setIsLoading(false);
  };

  return (
    <section id="pricing" className="relative py-28 bg-background overflow-hidden">
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
          <div className="inline-flex items-center gap-1 p-1.5 bg-muted/80 border border-border rounded-xl">
            <button
              onClick={() => setIsIndian(true)}
              className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isIndian
                  ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              🇮🇳 INR
            </button>
            <button
              onClick={() => setIsIndian(false)}
              className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                !isIndian
                  ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              🌍 USD
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-secondary" />
          </div>
        ) : pricingPlans.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            Pricing plans are currently being updated.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                whileHover={{ y: -8 }}
                transition={{ type: "tween", duration: 0.2 }}
                className={`relative rounded-2xl p-8 border transition-colors transition-shadow duration-200 flex flex-col justify-between ${
                  plan.popular
                    ? "border-secondary shadow-elevated bg-gradient-to-br from-card to-secondary/5 scale-105"
                    : "border-border bg-card hover:border-secondary/30 hover:shadow-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full shadow-elevated whitespace-nowrap">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-wrap">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <span className="text-4xl font-extrabold">
                      {isIndian ? (plan.price_inr || "Custom") : (plan.price_usd || "Custom")}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">starting</span>
                  </div>

                  <ul className="space-y-3 mb-10">
                    {(Array.isArray(plan.features) ? plan.features : (plan.features || "").split("\n")).filter(Boolean).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm whitespace-pre-wrap">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={plan.popular ? "cta" : "outline"}
                  size="lg"
                  className="w-full mt-auto"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    {plan.cta || "Get Started"}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;