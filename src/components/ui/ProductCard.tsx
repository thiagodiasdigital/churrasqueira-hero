import Link from "next/link";
import type { Produto } from "@/lib/data";

interface ProductCardProps {
  produto: Produto;
  imageFit?: "cover" | "contain";
}

export function ProductCard({ produto, imageFit = "cover" }: ProductCardProps) {
  const useContainedImage = imageFit === "contain";
  const cardImagePosition = produto.cardImagePosition ?? "center";
  const wrapperClassName = useContainedImage
    ? "md:grid md:grid-cols-[minmax(0,1.3fr)_minmax(220px,0.7fr)] md:items-center md:gap-6"
    : "";
  const mediaClassName = useContainedImage
    ? "relative px-4 pt-4 md:px-0 md:pt-0 md:pr-5"
    : "relative overflow-hidden";
  const mediaPanelClassName = useContainedImage
    ? "mx-auto flex h-[220px] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-lg bg-fundo-elevado p-4 md:ml-auto md:mr-0 md:h-[240px] md:max-w-[250px]"
    : "";
  const contentClassName = useContainedImage
    ? "p-4 md:p-6 md:pl-6"
    : "p-4 md:p-5";

  return (
    <Link
      href={`/produto/${produto.slug}`}
      className="group block overflow-hidden rounded-xl border border-ambar-escuro/15 bg-fundo-card shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-ambar/40 hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)]"
    >
      <div className={wrapperClassName}>
        {/* Texto */}
        <div className={contentClassName}>
          {produto.badge && (
            <span className="inline-flex rounded-full border border-ambar/20 bg-ambar px-3 py-1 text-xs font-sans font-semibold uppercase tracking-[0.12em] text-fundo">
              {produto.badge}
            </span>
          )}
          <h3 className="mt-4 font-serif text-base font-semibold leading-tight text-texto transition-colors group-hover:text-ambar md:text-[1.32rem]">
            {produto.nome}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-texto-secundario line-clamp-3 md:max-w-[52ch]">
            {produto.descricaoCurta}
          </p>
          <span className="mt-5 inline-block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-ambar transition-transform group-hover:translate-x-1 md:text-sm">
            {produto.cardCtaTexto ?? "Ver detalhes \u2192"}
          </span>
        </div>

        {/* Imagem */}
        <div className={mediaClassName}>
          {produto.imagem ? (
            useContainedImage ? (
              <div className={mediaPanelClassName}>
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
        </div>
      </div>
    </Link>
  );
}
