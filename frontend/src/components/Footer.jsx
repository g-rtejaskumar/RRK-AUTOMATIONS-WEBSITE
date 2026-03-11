// import { Linkedin } from "lucide-react";

// const footerLinks = [
//   { label: "Services", href: "#services" },
//   { label: "Pricing", href: "#pricing" },
//   { label: "Contact", href: "#contact" },
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-primary-foreground py-12">
//       <div className="section-container">
//         <div className="grid md:grid-cols-3 gap-8 items-center">
          
//           {/* Logo & Description */}
//           <div>
//             <a href="#" className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
//                 <span className="text-secondary-foreground font-bold text-sm">
//                   R
//                 </span>
//               </div>
//               <span className="font-bold text-lg">RRK Automations</span>
//             </a>
//             <p className="text-primary-foreground/70 text-sm">
//               AI & WhatsApp automations that turn leads into revenue in 48 hours.
//             </p>
//           </div>

//           {/* Links */}
//           <div className="flex flex-wrap gap-6 justify-center">
//             {footerLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* Social */}
//           <div className="flex flex-col items-end gap-4">
//             <a
//               href="https://linkedin.com/company/rrk-automations"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="text-primary-foreground/50 text-sm">
//             © {new Date().getFullYear()} RRK Automations. All rights reserved.
//           </p>

//           <div className="flex gap-6">
//             <a
//               href="#"
//               className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#"
//               className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors"
//             >
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">

      {/* Subtle Grid Background */}
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
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shadow-elevated group-hover:scale-105 transition-transform">
                <span className="text-secondary-foreground font-bold text-sm">
                  R
                </span>
              </div>
              <span className="font-bold text-lg tracking-wide">
                RRK Automations
              </span>
            </a>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              AI-driven automation systems that convert leads into revenue
              within 48 hours. Built for growth-focused businesses.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 justify-start md:justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm text-muted-foreground transition-all hover:text-foreground group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex md:justify-end">
            <a
              href="https://linkedin.com/company/rrk-automations"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center hover:bg-secondary/20 hover:shadow-lg hover:shadow-secondary/30 transition-all"
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
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;