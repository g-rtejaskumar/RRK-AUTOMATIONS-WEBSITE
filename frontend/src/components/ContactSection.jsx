import { Button } from "../components/ui/button";
import { Calendar, MessageCircle, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("submit-lead", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          business_name: formData.business.trim() || null,
          message: formData.message.trim(),
          company_website: "",
        },
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", business: "", message: "" });
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section id="contact" className="relative py-28 bg-background overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let&apos;s Automate Your Growth
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Book a free automation audit or send us a message below.
            </p>

            <div className="space-y-4 mb-10">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <a
                  href="https://calendly.com/rrkautomations/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Audit
                </a>
              </Button>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="whatsapp" size="lg">
                  <a
                    href="https://wa.me/918341374436"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>

                <Button variant="outline" size="lg">
                  <a href="mailto:rrkautomations@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
              <Clock className="w-5 h-5 text-accent" />
              <span>We respond within 24 hours</span>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/80 backdrop-blur-xl rounded-2xl p-10 border border-border shadow-elevated"
          >
            <h3 className="text-xl font-bold mb-8">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/40 outline-none transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/40 outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/40 outline-none transition-all"
                />
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Business Name (optional)"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/40 outline-none transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your automation needs..."
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/40 outline-none transition-all"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;