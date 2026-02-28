import Link from "next/link";
import { empresa } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-fundo-card border-t border-ambar-escuro/20 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Col 1 — Marca */}
        <div>
          <p className="font-serif font-bold text-lg text-texto mb-3">
            {empresa.nome}
          </p>
          <p className="text-sm text-texto-secundario leading-relaxed">
            Churrasqueiras pré-moldadas, projetos sob medida e acessórios
            para churrasco em Juiz de Fora e região.
          </p>
        </div>

        {/* Col 2 — Links */}
        <div>
          <p className="font-serif font-semibold text-sm text-ambar uppercase tracking-wider mb-3">
            Navegação
          </p>
          <nav className="space-y-2">
            {[
              { href: "/", label: "Início" },
              { href: "/produto/churrasqueira-pre-moldada", label: "Churrasqueiras" },
              { href: "/produto/churrasqueira-sob-medida", label: "Projetos Sob Medida" },
              { href: "/sobre", label: "Sobre Nós" },
              { href: "/contato", label: "Contato" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-texto-secundario hover:text-ambar transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 — Contato */}
        <div>
          <p className="font-serif font-semibold text-sm text-ambar uppercase tracking-wider mb-3">
            Contato
          </p>
          <address className="not-italic space-y-2 text-sm text-texto-secundario">
            <p>{empresa.endereco.completo}</p>
            <p>
              <a
                href={`tel:+${empresa.telefoneLimpo}`}
                className="hover:text-ambar transition-colors"
              >
                {empresa.telefone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${empresa.email}`}
                className="hover:text-ambar transition-colors"
              >
                {empresa.email}
              </a>
            </p>
            <p>
              <a
                href={empresa.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ambar transition-colors"
              >
                {empresa.instagramHandle}
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ambar-escuro/10 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-texto-muted">
          <p>&copy; {new Date().getFullYear()} {empresa.nome}</p>
          <p>
            Powered by{" "}
            <a
              href="https://www.instagram.com/agenciadiasdigital/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ambar transition-colors"
            >
              Agência Dias Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
