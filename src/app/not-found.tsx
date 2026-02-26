import Link from "next/link";
import { CTAWhatsApp } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-serif font-bold text-6xl text-ambar mb-4">404</p>
        <h1 className="font-serif font-bold text-2xl text-texto mb-3">
          Pagina nao encontrada
        </h1>
        <p className="text-texto-secundario mb-8 max-w-md mx-auto">
          A pagina que voce procura nao existe ou foi movida.
          Volte para a pagina inicial ou fale com a gente pelo WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 border border-ambar text-ambar font-sans font-semibold rounded-lg hover:bg-ambar hover:text-fundo transition-colors"
          >
            Voltar ao Inicio
          </Link>
          <CTAWhatsApp texto="Falar no WhatsApp" />
        </div>
      </div>
    </div>
  );
}
