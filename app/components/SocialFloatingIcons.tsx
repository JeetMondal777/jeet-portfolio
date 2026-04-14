"use client";

import Image from "next/image";
import { socials } from "@/data/socials";

const socialLinks = {
  left: [
    {
      src: "/company/LinkedIn.png",
      href: socials.linkedin.href,
      label: socials.linkedin.platform,
      bg: "bg-[#0077B5]",
      shadow: "shadow-blue-600/50",
      ring: "ring-blue-500/30",
      iconSize: 34,
      imgHoverScale: 1.04,
    },
    {
      src: "/company/Github.png",
      href: socials.github.href,
      label: socials.github.platform,
      bg: "bg-black",
      shadow: "shadow-black/50",
      ring: "ring-black/30",
      iconSize: 28,
      imgHoverScale: 1.1,
    },
  ],
  right: [
    {
      src: "/company/X.png",
      href: socials.x.href,
      label: socials.x.platform,
      bg: "bg-black",
      shadow: "shadow-black/50",
      ring: "ring-black/30",
      iconSize: 34,
      imgHoverScale: 1.1,
    },
    {
      src: "/company/Whatsapp.png",
      href: socials.whatsapp.href,
      label: socials.whatsapp.platform,
      bg: "bg-[#25D366]",
      shadow: "shadow-green-500/50",
      ring: "ring-green-400/30",
      iconSize: 28,
      imgHoverScale: 1.1,
    },
  ],
};

function SocialIcon({
  src,
  href,
  label,
  bg,
  shadow,
  ring,
  iconSize,
  imgHoverScale,
}: {
  src: string;
  href: string;
  label: string;
  bg: string;
  shadow: string;
  ring: string;
  iconSize: number;
  imgHoverScale: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        group relative flex items-center justify-center
        w-12 h-12 rounded-2xl
        ${bg} ${ring}
        ring-2 shadow-lg ${shadow}
        transition-all duration-300 ease-out
        hover:scale-125 hover:rotate-12 hover:rounded-3xl
        hover:shadow-2xl
      `}
      style={{ willChange: "transform" }}
    >
      {/* dark overlay on hover */}
      <span
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
        style={{ background: "rgba(0,0,0,0.55)" }}
      />
      <Image
        src={src}
        alt={label}
        width={iconSize}
        height={iconSize}
        className="object-contain drop-shadow-md transition-transform duration-300"
        style={{ ['--hover-scale' as string]: imgHoverScale }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = `scale(${imgHoverScale})`)}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </a>
  );
}

export default function SocialFloatingIcons() {
  return (
    <>
      {/* Bottom Left — X & GitHub */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {socialLinks.left.map((item) => (
          <SocialIcon key={item.label} {...item} />
        ))}
      </div>

      {/* Bottom Right — LinkedIn & WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {socialLinks.right.map((item) => (
          <SocialIcon key={item.label} {...item} />
        ))}
      </div>
    </>
  );
}
