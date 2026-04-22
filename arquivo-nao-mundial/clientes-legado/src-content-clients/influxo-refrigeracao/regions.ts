import type { Regiao } from "@/lib/site-types";

export const regioes: Regiao[] = [
  {
    slug: "tres-rios-rj",
    cidade: "Três Rios",
    estado: "RJ",
    distancia: "0 km (base)",
    distanciaNum: 0,
    descricao:
      "A Influxo Refrigeração atende Três Rios com serviços de climatização para residências, empresas e comércios, com foco em agilidade, suporte técnico e atendimento local.",
    faq: [],
  },
  {
    slug: "paraiba-do-sul-rj",
    cidade: "Paraíba do Sul",
    estado: "RJ",
    distancia: "Aproximadamente 12 km",
    distanciaNum: 12,
    descricao:
      "Atendimento regional para instalação, manutenção e higienização de ar-condicionado com agilidade e suporte técnico especializado.",
    faq: [
      {
        pergunta: "Vocês atendem Paraíba do Sul?",
        resposta:
          "Sim. A Influxo atende Paraíba do Sul com serviços de climatização para residências e empresas.",
      },
      {
        pergunta: "Posso pedir orçamento pelo WhatsApp?",
        resposta:
          "Sim. O orçamento inicial e o pré-atendimento podem ser feitos pelo WhatsApp.",
      },
    ],
  },
  {
    slug: "comendador-levy-gasparian-rj",
    cidade: "Comendador Levy Gasparian",
    estado: "RJ",
    distancia: "Aproximadamente 11 km",
    distanciaNum: 11,
    descricao:
      "Atendimento técnico para clientes que buscam instalação, manutenção preventiva, manutenção corretiva e higienização de ar-condicionado.",
    faq: [
      {
        pergunta: "Vocês atendem Levy Gasparian?",
        resposta:
          "Sim. A cidade está dentro da área de atendimento regional da Influxo.",
      },
      {
        pergunta: "Vocês fazem instalação e manutenção?",
        resposta:
          "Sim. A Influxo atende com instalação, manutenção e higienização conforme a necessidade do cliente.",
      },
    ],
  },
  {
    slug: "areal-rj",
    cidade: "Areal",
    estado: "RJ",
    distancia: "Aproximadamente 27 km",
    distanciaNum: 27,
    descricao:
      "Região atendida mediante agendamento, com suporte para climatização residencial e comercial.",
    faq: [
      {
        pergunta: "Vocês atendem Areal?",
        resposta:
          "Sim. O atendimento pode ser realizado mediante agendamento prévio.",
      },
      {
        pergunta: "O atendimento é apenas residencial?",
        resposta:
          "Não. A Influxo atende tanto clientes residenciais quanto comerciais.",
      },
    ],
  },
];
