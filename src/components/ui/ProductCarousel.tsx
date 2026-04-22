"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Produto } from "@/lib/data";
import { ProductCard } from "./ProductCard";

interface ProductCarouselProps {
  produtos: Produto[];
}

const AUTOPLAY_INTERVAL = 4200;

export function ProductCarousel({ produtos }: ProductCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const scrollTimeoutRef = useRef<number | null>(null);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const firstSlide = track?.querySelector<HTMLElement>("[data-carousel-slide]");

      if (!track || !firstSlide || produtos.length === 0) return;

      const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0");
      const normalizedIndex = (index + produtos.length) % produtos.length;
      const offset = normalizedIndex * (firstSlide.getBoundingClientRect().width + gap);

      activeIndexRef.current = normalizedIndex;
      setActiveIndex(normalizedIndex);
      track.scrollTo({ left: offset, behavior: "smooth" });
    },
    [produtos.length],
  );

  const goToPrevious = useCallback(() => {
    scrollToIndex(activeIndexRef.current - 1);
  }, [scrollToIndex]);

  const goToNext = useCallback(() => {
    scrollToIndex(activeIndexRef.current + 1);
  }, [scrollToIndex]);

  useEffect(() => {
    if (isPaused || produtos.length <= 1) return;

    const interval = window.setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(interval);
  }, [goToNext, isPaused, produtos.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = window.setTimeout(() => {
        const firstSlide = track.querySelector<HTMLElement>("[data-carousel-slide]");
        if (!firstSlide) return;

        const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0");
        const step = firstSlide.getBoundingClientRect().width + gap;
        if (step <= 0) return;

        const nextIndex = Math.round(track.scrollLeft / step) % produtos.length;
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }, 120);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, [produtos.length]);

  if (produtos.length === 0) return null;

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label="Churrasqueiras em destaque"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="mb-5 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={goToPrevious}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-ambar/40 bg-fundo-card text-ambar transition-colors hover:border-ambar hover:bg-ambar hover:text-fundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ambar"
          aria-label="Ver produto anterior"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-ambar/40 bg-fundo-card text-ambar transition-colors hover:border-ambar hover:bg-ambar hover:text-fundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ambar"
          aria-label="Ver próximo produto"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4"
      >
        {produtos.map((produto, index) => (
          <div
            key={produto.slug}
            data-carousel-slide
            className="min-w-[85%] shrink-0 snap-start sm:min-w-[calc((100%-1.5rem)/2)] lg:min-w-[calc((100%-3rem)/3)]"
            aria-label={`Produto ${index + 1} de ${produtos.length}`}
          >
            <ProductCard produto={produto} imageFit="contain" />
          </div>
        ))}
      </div>

      <div className="mt-2 flex justify-center gap-2" aria-hidden="true">
        {produtos.map((produto, index) => (
          <span
            key={produto.slug}
            className={`h-1.5 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-ambar" : "w-2 bg-ambar/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
