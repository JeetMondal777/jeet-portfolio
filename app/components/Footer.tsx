"use client";

import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/data/socials";
import myImg from "@/public/me_art.png";
import upiImg from "@/public/payment/upi.png";
import paypalImg from "@/public/payment/paypal.png";
import razorpayImg from "@/public/payment/razorpay.png";

const paymentMethods = [
  { src: upiImg,      alt: "UPI",      height: 20 },
  { src: paypalImg,   alt: "PayPal",   height: 22 },
  { src: razorpayImg, alt: "Razorpay", height: 20 },
];

const navLinks = [
  { href: "work", label: "Work" },
  { href: "about", label: "About" },
  { href: "execution-process", label: "Process" },
  { href: "services", label: "Services" },
  { href: "contact", label: "Contact" },
];

function smoothScrollTo(id: string) {
  const els = Array.from(document.querySelectorAll(`[id="${id}"]`));
  const target =
    els.find((el) => (el as HTMLElement).offsetParent !== null) ?? els[0];
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const Footer = forwardRef<HTMLElement>(function Footer(_, ref) {
  return (
    <footer
      ref={ref}
      className="bg-[#000000] w-full pt-16 relative overflow-hidden flex flex-col justify-between border-t border-white/5"
    >
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col md:flex-row justify-between relative z-10 gap-16 md:gap-8 pb-0">

        {/* Left Side: Art Image */}
        <div className="flex flex-col shrink-0 gap-2">
          <div className="flex items-start justify-start">
            <Image
              src={myImg}
              alt="Jeet Mondal"
              width={120}
              height={120}
              className="h-24 w-auto object-contain rounded-xl"
            />
          </div>
          <p className="text-[#737373] text-sm mt-2 font-normal">
            &copy; 2026 ItsJeet. All rights reserved.
          </p>
          {/* Payment method icons */}
          <div className="flex items-center gap-3 mt-3">
            {paymentMethods.map((pm) => (
              <Image
                key={pm.alt}
                src={pm.src}
                alt={pm.alt}
                width={0}
                height={0}
                style={{ height: pm.height, width: "auto" }}
                className="object-contain payment-icon"
              />
            ))}
          </div>
        </div>

        {/* Right Side: Links Grid */}
        <div className="grid grid-cols-2 gap-12 md:gap-16 w-full md:w-auto">
          {/* Column 1: Pages */}
          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-sm text-white">Pages</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => smoothScrollTo(link.href)}
                  className="text-sm text-[#A3A3A3] hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 2: Socials */}
          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-sm text-white">Socials</h4>
            <nav className="flex flex-col gap-3">
              {Object.values(socials).map((social) => (
                <Link
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A3A3A3] hover:text-white transition-colors duration-200"
                >
                  {social.platform}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Giant Background Word */}
      <div className="relative flex justify-center overflow-hidden w-full pointer-events-none select-none mt-4">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#000000] to-transparent z-10 pointer-events-none" />
        <span className="text-[25vw] font-black text-[#111111] leading-[0.75] tracking-tighter translate-y-[15%]">
          ItsJeet
        </span>
      </div>
    </footer>
  );
});

export default Footer;
