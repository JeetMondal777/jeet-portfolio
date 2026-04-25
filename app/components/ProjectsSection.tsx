import Image from "next/image";
import { Bot, ShoppingCart, BarChart3, Smartphone } from 'lucide-react';
import jewels from "../../public/projecs/jewels.png"
import eduhub from "../../public/projecs/eduhub.png"
import myLibrary from "../../public/projecs/myLibrary.png"

const projects = [
  {
    icon: Bot,
    title: 'EduHub : AI YouTube Learning Assistant',
    description: 'Full-stack AI application with OpenAI integration for personalized learning experiences',
    tags: ['React', "Tailwind", 'Node.js', 'OpenAI'],
    colors: 'from-purple-600 to-pink-600',
    image: eduhub,
    link : "https://drive.google.com/file/d/1SconYeP3JaktLVG2Gs0utaTUzSpRz8me/view?usp=drivesdk",
    github :"https://github.com/JeetMondal777/smart-mentor",
    offset: false
  },
  {
    icon: ShoppingCart,
    title: 'Jewels : Premium E-Commerce Jewellery Platform',
    description: 'Scalable and premium looking E-Commerce solution with admin dashboard',
    tags: ['Next.js', 'MongoDB', 'Framer-Motion'],
    colors: 'from-blue-600 to-purple-600',
    image: jewels,
    link: "https://jewels.xanatomy.in",
    github: "https://github.com/JeetMondal777/jwellery-web",
    offset: true
  },
  // {
  //   icon: BarChart3,
  //   title: 'My Library : Premium wooden themed book discussion platform',
  //   description: 'A platform for users to discover, read, and share stories and books with a focus on community engagement.',
  //   tags: ['React', 'Express', 'Redis', "Socket.io", "Cloudinary"],
  //   colors: 'from-green-600 to-blue-600',
  //   image: myLibrary,
  //   link: "https://book-discussion-frontend.vercel.app",
  //   github:"https://github.com/JeetMondal777/Book_Discussion",
  //   offset: false
  // }
];

export default function ProjectsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8" id="work">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Best Works
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
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8 shadow-2xl transition-all duration-500 group-hover:shadow-primary/20">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-on-primary-container px-6 py-2 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Case Study
                </a>
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-on-surface font-bold text-sm border-b border-outline-variant/30 pb-1 hover:border-primary hover:text-primary transition-all"
            >
              View Project{" "}
              <span className="material-symbols-outlined text-lg">
                open_in_new
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
