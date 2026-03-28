import type { CSSProperties } from "react";
import type { ThemeConfig } from "@/lib/site-types";
export function getThemeStyle(theme: ThemeConfig): CSSProperties {
  return {
    ["--color-bg" as string]: theme.colors.bg,
    ["--color-text-primary" as string]: theme.colors.textPrimary,
    ["--color-text-secondary" as string]: theme.colors.textSecondary,
    ["--color-border-btn" as string]: theme.colors.borderButton,
    ["--color-title-copper" as string]: theme.colors.titleCopper,
    ["--color-fundo" as string]: theme.colors.fundo,
    ["--color-fundo-card" as string]: theme.colors.fundoCard,
    ["--color-fundo-elevado" as string]: theme.colors.fundoElevado,
    ["--color-texto" as string]: theme.colors.texto,
    ["--color-texto-secundario" as string]: theme.colors.textoSecundario,
    ["--color-texto-muted" as string]: theme.colors.textoMuted,
    ["--color-ambar" as string]: theme.colors.ambar,
    ["--color-ambar-hover" as string]: theme.colors.ambarHover,
    ["--color-ambar-escuro" as string]: theme.colors.ambarEscuro,
    ["--color-ambar-claro" as string]: theme.colors.ambarClaro,
  };
}
