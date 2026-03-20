import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Users, BookOpen } from "lucide-react";
import CTABanner from "../components/CTABanner";
import { Button } from "../components/ui/button";

const ABCB = () => {
  return (
    <Layout>
      <SEOHead
        title="ABCB: Any Body Can Build"
        description="Have an innovative idea but don't know where to start? RRK Automations provides the guidance, team, and technology to bring your vision to life."
        path="/abcb"
        keywords="ABCB, Any Body Can Build, innovation guidance, startup team, idea to product, build with RRK"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="section-container relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
                <Zap className="w-3 h-3" />
                Introducing A New Initiative
              </div>
              
              <div className="mb-6">
                <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-none mb-2 italic">
                  ABCB
                </h1>
                <p className="text-2xl sm:text-3xl font-bold text-secondary uppercase tracking-tight">
                  Any Body Can Build
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
                Unleash Your Talent: <br />
                <span className="text-muted-foreground">Bringing innovative ideas to life!</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl">
                Got a groundbreaking idea but stuck on the technical details? <br />
                We provide the <strong>whole guidance and the expert team</strong> needed to build, launch, and scale your vision.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="xl">
                  <a href="#join-team" className="flex items-center gap-2">
                    Pitch Your Idea
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl">
                  <a href="#how-it-works">Learn More</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl border border-white/10 bg-card/40 backdrop-blur-xl p-4 shadow-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="ABCB Team Collaboration" 
                  className="rounded-xl w-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex gap-4">
                     {["Innovate", "Build", "Learn", "Grow"].map((tag) => (
                       <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>
              </div>

              {/* Decorative Orbs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-[60px] animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/30 rounded-full blur-[60px] animate-pulse delay-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="how-it-works" className="py-24 bg-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">No Tech Barriers. <span className="text-secondary">Just Innovation.</span></h2>
            <p className="text-muted-foreground text-lg">
              The biggest ideas often die because of technical complexity. ABCB removes those hurdles by providing a professional development team dedicated to your vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Expert Guidance",
                description: "Refine your idea with senior product strategists. We help you define the MVP and the roadmap."
              },
              {
                icon: Users,
                title: "A Ready-to-Build Team",
                description: "Get immediate access to developers, designers, and automation experts who treat your project as their own."
              },
              {
                icon: Zap,
                title: "Rapid Execution",
                description: "We don't just plan. We build at lightspeed, moving from concept to working prototype in weeks, not months."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="join-team" className="py-24 relative overflow-hidden">
        <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[2.5rem] bg-gradient-to-br from-card to-card/50 border border-white/10 shadow-3xl text-center relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <BookOpen className="w-32 h-32" />
             </div>

             <h2 className="text-4xl md:text-5xl font-black mb-8 italic tracking-tighter">
               READY TO <span className="text-secondary underline decoration-4 underline-offset-8 not-italic">BUILD?</span>
             </h2>
             <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto">
               Don&apos;t let your idea sit in a drawer. Pitch it to the RRK team today and let&apos;s see if it&apos;s the next big thing.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Button variant="cta" size="xl" className="w-full sm:w-auto">
                 <a href="https://wa.me/918341374436" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                   Message Us on WhatsApp
                   <ArrowRight className="w-5 h-5" />
                 </a>
               </Button>
               <Button variant="outline" size="xl" className="w-full sm:w-auto">
                 <a href="mailto:rrkautomations@gmail.com">Send Email</a>
               </Button>
             </div>
             
             <div className="mt-12 flex flex-col items-center gap-4 text-sm text-muted-foreground">
               <p className="font-bold text-foreground">Contact directly:</p>
               <div className="flex flex-wrap justify-center gap-6">
                 <span>📞 9381574436</span>
                 <span>📞 8341374436</span>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default ABCB;
