import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import CTABanner from "../components/CTABanner";
import blogContent from "../data/blogContent";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogContent[slug];

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      <SEOHead
        title={post.title}
        description={post.seoDescription}
        path={`/blog/${slug}`}
        keywords={post.seoKeywords}
      />

      {/* Full-width Hero Image */}
      <section className="relative pt-20 overflow-hidden">
        <div className="w-full h-[50vh] min-h-[360px] max-h-[540px] relative">
          <img
            src={post.heroImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="section-container relative z-10 -mt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="bg-secondary/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-secondary" />
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="space-y-16">
            {post.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
                  {section.heading}
                </h2>
                <div className="text-muted-foreground text-base sm:text-lg leading-relaxed space-y-4">
                  {section.body.split("\n\n").map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>")
                          .replace(/•/g, "<br/>•"),
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="pb-20 bg-background">
        <div className="section-container">
          <div>
            <div className="flex items-center justify-between pt-8 border-t border-border">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                All Articles
              </Link>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Tag className="w-3 h-3" />
                {post.category}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default BlogPost;
