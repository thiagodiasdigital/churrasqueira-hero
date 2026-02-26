"use client";

import { useState } from "react";
import Link from "next/link";
import { empresa } from "@/lib/data";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/produto/churrasqueira-pre-moldada", label: "Churrasqueiras" },
  { href: "/produto/churrasqueira-sob-medida", label: "Sob Medida" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fundo/90 backdrop-blur-md border-b border-ambar-escuro/20">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/logo-mundial.svg"
            alt="Mundial Churrasqueiras"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-texto-secundario hover:text-ambar transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`${empresa.whatsapp}?text=Ola! Gostaria de mais informacoes.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-ambar text-fundo font-sans font-semibold text-sm rounded-lg hover:bg-ambar-hover transition-colors"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-texto-secundario hover:text-ambar transition-colors"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-fundo-card border-t border-ambar-escuro/20 px-4 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-sans text-texto-secundario hover:text-ambar transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`${empresa.whatsapp}?text=Ola! Gostaria de mais informacoes.`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-4 py-3 bg-ambar text-fundo font-sans font-semibold text-sm rounded-lg hover:bg-ambar-hover transition-colors"
          >
            Falar com Especialista
          </a>
        </div>
      )}
    </header>
  );
}
