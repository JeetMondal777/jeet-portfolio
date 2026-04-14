"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import RotatingEarth from "@/components/ui/wireframe-dotted-globe";
import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";

const projectTypes = [
  "Web App",
  "Design System",
  "Consulting",
  "UI/UX Audit",
  "eCommerce",
  "Other",
];

export default function ContactSection() {
  const [selectedType, setSelectedType] = useState("Design System");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handlePopulateMessage = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setMessage(customEvent.detail);
      }
    };
    window.addEventListener("populateContactMessage", handlePopulateMessage);
    return () =>
      window.removeEventListener(
        "populateContactMessage",
        handlePopulateMessage,
      );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let projectText = "";
    if (selectedType !== "Other") {
      projectText = `my project is kind of "${selectedType}"`;
    } else {
      projectText = `I want to discuss about my project`;
    }

    const whatsappMessage = `Hii, This side "${name}"
${projectText}

messege:
${message}

Thanks
${name}
${email}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    // Replace YOUR_PHONE_NUMBER_HERE with your actual WhatsApp number with country code (e.g., 919876543210 for India)
    window.open(`https://wa.me/917866865971?text=${encodedMessage}`, "_blank");
  };

  return (
    <section
      className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-outline-variant/10"
      id="contact"
    >
      {/* Hero Header */}
      <div className="mb-20">
        <div className="relative">
          <h2 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-6 relative z-10">
            Let's <span className="text-primary italic">Connect.</span>
          </h2>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-0" />
        </div>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
          Transforming abstract ideas into rigid architectural code. Let&apos;s
          engineer your next digital breakthrough.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-12">
          <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="font-headline text-3xl font-bold text-on-background mb-4 relative z-10">
              Start a Conversation
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-8 relative z-10">
              I specialize in high-performance web architecture, bespoke UI/UX
              systems, and scalable product engineering. If you have a project
              that demands technical precision and editorial elegance, I&apos;m
              ready to listen.
            </p>
            <div className="space-y-6 relative z-10">
              <Link
                href="mailto:hello@itsjeet.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary tracking-widest uppercase">
                    Email Me
                  </div>
                  <span className="text-lg font-medium group-hover:text-primary transition-colors">
                    hello@itsjeet.pro
                  </span>
                </div>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary tracking-widest uppercase">
                    Based In
                  </div>
                  <div className="text-lg font-medium">Remote / Global</div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="space-y-6">
            <h4 className="font-headline text-xl font-bold tracking-tight px-2">
              Ecosystem
            </h4>
            <div className="flex flex-wrap gap-4">
              {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                <a
                  key={social}
                  className="px-6 py-3 bg-surface-container-high hover:bg-surface-container-highest rounded-full transition-all border border-outline-variant/20 flex items-center gap-2 group"
                  href="#"
                >
                  <span className="text-on-surface-variant group-hover:text-primary transition-colors">
                    {social}
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    north_east
                  </span>
                </a>
              ))}
            </div>
          </div> */}

          {/* Rotating Earth Globe */}
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative bg-surface-container-low">
            <div className="absolute inset-0 flex items-center justify-center">
              <RotatingEarth width={400} height={300} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="inline-flex items-center gap-2 bg-surface-container-highest/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                AVAILABLE FOR HIRE
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-12 rounded-xl border border-outline-variant/10 shadow-2xl relative">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-label text-sm font-medium text-on-surface-variant tracking-wide">
                    FULL NAME
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary/50 focus:ring-0 rounded-md py-4 px-5 text-on-surface placeholder:text-on-surface-variant/30 transition-all"
                    placeholder="Elon Musk"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-label text-sm font-medium text-on-surface-variant tracking-wide">
                    EMAIL ADDRESS
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary/50 focus:ring-0 rounded-md py-4 px-5 text-on-surface placeholder:text-on-surface-variant/30 transition-all"
                    placeholder="elon@x.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-label text-sm font-medium text-on-surface-variant tracking-wide">
                  PROJECT TYPE
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`py-3 px-4 rounded-md border text-sm font-medium transition-all ${
                        selectedType === type
                          ? "border-primary/50 bg-surface-container-high text-primary font-bold"
                          : "border-outline-variant/20 bg-surface-container-low hover:border-primary/50 hover:bg-surface-container-high"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-label text-sm font-medium text-on-surface-variant tracking-wide">
                  YOUR MESSAGE
                </label>
                <textarea
                  className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary/50 focus:ring-0 rounded-md py-4 px-5 text-on-surface placeholder:text-on-surface-variant/30 transition-all resize-none"
                  placeholder="Describe the synthesis of your vision..."
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  className="indigo-gradient w-full py-5 rounded-md font-headline font-extrabold text-on-primary-container text-xl tracking-tight scale-100 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
                  type="submit"
                >
                  Send Message
                  <span className="material-symbols-outlined">send</span>
                </button>
                <p className="text-center text-xs text-on-surface-variant/40 mt-6 font-medium tracking-widest uppercase">
                  Response time typically &lt; 24 hours
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <Link
                    href="https://github.com/JeetMondal777"
                    target="_blank"
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <BsGithub size={24} />
                  </Link>
                  <Link
                    href="#"
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <GrLinkedinOption size={24} />
                  </Link>
                  <Link
                    href="#"
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <RiTwitterXLine size={24} />
                  </Link>
                  <Link
                    href="mailto:cs2349diatm@gmail.com"
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <BiLogoGmail size={24} />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
