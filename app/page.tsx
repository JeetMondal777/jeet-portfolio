"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import TechMarquee from "./components/TechMarquee";
import ProjectsSection from "./components/ProjectsSection";
import ExecutionProcess from "./components/ExecutionProcess";
import AboutSection from "./components/AboutSection";
import MethodologySection from "./components/MethodologySection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HireModal from "./components/HireModal";
import LeftToRightTopArrow from "@/components/ui/svg/LeftToRightTopArrow";
import AboutSectionnn from "./components/AboutSectionnn";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const hasShownRef = useRef(false);
  const footerRef = useRef<HTMLElement>(null);

  const triggerModal = useCallback(() => {
    if (hasShownRef.current) return;
    hasShownRef.current = true;
    setShowModal(true);
  }, []);

  // Show modal after 10s of inactivity
  useEffect(() => {
    let inactivityTimer: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      if (!hasShownRef.current) {
        inactivityTimer = setTimeout(triggerModal, 10000);
      }
    };

    const events = ["mousemove", "mousedown", "keydown", "scroll", "touchstart"];
    events.forEach((e) => window.addEventListener(e, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, [triggerModal]);

  // Show modal when user scrolls to footer (bottom of page)
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) triggerModal();
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerModal]);

  return (
    <>
      <Navbar onHireClick={() => setShowModal(true)} />
      {/* {showModal && <HireModal onClose={() => setShowModal(false)} />} */}
      <main>
        <HeroSection />
        <StatsSection />
        <TechMarquee />
        <ProjectsSection />
        <ExecutionProcess />
        <div className="block md:hidden">
          <AboutSection />
        </div>
        <div className="hidden md:block">
          <AboutSectionnn />
        </div>
        <ServicesSection />
        <ContactSection />
        {/* <LeftToRightTopArrow /> */}
      </main>
      <Footer ref={footerRef} />
    </>
  );
}
