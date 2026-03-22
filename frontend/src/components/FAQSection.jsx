import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to set up an automation?",
    a: "Most automations are live within 48–72 hours after our initial consultation call. Complex multi-system integrations may take 5–7 business days.",
  },
  {
    q: "What tools and platforms do you work with?",
    a: "We specialize in WhatsApp Business API, Make (Integromat), n8n, Zapier, OpenAI/GPT, Google Sheets, Notion, HubSpot, and many more. We can integrate with almost any tool that has an API.",
  },
  {
    q: "Do you offer support after the automation is deployed?",
    a: "Yes! Every plan includes bug-fix support (7–30 days depending on the plan). We also offer ongoing maintenance and optimization packages for long-term partnerships.",
  },
  {
    q: "What if I'm not satisfied with the automation?",
    a: "We work closely with you during the build process and demo the automation before final deployment. If something doesn't meet your requirements, we'll revise it until it does.",
  },
  {
    q: "Can you work with my existing CRM and tools?",
    a: "Absolutely. We design automations around your existing tech stack. We integrate with popular CRMs, email tools, payment gateways, and communication platforms.",
  },
  {
    q: "Do I need any technical knowledge to use the automations?",
    a: "No. We build everything so it works on autopilot. You'll receive a walkthrough and documentation. Our systems are designed for non-technical business owners.",
  },
  {
    q: "How do I get started?",
    a: "Book a free 15-minute automation audit call. We'll analyze your current workflows, identify automation opportunities, and provide a custom proposal — all at no cost.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-28 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-secondary" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FAQSection;
