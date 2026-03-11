/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E0E13",
        foreground: "#F4F4F5",

        muted: "#16161D",
        "muted-foreground": "#9CA3AF",

        secondary: "#7C3AED",
        accent: "#22D3EE",

        border: "#262631",
        card: "#13131A",

        // Optional layered surfaces
        surface: "#181822",
        "surface-2": "#1C1C28",
      },

      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.35)",
        elevated: "0 12px 45px rgba(124, 58, 237, 0.25)",
        glow: "0 0 30px rgba(124, 58, 237, 0.35)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};