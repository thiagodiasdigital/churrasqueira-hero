import Link from "next/link";
import { empresa, produtos } from "@/lib/data";

export default function Footer() {
  const productFooterSlugs = new Set([
    "churrasqueira-bafo-aluminio",
    "kit-fogo-de-chao-espeto-braseiro",
    "churrasqueira-movel-portatil-com-rodas",
    "churrasqueira-bafo-media-aluminio",
    "mini-tambor-bafo",
    "churrasqueira-bafo-ceramica",
  ]);

  const featuredLinks = produtos
    .filter((produto) => productFooterSlugs.has(produto.slug))
    .map((produto) => ({
      href: `/produto/${produto.slug}`,
      label: produto.nomeCurto,
    }));

  const institutionalLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre nós" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <footer className="bg-fundo-card border-t border-ambar-escuro/20 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(180px,0.7fr)_minmax(220px,1fr)_minmax(0,1fr)] gap-8">
        <div>
          <p className="font-serif font-bold text-lg text-texto mb-3">{empresa.nome}</p>
          <p className="text-sm text-texto-secundario leading-relaxed">{empresa.descricao}</p>
        </div>

        <div>
          <p className="font-serif font-semibold text-sm text-ambar uppercase tracking-wider mb-3">Navegação</p>
          <nav className="space-y-2">
            {institutionalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm text-texto-secundario hover:text-ambar transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-serif font-semibold text-sm text-ambar uppercase tracking-wider mb-3">Produtos</p>
          <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2">
            {featuredLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm text-texto-secundario hover:text-ambar transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-serif font-semibold text-sm text-ambar uppercase tracking-wider mb-3">Contato</p>
          <address className="not-italic space-y-2 text-sm text-texto-secundario">
            <p>{empresa.endereco.completo}</p>
            <p><a href={`tel:+${empresa.telefoneLimpo}`} className="hover:text-ambar transition-colors">{empresa.telefone}</a></p>
            <p><a href={`mailto:${empresa.email}`} className="hover:text-ambar transition-colors">{empresa.email}</a></p>
            <p><a href={empresa.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ambar transition-colors">{empresa.instagramHandle}</a></p>
          </address>
        </div>
      </div>

      <div className="border-t border-ambar-escuro/10 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-texto-muted">
          <p>&copy; {new Date().getFullYear()} {empresa.nome}</p>
          <p>
            Powered by <a href="https://agenciadiasdigital.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-ambar transition-colors">Agência Dias Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
