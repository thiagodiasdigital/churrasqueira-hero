/**
 * DADOS CENTRALIZADOS — Mundial Churrasqueiras
 * Single source of truth para todo conteudo do site.
 */

// ============================================================
// INTERFACES
// ============================================================

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

// ============================================================
// EMPRESA
// ============================================================

export const empresa: Empresa = {
  nome: "Mundial Churrasqueiras",
  descricao:
    "Churrasqueiras pre-moldadas, projetos sob medida e acessorios para churrasco em Juiz de Fora e regiao.",
  telefone: "(32) 99902-9461",
  telefoneLimpo: "5532999029461",
  whatsapp: "https://wa.me/5532999029461",
  email: "contato@mundialchurrasqueiras.com.br",
  instagram: "https://www.instagram.com/mundial.churrasqueiras/",
  instagramHandle: "@mundial.churrasqueiras",
  endereco: {
    rua: "R. Jose Lourenco Kelmer, 665",
    bairro: "Sao Pedro",
    cidade: "Juiz de Fora",
    estado: "MG",
    cep: "36036-330",
    completo:
      "R. Jose Lourenco Kelmer, 665 – Sao Pedro, Juiz de Fora – MG, 36036-330",
    lat: -21.7642,
    lng: -43.3503,
  },
  horario: "Seg a Sex: 8h as 18h | Sab: 8h as 12h",
  historia: `A Mundial Churrasqueiras nasceu da paixao pelo churrasco e pela vontade de transformar espacos em pontos de encontro. Em Juiz de Fora, construimos nossa reputacao entregando churrasqueiras que combinam qualidade artesanal com acabamento profissional. Cada projeto que sai da nossa oficina carrega o cuidado de quem entende que uma churrasqueira nao e so um equipamento — e o centro da area gourmet, o lugar onde momentos viram memorias.`,
  churrasqueirasEntregues: "500+",
  avaliacoesGoogle: 50,
};

// ============================================================
// PRODUTOS
// ============================================================

export const produtos: Produto[] = [
  {
    slug: "churrasqueira-pre-moldada",
    nome: "Churrasqueira Pre-Moldada",
    nomeCurto: "Pre-Moldada",
    descricaoCurta:
      "Estrutura solida com acabamento em tijolinho, ideal para areas gourmet em casas e apartamentos.",
    descricaoLonga: `A churrasqueira pre-moldada e a escolha de quem busca praticidade sem abrir mao da qualidade. Fabricada em modulos de concreto com acabamento em tijolinho refratario, ela chega pronta para instalacao e transforma qualquer espaco em uma area gourmet completa. A Mundial Churrasqueiras trabalha com modelos de diferentes tamanhos para atender desde varandas compactas ate grandes quintais em Juiz de Fora e regiao.`,
    badge: "Lider de Vendas",
    imagem: "/images/placeholder-churrasqueira-pre-moldada.webp",
    ctaTexto: "Orcar Churrasqueira",
    ctaMensagem:
      "Ola, gostaria de orcar uma churrasqueira pre-moldada. Pode me ajudar?",
    title:
      "Churrasqueira Pre-Moldada em Juiz de Fora — Modelos e Tamanhos | Mundial",
    metaDescription:
      "Churrasqueiras pre-moldadas em Juiz de Fora com acabamento em tijolinho, vidro e inox. Varios tamanhos para casas e apartamentos. Entrega e instalacao.",
    headings: {
      como: "Como escolher a churrasqueira pre-moldada ideal para sua area gourmet?",
      modelos: "Quais tamanhos de churrasqueira pre-moldada estao disponiveis?",
      faq: "Perguntas frequentes sobre churrasqueira pre-moldada",
    },
    conteudo: {
      como: `A escolha da churrasqueira pre-moldada depende de tres fatores: o espaco disponivel, o numero de pessoas que costumam participar do churrasco e o tipo de acabamento desejado. Para varandas de apartamento, modelos de 55cm atendem bem ate 6 pessoas. Quintais e areas gourmet maiores pedem modelos de 65cm a 85cm, com capacidade para reunir toda a familia. O acabamento pode variar entre tijolinho rustico, cimento natural ou revestimento personalizado.`,
      modelos: `A Mundial Churrasqueiras oferece modelos nos tamanhos padrao do mercado. Todos acompanham kit inox com grelha, porta-espeto e gaveta cinzeiro. A profundidade padrao e de 55cm e a altura total de aproximadamente 2,20m, incluindo coifa e duto.`,
    },
    especificacoes: [
      {
        tamanho: "55cm",
        descricao: "Compacta — ideal para varandas e espacos menores",
        pessoas: "Ate 6 pessoas",
      },
      {
        tamanho: "65cm",
        descricao: "Media — versatil para casas e apartamentos",
        pessoas: "Ate 10 pessoas",
      },
      {
        tamanho: "75cm",
        descricao: "Grande — para areas gourmet espacosas",
        pessoas: "Ate 15 pessoas",
      },
      {
        tamanho: "85cm",
        descricao: "Extra — para quem recebe com frequencia",
        pessoas: "15+ pessoas",
      },
    ],
    faq: [
      {
        pergunta:
          "Qual a diferenca entre churrasqueira pre-moldada e de alvenaria?",
        resposta: `A churrasqueira pre-moldada ja vem pronta de fabrica, em modulos que se encaixam sem necessidade de obra civil. A de alvenaria e construida tijolo a tijolo no local, exigindo pedreiro especializado e mais tempo de execucao. Em termos de desempenho termico, ambas funcionam bem. A pre-moldada leva vantagem na praticidade: instalacao em poucas horas, sem entulho e sem espera de cura.`,
      },
      {
        pergunta:
          "Churrasqueira pre-moldada cabe em varanda de apartamento?",
        resposta: `Sim. Os modelos de 55cm sao projetados exatamente para varandas e espacos compactos. Com apenas 55cm de largura e 55cm de profundidade, cabem na maioria das varandas gourmet de apartamentos em Juiz de Fora. O importante e verificar se o predio possui duto coletivo para a saida de fumaca.`,
      },
      {
        pergunta:
          "Quanto tempo leva para instalar uma churrasqueira pre-moldada?",
        resposta: `A instalacao de uma churrasqueira pre-moldada leva em media de 2 a 4 horas, dependendo do modelo e das condicoes do local. Como os modulos ja vem prontos, nao ha necessidade de esperar secagem de argamassa. Em muitos casos, a churrasqueira pode ser usada no dia seguinte a instalacao.`,
      },
      {
        pergunta:
          "A churrasqueira pre-moldada precisa de projeto para instalacao?",
        resposta: `Para modelos padrao em areas externas com saida de fumaca livre, nao e necessario projeto formal. Em apartamentos com duto coletivo ou em espacos onde o fluxo de fumaca precisa ser direcionado, a Mundial oferece consultoria tecnica gratuita para avaliar a melhor solucao antes da compra.`,
      },
      {
        pergunta:
          "Qual o tamanho ideal de churrasqueira para 10 pessoas?",
        resposta: `Para reunioes com ate 10 pessoas, o modelo de 65cm e o mais indicado. Ele oferece espaco suficiente na grelha para preparar carnes, linguicas e acompanhamentos ao mesmo tempo, sem precisar fazer rodizio de espetos. Se os churrascos costumam ter mais convidados, considere o modelo de 75cm para maior conforto.`,
      },
    ],
    schema: "Product",
  },
  {
    slug: "churrasqueira-de-vidro",
    nome: "Churrasqueira de Vidro",
    nomeCurto: "De Vidro",
    descricaoCurta:
      "Design moderno com vidro temperado e inox, perfeita para areas gourmet contemporaneas.",
    descricaoLonga: `A churrasqueira de vidro combina o desempenho da churrasqueira tradicional com um visual moderno e sofisticado. O vidro temperado resiste a altas temperaturas e facilita a limpeza, enquanto o acabamento em inox garante durabilidade. Na Mundial Churrasqueiras, oferecemos modelos com vidro lateral e traseiro, que permitem acompanhar o preparo sem abrir a churrasqueira.`,
    badge: "Design Moderno",
    imagem: "/images/placeholder-churrasqueira-vidro.webp",
    ctaTexto: "Orcar Churrasqueira de Vidro",
    ctaMensagem:
      "Ola, tenho interesse na churrasqueira de vidro. Pode me enviar mais informacoes?",
    title:
      "Churrasqueira de Vidro em Juiz de Fora — Design Moderno | Mundial",
    metaDescription:
      "Churrasqueira de vidro temperado com acabamento em inox em Juiz de Fora. Design moderno para areas gourmet. Orcamento sem compromisso.",
    headings: {
      como: "O que e uma churrasqueira de vidro e quando escolher esse modelo?",
      modelos: "Quais acabamentos de churrasqueira de vidro a Mundial oferece?",
      faq: "Perguntas frequentes sobre churrasqueira de vidro",
    },
    conteudo: {
      como: `A churrasqueira de vidro e uma evolucao da pre-moldada tradicional. Ela mantem a estrutura em concreto com braseiro refratario, mas substitui os paineis laterais e traseiro por vidro temperado. O resultado e uma peca que funciona como churrasqueira e como elemento decorativo da area gourmet. Ideal para quem busca um visual limpo e contemporaneo.`,
      modelos: `A Mundial trabalha com churrasqueiras de vidro nos acabamentos incolor (transparente), fume e bronze. Todas utilizam vidro temperado resistente a altas temperaturas. Os paineis sao removiveis para facilitar a limpeza. A coifa pode ser em inox escovado ou com pintura eletrostatica preta.`,
    },
    especificacoes: [],
    faq: [
      {
        pergunta: "Churrasqueira de vidro e resistente ao calor?",
        resposta: `Sim. O vidro temperado utilizado nas churrasqueiras suporta temperaturas elevadas sem trincar. Ele passa por um processo de tempera termica que aumenta sua resistencia em ate 5 vezes comparado ao vidro comum. E o mesmo tipo de vidro usado em portas de forno.`,
      },
      {
        pergunta:
          "Churrasqueira de vidro ou de tijolinho: qual a melhor para area gourmet?",
        resposta: `Depende do estilo da sua area gourmet. A de tijolinho combina com ambientes rusticos e tradicionais. A de vidro se encaixa melhor em espacos modernos e minimalistas. Em termos de desempenho, ambas assam igualmente bem. A diferenca principal e estetica e de manutencao — o vidro e mais facil de limpar.`,
      },
      {
        pergunta: "A churrasqueira de vidro acumula fumaca?",
        resposta: `Nao, desde que a coifa e o duto estejam dimensionados corretamente. O vidro nao interfere no fluxo de fumaca. Na verdade, os paineis laterais ajudam a direcionar a fumaca para cima, melhorando a tiragem. A Mundial faz a avaliacao do espaco para garantir que a exaustao funcione perfeitamente.`,
      },
      {
        pergunta: "Quanto custa uma churrasqueira de vidro sob medida?",
        resposta: `O valor varia conforme o tamanho, tipo de vidro e acabamento escolhido. A melhor forma de obter um orcamento preciso e entrar em contato pelo WhatsApp com as medidas do seu espaco. A consultoria inicial e gratuita e sem compromisso.`,
      },
    ],
    schema: "Product",
  },
  {
    slug: "churrasqueira-sob-medida",
    nome: "Projeto de Churrasqueira Sob Medida",
    nomeCurto: "Sob Medida",
    descricaoCurta:
      "Projeto exclusivo para seu espaco — da consultoria tecnica a instalacao completa.",
    descricaoLonga: `Nem todo espaco aceita uma churrasqueira padrao. Varandas com layout irregular, quintais com restricao de fumaca ou areas gourmet que precisam integrar pia, fogao e churrasqueira pedem um projeto sob medida. A Mundial Churrasqueiras desenvolve projetos exclusivos que aproveitam cada centimetro, com consultoria tecnica de fluxo de fumaca, design 3D e instalacao completa.`,
    badge: "100% Personalizado",
    imagem: "/images/placeholder-sob-medida.webp",
    ctaTexto: "Quero um Projeto Exclusivo",
    ctaMensagem:
      "Ola! Gostaria de um projeto de churrasqueira sob medida. Pode me ajudar?",
    title:
      "Projeto de Churrasqueira Sob Medida em Juiz de Fora | Mundial",
    metaDescription:
      "Projetos exclusivos de churrasqueira sob medida em Juiz de Fora. Consultoria tecnica, projeto 3D e instalacao completa. Solicite orcamento.",
    headings: {
      como: "Como funciona o projeto de churrasqueira sob medida da Mundial?",
      modelos: "O que inclui o projeto sob medida?",
      faq: "Perguntas frequentes sobre projetos sob medida",
    },
    conteudo: {
      como: `O processo comeca com uma visita tecnica ao local. Nossa equipe avalia as dimensoes do espaco, o fluxo de fumaca, a posicao da saida de dutos e as preferencias de acabamento. Com essas informacoes, desenvolvemos um projeto que maximiza o aproveitamento da area disponivel. Voce recebe uma visualizacao antes da fabricacao comecar.`,
      modelos: `O projeto sob medida inclui tres etapas: consultoria tecnica com avaliacao do local e fluxo de fumaca, design exclusivo com escolha de acabamentos (vidro, inox, rustico ou misto) e entrega completa com instalacao profissional. Trabalhamos com varandas de apartamento, quintais, areas gourmet integradas e espacos comerciais.`,
    },
    especificacoes: [],
    faq: [
      {
        pergunta:
          "Quanto tempo demora um projeto de churrasqueira sob medida?",
        resposta: `Do primeiro contato a instalacao, o prazo medio e de 15 a 30 dias, dependendo da complexidade do projeto e dos acabamentos escolhidos. A consultoria tecnica inicial pode ser agendada em ate 48 horas apos o contato.`,
      },
      {
        pergunta: "A Mundial faz projeto 3D antes da instalacao?",
        resposta: `Sim. Antes de iniciar a fabricacao, voce recebe uma visualizacao do projeto para aprovar medidas, acabamentos e posicionamento. Ajustes podem ser feitos nessa etapa sem custo adicional.`,
      },
      {
        pergunta:
          "Projeto sob medida funciona para varandas de apartamento?",
        resposta: `Sim, e e justamente nesses espacos que o projeto sob medida faz mais diferenca. Varandas tem limitacoes de peso, dimensao e exaustao que exigem solucoes especificas. A Mundial ja instalou churrasqueiras em dezenas de apartamentos em Juiz de Fora.`,
      },
      {
        pergunta: "O que e consultoria de fluxo de fumaca?",
        resposta: `E a avaliacao tecnica de como a fumaca vai se comportar no seu espaco. Analisamos a posicao da churrasqueira em relacao a ventos, aberturas e dutos para garantir que a fumaca saia pelo caminho certo, sem incomodar vizinhos ou retornar ao ambiente.`,
      },
    ],
    schema: "Service",
  },
  {
    slug: "utensilios-churrasco",
    nome: "Utensilios de Churrasco",
    nomeCurto: "Utensilios",
    descricaoCurta:
      "Utensilios em inox reforcado para quem leva o churrasco a serio.",
    descricaoLonga: `Os utensilios certos fazem diferenca no resultado do churrasco. A Mundial Churrasqueiras trabalha com uma linha de utensilios em aco inox reforcado: pegadores, garfos trinchantes, espatulas e conjuntos completos. Todos projetados para resistir ao uso frequente e ao calor intenso da churrasqueira.`,
    badge: "Inox Reforcado",
    imagem: "/images/placeholder-utensilios.webp",
    ctaTexto: "Ver Utensilios",
    ctaMensagem:
      "Ola, tenho interesse nos utensilios de churrasco. Quais opcoes voces tem?",
    title:
      "Utensilios de Churrasco em Inox — Juiz de Fora | Mundial Churrasqueiras",
    metaDescription:
      "Utensilios de churrasco em inox reforcado em Juiz de Fora. Pegadores, garfos, espatulas e kits completos. Mundial Churrasqueiras.",
    headings: {
      como: "Quais utensilios sao essenciais para um bom churrasco?",
      modelos: "Quais utensilios a Mundial Churrasqueiras oferece?",
      faq: "Perguntas frequentes sobre utensilios de churrasco",
    },
    conteudo: {
      como: `Um bom churrasco pede pelo menos cinco utensilios basicos: pegador longo para manusear carnes na grelha, garfo trinchante para cortes grandes, faca de desossa para preparacao, espatula para alimentos menores e um bom amolador. O material faz diferenca — utensilios em inox reforcado nao enferrujam, suportam calor e duram anos de uso intenso.`,
      modelos: `A Mundial oferece utensilios avulsos e kits completos. Todos em aco inox reforcado com cabos ergonomicos. Os kits acompanham estojo ou suporte para organizacao na area gourmet.`,
    },
    especificacoes: [],
    faq: [
      {
        pergunta:
          "Qual a vantagem de utensilios de churrasco em inox reforcado?",
        resposta: `O inox reforcado resiste a corrosao, ao calor e ao desgaste do uso frequente. Diferente de utensilios comuns que enferrujam ou entortam, os de inox mantem a integridade mesmo apos anos de uso. A limpeza tambem e mais simples.`,
      },
      {
        pergunta: "Kit de utensilios acompanha suporte?",
        resposta: `Sim, os kits da Mundial acompanham suporte ou estojo, dependendo do modelo. O suporte pode ser fixado na parede da area gourmet ou apoiado na bancada.`,
      },
      {
        pergunta: "Quais utensilios a Mundial Churrasqueiras vende?",
        resposta: `A linha inclui pegadores de diferentes tamanhos, garfos trinchantes, espatulas, facas de churrasco, amoladores e kits completos que combinam as pecas mais utilizadas. Todos em inox reforcado.`,
      },
    ],
    schema: "Product",
  },
  {
    slug: "carvao-vegetal",
    nome: "Carvao Vegetal Premium",
    nomeCurto: "Carvao",
    descricaoCurta:
      "Carvao vegetal com brasa duradoura e limpa — sacos de 5kg e 10kg com entrega rapida.",
    descricaoLonga: `O carvao certo garante brasa uniforme, sem fumaca excessiva e com duracao suficiente para um churrasco tranquilo. A Mundial trabalha com carvao vegetal premium em sacos de 5kg e 10kg, selecionado para oferecer acendimento facil e brasa duradoura. Entrega rapida em Juiz de Fora e regiao.`,
    badge: "Sem Fumaca",
    imagem: "/images/placeholder-carvao.webp",
    ctaTexto: "Pedir Carvao",
    ctaMensagem: "Ola, preciso de carvao vegetal premium. Qual o valor?",
    title:
      "Carvao Vegetal Premium em Juiz de Fora — Entrega Rapida | Mundial",
    metaDescription:
      "Carvao vegetal premium com brasa duradoura em Juiz de Fora. Sacos de 5kg e 10kg. Entrega rapida. Mundial Churrasqueiras.",
    headings: {
      como: "Como escolher o melhor carvao vegetal para churrasco?",
      modelos: "Quais opcoes de carvao a Mundial oferece?",
      faq: "Perguntas frequentes sobre carvao vegetal",
    },
    conteudo: {
      como: `O melhor carvao vegetal para churrasco tem tres caracteristicas: acende rapido, produz brasa uniforme e dura o suficiente para assar sem precisar repor. Carvoes de eucalipto e de madeira de lei sao os mais indicados. Evite carvoes que produzem muita fumaca ou que se desfazem rapido em cinza.`,
      modelos: `Trabalhamos com carvao vegetal premium em embalagens de 5kg (ideal para churrascos menores ou reposicao rapida) e 10kg (para reunioes maiores ou estoque). Entrega disponivel em Juiz de Fora e cidades da regiao.`,
    },
    especificacoes: [],
    faq: [
      {
        pergunta:
          "Qual a diferenca entre carvao vegetal comum e premium?",
        resposta: `O carvao premium e produzido com madeiras selecionadas e passa por um processo de carbonizacao mais controlado. Isso resulta em pedacos mais uniformes, menos poeira, acendimento mais facil e brasa que dura mais. O carvao comum costuma ter muitos pedacos pequenos e produz mais fumaca.`,
      },
      {
        pergunta: "Carvao de 5kg ou 10kg: qual rende mais?",
        resposta: `O saco de 10kg e mais economico por quilo. Para um churrasco com 6 a 8 pessoas, um saco de 5kg costuma ser suficiente. Se os churrascos sao frequentes ou com mais convidados, o de 10kg oferece melhor custo-beneficio.`,
      },
      {
        pergunta: "O carvao da Mundial Churrasqueiras faz fumaca?",
        resposta: `O carvao premium que trabalhamos produz quantidade minima de fumaca apos o acendimento. Uma vez formada a brasa, a fumaca e praticamente inexistente, tornando o churrasco mais confortavel, especialmente em espacos semi-cobertos.`,
      },
      {
        pergunta: "Tem entrega de carvao em Juiz de Fora?",
        resposta: `Sim. A Mundial faz entrega de carvao em Juiz de Fora e cidades vizinhas. Entre em contato pelo WhatsApp para consultar disponibilidade e prazo para sua regiao.`,
      },
    ],
    schema: "Product",
  },
  {
    slug: "kit-facas-churrasco",
    nome: "Kit de Facas de Churrasco",
    nomeCurto: "Kit Facas",
    descricaoCurta:
      "Facas de diferentes tamanhos com amolador — tudo em aco inox para o churrasco completo.",
    descricaoLonga: `O kit de facas da Mundial Churrasqueiras reune facas de diferentes tamanhos e utilidades, acompanhadas de amolador para manter o fio sempre afiado. Todas em aco inox, com cabos ergonomicos que garantem firmeza e seguranca no manuseio. Referencia em Juiz de Fora para quem leva o churrasco a serio.`,
    badge: "Aco Inox",
    imagem: "/images/placeholder-kit-facas.webp",
    ctaTexto: "Ver Kit de Facas",
    ctaMensagem:
      "Ola, quero conhecer o kit de facas de churrasco. Pode me enviar informacoes?",
    title:
      "Kit de Facas de Churrasco em Inox — Juiz de Fora | Mundial",
    metaDescription:
      "Kit de facas de churrasco em aco inox com amolador. Facas de diferentes tamanhos. Referencia em Juiz de Fora. Mundial Churrasqueiras.",
    headings: {
      como: "O que vem no kit de facas de churrasco da Mundial?",
      modelos: "Quais modelos de facas estao disponiveis?",
      faq: "Perguntas frequentes sobre kit de facas",
    },
    conteudo: {
      como: `O kit inclui facas de diferentes tamanhos pensadas para cada etapa do churrasco: faca de desossa para preparar os cortes, faca de chef para cortes maiores, faca de mesa para servir e amolador para manter o fio. Todas em aco inox com cabos ergonomicos que nao escorregam mesmo com as maos umidas.`,
      modelos: `Oferecemos kits com 3, 5 e 7 pecas, alem de facas avulsas para quem quer complementar um conjunto existente. Todos os kits acompanham amolador e estojo ou suporte.`,
    },
    especificacoes: [],
    faq: [
      {
        pergunta: "Facas de churrasco em inox precisam de amolador?",
        resposta: `Sim. Mesmo facas de inox de alta qualidade perdem o fio com o uso. O amolador incluido no kit permite recuperar o corte em segundos, sem precisar de afiacao profissional. Recomendamos amolar antes de cada churrasco para melhor desempenho.`,
      },
      {
        pergunta: "Qual faca usar para cada tipo de corte no churrasco?",
        resposta: `Faca de desossa (lamina fina e flexivel) para separar carnes do osso. Faca de chef (lamina larga) para cortar pecas grandes como picanha e costela. Faca de mesa (serrilhada ou lisa) para servir e fatiar na hora de comer.`,
      },
      {
        pergunta: "O kit de facas da Mundial acompanha estojo?",
        resposta: `Sim. Os kits completos acompanham estojo de protecao para armazenamento e transporte. O estojo mantem as laminas protegidas e organizadas.`,
      },
    ],
    schema: "Product",
  },
];

// ============================================================
// REGIOES
// ============================================================

export const regioes: Regiao[] = [
  {
    slug: "juiz-de-fora",
    cidade: "Juiz de Fora",
    estado: "MG",
    distancia: "0 km (sede)",
    distanciaNum: 0,
    descricao: `A Mundial Churrasqueiras tem sede no bairro Sao Pedro, em Juiz de Fora. Atendemos toda a cidade com entrega e instalacao de churrasqueiras pre-moldadas, projetos sob medida e acessorios para churrasco. Sao mais de 50 avaliacoes positivas no Google de clientes juiz-foranos satisfeitos.`,
    faq: [
      {
        pergunta:
          "A Mundial Churrasqueiras tem loja fisica em Juiz de Fora?",
        resposta: `Sim. Nossa loja e showroom ficam na R. Jose Lourenco Kelmer, 665, no bairro Sao Pedro. Voce pode visitar para ver os modelos de perto e conversar com nossa equipe tecnica.`,
      },
      {
        pergunta:
          "Quanto custa a entrega de churrasqueira em Juiz de Fora?",
        resposta: `Para a cidade de Juiz de Fora, consulte condicoes especiais de entrega pelo WhatsApp. O valor depende do modelo e do bairro de entrega.`,
      },
      {
        pergunta: "A Mundial instala churrasqueira em apartamento em Juiz de Fora?",
        resposta: `Sim. Temos experiencia com instalacao em apartamentos de diversos bairros de Juiz de Fora. Avaliamos o espaco, o duto coletivo e as condicoes de acesso antes da instalacao.`,
      },
    ],
  },
  {
    slug: "matias-barbosa",
    cidade: "Matias Barbosa",
    estado: "MG",
    distancia: "21 km",
    distanciaNum: 21,
    descricao: `Matias Barbosa fica a apenas 21 km de Juiz de Fora, praticamente vizinha a nossa sede. A Mundial Churrasqueiras atende Matias Barbosa com entrega e instalacao de churrasqueiras pre-moldadas e projetos sob medida. O frete para a cidade e acessivel pela proximidade.`,
    faq: [
      {
        pergunta: "A Mundial Churrasqueiras entrega em Matias Barbosa?",
        resposta: `Sim. Matias Barbosa esta a apenas 21 km da nossa sede em Juiz de Fora. Fazemos entrega e instalacao na cidade com prazo curto.`,
      },
      {
        pergunta: "Quanto tempo demora a entrega de churrasqueira em Matias Barbosa?",
        resposta: `Pela proximidade, a entrega em Matias Barbosa costuma ser feita em poucos dias apos a confirmacao do pedido. O prazo exato depende da disponibilidade do modelo.`,
      },
      {
        pergunta: "Tem instalacao de churrasqueira em Matias Barbosa?",
        resposta: `Sim. Nossa equipe se desloca ate Matias Barbosa para instalacao. Agendamos a visita conforme a disponibilidade do cliente.`,
      },
    ],
  },
  {
    slug: "santos-dumont",
    cidade: "Santos Dumont",
    estado: "MG",
    distancia: "40 km",
    distanciaNum: 40,
    descricao: `Santos Dumont, a terra do pai da aviacao, fica a cerca de 40 km de Juiz de Fora. A Mundial Churrasqueiras atende a cidade com entrega de churrasqueiras pre-moldadas, acessorios e projetos sob medida.`,
    faq: [
      {
        pergunta: "A Mundial Churrasqueiras entrega em Santos Dumont?",
        resposta: `Sim. Santos Dumont esta dentro da nossa area de entrega, a cerca de 40 km da sede. Entre em contato pelo WhatsApp para consultar prazo e frete.`,
      },
      {
        pergunta: "Quanto custa o frete de churrasqueira para Santos Dumont?",
        resposta: `O valor do frete depende do modelo e peso da churrasqueira. Para Santos Dumont, o frete e calculado com base na distancia de 40 km. Consulte pelo WhatsApp.`,
      },
      {
        pergunta: "Tem instalacao de churrasqueira em Santos Dumont?",
        resposta: `Sim, oferecemos servico de instalacao em Santos Dumont. A equipe se desloca ate a cidade mediante agendamento previo.`,
      },
    ],
  },
  {
    slug: "bicas",
    cidade: "Bicas",
    estado: "MG",
    distancia: "37 km",
    distanciaNum: 37,
    descricao: `Bicas fica a 37 km de Juiz de Fora e esta dentro da area de atendimento da Mundial Churrasqueiras. Entregamos churrasqueiras pre-moldadas, acessorios e realizamos projetos sob medida na cidade.`,
    faq: [
      {
        pergunta: "A Mundial Churrasqueiras entrega em Bicas?",
        resposta: `Sim. Bicas esta a 37 km da nossa sede e faz parte da nossa area de entrega regular. Consulte prazo e condicoes pelo WhatsApp.`,
      },
      {
        pergunta: "Quanto tempo demora a entrega em Bicas?",
        resposta: `A entrega em Bicas e feita em poucos dias apos confirmacao. O prazo exato depende do modelo escolhido e da agenda de entregas.`,
      },
      {
        pergunta: "Tem instalacao de churrasqueira em Bicas?",
        resposta: `Sim. Nossa equipe faz instalacao em Bicas com agendamento previo.`,
      },
    ],
  },
  {
    slug: "lima-duarte",
    cidade: "Lima Duarte",
    estado: "MG",
    distancia: "68 km",
    distanciaNum: 68,
    descricao: `Lima Duarte, porta de entrada para o Parque Estadual do Ibitipoca, fica a 68 km de Juiz de Fora. A Mundial Churrasqueiras atende a cidade e a regiao com entrega de churrasqueiras e projetos sob medida.`,
    faq: [
      {
        pergunta: "A Mundial Churrasqueiras entrega em Lima Duarte?",
        resposta: `Sim. Lima Duarte esta dentro da nossa area de atendimento. A distancia de 68 km permite entrega com logistica planejada. Consulte condicoes pelo WhatsApp.`,
      },
      {
        pergunta: "Quanto custa o frete para Lima Duarte?",
        resposta: `O frete para Lima Duarte e calculado com base no peso do produto e na distancia de 68 km. Entre em contato para orcamento detalhado.`,
      },
      {
        pergunta: "Tem instalacao de churrasqueira em Lima Duarte?",
        resposta: `Sim, mediante agendamento. Nossa equipe se desloca ate Lima Duarte para instalacao profissional.`,
      },
    ],
  },
  {
    slug: "mar-de-espanha",
    cidade: "Mar de Espanha",
    estado: "MG",
    distancia: "60 km",
    distanciaNum: 60,
    descricao: `Mar de Espanha fica a 60 km de Juiz de Fora e faz parte da area de atendimento da Mundial Churrasqueiras. Levamos churrasqueiras pre-moldadas e acessorios ate a cidade.`,
    faq: [
      {
        pergunta: "A Mundial entrega churrasqueira em Mar de Espanha?",
        resposta: `Sim. Mar de Espanha esta a 60 km da nossa sede e recebe entregas regulares. Consulte prazo e frete pelo WhatsApp.`,
      },
      {
        pergunta: "Quanto tempo demora a entrega em Mar de Espanha?",
        resposta: `O prazo medio de entrega para Mar de Espanha depende do modelo e da disponibilidade. Normalmente, poucos dias apos a confirmacao.`,
      },
      {
        pergunta: "Tem instalacao em Mar de Espanha?",
        resposta: `Sim, com agendamento previo. Nossa equipe faz a instalacao no local.`,
      },
    ],
  },
  {
    slug: "barbacena",
    cidade: "Barbacena",
    estado: "MG",
    distancia: "98 km",
    distanciaNum: 98,
    descricao: `Barbacena, a Cidade das Rosas, fica a 98 km de Juiz de Fora. A Mundial Churrasqueiras atende Barbacena com entrega de churrasqueiras pre-moldadas, acessorios e projetos sob medida para residencias e areas gourmet.`,
    faq: [
      {
        pergunta: "A Mundial Churrasqueiras entrega em Barbacena?",
        resposta: `Sim. Barbacena esta a 98 km da sede e faz parte da nossa area de entrega. O frete e calculado conforme o produto. Consulte pelo WhatsApp.`,
      },
      {
        pergunta: "Quanto custa o frete para Barbacena?",
        resposta: `O valor varia conforme peso e modelo. Para Barbacena, a distancia de 98 km e considerada no calculo. Solicite orcamento detalhado pelo WhatsApp.`,
      },
      {
        pergunta: "Tem instalacao de churrasqueira em Barbacena?",
        resposta: `Sim, mediante agendamento. Nossa equipe faz instalacao profissional em Barbacena.`,
      },
    ],
  },
  {
    slug: "leopoldina",
    cidade: "Leopoldina",
    estado: "MG",
    distancia: "98 km",
    distanciaNum: 98,
    descricao: `Leopoldina fica a 98 km de Juiz de Fora, na Zona da Mata Mineira. A Mundial Churrasqueiras atende a cidade com entrega de churrasqueiras e acessorios para churrasco.`,
    faq: [
      {
        pergunta: "A Mundial Churrasqueiras entrega em Leopoldina?",
        resposta: `Sim. Leopoldina esta dentro do nosso raio de atendimento, a 98 km de Juiz de Fora. Consulte condicoes pelo WhatsApp.`,
      },
      {
        pergunta: "Quanto tempo demora a entrega em Leopoldina?",
        resposta: `O prazo depende do modelo e disponibilidade. Para Leopoldina, as entregas sao programadas conforme a agenda logistica.`,
      },
      {
        pergunta: "Tem instalacao de churrasqueira em Leopoldina?",
        resposta: `Sim, com agendamento. Nossa equipe faz instalacao na cidade.`,
      },
    ],
  },
];

// ============================================================
// DEPOIMENTOS
// ============================================================

export const depoimentos: Depoimento[] = [
  {
    nome: "Pedra Cor",
    texto:
      "Excelente atendimento e produtos variados de alta qualidade. Muito top. Recomendo.",
  },
  {
    nome: "Tania Baptista",
    texto:
      "Gostei muito do atendimento e principalmente do servico. Pontual na entrega. Recomendo.",
  },
  {
    nome: "Sinara Dias Silva",
    texto:
      "Churrasqueira pre-moldada em Juiz de Fora nao existe melhor!",
  },
  {
    nome: "Joao Paulo Barreto",
    texto:
      "Otimo atendimento, qualidade, profissionalismo nota 1000, super indico.",
  },
  {
    nome: "Vitrine Kids",
    texto:
      "Fui muito bem atendido, tive uma otima explicacao dos materiais. Recomendo muito, nota dez para essa equipe.",
  },
];
