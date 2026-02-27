import { Button } from "../components/ui/button";
import { Calendar, MessageCircle, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { supabase } from "../lib/supabase";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  phone: z.string().max(20, "Phone number is too long").optional(),
  business: z.string().max(100, "Business name is too long").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message is too long"),
});

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
    const result = leadSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
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

      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: "",
      });
    } catch (error) {
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

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Section */}
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Get Started
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Let's Automate Your Growth
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Book a free 15-minute automation audit call, or reach out via WhatsApp for quick questions.
            </p>

            <div className="space-y-4 mb-8">
              <Button variant="cta" size="lg" className="w-full sm:w-auto">
                <a href="https://calendly.com/rrkautomations/new-meeting" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Book Free Automation Audit
                </a>
              </Button>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  <a href="https://wa.me/918341374436" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>

                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <a href="mailto:rrkautomations@gmail.com">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-foreground">We respond within 24 hours</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-input"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-input"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your automation needs..."
                className="w-full px-4 py-3 rounded-lg border border-input"
              />

              <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;