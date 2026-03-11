// import React from "react";

// export function Button({
//   children,
//   variant = "default",
//   size = "md",
//   className = "",
//   ...props
// }) {
//   const base =
//     "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all focus:outline-none";

//   const variants = {
//     default: "bg-primary text-white hover:opacity-90",
//     ghost: "bg-transparent hover:bg-muted",
//     cta: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
//     "hero-outline":
//       "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",

//     whatsapp: "bg-green-500 text-white hover:bg-green-600",
//     outline: "border border-border bg-transparent hover:bg-muted",
//   };

//   const sizes = {
//     sm: "px-3 py-1.5 text-sm",
//     md: "px-4 py-2 text-sm",
//     lg: "px-6 py-3 text-base",
//     xl: "px-8 py-4 text-base",
//   };

//   const finalClass = `
//     ${base}
//     ${variants[variant] || variants.default}
//     ${sizes[size] || sizes.md}
//     ${className}
//   `;

//   return (
//     <button className={finalClass} {...props}>
//       {children}
//     </button>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

export function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden border";

  const variants = {
    default:
      "bg-secondary text-white border-secondary hover:shadow-glow",

    cta:
      "bg-gradient-to-r from-secondary  text-white border-transparent hover:shadow-glow",

    outline:
      "bg-transparent border-border text-foreground hover:border-secondary hover:text-secondary hover:shadow-glow",

    ghost:
      "bg-transparent border-transparent hover:bg-muted/60",

    whatsapp:
      "bg-[#1F8E4C] text-white border-[#1F8E4C] hover:bg-[#22A157] hover:shadow-[0_0_25px_rgba(34,161,87,0.4)]",

    "hero-outline":
      "border-white/30 text-white bg-transparent hover:bg-white/10 backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-base",
  };

  const finalClass = `
    ${base}
    ${variants[variant] || variants.default}
    ${sizes[size] || sizes.md}
    ${className}
  `;

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={finalClass}
      {...props}
    >
      {children}
    </motion.button>
  );
}