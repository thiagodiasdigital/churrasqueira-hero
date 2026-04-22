import type { Metadata } from "next";
import { empresa, regioes } from "@/lib/data";
import { siteSettings } from "@/lib/site-settings";
import { SchemaScript, schemaOrganization } from "@/lib/schema";
import { Section, SectionHeading, CTAWhatsApp } from "@/components/ui";

function getPrimaryMetricLabel(value: string) {
  return /ano/i.test(value) ? "Anos de experiência" : "Projetos atendidos";
}

export const metadata: Metadata = {
  title: `Sobre a ${empresa.nome} — ${empresa.endereco.cidade}, ${empresa.endereco.estado}`,
  description: `Conheça a ${empresa.nome}. ${empresa.descricao} Nossa história, atuação e diferenciais.`,
};

export default function SobrePage() {
  return (
    <>
      <SchemaScript schema={schemaOrganization()} />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-texto leading-tight mb-6">Sobre a {empresa.nome}</h1>
            <h2 className="font-serif font-semibold text-xl text-ambar mb-4">Quem é a {empresa.nome}?</h2>
            <p className="text-texto-secundario text-base leading-relaxed mb-8">{empresa.historia}</p>
            <CTAWhatsApp texto="Falar com a Equipe" mensagem={`Olá! Gostaria de conhecer mais sobre a ${empresa.nome}.`} />
          </div>

          <div>
            <div className="aspect-[4/3] bg-fundo-card border border-ambar-escuro/15 rounded-xl overflow-hidden">
              <img
                src={`/clients/${siteSettings.clientSlug}/products/projeto-sob-medida.webp`}
                alt={`Atendimento realizado pela equipe da ${empresa.nome}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section mesh>
        <SectionHeading>Como trabalhamos?</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {[
            {
              titulo: "Orientação antes da compra",
              desc: "Entendemos o espaço, o estilo da área gourmet e o tipo de uso para indicar o modelo mais adequado para cada cliente.",
            },
            {
              titulo: "Fabricação e acabamento",
              desc: "Cada churrasqueira é preparada com foco em estrutura, acabamento e presença visual para valorizar o ambiente e o uso no dia a dia.",
            },
            {
              titulo: "Entrega e instalação",
              desc: "A equipe organiza entrega, montagem e orientação final para que a churrasqueira chegue pronta para transformar o espaço em ponto de encontro.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="font-serif font-semibold text-lg text-texto mb-2">{item.titulo}</h3>
              <p className="text-sm text-texto-secundario leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading sub={`Nossa base fica no bairro ${empresa.endereco.bairro}, em ${empresa.endereco.cidade}. Atendemos ${regioes.length} regiões.`}>
          Onde estamos?
        </SectionHeading>
        <div className="bg-fundo-card border border-ambar-escuro/15 rounded-xl p-6">
          <address className="not-italic text-texto-secundario space-y-2">
            <p className="font-serif font-semibold text-texto text-lg">{empresa.nome}</p>
            <p>{empresa.endereco.completo}</p>
            <p>WhatsApp: <a href={`tel:+${empresa.telefoneLimpo}`} className="text-ambar hover:underline">{empresa.telefone}</a></p>
            <p>E-mail: <a href={`mailto:${empresa.email}`} className="text-ambar hover:underline">{empresa.email}</a></p>
            <p>{empresa.horario}</p>
          </address>
        </div>
      </Section>

      <Section mesh className="text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { valor: empresa.churrasqueirasEntregues, label: getPrimaryMetricLabel(empresa.churrasqueirasEntregues) },
            ...(empresa.avaliacoesGoogle > 0 ? [{ valor: `${empresa.avaliacoesGoogle}+`, label: "Avaliações no Google" }] : []),
            { valor: `${regioes.length}`, label: "Regiões atendidas" },
            { valor: empresa.endereco.cidade, label: "Base de atendimento" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-serif font-bold text-3xl md:text-4xl text-ambar">{stat.valor}</p>
              <p className="text-sm text-texto-secundario mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
