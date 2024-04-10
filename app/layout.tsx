import type { Metadata } from "next";
import { montserrat, inter, robotomono, mulish, lato, roboto } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Revealing",
  description: "Developed by Nav.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} ${robotomono.variable} ${mulish.variable} ${lato.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
