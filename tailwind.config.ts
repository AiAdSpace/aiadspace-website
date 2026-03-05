import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#3B82F6",
          violet: "#8B5CF6",
          dark: "#7C3AED",
        },
        surface: {
          DEFAULT: "#0A0A0F",
          card: "#111118",
          border: "#1E1E2E",
          muted: "#16161F",
        },
        text: {
          primary: "#F8F8FF",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
        "brand-gradient-r": "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(139,92,246,0.05) 100%)",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.15), transparent)",
        "section-glow": "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,92,246,0.08), transparent)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;