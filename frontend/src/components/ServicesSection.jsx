import { Button } from "../components/ui/button";
import { ArrowRight, Bot, Globe, Cpu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = {
  automation: [
    {
      name: "Lead-to-Sales Automation",
      description: "Website/Ads → WhatsApp → CRM → Sales Rep. Instant response + routing.",
      outcome: "Higher lead conversion & faster sales",
      cta: "Book Free Audit",
    },
    {
      name: "E-commerce Automation",
      description: "Order → Confirmation → Shipping → Refunds automation.",
      outcome: "Reduced workload & improved CX",
      cta: "Book Free Audit",
    },
    {
      name: "Internal Operations Automation",
      description: "Workflow automation across Sheets, Email, Slack & Notion.",
      outcome: "Time saved & better team efficiency",
      cta: "Book Free Audit",
    },
  ],
  web: [
    {
      name: "High-Converting Landing Pages",
      description: "Conversion-focused websites designed for performance marketing.",
      outcome: "Higher ad ROI & better lead capture",
      cta: "Book Free Audit",
    },
    {
      name: "Performance Optimization",
      description: "Speed optimization, SEO setup, and analytics integration.",
      outcome: "Faster load times & better search rankings",
      cta: "Book Free Audit",
    },
  ],
  agents: [
    {
      name: "WhatsApp AI Chatbot",
      description: "AI-powered chatbot that qualifies leads and books appointments 24/7.",
      outcome: "24/7 lead qualification & booking",
      cta: "Contact Us",
    },
    {
      name: "AI Customer Support Agent",
      description: "Handle FAQs, ticket routing, and customer queries automatically.",
      outcome: "Lower support costs & instant responses",
      cta: "Contact Us",
    },
    {
      name: "AI Sales Agent",
      description: "Automated outreach, follow-ups, and proposal generation.",
      outcome: "More sales conversations & closed deals",
      cta: "Contact Us",
    },
  ],
};

const categoryConfig = {
  automation: { title: "Automation Services", Icon: Bot },
  web: { title: "Web Services", Icon: Globe },
  agents: { title: "AI Agents", Icon: Cpu },
};

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);

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
        <div className="space-y-6">
          {Object.entries(categoryConfig).map(([key, { title, Icon }]) => {
            const isActive = activeCategory === key;

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
                        {servicesData[key].map((service) => (
                          <div
                            key={service.name}
                            className="bg-muted/40 border border-border rounded-xl p-6 hover:border-secondary/30 transition-all"
                          >
                            <h4 className="text-lg font-semibold mb-2">
                              {service.name}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {service.description}
                            </p>
                            <p className="text-sm text-accent font-medium mb-4">
                              {service.outcome}
                            </p>
                            <Button size="sm" variant="outline" asChild>
                              <a href="#contact">
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
