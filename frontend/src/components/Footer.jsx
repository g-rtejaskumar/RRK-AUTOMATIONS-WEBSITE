import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">

      {/* Grid Background */}
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

      <div className="section-container relative z-10 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/logorrk.png"
                alt="RRK Automations"
                className="w-10 h-8 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="font-bold text-lg tracking-wide">
                RRK Automations
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              AI-driven automation systems that convert leads into revenue
              within 48 hours. Built for growth-focused businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center">
            <p className="text-sm font-semibold mb-4 text-foreground">Quick Links</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="relative text-sm text-muted-foreground transition-all hover:text-foreground group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-sm font-semibold text-foreground">Follow Us</p>
            <a
              href="https://linkedin.com/company/rrk-automations"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center hover:bg-secondary/20 hover:shadow-lg hover:shadow-secondary/30 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-secondary" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} RRK Automations. All rights reserved.
          </p>

          <div className="flex gap-8">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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