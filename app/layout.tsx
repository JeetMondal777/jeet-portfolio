import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import SocialFloatingIcons from "./components/SocialFloatingIcons";
import MobileDock from "@/components/ui/mobile-dock";
import LenisProvider from "./components/LenisProvider";
import me from "@/public/me.png";

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
  title: "JEET Mondal | Full Stack Software Engineer",
  description:
    "Engineering high-performance digital ecosystems with architectural precision and editorial elegance.",
  icons: {
    icon: me.src,
    shortcut: me.src,
    apple: me.src,
  },
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
          <div className="hidden md:block">
            <SocialFloatingIcons />
          </div>
          <MobileDock />
        </LenisProvider>
      </body>
    </html>
  );
}
