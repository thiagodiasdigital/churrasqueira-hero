"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import preBaby from "../../fotos-site/pre-baby.png";
import preBabyMini from "../../fotos-site/pre-baby-mini.png";
import preBalcao from "../../fotos-site/pre-balcao.png";
import prePredial from "../../fotos-site/pre-predial.png";
import preTradicional from "../../fotos-site/pre-tradicional.png";
import preDuo from "../../fotos-site/pre-duo.png";

const WHATSAPP_HERO_LINK = "https://wa.me/5532999029461";

const MODELOS = [
  { nome: "COLONIAL BABY 45cm", imagem: preBaby },
  { nome: "BABY MINI 45cm", imagem: preBabyMini },
  { nome: "COLONIAL COM BALCÃO 45cm", imagem: preBalcao },
  { nome: "PREDIAL 65cm", imagem: prePredial },
  { nome: "COLONIAL 65cm", imagem: preTradicional },
  { nome: "COLONIAL 55cm", imagem: preDuo },
] as const;

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

export function PreMoldadasSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const totalPanels = MODELOS.length + 1;

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

  const trackStyle = useMemo(
    () => ({
      width: `${totalPanels * 100}vw`,
      transform: `translate3d(-${progress * (totalPanels - 1) * 100}vw, 0, 0)`,
    }),
    [progress, totalPanels]
  );

  return (
    <section
      id="pre-moldadas"
      ref={sectionRef}
      className="relative min-h-0 md:min-h-[300vh] bg-fundo overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden hidden md:block">
        <div className="absolute top-0 left-0 z-20 w-full px-6 md:px-10 lg:px-16 pt-8 md:pt-10 lg:pt-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-texto font-serif font-medium text-3xl md:text-4xl lg:text-5xl tracking-[0.01em]">
              Churrasqueiras Pré-Moldadas
            </h2>
            <p className="mt-5 text-texto-secundario font-sans font-medium text-base md:text-lg leading-8">
              Prontas para instalar.
              <br />
              Duráveis.
              <br />
              Acabamento impecável.
            </p>
          </div>
        </div>

        <div
          className="flex h-full will-change-transform"
          style={trackStyle}
        >
          {MODELOS.map((item, index) => {
            const center = index / (totalPanels - 1);
            const distance = Math.abs(progress - center) * (totalPanels - 1);
            const fade = clamp01(1 - distance);
            const opacity = fade;
            const scale = 0.96 + fade * 0.04;

            return (
              <article
                key={item.nome}
                className="relative h-full w-screen shrink-0 flex items-center justify-center"
              >
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  priority={index < 2}
                  className="h-[76vh] w-auto object-contain select-none pointer-events-none"
                  sizes="100vw"
                />

                <div
                  className="absolute left-10 bottom-10 z-10"
                  style={{ opacity, transform: `scale(${scale})`, transformOrigin: "left bottom" }}
                >
                  <p className="text-texto font-sans font-medium text-lg md:text-xl lg:text-2xl tracking-[0.01em]">
                    {item.nome}
                  </p>
                </div>
              </article>
            );
          })}

          <div className="h-full w-screen shrink-0 flex items-center justify-center px-6">
            <div className="text-center">
              <p className="text-texto font-serif font-medium text-2xl md:text-4xl">
                Qual modelo combina com seu espaço?
              </p>
              <a
                href={WHATSAPP_HERO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-texto px-7 py-3 text-texto font-sans font-medium text-sm tracking-[0.08em] transition-colors hover:bg-texto hover:text-fundo"
              >
                Receber orientação
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 py-10">
        <h2 className="text-texto font-serif font-medium text-3xl tracking-[0.01em]">
          Churrasqueiras Pré-Moldadas
        </h2>
        <p className="mt-4 text-texto-secundario font-sans font-medium leading-8">
          Prontas para instalar.
          <br />
          Duráveis.
          <br />
          Acabamento impecável.
        </p>

        <div className="mt-8 -mx-4 overflow-x-auto snap-x snap-mandatory scroll-smooth">
          <div className="flex">
            {MODELOS.map((item, index) => (
              <article
                key={item.nome}
                className="relative min-w-full snap-center px-4"
              >
                <div className="relative h-[72vh] flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.imagem}
                    alt={item.nome}
                    priority={index === 0}
                    className="h-full w-full object-contain select-none pointer-events-none"
                    sizes="100vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 to-transparent" />
                  <p className="absolute left-6 bottom-6 text-texto font-sans font-medium text-base tracking-[0.01em]">
                    {item.nome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-texto font-serif font-medium text-2xl leading-snug">
            Qual modelo combina com seu espaço?
          </p>
          <a
            href={WHATSAPP_HERO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-texto px-6 py-3 text-texto font-sans font-medium text-sm tracking-[0.08em]"
          >
            Receber orientação
          </a>
        </div>
      </div>
    </section>
  );
}
