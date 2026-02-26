import type { Especificacao } from "@/lib/data";

interface SpecTableProps {
  items: Especificacao[];
}

export function SpecTable({ items }: SpecTableProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-ambar-escuro/20">
            <th className="py-3 px-4 text-left font-serif font-semibold text-ambar">Tamanho</th>
            <th className="py-3 px-4 text-left font-serif font-semibold text-ambar">Descricao</th>
            <th className="py-3 px-4 text-left font-serif font-semibold text-ambar">Capacidade</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} className="border-b border-ambar-escuro/10">
              <td className="py-3 px-4 font-sans font-semibold text-texto">{item.tamanho}</td>
              <td className="py-3 px-4 text-texto-secundario">{item.descricao}</td>
              <td className="py-3 px-4 text-texto-secundario">{item.pessoas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
