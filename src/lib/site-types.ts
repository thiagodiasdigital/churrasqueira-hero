import type { StaticImageData } from "next/image";
export interface Endereco {
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  completo: string;
  lat: number;
  lng: number;
}
export interface Empresa {
  nome: string;
  descricao: string;
  telefone: string;
  telefoneLimpo: string;
  whatsapp: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  endereco: Endereco;
  horario: string;
  historia: string;
  churrasqueirasEntregues: string;
  avaliacoesGoogle: number;
}
export interface FAQItem {
  pergunta: string;
  resposta: string;
}
export interface Especificacao {
  tamanho: string;
  descricao: string;
  pessoas: string;
}
export interface Produto {
  slug: string;
  nome: string;
  nomeCurto: string;
  descricaoCurta: string;
  descricaoLonga: string;
  badge: string;
  imagem: string;
  cardImagePosition?: string;
  pageImageFit?: "cover" | "contain";
  pageImagePosition?: string;
  pageImageAspectClass?: string;
  pageImagePaddingClass?: string;
  pageImageScale?: number;
  pageImageWrapperClass?: string;
  cardCtaTexto?: string;
  ctaTexto: string;
  ctaMensagem: string;
  title: string;
  metaDescription: string;
  headings: {
    como: string;
    modelos: string;
    faq: string;
  };
  conteudo: {
    como: string;
    modelos: string;
  };
  especificacoes: Especificacao[];
  faq: FAQItem[];
  schema: "Product" | "Service";
}
export interface Regiao {
  slug: string;
  cidade: string;
  estado: string;
  distancia: string;
  distanciaNum: number;
  descricao: string;
  faq: FAQItem[];
}
export interface Depoimento {
  nome: string;
  texto: string;
}
export interface ThemeConfig {
  colors: {
    bg: string;
    textPrimary: string;
    textSecondary: string;
    borderButton: string;
    titleCopper: string;
    fundo: string;
    fundoCard: string;
    fundoElevado: string;
    texto: string;
    textoSecundario: string;
    textoMuted: string;
    ambar: string;
    ambarHover: string;
    ambarEscuro: string;
    ambarClaro: string;
  };
}
export interface HeroContent {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaMessage: string;
}
export interface PreMoldadaModel {
  nome: string;
  subtitulo?: string;
  imagem: StaticImageData;
}
export interface HomeContent {
  hero: HeroContent;
  preMoldadas: {
    title: string;
    introLines: string[];
    models: PreMoldadaModel[];
    ctaLabel: string;
    ctaMessage: string;
  };
  products: {
    title: string;
    subtitle: string;
  };
  sobMedida?: {
    title: string;
    steps: Array<{
      etapa: string;
      titulo: string;
      desc: string;
    }>;
    ctaLabel: string;
    ctaMessage: string;
    imageAlt: string;
  };
  regions: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
  };
  finalCta: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaMessage: string;
  };
}
