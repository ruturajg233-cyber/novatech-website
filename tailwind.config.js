/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050814",
        surface: "#0B1124",
        "surface-light": "#131C38",
        border: "#1E294B",
        primary: {
          DEFAULT: "#6366F1",
          foreground: "#FFFFFF",
          glow: "#818CF8",
        },
        electric: {
          DEFAULT: "#00D4FF",
          glow: "#38BDF8",
          dark: "#0284C7",
        },
        purple: {
          neon: "#A855F7",
          deep: "#7C3AED",
          glow: "#C084FC",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-slow": "glow 6s ease-in-out infinite alternate",
        "marquee-vertical": "marquee-vertical 30s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.4", transform: "scale(0.98)" },
          "100%": { opacity: "0.8", transform: "scale(1.02)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.15), rgba(0, 212, 255, 0.08) 40%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(19, 28, 56, 0.7) 0%, rgba(11, 17, 36, 0.8) 100%)",
      },
      boxShadow: {
        "glow-cyan": "0 0 25px -5px rgba(0, 212, 255, 0.3)",
        "glow-purple": "0 0 25px -5px rgba(168, 85, 247, 0.3)",
        "glow-dual": "0 0 35px -5px rgba(99, 102, 241, 0.25), 0 0 15px -3px rgba(0, 212, 255, 0.2)",
      },
    },
  },
  plugins: [],
}
