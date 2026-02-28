import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { regioes, produtos, empresa } from "@/lib/data";
import {
  SchemaScript,
  schemaLocalBusiness,
  schemaFAQ,
} from "@/lib/schema";
import {
  Section,
  SectionHeading,
  ProductCard,
  CTAWhatsApp,
  FAQAccordion,
} from "@/components/ui";

export function generateStaticParams() {
  return regioes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const regiao = regioes.find((r) => r.slug === slug);
  if (!regiao) return {};

  return {
    title: `Churrasqueira Pré-Moldada em ${regiao.cidade} — Entrega e Instalação`,
    description: `Churrasqueiras pré-moldadas com entrega e instalação em ${regiao.cidade}, ${regiao.estado}. A ${regiao.distancia} de Juiz de Fora. ${empresa.nome}.`,
  };
}

export default async function RegiaoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const regiao = regioes.find((r) => r.slug === slug);
  if (!regiao) notFound();

  const localSchema = schemaLocalBusiness([regiao.cidade]);
  const faqSchema = schemaFAQ(regiao.faq);

  const produtosDestaque = produtos.filter((p) =>
    ["churrasqueira-pre-moldada", "churrasqueira-de-vidro", "churrasqueira-sob-medida"].includes(p.slug)
  );

  return (
    <>
      <SchemaScript schema={localSchema} />
      <SchemaScript schema={faqSchema} />

      {/* H1 + Descrição localizada */}
      <Section>
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-ambar/10 border border-ambar/30 text-ambar text-xs font-sans font-semibold rounded-full mb-4">
            {regiao.distancia} de Juiz de Fora
          </span>
          <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-texto leading-tight mb-6">
            Churrasqueira Pré-Moldada em {regiao.cidade} — Entrega e Instalação
          </h1>
          <p className="text-texto-secundario text-base md:text-lg leading-relaxed mb-8">
            {regiao.descricao}
          </p>
          <CTAWhatsApp
            texto={`Atendemos ${regiao.cidade} — fale conosco`}
            mensagem={`Olá! Sou de ${regiao.cidade} e gostaria de saber mais sobre churrasqueiras.`}
          />
        </div>
      </Section>

      {/* Produtos disponíveis */}
      <Section mesh>
        <SectionHeading>
          Quais churrasqueiras entregamos em {regiao.cidade}?
        </SectionHeading>
        <p className="text-texto-secundario text-base leading-relaxed max-w-3xl mb-8">
          Todos os produtos da Mundial Churrasqueiras estão disponíveis para entrega
          em {regiao.cidade}. Churrasqueiras pré-moldadas, modelos de vidro, projetos sob
          medida e acessórios para churrasco. Consulte prazos e condições de frete.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosDestaque.map((produto) => (
            <ProductCard key={produto.slug} produto={produto} />
          ))}
        </div>
      </Section>

      {/* FAQ Local */}
      <Section>
        <SectionHeading>
          Dúvidas sobre churrasqueira em {regiao.cidade}
        </SectionHeading>
        <div className="max-w-3xl">
          <FAQAccordion items={regiao.faq} />
        </div>
      </Section>

      {/* CTA Final */}
      <Section className="text-center" mesh>
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-texto mb-4">
          {regiao.cidade} merece o melhor churrasco
        </h2>
        <p className="text-texto-secundario mb-8 max-w-lg mx-auto">
          A Mundial Churrasqueiras entrega e instala em {regiao.cidade}.
          Fale com nossa equipe e monte sua área gourmet.
        </p>
        <CTAWhatsApp
          texto="Solicitar Orçamento"
          mensagem={`Olá! Sou de ${regiao.cidade} e quero orçar uma churrasqueira.`}
          pulse
        />
      </Section>
    </>
  );
}
