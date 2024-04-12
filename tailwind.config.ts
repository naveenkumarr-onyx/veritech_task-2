import { hostname } from "os";
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
      backgroundColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        customBlack: "var(--customblack)",
      },
      textColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        customBlack: "var(--black)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        robotomono: "var(--font-robotomono)",
        montserrat: "var(--font-montserrat)",
        mulish: "var(--font-mulish)",
        lato: "var(--font-lato)",
        roboto: "var(--font-roboto)",
      },
    },
  },
  plugins: [],
};
export default config;
