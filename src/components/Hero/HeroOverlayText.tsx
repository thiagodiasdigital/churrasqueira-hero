"use client";

import { empresa } from "@/lib/data";
import { homeContent } from "@/content";

interface HeroOverlayTextProps {
  opacity: number;
}

export function HeroOverlayText({ opacity }: HeroOverlayTextProps) {
  const titleColor = `rgba(184, 107, 62, ${opacity})`;
  const textColor = `rgba(242, 242, 242, ${opacity})`;
  const textSecondary = `rgba(242, 242, 242, ${opacity * 0.6})`;
  const borderColor = `rgba(242, 242, 242, ${opacity})`;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 flex items-end"
      aria-hidden={opacity === 0}
    >
      <div
        className="pointer-events-auto mb-20 w-full max-w-2xl px-8 text-left md:mb-28 md:px-16 lg:px-24"
        style={{ pointerEvents: opacity > 0.1 ? "auto" : "none" }}
      >
        <h2
          className="font-[family-name:var(--font-playfair)] text-4xl font-normal leading-[1.1] tracking-normal md:text-5xl lg:text-[72px]"
          style={{ color: titleColor }}
        >
          {homeContent.hero.title}
        </h2>
        <p
          className="mt-6 font-[family-name:var(--font-montserrat)] text-sm font-light uppercase tracking-[0.15em] md:text-base"
          style={{ color: textSecondary }}
        >
          {homeContent.hero.subtitle}
        </p>
        <a
          href={`${empresa.whatsapp}?text=${encodeURIComponent(homeContent.hero.ctaMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full px-8 py-3 font-[family-name:var(--font-montserrat)] text-xs font-light uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-text-primary)]"
          style={{
            color: textColor,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: borderColor,
          }}
        >
          {homeContent.hero.ctaLabel}
        </a>
      </div>
    </div>
  );
}

