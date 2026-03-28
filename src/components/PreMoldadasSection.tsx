"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { empresa } from "@/lib/data";
import { homeContent } from "@/content";

const MODELOS = homeContent.preMoldadas.models;

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

export function PreMoldadasSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const introPanels = 1;
  const modelPanels = MODELOS.length;
  const ctaPanels = 1;
  const totalPanels = introPanels + modelPanels + ctaPanels;
  const panelProgress = progress * totalPanels;
  const introProgress = clamp01(panelProgress);
  const introTextVisibility = clamp01((1.05 - panelProgress) / 0.15);
  const activePanel = Math.floor(panelProgress) - introPanels;
  const isIntro = panelProgress < introPanels;
  const isModel = activePanel >= 0 && activePanel < modelPanels;

  useEffect(() => {
    function updateProgress() {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(0);
        return;
      }
      const raw = -rect.top / scrollable;
      setProgress(clamp01(raw));
    }

    function onScroll() {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        updateProgress();
      });
    }

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="pre-moldadas"
      ref={sectionRef}
      className="relative min-h-0 md:min-h-[700vh] bg-fundo"
      style={{
        backgroundImage: "url('/images/premoldadas-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="sticky top-0 hidden h-dvh h-[100svh] w-full overflow-hidden md:block"
        style={{
          backgroundImage: "url('/images/premoldadas-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 z-20 w-full px-6 pt-8 md:px-10 md:pt-10 lg:px-16 lg:pt-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-texto font-serif text-3xl font-medium tracking-[0.01em] md:text-4xl lg:text-5xl">
              {homeContent.preMoldadas.title}
            </h2>
            <div className="mt-5 space-y-1 text-base leading-8 text-texto-secundario font-sans font-medium md:text-lg">
              {homeContent.preMoldadas.introLines.map((line, index) => {
                const lineReveal = clamp01((introProgress - index * 0.32) / 0.32);
                const opacity = lineReveal * introTextVisibility;
                return (
                  <p
                    key={line}
                    style={{
                      opacity,
                      transform: `translateY(${(1 - lineReveal) * 10}px)`,
                    }}
                  >
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative flex h-full w-full items-center justify-center px-6 pt-[clamp(120px,16vh,180px)] md:px-10 lg:px-16">
          {isIntro ? null : isModel ? (
            <article className="flex w-full max-w-6xl items-center justify-center gap-[clamp(24px,5vw,88px)]">
              <div className="w-[min(34vw,420px)] shrink-0 text-left">
                <p className="text-texto font-sans text-lg font-medium leading-tight tracking-[0.01em] md:text-xl lg:text-2xl">
                  {MODELOS[activePanel].nome}
                </p>
                {"subtitulo" in MODELOS[activePanel] ? (
                  <p className="mt-1 text-texto font-sans text-lg font-medium leading-tight tracking-[0.01em] md:text-xl lg:text-2xl">
                    {MODELOS[activePanel].subtitulo}
                  </p>
                ) : null}
              </div>

              <div className="relative h-[min(78svh,820px)] w-[min(58vw,860px)]">
                <Image
                  src={MODELOS[activePanel].imagem}
                  alt={MODELOS[activePanel].nome}
                  loading="eager"
                  className="pointer-events-none block h-full w-full select-none object-contain"
                  sizes="100vw"
                />
              </div>
            </article>
          ) : (
            <div className="text-center">
              <p className="text-texto font-serif text-2xl font-medium md:text-4xl">
                Qual modelo combina com seu espaco?
              </p>
              <a
                href={`${empresa.whatsapp}?text=${encodeURIComponent(homeContent.preMoldadas.ctaMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-texto px-7 py-3 text-texto font-sans text-sm font-medium tracking-[0.08em] transition-colors hover:bg-texto hover:text-fundo"
              >
                {homeContent.preMoldadas.ctaLabel}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="px-4 py-10 md:hidden">
        <h2 className="text-texto font-serif text-3xl font-medium tracking-[0.01em]">
          {homeContent.preMoldadas.title}
        </h2>
        <p className="mt-4 text-texto-secundario font-sans font-medium leading-8">
          {homeContent.preMoldadas.introLines.map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </p>

        <div className="mt-8 -mx-4 snap-x snap-mandatory overflow-x-auto scroll-smooth">
          <div className="flex">
            {MODELOS.map((item, index) => (
              <article
                key={item.nome}
                className="relative min-w-full snap-center px-4"
              >
                <div className="relative flex h-[76vh] items-center justify-center overflow-hidden">
                  <div className="relative h-full w-full">
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      priority={index === 0}
                      className="h-full w-full object-contain select-none pointer-events-none"
                      sizes="100vw"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 to-transparent" />
                  {"subtitulo" in item ? (
                    <div className="absolute inset-x-0 bottom-6 text-center">
                      <p className="text-texto font-sans font-medium text-base tracking-[0.01em]">
                        {item.nome}
                      </p>
                      <p className="text-texto font-sans font-medium text-base tracking-[0.01em]">
                        {item.subtitulo}
                      </p>
                    </div>
                  ) : (
                    <div className="absolute left-6 bottom-6">
                      <p className="text-texto font-sans font-medium text-base tracking-[0.01em]">
                        {item.nome}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-texto font-serif text-2xl font-medium leading-snug">
            Qual modelo combina com seu espaco?
          </p>
          <a
            href={`${empresa.whatsapp}?text=${encodeURIComponent(homeContent.preMoldadas.ctaMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-texto px-6 py-3 text-texto font-sans text-sm font-medium tracking-[0.08em]"
          >
            {homeContent.preMoldadas.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

