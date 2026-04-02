"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, decimals: 0, suffix: "+", label: "Projects Delivered" },
  { value: 4.6, decimals: 1, suffix: "+", label: "Rated" },
  { value: 100, decimals: 0, suffix: "%", label: "Customer Satisfaction" },
  { value: 3, decimals: 0, suffix: "+", label: "Years of Experience" },
];

function useCountUp(
  target: number,
  decimals: number,
  isInView: boolean,
  duration = 2000
) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, decimals, duration]);

  return count;
}

function StatItem({
  stat,
  isInView,
}: {
  stat: (typeof stats)[0];
  isInView: boolean;
}) {
  const count = useCountUp(stat.value, stat.decimals, isInView);

  return (
    <div className="space-y-2">
      <div className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface">
        {stat.decimals > 0 ? count.toFixed(stat.decimals) : count}
        <span className="text-primary">{stat.suffix}</span>
      </div>
      <div className="font-label text-xs md:text-sm font-bold tracking-widest uppercase text-on-surface-variant">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-surface border-y border-outline-variant/10"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
