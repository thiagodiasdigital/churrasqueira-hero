import { Hero } from "@/components/Hero/Hero";
import { empresa, produtos, regioes, depoimentos } from "@/lib/data";
import { PreMoldadasSection } from "@/components/PreMoldadasSection";
import { homeContent } from "@/content";
import { siteSettings } from "@/lib/site-settings";
import {
  Section,
  SectionHeading,
  ProductCard,
  RegionCard,
  TestimonialCard,
  CTAWhatsApp,
} from "@/components/ui";

export default function HomePage() {
  const showModelsSection = homeContent.preMoldadas.models.length > 0;
  const showTestimonials = depoimentos.length > 0 && Boolean(homeContent.testimonials.title);

  return (
    <>
      <Hero />
      {showModelsSection ? <PreMoldadasSection /> : null}

      <Section id="produtos">
        <SectionHeading sub={homeContent.products.subtitle}>
          {homeContent.products.title}
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <ProductCard key={produto.slug} produto={produto} />
          ))}
        </div>
      </Section>

      <Section id="sob-medida" mesh className="bg-fundo-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading>{homeContent.sobMedida.title}</SectionHeading>
            <div className="space-y-6">
              {homeContent.sobMedida.steps.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-ambar/10 border border-ambar/30 rounded-lg font-serif font-bold text-ambar text-sm">
                    {item.etapa}
                  </span>
                  <div>
                    <p className="font-serif font-semibold text-texto">{item.titulo}</p>
                    <p className="text-sm text-texto-secundario mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAWhatsApp texto={homeContent.sobMedida.ctaLabel} mensagem={homeContent.sobMedida.ctaMessage} />
            </div>
          </div>

          <div>
            <div className="aspect-[3/4] bg-fundo-elevado rounded-xl border border-ambar-escuro/15 overflow-hidden">
              <img
                src={`/clients/${siteSettings.clientSlug}/products/projeto-sob-medida.webp`}
                alt={homeContent.sobMedida.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
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
