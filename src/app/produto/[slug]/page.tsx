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
  const pageImageAspectClass = produto.pageImageAspectClass ?? "aspect-[4/3]";
  const pageImageFit = produto.pageImageFit ?? "contain";
  const pageImagePosition = produto.pageImagePosition ?? "center";
  const pageImagePaddingClass = produto.pageImagePaddingClass ?? "p-3 md:p-4";
  const pageImageScale = produto.pageImageScale ?? 1;
  const pageImageWrapperClass = produto.pageImageWrapperClass ?? "";

  return (
    <>
      <SchemaScript schema={schemaMain} />
      <SchemaScript schema={schemaFaq} />

      <Section className="py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
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

          <div className="md:flex md:justify-end">
            {produto.imagem ? (
              <div
                className={`w-full ${pageImageWrapperClass} ${pageImageAspectClass} bg-fundo-card border border-ambar-escuro/15 rounded-xl overflow-hidden`}
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className={
                    pageImageFit === "contain"
                      ? `w-full h-full object-contain ${pageImagePaddingClass}`
                      : "w-full h-full object-cover"
                  }
                  style={{
                    objectPosition: pageImagePosition,
                    transform: pageImageScale === 1 ? undefined : `scale(${pageImageScale})`,
                    transformOrigin: "center",
                  }}
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
