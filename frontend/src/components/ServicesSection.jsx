import { Button } from "../components/ui/button";
import { ArrowRight, Bot, Globe, Cpu, Loader2, Layers, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSupabase } from "../lib/supabase";
import { useCalendlyGate } from "./CalendlyLeadGate";

const categoryConfig = {
  automation: { title: "Automation Services", Icon: Bot },
  web: { title: "Web Services", Icon: Globe },
  agents: { title: "AI Agents", Icon: Cpu },
};

const ServicesSection = () => {
  const { openGate } = useCalendlyGate();
  const [activeCategory, setActiveCategory] = useState(null);
  const [servicesData, setServicesData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setIsLoading(true);
    const sb = await getSupabase();
    const { data } = await sb
      .from("services")
      .select("*")
      .eq("is_active", true)
      .order("order_index", { ascending: true });
    
    const grouped = {};
    if (data) {
      data.forEach(srv => {
        const cat = srv.category || "other";
        if (!grouped[cat]) {
          grouped[cat] = [];
        }
        grouped[cat].push({
          name: srv.name,
          description: srv.description,
          outcome: Array.isArray(srv.features) ? srv.features.join(" • ") : srv.features,
          cta: srv.cta
        });
      });
      // Set the first category active by default if there are any
      const keys = Object.keys(grouped);
      if (keys.length > 0) {
        setActiveCategory(keys[0]);
      }
    }
    setServicesData(grouped);
    setIsLoading(false);
  };

  return (
    <section id="services" className="py-28 bg-background relative overflow-hidden">
      <div className="section-container relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Scalable Systems Built for Growth
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore the systems we design and deploy.
          </p>
        </div>

        {/* Categories */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-secondary" />
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(servicesData).map(([key, categoryServices]) => {
              const config = categoryConfig[key] || { 
                title: key === "other" ? "Other Services" : key.charAt(0).toUpperCase() + key.slice(1), 
                Icon: Layers 
              };
              const { title, Icon } = config;
              const isActive = activeCategory === key;
              
              if (categoryServices.length === 0) return null;

              return (
                <div key={key} className="flex flex-col gap-4">
                  
                  {/* Category Header Bar mimicking the screenshot */}
                  <motion.div
                    onClick={() => setActiveCategory(isActive ? null : key)}
                    className="cursor-pointer border border-[#ffffff15] rounded-xl p-5 transition-all duration-300 flex items-center justify-between shadow-lg"
                    style={{
                      background: "linear-gradient(to right, #0a0a0e, #130a1c)",
                      borderColor: isActive ? "rgba(168, 85, 247, 0.4)" : "rgba(255, 255, 255, 0.08)",
                      boxShadow: isActive ? "0 0 20px rgba(168, 85, 247, 0.15)" : "none"
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
                    </div>

                    <ArrowDown
                      className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
                        isActive ? "rotate-180" : "rotate-0 opacity-50"
                      }`}
                    />
                  </motion.div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, scale: 0.98 }}
                        animate={{ opacity: 1, height: "auto", scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {/* 2-Column Grid mimicking the screenshot */}
                        <div className="grid md:grid-cols-2 gap-4 pb-4">
                          {categoryServices.map((service) => (
                            <div
                              key={service.name}
                              className="border border-[#ffffff10] rounded-xl p-6 transition-all hover:border-[#ffffff25] flex flex-col justify-between group"
                              style={{ backgroundColor: "#0b0b0e" }}
                            >
                              <div>
                                <h4 className="text-[17px] font-bold text-white mb-2 leading-tight">
                                  {service.name}
                               </h4>
                                <p className="text-[13px] text-zinc-400 mb-3 whitespace-pre-wrap leading-relaxed">
                                  <span className="font-semibold text-zinc-300 mr-1">Problem:</span> {service.description}
                                </p>
                                <p className="text-[13px] font-semibold text-cyan-400 mb-6 drop-shadow-sm flex items-start">
                                  <span className="text-cyan-500/80 mr-1 shrink-0">Solution:</span> <span>{service.outcome}</span>
                                </p>
                              </div>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => openGate({ source: `service:${service.name}` })}
                                className="w-fit bg-transparent border-[#ffffff15] text-xs font-semibold hover:bg-white hover:text-black transition-colors"
                              >
                                <span className="flex items-center">
                                  {service.cta || "Book Free Audit"}
                                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
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
