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
      <h1
        className="text-center font-[family-name:var(--font-playfair)] text-5xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-7xl"
        style={{
          textShadow: "0 2px 20px rgba(0, 0, 0, 0.6)",
        }}
      >
        Churrasqueira
        <br />
        <span className="font-[family-name:var(--font-inter)] text-lg font-medium uppercase tracking-[0.3em] text-[var(--color-text-secondary)] md:text-xl">
          Artesanal
        </span>
      </h1>
    </div>
  );
}
