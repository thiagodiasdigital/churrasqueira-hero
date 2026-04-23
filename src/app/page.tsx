import { Hero } from "@/components/Hero/Hero";
import { empresa, produtos, regioes, depoimentos } from "@/lib/data";
import { PreMoldadasSection } from "@/components/PreMoldadasSection";
import { homeContent } from "@/content";
import {
  Section,
  SectionHeading,
  ProductCarousel,
  RegionCard,
  TestimonialCard,
  CTAWhatsApp,
} from "@/components/ui";

export default function HomePage() {
  const showModelsSection = homeContent.preMoldadas.models.length > 0;
  const showTestimonials = depoimentos.length > 0 && Boolean(homeContent.testimonials.title);
  const produtosExcluidosDaSecao = new Set([
    "churrasqueira-pre-moldada",
    "utensilios-churrasco",
  ]);
  const produtosDaSecao = produtos.filter(
    (produto) => !produtosExcluidosDaSecao.has(produto.slug),
  );

  return (
    <>
      <Hero />
      {showModelsSection ? <PreMoldadasSection /> : null}

      <Section id="produtos">
        <SectionHeading sub="Modelos a bafo, portáteis, fogo de chão e opções robustas para transformar sua área de lazer com mais personalidade e desempenho.">
          Churrasqueiras em Juiz de Fora para quem quer mais sabor, praticidade e presença no churrasco
        </SectionHeading>

        <ProductCarousel produtos={produtosDaSecao} />
      </Section>

      <Section id="regioes">
        <SectionHeading sub={homeContent.regions.subtitle}>
          {homeContent.regions.title}
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {regioes.map((regiao) => (
            <RegionCard key={regiao.slug} regiao={regiao} />
          ))}
        </div>
      </Section>

      {showTestimonials ? (
        <Section id="depoimentos" mesh>
          <SectionHeading sub={empresa.avaliacoesGoogle > 0 ? `${empresa.avaliacoesGoogle} avaliações no Google` : null}>
            {homeContent.testimonials.title}
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depoimentos.map((dep, i) => (
              <TestimonialCard key={i} depoimento={dep} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="text-center">
        <h2 className="font-serif font-bold text-2xl md:text-4xl text-texto mb-4">
          {homeContent.finalCta.title}
        </h2>
        <p className="text-texto-secundario text-lg mb-8 max-w-xl mx-auto">
          {homeContent.finalCta.description}
        </p>
        <CTAWhatsApp texto={homeContent.finalCta.ctaLabel} mensagem={homeContent.finalCta.ctaMessage} pulse />
      </Section>
    </>
  );
}
