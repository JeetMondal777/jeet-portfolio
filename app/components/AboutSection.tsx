import Image from "next/image";
import me from "../../public/me_art.png"
import ExperienceAccordion from "./ExperienceAccordion";

export default function AboutSection() {
  return (
    <section className="py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-primary/30" />
          <div className="relative z-10 aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={me}
              alt="Jeet Mondal Profile"
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 px-8 py-6 bg-surface-container-highest glass-effect border border-outline-variant/20 rounded-xl">
            <div className="text-4xl font-headline font-black text-primary mb-1">
              3+
            </div>
            <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold">
              Years of Engineering
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label font-bold tracking-[0.2em] uppercase">
            The Architect
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Blending precision logic with atmospheric design.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            I am a full-stack engineer driven by the philosophy of &ldquo;The
            Ethereal Architect.&rdquo; I believe software should not only be
            functional and scalable but should possess a soul—a visual harmony
            that guides users through complex data with ease.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            From architecting high-traffic microservices to refining the motion
            of a single UI component, I focus on the intersection of human
            psychology and technical excellence.
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

          <ExperienceAccordion />
        </div>
      </div>
    </section>
  );
}