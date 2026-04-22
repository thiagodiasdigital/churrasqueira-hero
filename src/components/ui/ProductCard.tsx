import Link from "next/link";
import type { Produto } from "@/lib/data";

interface ProductCardProps {
  produto: Produto;
  imageFit?: "cover" | "contain";
}

export function ProductCard({ produto, imageFit = "cover" }: ProductCardProps) {
  const useContainedImage = imageFit === "contain";

  return (
    <Link
      href={`/produto/${produto.slug}`}
      className="group block overflow-hidden rounded-xl border border-ambar-escuro/15 bg-fundo-card shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-ambar/40 hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)]"
    >
      {/* Imagem */}
      <div
        className={`relative overflow-hidden bg-fundo-elevado ${
          useContainedImage
            ? "aspect-[16/10] p-6 sm:p-7 md:p-8"
            : "aspect-[4/3]"
        }`}
      >
        {produto.imagem ? (
          <img
            src={produto.imagem}
            alt={produto.nome}
            className={
              useContainedImage
                ? "absolute inset-0 h-full w-full object-contain object-center p-6 transition-transform duration-500 group-hover:scale-[1.02] sm:p-7 md:p-8"
                : "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-texto-muted text-sm">
            [Foto: {produto.nomeCurto}]
          </div>
        )}
        {produto.badge && (
          <span className="absolute top-3 left-3 rounded-full border border-ambar/20 bg-ambar px-3 py-1 text-xs font-sans font-semibold uppercase tracking-[0.12em] text-fundo">
            {produto.badge}
          </span>
        )}
      </div>

      {/* Texto */}
      <div className="p-5 md:p-6">
        <h3 className="font-serif text-lg font-semibold leading-tight text-texto transition-colors group-hover:text-ambar md:text-[1.35rem]">
          {produto.nome}
        </h3>
        <p className="mt-3 min-h-[3.25rem] text-sm leading-relaxed text-texto-secundario line-clamp-2">
          {produto.descricaoCurta}
        </p>
        <span className="mt-4 inline-block text-sm font-sans font-semibold uppercase tracking-[0.12em] text-ambar transition-transform group-hover:translate-x-1">
          {produto.cardCtaTexto ?? "Ver detalhes \u2192"}
        </span>
      </div>
    </Link>
  );
}
