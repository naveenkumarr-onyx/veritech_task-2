import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        customBlack: "var(--black)",
      },
      fontFamily: {
        customFont1: ["var(--font-peugeot-regular)", "sans-serif"],
        customFont2: ["var(--font-peugeot-bold)", "serif"],
        customFont3: ["var(--font-peugeot-italic)", "monospace"],
        customFont4: ["var(--font-peugeot-light)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
