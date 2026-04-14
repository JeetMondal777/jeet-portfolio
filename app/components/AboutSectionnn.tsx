"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import me from "../../public/me_art.png";
import ExperienceNode from "./ExperienceNode";
import { FaLaptopCode, FaServer, FaAws, FaReact } from "react-icons/fa";
import { experiences } from "../../data/Experience";

export default function AboutSectionnn() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stage 1: Wait for user to read (0-15%), then fade out Intro text and move Image to center (15% -> 25%)
  const introOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);
  const introY = useTransform(scrollYProgress, [0.15, 0.25], [0, -40]);
  const introDisplay = useTransform(scrollYProgress, (pos) =>
    pos >= 0.26 ? "none" : "grid",
  );
  const badgeDisplay = useTransform(scrollYProgress, (pos) =>
    pos >= 0.26 ? "none" : "block",
  );

  // Image movement calculation
  // Base location is center of screen using absolute positioning.
  // We offset it to the layout position initially, then animate offset to 0.

  // On desktop, the grid left column centers around -25vw from the center.
  // On mobile, the grid top row centers around -20vh from the center.
  // So we use CSS clamped defaults which are perfectly overridden by framer-motion once hydrated.
  const imageX = useTransform(scrollYProgress, [0.15, 0.25], ["-20vw", "0vw"]);
  const imageYMobile = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    ["30vh", "0vh"],
  );

  // Actually, to make it responsive natively in Framer Motion without custom hooks hook,
  // we can use a window match media check in useEffect if we want,
  // but a simpler approach is using Tailwind's layout and just hiding/showing the respective transforms.

  return (
    <section
      ref={containerRef}
      className="h-[400vh] relative bg-surface-container-low"
      id="about"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Grid Pattern (optional, just for style) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* ----------------- The Moving Profile Image ----------------- */}
        <motion.div
          className="absolute z-30 flex items-center justify-center w-full max-w-7xl mx-auto px-8"
          style={{ opacity: 1 }} // Ensures it never fades out
        >
          {/* 
            Desktop Offset Wrapper 
            Moves from -20vw left to center.
          */}
          <motion.div
            className="hidden lg:flex relative aspect-square w-[400px] rounded-2xl shadow-2xl"
            style={{
              x: imageX,
              scale: useTransform(scrollYProgress, [0, 0.15], [0.9, 1]),
            }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-primary/20">
              <Image
                src={me}
                alt="Jeet Mondal Profile"
                fill
                className="w-full h-full object-cover"
              />
            </div>

            {/* 6+ Years Badge - Fades out as we scroll to center */}
            <motion.div
              // style={{ opacity: introOpacity, display: badgeDisplay }}
              style={{ display: badgeDisplay }}
              className="absolute -bottom-6 -right-6 px-8 py-6 bg-surface-container-highest glass-effect border border-outline-variant/20 rounded-xl"
            >
              <div className="text-4xl font-headline font-black text-primary mb-1">
                3+
              </div>
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold">
                Years of Engineering
              </div>
            </motion.div>
          </motion.div>

          {/* 
            Mobile Offset Wrapper 
            Moves from top down to center.
          */}
          <motion.div
            className="flex lg:hidden relative aspect-square w-64 rounded-2xl shadow-2xl"
            style={{
              y: imageYMobile,
              scale: useTransform(scrollYProgress, [0, 0.15], [0.8, 1]),
            }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-primary/20">
              <Image
                src={me}
                alt="Jeet Mondal Profile"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ----------------- The Initial About Text Layout ----------------- */}
        <motion.div
          className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center absolute z-20 pointer-events-none"
          style={{ opacity: introOpacity, y: introY, display: introDisplay }}
        >
          {/* Empty div reserves space for the image in the grid so layout looks exactly like old About section */}
          <div className="relative aspect-square w-full opacity-0 pointer-events-none order-2 lg:order-1" />

          {/* The Text Content */}
          <div className="space-y-8 pointer-events-auto origin-left order-1 lg:order-2">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label font-bold tracking-[0.2em] uppercase">
              The Architect
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-on-surface">
              Blending precision logic with atmospheric design.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              I am a full-stack engineer driven by the philosophy of &ldquo;The
              Ethereal Architect.&rdquo; I believe software should not only be
              functional and scalable but should possess a soul—a visual harmony
              that guides users through complex data with ease.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              From architecting high-traffic microservices to refining the
              motion of a single UI component, I focus on the intersection of
              human psychology and technical excellence.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-8">
              <div>
                <div className="text-on-surface font-headline font-bold text-xl mb-2">
                  Frontend
                </div>
                <div className="text-on-surface-variant text-sm">
                  React, Next.js, Framer Motion, Tailwind CSS, Three.js
                </div>
              </div>
              <div>
                <div className="text-on-surface font-headline font-bold text-xl mb-2">
                  Backend
                </div>
                <div className="text-on-surface-variant text-sm">
                  Node.js, PostgreSQL, Redis, GraphQL, Docker
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ----------------- The Experience Nodes ----------------- */}
        {mounted && (
          <>
            {experiences.slice(0, 4).map((exp, index) => {
              // Map index to the sequence configuration
              const layoutConfigs = [
                { side: "left" as const, verticalAlign: "top" as const, range: [0.3, 0.45] as [number, number] },
                { side: "right" as const, verticalAlign: "top" as const, range: [0.45, 0.6] as [number, number] },
                { side: "left" as const, verticalAlign: "bottom" as const, range: [0.6, 0.75] as [number, number] },
                { side: "right" as const, verticalAlign: "bottom" as const, range: [0.75, 0.9] as [number, number] },
              ];

              const config = layoutConfigs[index];
              if (!config) return null;

              return (
                <ExperienceNode
                  key={exp.id}
                  side={config.side}
                  verticalAlign={config.verticalAlign}
                  progress={scrollYProgress}
                  range={config.range}
                  company={exp.company}
                  role={exp.role}
                  tech={exp.tech}
                  logo={<Image src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-xl" />}
                />
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
