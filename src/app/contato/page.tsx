import type { Metadata } from "next";
import { empresa } from "@/lib/data";
import { SchemaScript } from "@/lib/schema";
import { Section, CTAWhatsApp } from "@/components/ui";

export const metadata: Metadata = {
  title: `Contato — ${empresa.nome} | ${empresa.endereco.cidade}`,
  description: `Entre em contato com a ${empresa.nome}. WhatsApp, endereço e horário de atendimento em ${empresa.endereco.cidade}, ${empresa.endereco.estado}.`,
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  telephone: `+${empresa.telefoneLimpo}`,
  contactType: "sales",
  areaServed: "BR",
  availableLanguage: "Portuguese",
};

export default function ContatoPage() {
  const hasMap = empresa.endereco.lat !== 0 && empresa.endereco.lng !== 0;

  return (
    <>
      <SchemaScript schema={contactSchema} />

      <Section>
        <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-texto leading-tight mb-6">
          Entre em contato com a {empresa.nome}
        </h1>
        <p className="text-texto-secundario text-base md:text-lg leading-relaxed max-w-2xl mb-12">
          Tire dúvidas, solicite orçamento e receba orientação sobre modelos, medidas e instalação. Respondemos rápido pelo WhatsApp durante o horário comercial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-fundo-card border border-ambar-escuro/15 rounded-xl p-6">
              <h2 className="font-serif font-semibold text-lg text-ambar mb-3">WhatsApp</h2>
              <p className="text-texto-secundario text-sm mb-4">
                A forma mais rápida de falar com a equipe para orçamento, disponibilidade, instalação e escolha do melhor modelo.
              </p>
              <CTAWhatsApp texto="Abrir WhatsApp" mensagem="Olá! Quero falar com a Mundial Churrasqueiras sobre orçamento." />
            </div>

            <div className="bg-fundo-card border border-ambar-escuro/15 rounded-xl p-6">
              <h2 className="font-serif font-semibold text-lg text-ambar mb-3">Endereço</h2>
              <address className="not-italic text-texto-secundario text-sm space-y-1">
                <p>{empresa.endereco.rua}</p>
                <p>{empresa.endereco.bairro}, {empresa.endereco.cidade} – {empresa.endereco.estado}</p>
                <p>CEP: {empresa.endereco.cep}</p>
              </address>
            </div>

            <div className="bg-fundo-card border border-ambar-escuro/15 rounded-xl p-6">
              <h2 className="font-serif font-semibold text-lg text-ambar mb-3">Outros canais</h2>
              <div className="space-y-2 text-sm text-texto-secundario">
                <p>Telefone: <a href={`tel:+${empresa.telefoneLimpo}`} className="text-ambar hover:underline">{empresa.telefone}</a></p>
                <p>E-mail: <a href={`mailto:${empresa.email}`} className="text-ambar hover:underline">{empresa.email}</a></p>
                <p>Instagram: <a href={empresa.instagram} target="_blank" rel="noopener noreferrer" className="text-ambar hover:underline">{empresa.instagramHandle}</a></p>
              </div>
            </div>

            <div className="bg-fundo-card border border-ambar-escuro/15 rounded-xl p-6">
              <h2 className="font-serif font-semibold text-lg text-ambar mb-3">Horário de atendimento</h2>
              <p className="text-sm text-texto-secundario">{empresa.horario}</p>
            </div>
          </div>

          <div>
            {hasMap ? (
              <div className="aspect-square md:aspect-auto md:h-full min-h-[400px] bg-fundo-card border border-ambar-escuro/15 rounded-xl overflow-hidden">
                <iframe
                  src={`https://maps.google.com/maps?q=${empresa.endereco.lat},${empresa.endereco.lng}&z=16&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Localização da ${empresa.nome} em ${empresa.endereco.cidade}`}
                />
              </div>
            ) : (
              <div className="h-full min-h-[400px] bg-fundo-card border border-ambar-escuro/15 rounded-xl p-8 flex flex-col justify-center">
                <h2 className="font-serif font-semibold text-2xl text-texto mb-4">Base física em {empresa.endereco.cidade}</h2>
                <p className="text-texto-secundario leading-relaxed">
                  Atendemos no endereço informado e organizamos o atendimento conforme a necessidade do cliente e o tipo de serviço solicitado.
                </p>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
