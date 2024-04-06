import {
  Inter,
  Montserrat,
  Roboto_Mono,
  Mulish,
  Roboto,
  Lato,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const robotomono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-robotomono",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-mulish",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-roboto",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-lato",
});
