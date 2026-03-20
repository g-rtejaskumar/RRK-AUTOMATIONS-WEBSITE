import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { motion } from "framer-motion";
import { Zap, Heart, Target, Users } from "lucide-react";
import CTABanner from "../components/CTABanner";

const values = [
  {
    icon: Zap,
    title: "Speed",
    description: "We move fast. Most automations are live within 48–72 hours because we believe speed is a competitive advantage.",
  },
  {
    icon: Target,
    title: "Results-First",
    description: "Every automation we build is tied to measurable business outcomes — more leads, more sales, or less manual work.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We don't just deliver and disappear. We partner with you to iterate, optimize, and scale your automation systems.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "Clear pricing, honest timelines, and open communication. No surprises, no hidden fees, no corporate runaround.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Us"
        description="RRK Automations is a founder-led AI & WhatsApp automation agency helping businesses automate lead capture, follow-ups, and sales workflows."
        path="/about"
        keywords="about RRK Automations, automation agency India, founder-led automation"
      />

      {/* Structured Data: AboutPage & Breadcrumb */}
      <script type="application/ld+json">
      {JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "RRK Automations",
            "description": "Founder-led AI & WhatsApp automation agency specializing in high-speed deployment and ROI-focused systems."
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://rrkautomations.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About Us",
              "item": "https://rrkautomations.com/about"
            }
          ]
        }
      ])}
      </script>

      {/* Hero */}
      <section className="page-hero py-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              We Build Systems That{" "}
              <span className="text-secondary">Work While You Sleep</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              A lean, founder-led automation agency obsessed with delivering measurable results in record time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">Our Story</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    RRK Automations was born from a simple observation: businesses were losing revenue not because they lacked leads, but because they couldn&apos;t respond fast enough.
                  </p>
                  <p>
                    We saw agencies spending hours on manual follow-ups, startups losing prospects because replies took too long, and growing businesses drowning in repetitive tasks that could easily be automated.
                  </p>
                  <p>
                    So we built RRK Automations to solve exactly that — <strong className="text-foreground">custom AI and WhatsApp automation systems deployed in 48 hours</strong>, designed to capture leads, qualify them automatically, and convert them into customers while you focus on growing your business.
                  </p>
                  <p>
                    Today, we work with startups, marketing agencies, coaching businesses, and e-commerce brands across India and internationally. Every project is founder-led, ensuring quality, speed, and direct accountability.
                  </p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img src="/team_photo.png" alt="RRK Team" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
          </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values shape how we work, build, and partner with every client.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 text-center hover:border-secondary/40 hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Automations Deployed" },
              { value: "48hrs", label: "Average Delivery" },
              { value: "15+", label: "Happy Clients" },
              { value: "6,000+", label: "Hours Saved for Clients" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-extrabold text-secondary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default About;
