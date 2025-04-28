/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Original colors from provided config
        background: "#1A1F2C",
        foreground: "#E5E7EB",
        primary: "#00FFFF",
        secondary: "#9D00FF",
        accent: "#403E43",
        border: "#2D3748",
        // Additional colors for HeroSection and portfolio
        blue: {
          900: '#1e3a8a',
          500: '#3b82f6',
          400: '#60a5fa',
          300: '#93c5fd',
          200: '#bfdbfe',
        },
        purple: {
          900: '#4c1d95',
          500: '#8b5cf6',
          400: '#a78bfa',
        },
        teal: {
          900: '#0f766e',
          400: '#2dd4bf',
        },
        gray: {
          950: '#0f172a',
          300: '#d1d5db',
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"], // Added for HeroSection
      },
      animation: {
        // Original animations
        "gradient-x": "gradient-x 15s ease infinite",
        "fade-in": "fade-in 1s ease-out",
        "float": "float 10s ease-in-out infinite",
        // Additional animations for HeroSection and portfolio
        "gradient-tech": "gradient-tech 20s ease infinite",
        "node-pulse": "node-pulse 4s ease-in-out infinite",
        "grid-pulse": "grid-pulse 10s ease-in-out infinite",
        "glitch": "glitch 5s steps(5) infinite",
        "typewriter": "typewriter-glow 2s ease-in-out infinite",
        "cursor-blink": "cursor-blink 0.8s step-end infinite",
        "text-glow": "text-glow 3s ease-in-out infinite",
        "spin-globe": "spin-globe 20s linear infinite",
      },
      keyframes: {
        // Original keyframes
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        // Additional keyframes for HeroSection and portfolio
        "gradient-tech": {
          "0%": { "background-position": "0% 0%" },
          "50%": { "background-position": "200% 200%" },
          "100%": { "background-position": "0% 0%" },
        },
        "node-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.3)", opacity: "1" },
        },
        "grid-pulse": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.3" },
        },
        "glitch": {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(2px, -2px)" },
          "60%": { transform: "translate(-1px, 1px)" },
          "80%": { transform: "translate(1px, -1px)" },
          "100%": { transform: "translate(0)" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "typewriter-glow": {
          "0%, 100%": {
            "text-shadow":
              "0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3)",
          },
          "50%": {
            "text-shadow":
              "0 0 10px rgba(59, 130, 246, 0.7), 0 0 15px rgba(59, 130, 246, 0.5)",
          },
        },
        "spin-globe": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        "text-glow": {
          "0%, 100%": {
            "text-shadow":
              "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)",
          },
          "50%": {
            "text-shadow":
              "0 0 20px rgba(59, 130, 246, 0.9), 0 0 30px rgba(59, 130, 246, 0.7)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};