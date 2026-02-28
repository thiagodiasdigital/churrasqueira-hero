import type { Metadata } from "next";
import { empresa, regioes } from "@/lib/data";
import { SchemaScript, schemaOrganization } from "@/lib/schema";
import { Section, SectionHeading, CTAWhatsApp } from "@/components/ui";

export const metadata: Metadata = {
  title: `Sobre a ${empresa.nome} — Juiz de Fora, MG`,
  description: `Conheça a ${empresa.nome}. Churrasqueiras pré-moldadas e projetos sob medida em Juiz de Fora e região. Nossa história, equipe e diferenciais.`,
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
              Quem é a {empresa.nome}?
            </h2>
            <p className="text-texto-secundario text-base leading-relaxed mb-8">
              {empresa.historia}
            </p>

            <CTAWhatsApp
              texto="Falar com a Equipe"
              mensagem="Olá! Gostaria de conhecer mais sobre a Mundial Churrasqueiras."
            />
          </div>

          <div>
            <div className="aspect-[4/3] bg-fundo-card border border-ambar-escuro/15 rounded-xl overflow-hidden">
              <img
                src="/images/sobre-oficina.webp"
                alt="Projeto entregue pela equipe da Mundial Churrasqueiras"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
              desc: "Antes de vender, entendemos. Avaliamos seu espaço, medimos, analisamos o fluxo de fumaça e só depois propomos a melhor solução.",
            },
            {
              titulo: "Fabricação com método",
              desc: "Cada churrasqueira é montada com materiais selecionados: tijolo refratário, inox 430, concreto armado e acabamentos que resistem ao tempo e ao uso.",
            },
            {
              titulo: "Entrega e pós-venda",
              desc: "Entregamos, instalamos e acompanhamos. Se precisar de suporte técnico depois, nossa equipe está a uma mensagem de distância.",
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
          sub={`Nossa sede fica no bairro São Pedro, em Juiz de Fora. Atendemos ${regioes.length} cidades da Zona da Mata Mineira.`}
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

      {/* Números */}
      <Section mesh className="text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { valor: empresa.churrasqueirasEntregues, label: "Churrasqueiras entregues" },
            { valor: `${empresa.avaliacoesGoogle}+`, label: "Avaliações no Google" },
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
