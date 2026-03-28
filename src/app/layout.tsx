import type { Metadata } from "next";
import { bebas, montserrat } from "@/styles/fonts";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { SchemaScript, schemaLocalBusiness } from "@/lib/schema";
import { empresa } from "@/lib/data";
import { siteSettings } from "@/lib/site-settings";
import { siteConfig } from "@/lib/site-config";
import { getThemeStyle } from "@/lib/site-theme";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.siteUrl),
  title: {
    default: `${empresa.nome} — ${empresa.endereco.cidade}`,
    template: `%s | ${empresa.nome}`,
  },
  description: `${empresa.descricao} Entrega e instalação.`,
  openGraph: {
    title: `${empresa.nome} — ${empresa.endereco.cidade}`,
    description: empresa.descricao,
    type: "website",
    locale: siteSettings.locale,
    url: siteSettings.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <SchemaScript schema={schemaLocalBusiness()} />
      </head>
      <body
        className={`${montserrat.variable} ${bebas.variable} min-h-screen flex flex-col`}
        style={getThemeStyle(siteConfig.theme)}
      >
        <SmoothScrollProvider>
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
