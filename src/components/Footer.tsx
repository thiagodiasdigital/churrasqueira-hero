import Link from "next/link";
import { empresa, produtos } from "@/lib/data";

const socialLinks = [
  {
    href: empresa.instagram,
    label: "Instagram",
    iconPath:
      "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm8.9 1.25a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.8A5.2 5.2 0 1 1 6.8 12 5.2 5.2 0 0 1 12 6.8Zm0 1.5A3.7 3.7 0 1 0 15.7 12 3.7 3.7 0 0 0 12 8.3Z",
  },
  {
    href: empresa.pinterest,
    label: "Pinterest",
    iconPath:
      "M12 2a10 10 0 0 0-3.64 19.32c-.05-.82-.1-2.08.02-2.97.11-.81.72-5.17.72-5.17s-.18-.37-.18-.93c0-.87.5-1.52 1.13-1.52.53 0 .8.4.8.88 0 .54-.35 1.35-.52 2.1-.15.63.31 1.15.93 1.15 1.12 0 1.98-1.18 1.98-2.88 0-1.5-1.08-2.56-2.63-2.56-1.79 0-2.84 1.34-2.84 2.73 0 .54.21 1.12.47 1.44a.19.19 0 0 1 .04.18c-.04.2-.13.63-.14.71-.02.11-.08.13-.19.08-.71-.33-1.15-1.36-1.15-2.18 0-1.77 1.29-3.4 3.72-3.4 1.95 0 3.47 1.39 3.47 3.25 0 1.94-1.22 3.5-2.92 3.5-.57 0-1.1-.3-1.28-.64l-.35 1.33c-.13.48-.47 1.08-.7 1.45A10 10 0 1 0 12 2Z",
  },
  {
    href: empresa.tiktok,
    label: "TikTok",
    iconPath:
      "M14.83 3c.24 1.97 1.35 3.64 3.17 4.35v2.28a6.6 6.6 0 0 1-3.15-.82v5.05a5.86 5.86 0 1 1-5.08-5.8v2.37a3.5 3.5 0 1 0 2.71 3.43V3h2.35Z",
  },
  {
    href: empresa.x,
    label: "X",
    iconPath:
      "M18.9 3H21l-4.58 5.23L22 21h-4.38l-3.43-4.9L9.9 21H7.79l4.9-5.6L2 3h4.5l3.1 4.43L13.4 3h2.1Zm-1.53 16.5h1.22L5.96 4.42H4.65L17.37 19.5Z",
  },
  {
    href: empresa.facebook,
    label: "Facebook",
    iconPath:
      "M13.5 21v-7.04H16l.38-2.96H13.5V9.11c0-.86.23-1.44 1.46-1.44h1.56V5.02A20.7 20.7 0 0 0 14.25 4c-2.25 0-3.8 1.37-3.8 3.9v2.1H8v2.96h2.45V21h3.05Z",
  },
  {
    href: empresa.googleBusinessProfile,
    label: "Google Maps",
    iconPath:
      "M12 2c-3.59 0-6.5 2.84-6.5 6.35 0 4.71 6.5 13.3 6.5 13.3s6.5-8.59 6.5-13.3C18.5 4.84 15.59 2 12 2Zm0 8.62a2.27 2.27 0 1 1 0-4.54 2.27 2.27 0 0 1 0 4.54Z",
  },
];

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
          <div className="mt-4">
            <p className="font-serif font-semibold text-sm text-ambar uppercase tracking-wider mb-3">Redes e Perfil Local</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex items-center gap-2 text-sm text-texto-secundario hover:text-ambar transition-colors"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                    <path d={link.iconPath} />
                  </svg>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
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
