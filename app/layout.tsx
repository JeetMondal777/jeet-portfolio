import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import SocialFloatingIcons from "./components/SocialFloatingIcons";
import LenisProvider from "./components/LenisProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JEET.DEV | Digital Architect",
  description:
    "Engineering high-performance digital ecosystems with architectural precision and editorial elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisProvider>
          {children}
          <SocialFloatingIcons />
        </LenisProvider>
      </body>
    </html>
  );
}
