import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand — olive/sage nest greens
        olive: {
          50: "#F3F4EC",
          100: "#E6E9D6",
          200: "#CBD3B0",
          300: "#AEB988",
          400: "#909D66",
          500: "#74814B",
          600: "#5B6B3A", // primary brand olive (badge)
          700: "#4A5330",
          800: "#3B4326",
          900: "#2E3319",
          950: "#1C2010",
        },
        // Warm creams / sand paper
        cream: {
          50: "#FBF8F1",
          100: "#F6F1E6",
          200: "#EFE7D6",
          300: "#E5D9C1",
          400: "#D8C7A6",
        },
        sand: {
          200: "#EAE0CD",
          300: "#DBCDB0",
        },
        espresso: {
          400: "#7A6450",
          600: "#544234",
          800: "#3A2C21",
        },
        clay: "#B98C5A",
        ink: "#2A2A22",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(46, 51, 25, 0.35)",
        card: "0 24px 70px -36px rgba(46, 51, 25, 0.45)",
        lift: "0 40px 90px -40px rgba(46, 51, 25, 0.55)",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
