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
      className="group block bg-fundo-card border border-ambar-escuro/15 rounded-xl overflow-hidden hover:border-ambar/40 transition-all duration-300"
    >
      {/* Imagem */}
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-fundo-elevado ${
          useContainedImage ? "flex items-center justify-center p-4 sm:p-5 md:p-6" : ""
        }`}
      >
        {produto.imagem ? (
          <img
            src={produto.imagem}
            alt={produto.nome}
            className={
              useContainedImage
                ? "max-w-full max-h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
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
          <span className="absolute top-3 left-3 px-3 py-1 bg-ambar text-fundo text-xs font-sans font-semibold rounded-full">
            {produto.badge}
          </span>
        )}
      </div>

      {/* Texto */}
      <div className="p-5">
        <h3 className="font-serif font-semibold text-lg text-texto group-hover:text-ambar transition-colors">
          {produto.nome}
        </h3>
        <p className="mt-2 text-sm text-texto-secundario leading-relaxed line-clamp-2">
          {produto.descricaoCurta}
        </p>
        <span className="inline-block mt-3 text-sm font-sans font-semibold text-ambar group-hover:translate-x-1 transition-transform">
          {produto.cardCtaTexto ?? "Ver detalhes \u2192"}
        </span>
      </div>
    </Link>
  );
}
