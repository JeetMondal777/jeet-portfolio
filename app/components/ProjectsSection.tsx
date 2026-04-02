import Image from "next/image";

const projects = [
  {
    title: "CyberGuard Intelligence",
    description:
      "Real-time threat detection and visualization engine for enterprise-level network monitoring with microsecond latency.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgqgIRvvGayWd9Vrrlpis2RjPy0oYt1C-KzkIm_w2rQdWBfc_JrsKGeoWs4XMcwkhryPhE3yUgSQXVaAuvzfwNxc-2cW02cjECGaBDDVwwBiolO3NOjXPBYn39f6_AEt8_xWrkPLjiSJblRj71eIgDFD6J9f7KQn1L55er3w4UWZ6--tufd-jS5ENULb3e4jcQIDimRLJPQjPLvAQCLIzj6PAMBnq9Uv973nhjTl1W3LqRnEhfiyWLGq1T1JvEwn5uynYWimBGlM0",
    tags: ["Next.js", "WebSockets", "Redis"],
    offset: false,
  },
  {
    title: "LuxeCommerce Ecosystem",
    description:
      "A headless commerce solution for luxury fashion brands featuring AR fitting rooms and global inventory synchronization.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBla_MiQ7iqcyB9dXR-iG59FcxFnaLRMmxRALBlRl0kaHM8JZWy7KQ7ibTi5WHHOIP1_9fL01jvv9UghuETRwuswLrQJFHsFGtkvkNnimwVRO0yAtXt-gpIfJGfF0opWd3Irh0TcOhkxwiYvrDHdrsRYFkPaSf8gg2SVw1fVJNHMMOpx-Pevz2Gz1m49dVUR92e7UFNVu3xEfBK9xnuC-_Mqv-K7tTzNxC9QEwcSwsV0twqmPVBaPgCgiNlmmkerMUcoSmbxBcUX6w",
    tags: ["React Native", "Node.js", "Stripe"],
    offset: true,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8" id="work">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Selected Works
          </h2>
          <p className="text-on-surface-variant max-w-md">
            A collection of architectural digital products built with
            performance and aesthetics in mind.
          </p>
        </div>
        <div className="h-px flex-grow bg-outline-variant/20 mx-8 hidden md:block" />
        <a
          className="text-primary font-bold flex items-center gap-2 group"
          href="#"
        >
          View all projects{" "}
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`group relative ${project.offset ? "mt-12 md:mt-24" : ""}`}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8 shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <button className="bg-primary text-on-primary-container px-6 py-2 rounded-md font-bold text-sm">
                  Case Study
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label font-bold tracking-widest uppercase text-primary border border-primary/20 flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-primary" /> {tag}
                </span>
              ))}
            </div>

            <h3 className="font-headline text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              {project.description}
            </p>
            <button className="flex items-center gap-2 text-on-surface font-bold text-sm border-b border-outline-variant/30 pb-1 hover:border-primary transition-all">
              View Project{" "}
              <span className="material-symbols-outlined text-lg">
                open_in_new
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
