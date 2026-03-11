// import { Button } from "../components/ui/button";
// import { Menu, X, Shield } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/AuthContext";

// const navLinks = [
//   { label: "Services", href: "#services" },
//   { label: "How It Works", href: "#how-it-works" },
//   { label: "Pricing", href: "#pricing" },
//   { label: "Why Us", href: "#why-us" },
//   { label: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, isAdmin } = useAuth();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
//       <div className="section-container">
//         <div className="flex items-center justify-between h-16">

//           <a href="#" className="flex items-center gap-2">
//             <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
//               <span className="text-secondary-foreground font-bold text-sm">R</span>
//             </div>
//             <span className="font-bold text-foreground text-lg">RRK Automations</span>
//           </a>

//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           <div className="hidden md:flex items-center gap-3">
//             {user && isAdmin && (
//               <Button variant="ghost" size="sm">
//                 <Link to="/admin" className="flex items-center">
//                   <Shield className="w-4 h-4 mr-1" />
//                   Admin
//                 </Link>
//               </Button>
//             )}

//             <Button variant="cta" size="sm">
//               <a href="#contact">Get Started</a>
//             </Button>
//           </div>

//           <button
//             className="md:hidden p-2 text-foreground"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.label}
//                 </a>
//               ))}

//               {user && isAdmin && (
//                 <Button variant="ghost" size="sm" className="w-full justify-start">
//                   <Link to="/admin" onClick={() => setIsOpen(false)}>
//                     <Shield className="w-4 h-4 mr-2" />
//                     Admin Dashboard
//                   </Link>
//                 </Button>
//               )}

//               <Button variant="cta" size="sm" className="w-full">
//                 <a href="#contact" onClick={() => setIsOpen(false)}>
//                   Get Started
//                 </a>
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Button } from "../components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, isAdmin } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          {/* <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shadow-elevated group-hover:scale-110 transition-transform">
              <span className="text-secondary-foreground font-bold text-sm">
                R
              </span>
            </div>
            <span className="font-bold text-foreground text-lg tracking-wide">
              RRK Automations
            </span>
          </a> */}

          <a href="/" className="flex items-center gap-3 group">

            <img
              src="/logorrk.png"
              alt="RRK Automations"
              className="w-13 h-10 object-contain group-hover:scale-110 transition-transform"
            />

            <span className="font-bold text-foreground text-lg tracking-wide">
              RRK Automations
            </span>

          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-all hover:text-foreground group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {user && isAdmin && (
              <Button variant="ghost" size="sm">
                <Link to="/admin" className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Admin
                </Link>
              </Button>
            )}

            <Button variant="cta" size="sm">
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}

                {user && isAdmin && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Link to="/admin" onClick={() => setIsOpen(false)}>
                      <Shield className="w-4 h-4 mr-2" />
                      Admin Dashboard
                    </Link>
                  </Button>
                )}

                <Button variant="cta" size="sm" className="w-full">
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;