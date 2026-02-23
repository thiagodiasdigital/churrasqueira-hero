"use client";

interface HeroOverlayLogoProps {
  opacity: number;
}

export function HeroOverlayLogo({ opacity }: HeroOverlayLogoProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
      style={{ opacity }}
      aria-hidden={opacity === 0}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mundial.svg"
        alt="Mundial Churrasqueiras"
        className="h-[70vh] w-auto max-w-[90vw] object-contain"
        style={{
          filter: "drop-shadow(0 2px 20px rgba(0, 0, 0, 0.6))",
        }}
      />
    </div>
  );
}
