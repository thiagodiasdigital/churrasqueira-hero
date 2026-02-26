import type { Metadata } from "next";
import { empresa, regioes } from "@/lib/data";
import { SchemaScript, schemaOrganization } from "@/lib/schema";
import { Section, SectionHeading, CTAWhatsApp } from "@/components/ui";

export const metadata: Metadata = {
  title: `Sobre a ${empresa.nome} — Juiz de Fora, MG`,
  description: `Conheca a ${empresa.nome}. Churrasqueiras pre-moldadas e projetos sob medida em Juiz de Fora e regiao. Nossa historia, equipe e diferenciais.`,
};

export default function SobrePage() {
  return (
    <>
      <SchemaScript schema={schemaOrganization()} />

      {/* Quem somos */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-texto leading-tight mb-6">
              Sobre a {empresa.nome}
            </h1>

            <h2 className="font-serif font-semibold text-xl text-ambar mb-4">
              Quem e a {empresa.nome}?
            </h2>
            <p className="text-texto-secundario text-base leading-relaxed mb-8">
              {empresa.historia}
            </p>

            <CTAWhatsApp
              texto="Falar com a Equipe"
              mensagem="Ola! Gostaria de conhecer mais sobre a Mundial Churrasqueiras."
            />
          </div>

          <div className="">
            <div className="aspect-[4/3] bg-fundo-card border border-ambar-escuro/15 rounded-xl flex items-center justify-center text-texto-muted text-sm">
              [Foto: Equipe ou oficina da Mundial]
            </div>
          </div>
        </div>
      </Section>

      {/* Como trabalhamos */}
      <Section mesh>
        <SectionHeading>Como trabalhamos?</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {[
            {
              titulo: "Consultoria primeiro",
              desc: "Antes de vender, entendemos. Avaliamos seu espaco, medimos, analisamos o fluxo de fumaca e so depois propomos a melhor solucao.",
            },
            {
              titulo: "Fabricacao com metodo",
              desc: "Cada churrasqueira e montada com materiais selecionados: tijolo refratario, inox 430, concreto armado e acabamentos que resistem ao tempo e ao uso.",
            },
            {
              titulo: "Entrega e pos-venda",
              desc: "Entregamos, instalamos e acompanhamos. Se precisar de suporte tecnico depois, nossa equipe esta a uma mensagem de distancia.",
            },
          ].map((item, i) => (
            <div key={i} className="">
              <h3 className="font-serif font-semibold text-lg text-texto mb-2">
                {item.titulo}
              </h3>
              <p className="text-sm text-texto-secundario leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Onde estamos */}
      <Section>
        <SectionHeading
          sub={`Nossa sede fica no bairro Sao Pedro, em Juiz de Fora. Atendemos ${regioes.length} cidades da Zona da Mata Mineira.`}
        >
          Onde estamos?
        </SectionHeading>
        <div className="bg-fundo-card border border-ambar-escuro/15 rounded-xl p-6">
          <address className="not-italic text-texto-secundario space-y-2">
            <p className="font-serif font-semibold text-texto text-lg">
              {empresa.nome}
            </p>
            <p>{empresa.endereco.completo}</p>
            <p>
              WhatsApp:{" "}
              <a href={`tel:+${empresa.telefoneLimpo}`} className="text-ambar hover:underline">
                {empresa.telefone}
              </a>
            </p>
            <p>
              E-mail:{" "}
              <a href={`mailto:${empresa.email}`} className="text-ambar hover:underline">
                {empresa.email}
              </a>
            </p>
            <p>{empresa.horario}</p>
          </address>
        </div>
      </Section>

      {/* Numeros */}
      <Section mesh className="text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { valor: empresa.churrasqueirasEntregues, label: "Churrasqueiras entregues" },
            { valor: `${empresa.avaliacoesGoogle}+`, label: "Avaliacoes no Google" },
            { valor: `${regioes.length}`, label: "Cidades atendidas" },
            { valor: "100%", label: "Projetos sob medida" },
          ].map((stat, i) => (
            <div key={i} className="">
              <p className="font-serif font-bold text-3xl md:text-4xl text-ambar">
                {stat.valor}
              </p>
              <p className="text-sm text-texto-secundario mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
