import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { empresa, produtos } from "@/lib/data";
import {
  SchemaScript,
  schemaProduct,
  schemaService,
  schemaFAQ,
} from "@/lib/schema";
import {
  Section,
  SectionHeading,
  CTAWhatsApp,
  FAQAccordion,
  SpecTable,
} from "@/components/ui";

export function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const produto = produtos.find((p) => p.slug === slug);
  if (!produto) return {};

  return {
    title: produto.title,
    description: produto.metaDescription,
    openGraph: {
      title: produto.title,
      description: produto.metaDescription,
    },
  };
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const produto = produtos.find((p) => p.slug === slug);
  if (!produto) notFound();

  const schemaMain =
    produto.schema === "Service"
      ? schemaService(produto)
      : schemaProduct(produto);
  const schemaFaq = schemaFAQ(produto.faq);

  return (
    <>
      <SchemaScript schema={schemaMain} />
      <SchemaScript schema={schemaFaq} />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-ambar/10 border border-ambar/30 text-ambar text-xs font-sans font-semibold rounded-full mb-4">
              {produto.badge}
            </span>
            <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-texto leading-tight mb-6">
              {produto.nome} em {empresa.endereco.cidade}
            </h1>
            <p className="text-texto-secundario text-base md:text-lg leading-relaxed mb-8">
              {produto.descricaoLonga}
            </p>
            <CTAWhatsApp texto={produto.ctaTexto} mensagem={produto.ctaMensagem} />
          </div>

          <div>
            {produto.imagem ? (
              <div className="aspect-[4/3] bg-fundo-card border border-ambar-escuro/15 rounded-xl overflow-hidden">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] bg-fundo-card border border-ambar-escuro/15 rounded-xl flex items-center justify-center text-texto-muted text-sm">
                [Foto: {produto.nome}]
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section mesh>
        <SectionHeading>{produto.headings.como}</SectionHeading>
        <p className="text-texto-secundario text-base leading-relaxed max-w-3xl">
          {produto.conteudo.como}
        </p>
      </Section>

      <Section>
        <SectionHeading>{produto.headings.modelos}</SectionHeading>
        <p className="text-texto-secundario text-base leading-relaxed max-w-3xl mb-8">
          {produto.conteudo.modelos}
        </p>
        <SpecTable items={produto.especificacoes} />
      </Section>

      <Section mesh>
        <SectionHeading>{produto.headings.faq}</SectionHeading>
        <div className="max-w-3xl">
          <FAQAccordion items={produto.faq} />
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-texto mb-4">
          Interessado? Fale com a equipe da {empresa.nome}
        </h2>
        <p className="text-texto-secundario mb-8 max-w-lg mx-auto">
          Tire dúvidas, consulte disponibilidade e solicite orçamento sem
          compromisso pelo WhatsApp.
        </p>
        <CTAWhatsApp texto={produto.ctaTexto} mensagem={produto.ctaMensagem} pulse />
      </Section>
    </>
  );
}
