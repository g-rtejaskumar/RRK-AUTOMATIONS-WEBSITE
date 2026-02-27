/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F14",
        foreground: "#F8F8F8",
        muted: "#1A1A22",
        "muted-foreground": "#A1A1AA",
        secondary: "#7C3AED",
        accent: "#22D3EE",
        border: "#2A2A35",
        card: "#14141B",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.3)",
        elevated: "0 10px 40px rgba(124, 58, 237, 0.2)",
      },
    },
  },
  plugins: [],
};