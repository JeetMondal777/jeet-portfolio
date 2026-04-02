const methodologies = [
  {
    number: "01",
    icon: "architecture",
    title: "Discovery & Architectural Planning",
    description:
      "Mapping technical debt, defining scaling requirements, and establishing the visual DNA of the product.",
  },
  {
    number: "02",
    icon: "code_blocks",
    title: "Rigid Engineering & Rapid Prototyping",
    description:
      "Building type-safe backends and performant frontends with an iterative loop that prioritizes user feedback.",
  },
  {
    number: "03",
    icon: "auto_awesome",
    title: "Polished Deployment & Iteration",
    description:
      "Seamlessly deploying to production with automated CI/CD and continuous performance optimization.",
  },
];

export default function MethodologySection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8" id="process">
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label font-bold tracking-[0.2em] uppercase mb-4">
          Methodology
        </div>
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
          The Synthesis Framework
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {methodologies.map((m) => (
          <div
            key={m.number}
            className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 relative group overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 text-8xl font-black text-primary/5 group-hover:text-primary/10 transition-colors">
              {m.number}
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                {m.icon}
              </span>
              <h3 className="text-xl font-headline font-bold mb-4">
                {m.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {m.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
