import { forwardRef } from "react";

const Footer = forwardRef<HTMLElement>(function Footer(_, ref) {
  return (
    <footer
      ref={ref}
      className="bg-[#000000] w-full py-12 border-t border-[#40485d]/20"
    >
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-lg font-bold text-[#dee5ff]">JEET.DEV</div>
          <div className="font-body text-sm tracking-wide text-[#dee5ff]/50">
            &copy; 2024 Jeet Mondal. Digital Architect.
          </div>
        </div>
        <div className="flex items-center gap-8">
          {["GitHub", "LinkedIn", "Twitter", "Email"].map((link) => (
            <a
              key={link}
              className="font-body text-sm tracking-wide text-[#dee5ff]/50 hover:text-[#a3a6ff] transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
});

export default Footer;
