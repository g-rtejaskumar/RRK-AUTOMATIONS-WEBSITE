import React from "react";

export function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all focus:outline-none";

  const variants = {
    default: "bg-primary text-white hover:opacity-90",
    ghost: "bg-transparent hover:bg-muted",
    cta: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    "hero-outline":
      "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",

    whatsapp: "bg-green-500 text-white hover:bg-green-600",
    outline: "border border-border bg-transparent hover:bg-muted",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
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
    <button className={finalClass} {...props}>
      {children}
    </button>
  );
}