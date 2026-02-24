"use client";

import { useRef, useMemo } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useImageSequence } from "@/hooks/useImageSequence";
import { HERO_CONFIG } from "./hero.constants";
import { HeroCanvas } from "./HeroCanvas";
import { HeroOverlayLogo } from "./HeroOverlayLogo";
import { ScrollIndicator } from "./ScrollIndicator";
import { HeroOverlayText } from "./HeroOverlayText";

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function fadeRange(
  progress: number,
  start: number,
  end: number,
  direction: "in" | "out"
): number {
  if (direction === "out") {
    if (progress <= start) return 1;
    if (progress >= end) return 0;
    return clamp01(1 - (progress - start) / (end - start));
  }
  // "in"
  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return clamp01((progress - start) / (end - start));
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);
  const { frames, ready } = useImageSequence();

  const overlays = HERO_CONFIG.overlays;

  // Black overlay: starts at 1 (fully black), fades to 0 (fully revealed)
  const revealOpacity = useMemo(
    () => fadeRange(progress, overlays.revealStart, overlays.revealEnd, "out"),
    [progress, overlays.revealStart, overlays.revealEnd]
  );

  const logoOpacity = useMemo(
    () => fadeRange(progress, overlays.logoFadeStart, overlays.logoFadeEnd, "out"),
    [progress, overlays.logoFadeStart, overlays.logoFadeEnd]
  );

  const scrollIndicatorOpacity = useMemo(
    () => fadeRange(progress, 0, overlays.scrollIndicatorFadeEnd, "out"),
    [progress, overlays.scrollIndicatorFadeEnd]
  );

  const textOpacity = useMemo(
    () => fadeRange(progress, overlays.textFadeStart, overlays.textFadeEnd, "in"),
    [progress, overlays.textFadeStart, overlays.textFadeEnd]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] md:h-[250vh] lg:h-[300vh]"
      aria-label="Hero — Animação da churrasqueira"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <HeroCanvas
          frames={frames}
          progress={progress}
          totalFrames={HERO_CONFIG.totalFrames}
          ready={ready}
        />

        {/* Black reveal overlay — fades out as user scrolls */}
        <div
          className="pointer-events-none absolute inset-0 z-[3] bg-[#0A0A0A]"
          style={{ opacity: revealOpacity }}
        />

        {/* Gradient overlay for text readability */}
        <div
          className="pointer-events-none absolute inset-0 z-[5]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        <HeroOverlayLogo opacity={logoOpacity} />
        <ScrollIndicator opacity={scrollIndicatorOpacity} />
        <HeroOverlayText opacity={textOpacity} />
      </div>

      <noscript>
        <div className="flex h-screen w-full flex-col items-start justify-end bg-black pb-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sequences/hero/hero-0090.webp"
            alt="Churrasqueira artesanal com fogo aceso"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 px-8 text-left md:px-16 lg:px-24">
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-normal text-[#B86B3E]">
              O Fogo que Reúne
            </h2>
            <p className="mt-4 font-[family-name:var(--font-montserrat)] text-sm font-light uppercase tracking-widest text-[rgba(242,242,242,0.6)]">
              Churrasqueiras artesanais que transformam momentos em memórias
            </p>
          </div>
        </div>
      </noscript>
    </section>
  );
}
