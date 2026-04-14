"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { experiences } from "../../data/Experience";
import Image from "next/image";

export default function ExperienceAccordion() {
  return (
    <div className="w-full mt-8 md:mt-12 bg-surface-container-highest rounded-3xl p-6 border border-outline-variant/30 shadow-xl">
      <h3 className="text-2xl font-headline font-bold text-on-surface mb-6">
        Work Experience
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {experiences.map((exp) => (
          <AccordionItem
            key={exp.id}
            value={exp.id}
            className="border-outline-variant/30"
          >
            <AccordionTrigger className="text-on-surface hover:text-primary hover:no-underline text-left py-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-center p-1 shadow-sm glass-effect relative z-10 overflow-hidden">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div>
                  <span className="block font-headline text-lg font-bold">
                    {exp.company}
                  </span>
                  <span className="block text-sm text-on-surface-variant font-medium mt-0.5">
                    {exp.role}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-2 pt-1 pb-2">
                <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                  <strong className="text-primary text-xs uppercase tracking-wider block mb-1">
                    Tech Stack
                  </strong>
                  {exp.tech}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
