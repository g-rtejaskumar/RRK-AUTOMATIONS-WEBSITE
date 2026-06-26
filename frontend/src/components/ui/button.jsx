import React from "react";
import { motion } from "framer-motion";

export function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  asChild = false,
  ...props
}) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden border";

  const variants = {
    default:
      "bg-secondary text-white border-secondary hover:shadow-glow",

    cta:
      "bg-gradient-to-r from-secondary to-secondary/90 text-white border-transparent hover:shadow-glow",

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
  `.trim();

  // If asChild, render the child directly with combined classes
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${finalClass} ${children.props.className || ""}`.trim(),
    });
  }

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