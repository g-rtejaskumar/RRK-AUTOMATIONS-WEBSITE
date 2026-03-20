import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import CTABanner from "../components/CTABanner";

const posts = [
  {
    id: "abcb-announcement",
    title: "Introducing ABCB: Any Body Can Build",
    excerpt: "RRK Automations launches a new initiative to help innovators bring their ideas to life with expert guidance and a dedicated development team.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    date: "March 20, 2026",
    author: "RRK Team",
    readTime: "3 min read",
    link: "/abcb",
    category: "Initiative"
  },
  {
    id: "whatsapp-marketing-2026",
    title: "The Future of WhatsApp Marketing in 2026",
    excerpt: "How AI-driven WhatsApp chatbots are changing the way businesses interact with customers and drive conversions.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    date: "March 15, 2026",
    author: "Automation Expert",
    readTime: "5 min read",
    link: "#",
    category: "Guides"
  },
  {
    id: "ai-lead-qualification",
    title: "How to Automate Lead Qualification with AI",
    excerpt: "Learn how to filter high-intent prospects automatically and save your sales team hundreds of manual hours.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    date: "March 10, 2026",
    author: "Product Team",
    readTime: "4 min read",
    link: "#",
    category: "Case Study"
  }
];

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Blog & Resources"
        description="Stay updated with the latest trends in AI automation, WhatsApp marketing, and the ABCB initiative from RRK Automations."
        path="/blog"
      />

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
              Blog & Resources
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Insights on <span className="text-secondary">Automation</span> & Innovation
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our latest articles, guides, and announcements to help you scale your business with technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-card/50 rounded-2xl border border-border overflow-hidden hover:border-secondary/40 hover:shadow-glow transition-all duration-300"
              >
                {/* Image */}
                <Link to={post.link} className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-secondary transition-colors">
                    <Link to={post.link}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                         <User className="w-4 h-4 text-secondary" />
                       </div>
                       <span className="text-xs font-medium">{post.author}</span>
                    </div>
                    <Link to={post.link} className="text-secondary hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Blog;
