import Link from "next/link";
import type { Produto } from "@/lib/data";

interface ProductCardProps {
  produto: Produto;
  imageFit?: "cover" | "contain";
}

export function ProductCard({ produto, imageFit = "cover" }: ProductCardProps) {
  const useContainedImage = imageFit === "contain";
  const cardImagePosition = produto.cardImagePosition ?? "center";

  return (
    <Link
      href={`/produto/${produto.slug}`}
      className="group block overflow-hidden rounded-xl border border-ambar-escuro/15 bg-fundo-card shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-ambar/40 hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)]"
    >
      {/* Imagem */}
      <div
        className={`relative ${
          useContainedImage ? "px-4 pt-4 md:px-5 md:pt-5" : "overflow-hidden"
        }`}
      >
        {produto.imagem ? (
          useContainedImage ? (
            <div className="mx-auto flex h-[220px] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-lg bg-fundo-elevado p-4 md:h-[210px] md:max-w-[250px]">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ objectPosition: cardImagePosition }}
                loading="lazy"
              />
            </div>
          ) : (
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          )
        ) : (
          <div className="flex h-[220px] items-center justify-center rounded-lg bg-fundo-elevado text-sm text-texto-muted">
            [Foto: {produto.nomeCurto}]
          </div>
        )}
        {produto.badge && (
          <span className="absolute top-7 left-7 rounded-full border border-ambar/20 bg-ambar px-3 py-1 text-xs font-sans font-semibold uppercase tracking-[0.12em] text-fundo md:top-8 md:left-8">
            {produto.badge}
          </span>
        )}
      </div>

      {/* Texto */}
      <div className="p-4 md:p-5">
        <h3 className="font-serif text-base font-semibold leading-tight text-texto transition-colors group-hover:text-ambar md:text-[1.2rem]">
          {produto.nome}
        </h3>
        <p className="mt-2.5 min-h-[3rem] text-sm leading-relaxed text-texto-secundario line-clamp-2">
          {produto.descricaoCurta}
        </p>
        <span className="mt-3 inline-block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-ambar transition-transform group-hover:translate-x-1 md:text-sm">
          {produto.cardCtaTexto ?? "Ver detalhes \u2192"}
        </span>
      </div>
    </Link>
  );
}
