import type { Depoimento } from "@/lib/data";

interface TestimonialCardProps {
  depoimento: Depoimento;
}

export function TestimonialCard({ depoimento }: TestimonialCardProps) {
  return (
    <div className="bg-fundo-card border border-ambar-escuro/15 rounded-xl p-6">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-ambar/40 mb-3" aria-hidden="true">
        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
      </svg>
      <p className="text-sm text-texto-secundario leading-relaxed mb-4">
        {depoimento.texto}
      </p>
      <p className="text-sm font-sans font-semibold text-texto">
        {depoimento.nome}
      </p>
    </div>
  );
}
