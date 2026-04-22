"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";

const professions = [
  "Full Stack Engineer",
  "AI Agent Developer",
  "Gen AI Engineer",
  "Design Architect",
  "SAAS Specialist",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center md:pt-20 overflow-hidden hero-gradient">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-dim/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col items-center">
        {/* Main Headline with 3D Centerpiece */}
        <div className="relative flex flex-col items-center justify-center w-full mb-8">
          <h1 className="font-headline text-huge font-extrabold tracking-tighter text-on-surface text-center uppercase z-0 opacity-90">
            HI, I&apos;M JEET
          </h1>

          {/* 3D Avatar Centerpiece with floating animation */}
          <motion.div
            className="absolute left-1/2 top-53 -translate-x-1/2 -translate-y-1/3 w-64 md:w-[500px] aspect-square z-10 pointer-events-none"
            animate={{
              x: [0,  100,  0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/me (1).png"
              alt="Jeet - 3D Avatar"
              width={500}
              height={500}
              className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(163,166,255,0.3)]"
              preload
            />
          </motion.div>
        </div>

        <div className="relative z-20 flex flex-col items-center text-center mt-60 md:mt-66">
          <div className="flex items-center justify-center gap-2">
            <span className="font-headline text-[16pt] md:text-[40pt] lg:text-[4rem] font-extrabold tracking-tight text-on-surface">I&apos;M A</span>
            <FlipWords
              words={professions}
              className="font-headline text-[18pt] md:text-[40pt] lg:text-[4rem] font-extrabold tracking-tight text-primary"
            />
          </div>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant leading-relaxed mb-12">
            Engineering high-performance digital ecosystems with architectural
            precision and editorial elegance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary-container rounded-md font-bold text-lg hover:shadow-[0_0_30px_rgba(163,166,255,0.4)] transition-all active:scale-95">
              Let's Connect
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-outline-variant/20 rounded-md font-bold text-lg text-on-surface hover:bg-surface-container-high transition-all active:scale-95">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
