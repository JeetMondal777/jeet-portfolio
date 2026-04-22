'use client';

import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { DiRedis } from "react-icons/di";
import { RiSupabaseFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
// import { SiMongodb } from "react-icons/si";
// import { SiOpenai } from "react-icons/si";
import {
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiSupabase,
  SiExpress,
  SiOpenai,
  SiShadcnui,
  SiFramer,
  // SiThreejs,
  SiVite,
  SiPrisma,
} from 'react-icons/si';

export default function TechMarquee() {
  return (
    <section className="py-16 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label font-bold tracking-[0.2em] uppercase mb-4">
            Technologies
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            Powered by Modern Tech
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base max-w-2xl mx-auto">
            Built with the world&apos;s best technologies for performance, scalability, and developer experience.
          </p>
        </div>

        <div className="relative w-full">
          <InfiniteSlider speed={60} gap={64}>
            {/* Frontend */}
            {/* <TechItem icon={<SiTypescript className="h-7 w-auto" />} label="TypeScript" /> */}
            {/* <TechItem icon={<IoLogoJavascript className="h-7 w-auto" />} label="JavaScript" /> */}
            {/* <TechItem icon={<RiReactjsFill className="h-7 w-auto" />} label="React" /> */}
            <TechItem icon={<RiNextjsFill className="h-7 w-auto" />} label="Next.js" />
            <TechItem icon={<SiVite className="h-7 w-auto" />} label="Vite" />
            <TechItem icon={<RiTailwindCssFill className="h-6 w-auto" />} label="Tailwind" />
            <TechItem icon={<SiShadcnui className="h-6 w-auto" />} label="shadcn/ui" />
            <TechItem icon={<SiFramer className="h-6 w-auto" />} label="Framer Motion" />
            {/* <TechItem icon={<SiThreejs className="h-6 w-auto" />} label="Three.js" /> */}
            {/* <TechItem icon={<FaHtml5 className="h-7 w-auto" />} label="HTML5" /> */}
            {/* <TechItem icon={<FaCss3Alt className="h-7 w-auto" />} label="CSS3" /> */}

            {/* Backend */}
            {/* <TechItem icon={<FaNodeJs className="h-8 w-auto" />} label="Node.js" /> */}
            <TechItem icon={<SiExpress className="h-6 w-auto" />} label="Express" />
            {/* <TechItem icon={<FaPython className="h-7 w-auto" />} label="Python" /> */}

            {/* Database */}
            <TechItem icon={<SiPostgresql className="h-7 w-auto" />} label="PostgreSQL" />
            <TechItem icon={<SiMongodb className="h-7 w-auto" />} label="MongoDB" />
            <TechItem icon={<SiRedis className="h-7 w-auto" />} label="Redis" />
            <TechItem icon={<SiSupabase className="h-6 w-auto" />} label="Supabase" />
            <TechItem icon={<SiPrisma className="h-6 w-auto" />} label="Prisma" />

            {/* AI */}
            <TechItem icon={<SiOpenai className="h-6 w-auto" />} label="OpenAI" />

            {/* DevOps & Cloud */}
            <TechItem icon={<FaAws className="h-8 w-auto" />} label="" />
            <TechItem icon={<IoLogoVercel className="h-7 w-auto" />} label="Vercel" />
            {/* <TechItem icon={<FaDocker className="h-7 w-auto" />} label="Docker" /> */}
            {/* <TechItem icon={<FaGitAlt className="h-7 w-auto" />} label="Git" /> */}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}

function TechItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
      {icon}
      <span className="text-on-surface text-sm font-semibold whitespace-nowrap">{label}</span>
    </div>
  );
}
