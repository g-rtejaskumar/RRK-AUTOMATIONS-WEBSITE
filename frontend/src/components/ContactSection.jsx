// import { Button } from "../components/ui/button";
// import { Calendar, MessageCircle, Mail, Clock } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "../hooks/use-toast";
// import { supabase } from "../lib/supabase";
// import { z } from "zod";

// const leadSchema = z.object({
//   name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
//   email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
//   phone: z.string().max(20, "Phone number is too long").optional(),
//   business: z.string().max(100, "Business name is too long").optional(),
//   message: z.string().trim().min(1, "Message is required").max(2000, "Message is too long"),
// });

// const ContactSection = () => {
//   const { toast } = useToast();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     business: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const result = leadSchema.safeParse(formData);

//     if (!result.success) {
//       const fieldErrors = {};
//       result.error.errors.forEach((err) => {
//         if (err.path[0]) {
//           fieldErrors[err.path[0]] = err.message;
//         }
//       });
//       setErrors(fieldErrors);
//       return false;
//     }

//     setErrors({});
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     try {
//       const { error } = await supabase.functions.invoke("submit-lead", {
//         body: {
//           name: formData.name.trim(),
//           email: formData.email.trim(),
//           phone: formData.phone.trim() || null,
//           business_name: formData.business.trim() || null,
//           message: formData.message.trim(),
//           company_website: "",
//         },
//       });

//       if (error) throw error;

//       toast({
//         title: "Message sent!",
//         description: "We'll get back to you within 24 hours.",
//       });

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         business: "",
//         message: "",
//       });
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to send message. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   return (
//     <section id="contact" className="py-24 bg-muted/30">
//       <div className="section-container">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
          
//           {/* Left Section */}
//           <div>
//             <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
//               Get Started
//             </p>

//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
//               Let's Automate Your Growth
//             </h2>

//             <p className="text-muted-foreground text-lg mb-8">
//               Book a free 15-minute automation audit call, or reach out via WhatsApp for quick questions.
//             </p>

//             <div className="space-y-4 mb-8">
//               <Button variant="cta" size="lg" className="w-full sm:w-auto">
//                 <a href="https://calendly.com/rrkautomations/new-meeting" target="_blank" rel="noopener noreferrer">
//                   <Calendar className="w-5 h-5" />
//                   Book Free Automation Audit
//                 </a>
//               </Button>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
//                   <a href="https://wa.me/918341374436" target="_blank" rel="noopener noreferrer">
//                     <MessageCircle className="w-5 h-5" />
//                     Chat on WhatsApp
//                   </a>
//                 </Button>

//                 <Button variant="outline" size="lg" className="w-full sm:w-auto">
//                   <a href="mailto:rrkautomations@gmail.com">
//                     <Mail className="w-5 h-5" />
//                     Email Us
//                   </a>
//                 </Button>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
//               <Clock className="w-5 h-5 text-accent" />
//               <span className="text-foreground">We respond within 24 hours</span>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
//             <h3 className="text-xl font-bold text-foreground mb-6">
//               Send us a message
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid sm:grid-cols-2 gap-5">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   className="w-full px-4 py-3 rounded-lg border border-input"
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="john@company.com"
//                   className="w-full px-4 py-3 rounded-lg border border-input"
//                 />
//               </div>

//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 placeholder="Tell us about your automation needs..."
//                 className="w-full px-4 py-3 rounded-lg border border-input"
//               />

//               <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </Button>
//             </form>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import { Button } from "../components/ui/button";
import { Calendar, MessageCircle, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { supabase } from "../lib/supabase";
import { z } from "zod";
import { motion } from "framer-motion";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().max(20).optional(),
  business: z.string().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
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
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-background overflow-hidden">

      {/* Futuristic grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

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
              Let’s Automate Your Growth
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
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Audit
                </a>
              </Button>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="whatsapp" size="lg">
                  <a
                    href="https://wa.me/918341374436"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>

                <Button variant="outline" size="lg">
                  <a href="mailto:rrkautomations@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
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

          {/* Right Section - Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/80 backdrop-blur-xl rounded-2xl p-10 border border-border shadow-elevated"
          >
            <h3 className="text-xl font-bold mb-8">
              Send Us a Message
            </h3>

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