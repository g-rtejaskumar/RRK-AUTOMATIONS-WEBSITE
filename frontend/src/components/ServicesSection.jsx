import { Button } from "../components/ui/button";
import { ArrowRight, Bot, Globe, Cpu, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";

const categoryConfig = {
  automation: { title: "Automation Services", Icon: Bot },
  web: { title: "Web Services", Icon: Globe },
  agents: { title: "AI Agents", Icon: Cpu },
};

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [servicesData, setServicesData] = useState({ automation: [], web: [], agents: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setIsLoading(true);
    const { data } = await supabase
      .from("services")
      .select("*")
      .eq("is_active", true)
      .order("order_index", { ascending: true });
    
    const grouped = { automation: [], web: [], agents: [] };
    if (data) {
      data.forEach(srv => {
        if (grouped[srv.category]) {
          grouped[srv.category].push({
            name: srv.name,
            description: srv.problem, // Mapping problem from DB as description here
            outcome: srv.outcome,
            cta: srv.cta
          });
        }
      });
    }
    setServicesData(grouped);
    setIsLoading(false);
  };

  return (
    <section id="services" className="py-28 bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Scalable Systems Built for Growth
          </h2>
          <p className="text-muted-foreground text-lg">
            Click a category to explore the systems we design and deploy.
          </p>
        </div>

        {/* Categories */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-secondary" />
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(categoryConfig).map(([key, { title, Icon }]) => {
              const categoryServices = servicesData[key] || [];
              const isActive = activeCategory === key;
              
              if (categoryServices.length === 0) return null; // Don't show category if empty

              return (
                <div key={key}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setActiveCategory(isActive ? null : key)}
                    className={`cursor-pointer bg-card border border-border rounded-2xl p-8 transition-all duration-300 ${
                      isActive
                        ? "border-secondary shadow-elevated"
                        : "hover:border-secondary/30 hover:shadow-card"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold">{title}</h3>
                      </div>

                      <ArrowRight
                        className={`w-6 h-6 transition-transform ${
                          isActive ? "rotate-90 text-secondary" : ""
                        }`}
                      />
                    </div>
                  </motion.div>

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
                          {categoryServices.map((service) => (
                            <div
                              key={service.name}
                              className="bg-muted/40 border border-border rounded-xl p-6 hover:border-secondary/30 transition-all flex flex-col justify-between"
                            >
                              <div>
                                <h4 className="text-lg font-semibold mb-2">
                                  {service.name}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-2 whitespace-pre-wrap">
                                  {service.description}
                                </p>
                                <p className="text-sm text-accent font-medium mb-4">
                                  {service.outcome}
                                </p>
                              </div>
                              <Button size="sm" variant="outline" asChild className="w-fit">
                                <a href="#contact">
                                  {service.cta || "Book Free Audit"}
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
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
