import { Linkedin, Twitter, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/rrk-automations", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden pt-20">
      {/* Premium Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start pb-16">
          
          {/* Brand Column (Spans 5 cols on lg) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center gap-3 mb-6 group inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/logorrk.png"
                  alt="RRK Automations"
                  width="48"
                  height="40"
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-10 object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-bold text-xl tracking-wider text-foreground">
                RRK AUTOMATIONS
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
              AI-driven automation systems that convert leads into revenue within 48 hours. Built for growth-focused businesses ready to scale.
            </p>

            {/* Newsletter/Contact Mini Lead Capture */}
            <div className="w-full max-w-sm">
              <p className="text-sm font-semibold text-foreground mb-3">Ready to scale?</p>
              <Link
                to="/contact"
                className="group flex items-center justify-between w-full bg-muted/50 hover:bg-muted border border-border rounded-lg p-3 transition-colors"
              >
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Book your free audit
                </span>
                <div className="w-8 h-8 rounded-md bg-secondary text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-glow">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>

          {/* Links Columns (Spans 4 cols on lg) */}
          <div className="md:col-span-6 lg:col-span-4 flex justify-center md:justify-end lg:justify-center gap-16 sm:gap-24 lg:gap-16">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-foreground tracking-wide uppercase text-xs">Solutions</p>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-semibold text-foreground tracking-wide uppercase text-xs">Company</p>
              <div className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Social Column (Spans 3 cols on lg) */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col items-center md:items-end">
            <p className="font-semibold text-foreground tracking-wide uppercase text-xs mb-6 text-center md:text-right w-full">
              Connect With Us
            </p>
            <div className="flex gap-3 flex-wrap justify-center md:justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-glow transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} RRK Automations. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;