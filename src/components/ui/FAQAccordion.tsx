import type { FAQItem } from "@/lib/data";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details key={i} className="group bg-fundo-card border border-ambar-escuro/15 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between p-5 cursor-pointer">
            <h3 className="font-serif font-semibold text-base text-texto pr-4 leading-snug">
              {item.pergunta}
            </h3>
            <span className="faq-chevron flex-shrink-0 text-ambar" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 7.5L10 12.5L15 7.5" />
              </svg>
            </span>
          </summary>
          <div className="px-5 pb-5">
            <p className="text-sm text-texto-secundario leading-relaxed">
              {item.resposta}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
