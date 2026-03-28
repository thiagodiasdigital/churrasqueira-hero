import preBaby from "../../../../fotos-site/sem-fundo/baby-45cm.png";
import preBabyMini from "../../../../fotos-site/sem-fundo/mini-baby.png";
import preBalcao from "../../../../fotos-site/sem-fundo/com-balcao-45cm.png";
import prePredial from "../../../../fotos-site/sem-fundo/predial.png";
import preTradicional from "../../../../fotos-site/sem-fundo/colonial-65cm-55cm.png";
import type { HomeContent } from "@/lib/site-types";

export const homeContent: HomeContent = {
  hero: {
    title: "Brasa, design e presença.",
    subtitle: "Projetos gourmet com acabamento premium para quem quer mais do que uma churrasqueira comum.",
    ctaLabel: "Solicitar Consultoria",
    ctaMessage: "Olá! Quero entender qual projeto gourmet combina com meu espaço.",
  },
  preMoldadas: {
    title: "Modelos em Destaque",
    introLines: [
      "Instalação prática.",
      "Estética premium.",
      "Estrutura durável.",
    ],
    models: [
      { nome: "Prime Compact 45cm", imagem: preBaby },
      { nome: "Mini Prime 45cm", imagem: preBabyMini },
      { nome: "Prime com Bancada 45cm", imagem: preBalcao },
      { nome: "Prime Predial 65cm", imagem: prePredial },
      {
        nome: "Prime Colonial 55cm",
        subtitulo: "Prime Colonial 65cm",
        imagem: preTradicional,
      },
    ],
    ctaLabel: "Receber Curadoria",
    ctaMessage: "Olá! Quero uma orientação para escolher o melhor modelo da Brasa Prime Gourmet.",
  },
  products: {
    title: "Qual solução gourmet faz sentido para o seu espaço?",
    subtitle:
      "De modelos compactos a projetos personalizados, veja o que entrega melhor estética, uso e performance.",
  },
  sobMedida: {
    title: "Como funciona um projeto gourmet sob medida?",
    steps: [
      {
        etapa: "01",
        titulo: "Diagnóstico do espaço",
        desc: "Analisamos medidas, circulação, exaustão e uso pretendido antes de indicar qualquer solução.",
      },
      {
        etapa: "02",
        titulo: "Direção estética",
        desc: "Definimos linguagem visual, acabamentos e composição do conjunto para integrar com seu ambiente.",
      },
      {
        etapa: "03",
        titulo: "Entrega instalada",
        desc: "Fabricamos, entregamos e instalamos com acompanhamento técnico até o espaço ficar pronto para uso.",
      },
    ],
    ctaLabel: "Quero um Projeto Gourmet",
    ctaMessage: "Olá! Quero solicitar um projeto gourmet sob medida.",
    imageAlt:
      "Projeto gourmet sob medida entregue pela Brasa Prime Gourmet",
  },
  regions: {
    title: "Onde atendemos em Campinas e região?",
    subtitle:
      "Atendemos Campinas e cidades próximas com entrega, instalação e consultoria para projetos gourmet.",
  },
  testimonials: {
    title: "O que nossos clientes relatam?",
  },
  finalCta: {
    title: "Seu espaço gourmet pode ter mais impacto",
    description:
      "Da escolha do modelo ao projeto completo, a Brasa Prime Gourmet orienta cada etapa com foco em resultado final.",
    ctaLabel: "Falar com Especialista",
    ctaMessage: "Olá! Quero falar com um especialista da Brasa Prime Gourmet.",
  },
};
