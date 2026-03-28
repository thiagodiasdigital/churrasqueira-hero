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
    title: `${empresa.nome} em ${regiao.cidade}, ${regiao.estado} | Atendimento em climatização`,
    description: `${empresa.nome} atende ${regiao.cidade} com serviços de climatização, instalação, manutenção e higienização de ar-condicionado.`,
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
          <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-texto leading-tight mb-6">Atendimento em climatização em {regiao.cidade}</h1>
          <p className="text-texto-secundario text-base md:text-lg leading-relaxed mb-8">{regiao.descricao}</p>
          <CTAWhatsApp texto={`Atendemos ${regiao.cidade} — fale conosco`} mensagem={`Olá! Sou de ${regiao.cidade} e gostaria de saber mais sobre os serviços da ${empresa.nome}.`} />
        </div>
      </Section>

      <Section mesh>
        <SectionHeading>Quais serviços a {empresa.nome} atende em {regiao.cidade}?</SectionHeading>
        <p className="text-texto-secundario text-base leading-relaxed max-w-3xl mb-8">
          A {empresa.nome} atende {regiao.cidade} com serviços de instalação, manutenção preventiva, manutenção corretiva e higienização técnica de ar-condicionado para residências, comércios e empresas.
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
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-texto mb-4">Precisa de atendimento em {regiao.cidade}?</h2>
        <p className="text-texto-secundario mb-8 max-w-lg mx-auto">
          Fale com a equipe da {empresa.nome} para solicitar orçamento, tirar dúvidas e avaliar a melhor solução para o seu ambiente.
        </p>
        <CTAWhatsApp texto="Solicitar Orçamento" mensagem={`Olá! Sou de ${regiao.cidade} e quero solicitar um orçamento.`} pulse />
      </Section>
    </>
  );
}
