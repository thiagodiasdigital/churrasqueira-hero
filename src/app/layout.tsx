import type { Metadata } from "next";
import { playfairDisplay, inter } from "@/styles/fonts";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Churrasqueira Hero — O Fogo que Reúne",
  description:
    "Descubra churrasqueiras artesanais que transformam momentos em memórias ao redor do fogo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
