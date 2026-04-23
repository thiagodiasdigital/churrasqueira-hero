import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { regioes, produtos, empresa } from "@/lib/data";
import { SchemaScript, schemaLocalBusiness, schemaFAQ } from "@/lib/schema";
import { Section, SectionHeading, ProductCard, CTAWhatsApp, FAQAccordion } from "@/components/ui";

export function generateStaticParams() {
  return regioes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const regiao = regioes.find((r) => r.slug === slug);
  if (!regiao) return {};

  return {
    title: `${empresa.nome} em ${regiao.cidade}, ${regiao.estado} | Churrasqueiras e acessorios para churrasco`,
    description: `${empresa.nome} atende ${regiao.cidade} com entrega e instalacao de churrasqueiras pre-moldadas, modelos a bafo e acessorios para churrasco.`,
  };
}

export default async function RegiaoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const regiao = regioes.find((r) => r.slug === slug);
  if (!regiao) notFound();

  const localSchema = schemaLocalBusiness([regiao.cidade]);
  const faqSchema = schemaFAQ(regiao.faq);
  const produtosDestaque = produtos.slice(0, 3);

  return (
    <>
      <SchemaScript schema={localSchema} />
      <SchemaScript schema={faqSchema} />

      <Section>
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-ambar/10 border border-ambar/30 text-ambar text-xs font-sans font-semibold rounded-full mb-4">
            {regiao.distancia} de {empresa.endereco.cidade}
          </span>
          <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-texto leading-tight mb-6">
            Churrasqueiras em {regiao.cidade} com entrega e instalação profissional
          </h1>
          <p className="text-texto-secundario text-base md:text-lg leading-relaxed mb-8">{regiao.descricao}</p>
          <CTAWhatsApp
            texto={`Atendemos ${regiao.cidade} — fale conosco`}
            mensagem={`Olá! Sou de ${regiao.cidade} e gostaria de saber mais sobre as churrasqueiras da ${empresa.nome}.`}
          />
        </div>
      </Section>

      <Section mesh>
        <SectionHeading>Quais opções a {empresa.nome} atende em {regiao.cidade}?</SectionHeading>
        <p className="text-texto-secundario text-base leading-relaxed max-w-3xl mb-8">
          A {empresa.nome} atende {regiao.cidade} com churrasqueiras pré-moldadas, modelos a bafo, opções portáteis,
          kits fogo de chão e acessórios para áreas gourmet residenciais e comerciais.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosDestaque.map((produto) => (
            <ProductCard key={produto.slug} produto={produto} />
          ))}
        </div>
      </Section>

      {regiao.faq.length > 0 ? (
        <Section>
          <SectionHeading>Dúvidas sobre atendimento em {regiao.cidade}</SectionHeading>
          <div className="max-w-3xl">
            <FAQAccordion items={regiao.faq} />
          </div>
        </Section>
      ) : null}

      <Section className="text-center" mesh>
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-texto mb-4">
          Quer montar sua área gourmet em {regiao.cidade}?
        </h2>
        <p className="text-texto-secundario mb-8 max-w-lg mx-auto">
          Fale com a equipe da {empresa.nome} para solicitar orçamento, comparar modelos e definir a melhor solução para o seu espaço.
        </p>
        <CTAWhatsApp texto="Solicitar Orçamento" mensagem={`Olá! Sou de ${regiao.cidade} e quero solicitar um orçamento.`} pulse />
      </Section>
    </>
  );
}
