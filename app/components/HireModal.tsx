"use client";

import Image from "next/image";

export default function HireModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-surface-container-lowest/80 backdrop-blur-md">
      <div className="relative w-full max-w-5xl glass-panel border border-outline-variant/30 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(163,166,255,0.2)] flex flex-col md:flex-row animate-modal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-surface-container-highest/50 flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all active:scale-95"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Left Column: Image */}
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5WyFWZQvr1Fx-ToQBI7xqEbAPWewoyr3sfxArNbKDSARZSKezmR1I-rgxtrZBsq-oAT3CApokh9hIY_PBmdKrRk3xjQmzzogXlO4koKnNVohsGZkg-aCf9qvMhzdnKa5b6mGurfTwrXq8k4Fl6gqydT1vbrqHAxO5J6QFA2GLXJVLKJEflqjqJs0DnPUe_C-cSAr6XDCzO6NObNNcuinlw2ORtLBPgWXwWtjmSBAEr_5V7fQab5A60oePvQJyZR-1mvwDT66Jch8"
            alt="Digital Architecture"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-variant/40 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-variant/80 via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-8 left-8">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-label font-bold tracking-widest uppercase text-primary">
                Status: Open for Collaboration
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />

          <div className="mb-10">
            <h3 className="font-headline text-xs font-black tracking-[0.3em] uppercase text-primary mb-6">
              Limited Availability
            </h3>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-white mb-6">
              Elevate Your Digital{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dim">
                Architecture.
              </span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Transforming your abstract vision into high-performance, rigid
              code. I&apos;m currently accepting select high-impact projects for
              Q4 2024.
            </p>
          </div>

          <div className="space-y-6">
            <button
              onClick={() => {
                onClose();
                window.location.hash = "#contact";
              }}
              className="w-full indigo-gradient py-5 rounded-xl font-headline font-black text-on-primary-container text-lg tracking-tight hover:shadow-[0_0_40px_rgba(163,166,255,0.4)] transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              Get in Touch
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>

            <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
              <div className="flex -space-x-3">
                {["RE", "JS", "TS"].map((initials) => (
                  <div
                    key={initials}
                    className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-surface-dim overflow-hidden flex items-center justify-center text-[10px] font-bold"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-xs font-label text-on-surface-variant tracking-wider uppercase font-bold">
                35+ Brands Partnered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
