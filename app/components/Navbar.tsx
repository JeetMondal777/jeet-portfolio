"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({
  onHireClick,
}: {
  onHireClick: () => void;
}) {
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-primary/20 blur-[60px] rounded-full pointer-events-none z-40" />
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 glass-panel border border-outline-variant/20 rounded-full px-2 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-2 max-w-fit">
        <div className="flex items-center">
          <div className="flex items-center gap-8 pl-6 pr-2">
            <a
              className="text-xl font-black tracking-tighter text-on-surface flex items-center gap-1 group"
              href="/"
            >
              <span className="text-primary">J</span>
              <span className="opacity-50 text-[10px] tracking-[0.2em] font-label mt-1">
                .DEV
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    className={`relative font-headline tracking-tighter font-extrabold text-sm transition-colors ${
                      isActive
                        ? "text-on-surface"
                        : "text-on-surface/50 hover:text-on-surface"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#a3a6ff]" />
                    )}
                  </a>
                );
              })}
            </div>
            <button
              onClick={onHireClick}
              className="indigo-gradient text-on-primary-container px-6 py-2 rounded-full font-headline font-black text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(163,166,255,0.3)] transition-all active:scale-95"
            >
              Hire me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
