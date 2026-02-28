import type { Metadata } from "next";
import { montserrat, playfair } from "@/styles/fonts";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { SchemaScript, schemaLocalBusiness } from "@/lib/schema";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mundial Churrasqueiras — Juiz de Fora",
    template: "%s | Mundial Churrasqueiras",
  },
  description:
    "Churrasqueiras pré-moldadas, projetos sob medida e acessórios para churrasco em Juiz de Fora e região. Entrega e instalação.",
  openGraph: {
    title: "Mundial Churrasqueiras — Juiz de Fora",
    description:
      "Churrasqueiras pré-moldadas, projetos sob medida e acessórios para churrasco em Juiz de Fora e região.",
    type: "website",
    locale: "pt_BR",
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
        className={`${montserrat.variable} ${playfair.variable} min-h-screen flex flex-col`}
      >
        <SmoothScrollProvider>
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
