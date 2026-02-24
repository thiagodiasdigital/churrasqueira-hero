"use client";

interface HeroOverlayTextProps {
  opacity: number;
}

export function HeroOverlayText({ opacity }: HeroOverlayTextProps) {
  const textPrimary = `rgba(245, 240, 235, ${opacity})`;
  const textSecondary = `rgba(245, 240, 235, ${opacity * 0.6})`;
  const borderColor = `rgba(245, 240, 235, ${opacity})`;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 grid place-items-end"
      aria-hidden={opacity === 0}
    >
      <div
        className="pointer-events-auto mb-20 w-full max-w-2xl justify-self-center px-6 text-center md:mb-28"
        style={{ pointerEvents: opacity > 0.1 ? "auto" : "none" }}
      >
        <h2
          className="font-[family-name:var(--font-inter)] text-4xl font-bold uppercase leading-tight tracking-[0.05em] md:text-5xl lg:text-[72px] lg:leading-[1.1]"
          style={{ color: textPrimary }}
        >
          O Fogo que Reúne
        </h2>
        <p
          className="mt-6 font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.15em] md:text-base"
          style={{ color: textSecondary }}
        >
          Churrasqueiras artesanais que transformam momentos em memórias
        </p>
        <a
          href="#modelos"
          className="mt-8 inline-block rounded-full px-8 py-3 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-text-primary)] md:w-auto"
          style={{
            color: textPrimary,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: borderColor,
          }}
        >
          Conheça os Modelos
        </a>
      </div>
    </div>
  );
}
