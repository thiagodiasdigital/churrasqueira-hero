"use client";

interface HeroOverlayTextProps {
  opacity: number;
}

export function HeroOverlayText({ opacity }: HeroOverlayTextProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center pb-20 md:pb-28"
      style={{ opacity }}
    >
      <div
        className="flex max-w-2xl flex-col items-center gap-6 px-6 text-center"
        style={{ pointerEvents: opacity > 0.1 ? "auto" : "none" }}
      >
        <h2
          className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-[var(--color-text-primary)] md:text-5xl lg:text-[72px] lg:leading-[1.1]"
          style={{ textShadow: "0 2px 30px rgba(0, 0, 0, 0.7)" }}
        >
          O Fogo que Reúne
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-sm uppercase tracking-[0.15em] text-[var(--color-text-secondary)] md:text-base">
          Churrasqueiras artesanais que transformam momentos em memórias
        </p>
        <a
          href="#modelos"
          className="mt-2 inline-block rounded-full border border-[var(--color-border-btn)] px-8 py-3 font-[family-name:var(--font-inter)] text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-all duration-300 hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-text-primary)] md:w-auto"
        >
          Conheça os Modelos
        </a>
      </div>
    </div>
  );
}
