import {
  Atom,
  Wind,
  Terminal,
  Database,
  Cloud,
  FileCode2,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const techs: { icon: LucideIcon; name: string; hoverColor: string }[] = [
  { icon: Atom, name: "React.js", hoverColor: "hover:text-[#61DAFB]" },
  { icon: Wind, name: "TailwindCSS", hoverColor: "hover:text-[#06B6D4]" },
  { icon: Terminal, name: "Node.js", hoverColor: "hover:text-[#339933]" },
  { icon: Database, name: "Redis", hoverColor: "hover:text-[#DC382D]" },
  { icon: Cloud, name: "Express.js", hoverColor: "hover:text-[#ffffff]" },
  { icon: FileCode2, name: "TypeScript", hoverColor: "hover:text-[#3178C6]" },
  { icon: Layers, name: "Next.js", hoverColor: "hover:text-[#ffffff]" },
];

function TechSet() {
  return (
    <div className="flex items-center gap-24 px-12">
      {techs.map((tech) => {
        const Icon = tech.icon;
        return (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-1 font-headline font-bold text-sm transition-all duration-500 cursor-pointer group"
          >
            <Icon className={`text-on-surface-variant/40 group-hover:grayscale-0 grayscale ${tech.hoverColor} transition-all duration-500`} size={60} strokeWidth={1.5} />
            <span className="text-white">{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="py-12 overflow-hidden bg-surface">
      <div className="flex whitespace-nowrap animate-scroll">
        <TechSet />
        <TechSet />
      </div>
    </section>
  );
}
