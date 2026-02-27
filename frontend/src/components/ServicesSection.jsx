import { Button } from "../components/ui/button";
import { ArrowRight, Bot, MessageSquare, ShoppingCart, Settings, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const iconMap = {
  Bot,
  MessageSquare,
  ShoppingCart,
  Settings,
  Sparkles,
  ArrowRight,
};

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("is_active", true)
        .order("order_index", { ascending: true });

      if (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      } else {
        setServices(data || []);
      }

      setLoading(false);
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Revenue-Critical Automations
          </h2>
          <p className="text-muted-foreground text-lg">
            We focus on automations that directly impact your bottom line. No fluff, just results.
          </p>
        </div>

        {loading && (
          <div className="text-center text-muted-foreground">
            Loading services...
          </div>
        )}

        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || ArrowRight;

              return (
                <div
                  key={service.id}
                  className={`group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-secondary/30 ${
                    service.featured ? "md:col-span-2 lg:col-span-1" : ""
                  } ${service.premium ? "bg-gradient-to-br from-card to-secondary/5" : ""}`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      service.premium
                        ? "bg-secondary/10 text-secondary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                        Problem
                      </p>
                      <p className="text-sm text-foreground/80">
                        {service.problem}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                        Solution
                      </p>
                      <p className="text-sm text-foreground/80">
                        {service.solution}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-accent uppercase tracking-wide mb-1">
                        Outcome
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {service.outcome}
                      </p>
                    </div>
                  </div>

                  {service.flow && (
                    <div className="mb-6 p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs font-mono text-muted-foreground">
                        {service.flow}
                      </p>
                    </div>
                  )}

                  {service.tools && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {service.tools.split(", ").map((tool, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <Button
                    variant={
                      service.is_whatsapp
                        ? "whatsapp"
                        : service.premium
                        ? "secondary"
                        : "cta"
                    }
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={
                        service.is_whatsapp
                          ? "https://wa.me/918341374436"
                          : "#contact"
                      }
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>

                  {service.premium && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                        Premium
                      </span>
                    </div>
                  )}
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




