import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ankit Sharma",
    role: "Founder, Digital Marketing Agency",
    quote:
      "RRK Automations transformed our lead follow-up process. We went from losing 40% of our leads to responding within 30 seconds. The ROI was almost immediate.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Operations Head, Real Estate Firm",
    quote:
      "The WhatsApp automation they built handles all our property inquiries automatically. Our team now focuses on closing deals instead of answering repetitive questions.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "CEO, Coaching Academy",
    quote:
      "We saved over 10 hours per week on follow-ups alone. The automated booking system has increased our consultation calls by 3x.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real feedback from businesses that automated their growth with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 hover:border-secondary/40 hover:shadow-elevated transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-8 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
