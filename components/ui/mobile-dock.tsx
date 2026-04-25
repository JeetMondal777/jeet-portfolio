"use client";

import { socials } from "@/data/socials";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    src: "/company/LinkedIn.png",
    href: socials.linkedin.href,
    label: socials.linkedin.platform,
    bg: "bg-[#0077B5]",
  },
  {
    src: "/company/Github.png",
    href: socials.github.href,
    label: socials.github.platform,
    bg: "bg-black",
  },
  {
    src: "/company/X.png",
    href: socials.x.href,
    label: socials.x.platform,
    bg: "bg-black",
  },
  {
    src: "/company/Whatsapp.png",
    href: socials.whatsapp.href,
    label: socials.whatsapp.platform,
    bg: "bg-[#25D366]",
  },
];

function smoothScrollTo(id: string) {
  const els = Array.from(document.querySelectorAll(`[id="${id}"]`));
  const target =
    els.find((el) => (el as HTMLElement).offsetParent !== null) ?? els[0];
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function SocialDockIcon({
  src,
  href,
  label,
  bg,
}: {
  src: string;
  href: string;
  label: string;
  bg: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className={`
        flex items-center justify-center
        w-10 h-10 rounded-xl
        ${bg}
        shadow-lg
        transition-all duration-200
      `}
    >
      <Image
        src={src}
        alt={label}
        width={22}
        height={22}
        className="object-contain"
      />
    </motion.a>
  );
}

export default function MobileDock() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {!footerVisible && (
        <motion.div
          key="mobile-dock"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-sm px-4"
        >
          {/* Container with extra padding for shadow/glow */}
          <div className="relative group">
            {/* Animated Glow behind the dock */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-purple-600/20 blur-[30px] rounded-full pointer-events-none"
            />

            {/* Main Dock Body */}
            <div className="relative flex items-center justify-between gap-4 px-6 py-3 glass-panel border border-purple-500/20 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl backdrop-saturate-150">
              {/* Subtle inner reflection/shimmer */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />

              {/* Left side - 2 social icons */}
              <div className="flex items-center gap-3">
                <SocialDockIcon {...socialLinks[0]} />
                <SocialDockIcon {...socialLinks[1]} />
              </div>

              {/* Center - Deal image button with floating animation */}
              <motion.button
                onClick={() => smoothScrollTo("contact")}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex items-center justify-center z-10"
                aria-label="Hire me"
              >
                {/* Outer ring for the deal icon */}
                <div className="absolute inset-0 bg-purple-600 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/deal.png"
                  alt="Hire me"
                  width={56}
                  height={56}
                  className="object-contain filter invert brightness-[1.5] drop-shadow-[0_0_12px_rgba(168,85,247,0.8)] opacity-80"
                />
              </motion.button>

              {/* Right side - 2 social icons */}
              <div className="flex items-center gap-3">
                <SocialDockIcon {...socialLinks[2]} />
                <SocialDockIcon {...socialLinks[3]} />
              </div>
            </div>

            {/* Bottom ambient glow */}
            <div className="absolute -bottom-2 lg:-bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-purple-500/30 blur-2xl rounded-full pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
