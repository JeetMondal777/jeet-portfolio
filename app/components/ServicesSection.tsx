"use client";

import { Globe, Code, Cloud, Bot, Palette } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { PricingCard } from "@/components/ui/price";
import { Rocket, Gem } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Web & App Engineering",
    date: "Core Service",
    content:
      "Full-stack web and mobile application development with modern frameworks. From responsive SPAs to complex enterprise platforms — built for performance, scalability, and exceptional user experience.",
    category: "Engineering",
    icon: Globe,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Custom Software Dev",
    date: "Core Service",
    content:
      "Bespoke software solutions tailored to your unique business requirements. Architected with clean code principles, comprehensive testing, and production-grade reliability from day one.",
    category: "Development",
    icon: Code,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "SaaS Building",
    date: "Core Service",
    content:
      "End-to-end SaaS product development — from MVP to scale. Multi-tenant architecture, subscription billing, analytics dashboards, and the infrastructure to support rapid growth.",
    category: "Product",
    icon: Cloud,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "AI Agent Engineering",
    date: "Core Service",
    content:
      "Design and deploy intelligent AI agents powered by large language models. Custom tool integrations, RAG pipelines, autonomous workflows, and production-ready agent architectures.",
    category: "AI",
    icon: Bot,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 5,
    title: "MVP Engineering",
    date: "Core Service",
    content:
      "I help founders and businesses build Minimum Viable Products (MVPs) that validate ideas quickly and cost-effectively. From initial concept to a production-ready prototype, I handle the full development lifecycle so you can focus on your business.",
    category: "Design",
    icon: Palette,
    relatedIds: [1, 2, 3, 4],
    status: "in-progress" as const,
    energy: 100,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="services">
      {/* Section Header */}
      <div className="text-center mb-4 max-w-7xl mx-auto px-8">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label font-bold tracking-[0.2em] uppercase mb-4">
          Services & Pricing
        </div>
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          What I <span className="text-primary italic">Build</span>
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto text-base leading-relaxed">
          Click on the orbital nodes to explore each service in detail.
          Connected nodes reveal how these capabilities complement each other.
        </p>
      </div>

      {/* Two-column layout: Orbital Timeline + Pricing */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-8">
        {/* Orbital Timeline */}
        <div className="relative ml-[-10%] flex-1 max-w-3xl w-full">
          <RadialOrbitalTimeline timelineData={servicesData} />
        </div>

        {/* Pricing Cards */}
        <div className="flex gap-6 w-full lg:w-auto lg:min-w-[460px] ">
          {/* Budget Plan */}
          <PricingCard
            planName="Budget"
            description="For startups & MVPs"
            price={5}
            billingCycle="/hour"
            features={[
              "SaaS or Web App MVP",
              "Responsive mobile-first design",
              "Full SEO optimization",
              // "2 rounds of revisions",
              "1 month post-launch support",
            ]}
            buttonText="Get Started"
            icon={<Rocket className="w-6 h-6" />}
            className="bg-surface-container-low w-80 border-outline-variant/20"
          />

          {/* Premium Plan */}
          <PricingCard
            variant="popular"
            planName="Premium"
            description="For scaling businesses"
            price={12}
            billingCycle="/hour"
            features={[
              "Web or Application Optimization",
              "Scalable Architecture Design",
              "AI agent integration & automation design",
              "Advanced analytics dashboard",
              "Priority support & unlimited revisions",
              "3 months post-launch support",
            ]}
            buttonText="Let's Talk"
            icon={<Gem className="w-6 h-6" />}
            className="bg-surface-container-low border-primary/30"
          />
        </div>
      </div>
    </section>
  );
}
