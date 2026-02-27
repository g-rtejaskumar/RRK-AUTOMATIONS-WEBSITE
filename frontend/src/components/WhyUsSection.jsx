import { Zap, User, Target, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

/**
 * Map DB icon string → Lucide component
 * DB must store EXACT string names like:
 * "Zap", "User", "Target", "MessageCircle"
 */
const iconMap = {
  Zap,
  User,
  Target,
  MessageCircle,
};

const WhyUsSection = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWhyUs = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("why_us_items")
        .select("*")
        .eq("is_active", true)
        .order("order_index", { ascending: true });

      if (error) {
        console.error("Error fetching why us items:", error);
        setItems([]);
      } else {
        setItems(data || []);
      }

      setLoading(false);
    };

    fetchWhyUs();
  }, []);

  return (
    <section id="why-us" className="py-24 bg-primary text-primary-foreground">
      <div className="section-container">

        {/* Header (Keep Static or Make Dynamic Later) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Not Your Typical Agency
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We're a lean team that moves fast and delivers results.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center text-primary-foreground/60">
            Loading...
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item) => {
              const IconComponent = iconMap[item.icon] || Zap;

              return (
                <div key={item.id} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-primary-foreground/70">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyUsSection;