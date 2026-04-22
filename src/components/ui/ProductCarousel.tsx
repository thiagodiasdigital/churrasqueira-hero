"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { Produto } from "@/lib/data";

interface ProductCarouselProps {
  produtos: Produto[];
}

const AUTOPLAY_INTERVAL = 4500;

function getCarouselTitle(nome: string): string {
  return nome.split(/\s+[–-]\s+/u)[0]?.trim() || nome;
}

function getCarouselCopy(descricaoCurta: string): string {
  return descricaoCurta.split("\n\n")[0]?.trim() || descricaoCurta;
}

export function ProductCarousel({ produtos }: ProductCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const move = useCallback(
    (direction: number) => {
      setActiveIndex((current) => (current + direction + produtos.length) % produtos.length);
    },
    [produtos.length],
  );

  useEffect(() => {
    if (isPaused || produtos.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % produtos.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(interval);
  }, [isPaused, produtos.length]);

  if (produtos.length === 0) return null;

  return (
    <div
      className="relative mx-auto max-w-[1080px]"
      aria-roledescription="carousel"
      aria-label="Churrasqueiras em destaque"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="hidden text-xs font-sans font-semibold uppercase tracking-[0.28em] text-texto-secundario/70 md:block">
          Modelos em destaque
        </div>
        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            onClick={() => move(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-ambar/30 bg-fundo-card/90 text-ambar shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:border-ambar hover:bg-ambar hover:text-fundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ambar"
            aria-label="Ver produto anterior"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              &lt;
            </span>
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-ambar/30 bg-fundo-card/90 text-ambar shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:border-ambar hover:bg-ambar hover:text-fundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ambar"
            aria-label="Ver proximo produto"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              &gt;
            </span>
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {produtos.map((produto, index) => (
            <article
              key={produto.slug}
              className="min-w-full px-1 md:px-2"
              aria-label={`Produto ${index + 1} de ${produtos.length}`}
            >
              <Link
                href={`/produto/${produto.slug}`}
                className="group grid overflow-hidden rounded-xl border border-ambar-escuro/15 bg-fundo-card shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition-all duration-300 hover:border-ambar/40 hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)] md:min-h-[320px] md:grid-cols-[minmax(0,1.18fr)_250px]"
              >
                <div className="flex flex-col justify-center p-5 md:p-7">
                  {produto.badge ? (
                    <span className="inline-flex w-fit rounded-full border border-ambar/20 bg-ambar px-3 py-1 text-xs font-sans font-semibold uppercase tracking-[0.12em] text-fundo">
                      {produto.badge}
                    </span>
                  ) : null}

                  <h3 className="mt-4 max-w-[14ch] font-serif text-[1.55rem] font-semibold leading-[1.02] text-texto transition-colors group-hover:text-ambar md:text-[1.8rem]">
                    {getCarouselTitle(produto.nome)}
                  </h3>

                  <p className="mt-4 max-w-[42ch] text-[0.98rem] leading-7 text-texto-secundario line-clamp-3">
                    {getCarouselCopy(produto.descricaoCurta)}
                  </p>

                  <span className="mt-6 inline-block text-sm font-sans font-semibold uppercase tracking-[0.12em] text-ambar transition-transform group-hover:translate-x-1">
                    {produto.cardCtaTexto ?? "Ver detalhes \u2192"}
                  </span>
                </div>

                <div className="relative flex min-h-[240px] items-center justify-center bg-fundo-elevado p-5 md:min-h-full md:p-5">
                  {produto.imagem ? (
                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-fundo-card/70 p-4">
                      <img
                        src={produto.imagem}
                        alt={produto.nome}
                        className="h-auto max-h-[210px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02] md:max-h-[248px]"
                        style={{ objectPosition: produto.cardImagePosition ?? "center" }}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-texto-muted">
                      [Foto: {produto.nomeCurto}]
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3" aria-label="Controle do carrossel">
        {produtos.map((produto, index) => (
          <button
            key={produto.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex
                ? "w-9 bg-ambar shadow-[0_0_18px_rgba(166,75,42,0.45)]"
                : "w-2.5 bg-ambar/25 hover:bg-ambar/50"
            }`}
            aria-label={`Ir para ${produto.nome}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
