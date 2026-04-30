import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { motion } from "framer-motion";
import { Zap, Heart, Target, Users, Award, Star, ShieldCheck, Quote } from "lucide-react";
import CTABanner from "../components/CTABanner";

const teamMembers = [
  { name: "S. Mahesh Kumar", role: "Founder", initials: "MK" },
  { name: "S. Sai Teja", role: "Managing Director", initials: "ST" },
  { name: "Tejas Kumar", role: "Chief Technology Officer", initials: "TK" },
  { name: "Karthikeya", role: "Chief Financial Officer", initials: "K" },
  { name: "Uday Kumar", role: "Chief Operating Officer", initials: "UK" },
  { name: "Devanshu", role: "Chief Marketing Officer", initials: "D" },
];
const teamImages = {
  MK: "/Mahesh.jpeg",
  ST: "/sai teja.jpeg",
  TK: "/tejas.jpeg",
  K: "/karthik.jpeg",
  UK: "/uday.jpg",
  D: "/deva.jpg"
};

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="Our Story - RRK Automations"
        description="The story of RRK Automations: A global journey of belief, resilience, and building expert AI automation solutions for a worldwide market."
        path="/about"
        keywords="S. Mahesh Kumar, RRK Automations Founder, Global AI Automation Agency, Worldwide Chatbot Experts, Business Automation Consultancy, AI Workflow Experts, Custom AI Solutions Worldwide, Automation Agency History, Remote AI Development, Global SaaS Automation, Autonomous Agent Experts, WhatsApp API Specialists"
      />

      {/* Structured Data: AboutPage + BreadcrumbList + Person */}
      <script type="application/ld+json">
      {JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About RRK Automations",
          "url": "https://rrkautomations.com/about",
          "description": "The global story of RRK Automations, founded by S. Mahesh Kumar.",
          "mainEntity": {
            "@type": "ProfessionalService",
            "name": "RRK Automations",
            "founder": {
              "@type": "Person",
              "name": "S. Mahesh Kumar",
              "jobTitle": "Founder"
            },
            "areaServed": "Worldwide"
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
              "name": "About",
              "item": "https://rrkautomations.com/about"
            }
          ]
        }
      ])}
      </script>

      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
        
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">The Foundation of RRK</p>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
              Relentless <span className="text-accent underline decoration-secondary/30">Ambition</span>. <br />
              Unbreakable Vision.
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              This is not just a story of a company. This is the story of belief, resilience, and building something from nothing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder's Journey */}
      <section className="py-24 bg-muted/20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10"
            >
              <img src="/mahesh_kumar.png" alt="S. Mahesh Kumar - Founder" className="w-full h-[800px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0,y:10 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Target className="text-secondary" /> The Journey of S. Mahesh Kumar
              </h2>
              <div className="text-muted-foreground text-lg space-y-4 leading-relaxed">
                <p>
                  Founded by <strong className="text-white">S. Mahesh Kumar</strong>, the journey of RRK AUTOMATIONS began not in a corporate office, but in moments of uncertainty and determination. While many chose traditional paths, Mahesh chose to build something of his own—relying not on a formal degree, but on skills, curiosity, and an unbreakable mindset.
                </p>
                <p>
                  There were nights that stretched into mornings. Countless hours were spent learning, experimenting, failing, and trying again. Every setback became a lesson. Every failure, a stepping stone.
                </p>
                <p>
                  Starting from scratch was not easy. There were financial pressures, societal expectations, and the constant question: <em className="italic text-accent">“Will this work?”</em> But what kept him moving forward was belief—belief in his vision and belief in himself.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Pillars of Support */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Built on a <span className="text-secondary italic font-serif">Pillar of Support</span></h2>
            <p className="text-muted-foreground text-lg">
              Behind every extraordinary venture are the people who believe in it before the world does.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Family */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-10 rounded-3xl bg-card border border-border/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Heart className="w-20 h-20 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Family: The Unwavering Light</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Behind this journey stood a strong pillar of support—his parents, <strong className="text-white">Mr. and Mrs. Ramakrishna</strong>. Their unwavering faith and sacrifices gave Mahesh the strength to continue, even in the toughest times.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Alongside them was his younger brother, <strong className="text-white">S. Sai Teja</strong>, who brought constant motivation, support, and companionship—standing beside Mahesh through every high and low.
              </p>
            </motion.div>

            {/* Friends */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-10 rounded-3xl bg-card border border-border/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Users className="w-20 h-20 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Friends: The Believers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through the most challenging phases, Mahesh was supported by a close circle of friends: 
                <strong className="text-white"> Tejas Kumar, Karthikeya, Uday Kumar, and Devanshu.</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                They stood with him during tough times—offering encouragement, ideas, and strength when it was needed the most. Their presence played a vital role in keeping the vision alive during moments of doubt.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Success & Mission */}
      <section className="py-24 bg-muted/10 relative">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <Quote className="w-12 h-12 text-accent/30 mx-auto mb-8" />
            <h2 className="text-3xl font-bold mb-8 italic">
              "You don’t need the perfect background to build something extraordinary. You just need the courage to begin—and the strength to never stop."
            </h2>
            <div className="h-px w-20 bg-secondary mx-auto mb-10" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, RRK AUTOMATIONS stands as proof that success is not defined by degrees, but by dedication, skill, and the courage to start. What started as an idea has grown into a company delivering powerful, innovative solutions—especially in <span className="text-white font-bold tracking-wide">warehouse management systems</span> and automation technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Team Placeholders */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Meet the Team</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">The faces behind the automation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-full pb-[120%] rounded-2xl overflow-hidden mb-4 group">
                  <img
                    src={teamImages[member.initials]}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover absolute inset-0"
                    style={{ objectPosition: getFacePosition(member.initials) }}
                  />
                </div>
                <h4 className="font-bold text-sm mb-1">{member.name}</h4>
                <p className="text-[10px] text-accent uppercase tracking-wider font-bold">{member.role}</p>
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

const getFacePosition = (initials) => {
  const positions = {
    ST: 'center 40%',
    TK: 'center 1%',
    K: 'center 30%',
    D: 'center 45%',
    UK: 'center 50%',
    MK: 'center 20%'
  };
  return positions[initials] || 'center 30%';
};
