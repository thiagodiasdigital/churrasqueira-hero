import preBaby from "../../../../assets-source/mundial/pre-moldadas/baby-45cm.png";
import preBabyMini from "../../../../assets-source/mundial/pre-moldadas/mini-baby.png";
import preBalcao from "../../../../assets-source/mundial/pre-moldadas/com-balcao-45cm.png";
import prePredial from "../../../../assets-source/mundial/pre-moldadas/predial.png";
import preTradicional from "../../../../assets-source/mundial/pre-moldadas/colonial-65cm-55cm.png";
import type { HomeContent } from "@/lib/site-types";

export const homeContent: HomeContent = {
  hero: {
    title: "O Fogo que Reúne",
    subtitle: "Churrasqueiras artesanais que transformam momentos em memórias",
    ctaLabel: "Fale com um Consultor",
    ctaMessage: "Olá! Quero saber mais sobre as churrasqueiras da Mundial.",
  },
  preMoldadas: {
    title: "Churrasqueiras Pre-Moldadas",
    introLines: [
      "Prontas para instalar.",
      "Duraveis.",
      "Acabamento impecavel.",
    ],
    models: [
      { nome: "COLONIAL BABY 45cm", imagem: preBaby },
      { nome: "BABY MINI 45cm", imagem: preBabyMini },
      { nome: "COLONIAL COM BALCAO 45cm", imagem: preBalcao },
      { nome: "PREDIAL 65cm", imagem: prePredial },
      {
        nome: "COLONIAL 55cm",
        subtitulo: "COLONIAL 65cm",
        imagem: preTradicional,
      },
    ],
    ctaLabel: "Receber orientacao",
    ctaMessage: "Olá! Quero receber orientação sobre churrasqueiras pré-moldadas.",
  },
  products: {
    title: "Qual churrasqueira combina com o seu espaço?",
    subtitle:
      "Do tijolinho clássico ao vidro moderno — veja o que combina com sua área gourmet.",
  },
  sobMedida: {
    title: "Como funciona um projeto de churrasqueira sob medida?",
    steps: [
      {
        etapa: "01",
        titulo: "Consultoria Técnica",
        desc: "Avaliação do local, medidas e fluxo de fumaça. Entendemos o espaço antes de propor.",
      },
      {
        etapa: "02",
        titulo: "Design Exclusivo",
        desc: "Projeto visual com escolha de acabamentos: vidro, inox, tijolinho ou misto. Você aprova antes de fabricar.",
      },
      {
        etapa: "03",
        titulo: "Entrega Completa",
        desc: "Fabricação, entrega e instalação profissional. Da oficina até sua área gourmet pronta.",
      },
    ],
    ctaLabel: "Quero um Projeto Exclusivo",
    ctaMessage: "Olá! Gostaria de um projeto de churrasqueira sob medida.",
    imageAlt:
      "Projeto de churrasqueira sob medida entregue pela Mundial Churrasqueiras",
  },
  regions: {
    title: "Entrega e instalação em Juiz de Fora e região — onde atendemos?",
    subtitle:
      "Entregamos e instalamos churrasqueiras em Juiz de Fora e em cidades da Zona da Mata Mineira.",
  },
  testimonials: {
    title: "O que nossos clientes dizem?",
  },
  finalCta: {
    title: "Monte sua área gourmet com quem entende",
    description:
      "Da escolha do modelo até a instalação — a Mundial cuida de tudo para você só se preocupar com o tempero.",
    ctaLabel: "Falar com Especialista",
    ctaMessage: "Olá! Quero montar minha área gourmet. Pode me ajudar?",
  },
};

