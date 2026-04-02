"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

// Execution Process Steps — customized for portfolio
const SERVICES = [
  {
    id: "01",
    title: "Requirement Clarification",
    description:
      "Understanding the core objectives, user needs, and project scope to build a solid foundation.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Designing the System WorkFlow",
    description:
      "Architecting the technical blueprint, data structures, and user journeys.",
    image:
      "https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Developing the Solution",
    description:
      "Engineering the high-performance codebase using modern tech stacks like React, Node, and Redis.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
  },
  // {
  //   id: "04",
  //   title: "Deploy",
  //   description:
  //     "Implementing seamless deployment pipelines for robust and scalable production environments.",
  //   image:
  //     "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
  // },
  {
    id: "04",
    title: "Test & Optimize",
    description:
      "Rigorous performance tuning, security auditing, and UX refinement.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "05",
    title: "Deploy & Deliver",
    description:
      "Handing over a polished, production-ready digital ecosystem.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
];

const AUTO_PLAY_DURATION = 3000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label font-bold tracking-[0.2em] uppercase mb-4">
            The Architectural Workflow
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Our Execution Process
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image Gallery — always first, right after heading */}
          <div className="lg:col-span-7 lg:sticky lg:top-32 flex flex-col justify-center lg:order-2">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="mt-2 relative aspect-4/5 md:aspect-4/3 lg:aspect-[4/3] rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-surface-container-low border border-outline-variant/20">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={handleNext}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={SERVICES[activeIndex].image}
                      alt={SERVICES[activeIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 m-0! p-0! block"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface/80 backdrop-blur-md border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-all active:scale-90"
                    aria-label="Previous"
                  >
                    <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface/80 backdrop-blur-md border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-all active:scale-90"
                    aria-label="Next"
                  >
                    <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:order-1 pt-4 lg:min-h-[600px]">
            {/* <div className="space-y-1 mb-12">
              <h3 className="tracking-tighter text-balance text-3xl font-medium md:text-4xl lg:text-5xl text-on-surface font-headline">
                How I can help you
              </h3>
              <span className="text-[10px] font-medium text-on-surface-variant uppercase tracking-[0.3em] block ml-0.5 font-label">
                (SERVICES)
              </span>
            </div> */}

            <div className="flex flex-col space-y-0">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-outline-variant/30 first:border-0",
                      isActive
                        ? "text-on-surface"
                        : "text-on-surface-variant/40 hover:text-on-surface"
                    )}
                  >
                    {/* Progress bar on the left */}
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-outline-variant/20">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-primary origin-top"
                          initial={{ height: "0%" }}
                          animate={
                            isPaused ? { height: "0%" } : { height: "100%" }
                          }
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span className="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50 font-label">
                      /{service.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className={cn(
                          "text-lg md:text-2xl lg:text-3xl font-normal tracking-tight transition-colors duration-500 font-headline",
                          isActive ? "text-on-surface" : ""
                        )}
                      >
                        {service.title}
                      </span>

                      <div
                        className="grid transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        style={{
                          gridTemplateRows: isActive ? "1fr" : "0fr",
                          opacity: isActive ? 1 : 0,
                        }}
                      >
                        <div className="overflow-hidden">
                          <p className="text-on-surface-variant text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2 font-body">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
