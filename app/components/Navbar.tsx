"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "work", label: "Work" },
  { href: "about", label: "About" },
  { href: "execution-process", label: "Process" },
  { href: "services", label: "Services" },
];

function smoothScrollTo(id: string) {
  // For "about", pick the visible element (mobile vs desktop)
  const els = Array.from(document.querySelectorAll(`[id="${id}"]`));
  const target = els.find((el) => (el as HTMLElement).offsetParent !== null) ?? els[0];
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar({
  onHireClick,
}: {
  onHireClick: () => void;
}) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const allIds = [...new Set(navLinks.map((l) => l.href))];

    const observers: IntersectionObserver[] = [];

    allIds.forEach((id) => {
      // Observe ALL elements with that id (handles mobile/desktop duplicates)
      const els = document.querySelectorAll(`[id="${id}"]`);
      els.forEach((el) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
        );
        observer.observe(el);
        observers.push(observer);
      });
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-primary/20 blur-[60px] rounded-full pointer-events-none z-40" />
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 glass-panel border border-outline-variant/20 rounded-full px-2 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-2 max-w-fit">
        <div className="flex items-center">
          <div className="flex items-center gap-8 pl-6 pr-2">
            {/* Logo — smooth scroll to top */}
            <button
              className="text-xl font-black tracking-tighter text-on-surface flex items-center gap-1 group cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="text-primary">J</span>
              <span className="opacity-50 text-[12px] tracking-[0.2em] font-label mt-1">
                eet
              </span>
            </button>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.href}
                    onClick={() => smoothScrollTo(link.href)}
                    className={`relative font-headline tracking-tighter font-extrabold text-sm transition-colors cursor-pointer ${
                      isActive
                        ? "text-on-surface"
                        : "text-on-surface/50 hover:text-on-surface"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#a3a6ff]" />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => smoothScrollTo("contact")}
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
