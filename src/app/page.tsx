import { Hero } from "@/components/Hero/Hero";
import { empresa, produtos, regioes, depoimentos } from "@/lib/data";
import {
  Section,
  SectionHeading,
  ProductCard,
  RegionCard,
  TestimonialCard,
  CTAWhatsApp,
} from "@/components/ui";

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO — Componente scroll-driven (Canvas 2D)
          ============================================================ */}
      <Hero />

      {/* ============================================================
          AUTORIDADE
          ============================================================ */}
      <Section id="autoridade" mesh>
        <SectionHeading
          sub={`Sao mais de ${empresa.avaliacoesGoogle} avaliacoes positivas no Google. Em Juiz de Fora, quem conhece churrasco conhece a Mundial.`}
        >
          Por que a Mundial Churrasqueiras e referencia em Juiz de Fora?
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              titulo: "Qualidade Artesanal",
              desc: "Cada churrasqueira e montada com materiais selecionados — tijolo refratario, inox e acabamentos que duram decadas.",
              icone: "\u{1F525}",
            },
            {
              titulo: "Projeto Tecnico",
              desc: "Consultoria de fluxo de fumaca, avaliacao do espaco e visualizacao do projeto antes da fabricacao.",
              icone: "\u{1F4D0}",
            },
            {
              titulo: "Entrega e Instalacao",
              desc: "Da nossa oficina ate sua area gourmet — entregamos e instalamos em Juiz de Fora e cidades da Zona da Mata.",
              icone: "\u{1F69A}",
            },
          ].map((pilar, i) => (
            <div
              key={i}
              className="bg-fundo-card border border-ambar-escuro/15 rounded-xl p-6"
            >
              <span className="text-3xl mb-3 block" aria-hidden="true">
                {pilar.icone}
              </span>
              <h3 className="font-serif font-semibold text-lg text-texto mb-2">
                {pilar.titulo}
              </h3>
              <p className="text-sm text-texto-secundario leading-relaxed">
                {pilar.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================================
          PRODUTOS
          ============================================================ */}
      <Section id="produtos">
        <SectionHeading
          sub="Do tijolinho classico ao vidro moderno — veja o que combina com sua area gourmet."
        >
          Qual churrasqueira combina com o seu espaco?
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <ProductCard key={produto.slug} produto={produto} />
          ))}
        </div>
      </Section>

      {/* ============================================================
          PROJETOS SOB MEDIDA
          ============================================================ */}
      <Section id="sob-medida" mesh className="bg-fundo-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading>
              Como funciona um projeto de churrasqueira sob medida?
            </SectionHeading>
            <div className="space-y-6">
              {[
                {
                  etapa: "01",
                  titulo: "Consultoria Tecnica",
                  desc: "Avaliacao do local, medidas e fluxo de fumaca. Entendemos o espaco antes de propor.",
                },
                {
                  etapa: "02",
                  titulo: "Design Exclusivo",
                  desc: "Projeto visual com escolha de acabamentos: vidro, inox, tijolinho ou misto. Voce aprova antes de fabricar.",
                },
                {
                  etapa: "03",
                  titulo: "Entrega Completa",
                  desc: "Fabricacao, entrega e instalacao profissional. Da oficina ate sua area gourmet pronta.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-ambar/10 border border-ambar/30 rounded-lg font-serif font-bold text-ambar text-sm">
                    {item.etapa}
                  </span>
                  <div>
                    <p className="font-serif font-semibold text-texto">
                      {item.titulo}
                    </p>
                    <p className="text-sm text-texto-secundario mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAWhatsApp
                texto="Quero um Projeto Exclusivo"
                mensagem="Ola! Gostaria de um projeto de churrasqueira sob medida."
              />
            </div>
          </div>

          {/* Imagem lateral */}
          <div>
            <div className="aspect-[3/4] bg-fundo-elevado rounded-xl border border-ambar-escuro/15 flex items-center justify-center text-texto-muted text-sm">
              [Foto: Projeto sob medida entregue]
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          REGIOES
          ============================================================ */}
      <Section id="regioes">
        <SectionHeading
          sub="Entregamos e instalamos churrasqueiras em Juiz de Fora e em cidades da Zona da Mata Mineira."
        >
          Entrega e instalacao em Juiz de Fora e regiao — onde atendemos?
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {regioes.map((regiao) => (
            <RegionCard key={regiao.slug} regiao={regiao} />
          ))}
        </div>
      </Section>

      {/* ============================================================
          DEPOIMENTOS
          ============================================================ */}
      <Section id="depoimentos" mesh>
        <SectionHeading sub={`${empresa.avaliacoesGoogle} avaliacoes no Google`}>
          O que nossos clientes dizem?
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((dep, i) => (
            <TestimonialCard key={i} depoimento={dep} />
          ))}
        </div>
      </Section>

      {/* ============================================================
          CTA FINAL
          ============================================================ */}
      <Section className="text-center">
        <h2 className="font-serif font-bold text-2xl md:text-4xl text-texto mb-4">
          Monte sua area gourmet com quem entende
        </h2>
        <p className="text-texto-secundario text-lg mb-8 max-w-xl mx-auto">
          Da escolha do modelo ate a instalacao — a Mundial cuida de tudo para
          voce so se preocupar com o tempero.
        </p>
        <CTAWhatsApp
          texto="Falar com Especialista"
          mensagem="Ola! Quero montar minha area gourmet. Pode me ajudar?"
          pulse
        />
      </Section>
    </>
  );
}
