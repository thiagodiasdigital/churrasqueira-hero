import Link from "next/link";
import type { Regiao } from "@/lib/data";

interface RegionCardProps {
  regiao: Regiao;
}

export function RegionCard({ regiao }: RegionCardProps) {
  return (
    <Link
      href={`/regiao/${regiao.slug}`}
      className="group flex items-center justify-between p-4 bg-fundo-card border border-ambar-escuro/15 rounded-xl hover:border-ambar/40 transition-all"
    >
      <div>
        <p className="font-serif font-semibold text-texto group-hover:text-ambar transition-colors">
          {regiao.cidade}
        </p>
        <p className="text-xs text-texto-muted mt-1">{regiao.distancia} de JF</p>
      </div>
      <span className="text-ambar group-hover:translate-x-1 transition-transform" aria-hidden="true">
        &rarr;
      </span>
    </Link>
  );
}
