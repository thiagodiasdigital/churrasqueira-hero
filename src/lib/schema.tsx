/**
 * Schema JSON-LD do site
 * Structured data por tipo de pagina.
 */

import { empresa, type Produto, type FAQItem } from "./data";
import { siteSettings } from "@/lib/site-settings";

export function schemaLocalBusiness(areaServed: string[] | null = null) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: empresa.nome,
    description: empresa.descricao,
    url: siteSettings.siteUrl,
    telephone: `+${empresa.telefoneLimpo}`,
    email: empresa.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: empresa.endereco.rua,
      addressLocality: empresa.endereco.cidade,
      addressRegion: empresa.endereco.estado,
      postalCode: empresa.endereco.cep,
      addressCountry: "BR",
    },
  };

  if (empresa.endereco.lat !== 0 && empresa.endereco.lng !== 0) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: empresa.endereco.lat,
      longitude: empresa.endereco.lng,
    };
  }

  if (empresa.avaliacoesGoogle > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(empresa.avaliacoesGoogle),
    };
  }

  if (areaServed) {
    schema.areaServed = areaServed.map((cidade) => ({
      "@type": "City",
      name: cidade,
    }));
  }

  return schema;
}

export function schemaProduct(produto: Produto) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: produto.nome,
    description: produto.descricaoCurta,
    brand: { "@type": "Brand", name: empresa.nome },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "City",
        name: empresa.endereco.cidade,
      },
      seller: { "@type": "Organization", name: empresa.nome },
    },
  };
}

export function schemaService(produto: Produto) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: produto.nome,
    description: produto.descricaoCurta,
    provider: {
      "@type": "LocalBusiness",
      name: empresa.nome,
      address: {
        "@type": "PostalAddress",
        addressLocality: empresa.endereco.cidade,
        addressRegion: empresa.endereco.estado,
      },
    },
    areaServed: {
      "@type": "City",
      name: empresa.endereco.cidade,
    },
  };
}

export function schemaFAQ(faqItems: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta.replace(/\n/g, " ").trim(),
      },
    })),
  };
}

export function schemaOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: empresa.nome,
    url: siteSettings.siteUrl,
    logo: `${siteSettings.siteUrl}${siteSettings.logoPath}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${empresa.telefoneLimpo}`,
      contactType: "sales",
      availableLanguage: "Portuguese",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: empresa.endereco.rua,
      addressLocality: empresa.endereco.cidade,
      addressRegion: empresa.endereco.estado,
      postalCode: empresa.endereco.cep,
      addressCountry: "BR",
    },
  };
}

export function SchemaScript({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
