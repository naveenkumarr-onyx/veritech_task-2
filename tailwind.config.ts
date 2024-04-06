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
        PeugeotBold: "var(--font-PeugeotBold)",
        PeugeotLight: "var(--font-PeugeotLight)",
        Peugeotltalic: "var(--font-Peugeotltalic)",
        PeugeotRegular: "var(--font-PeugeotRegular)",
      },
    },
  },
  plugins: [],
};
export default config;
