import { siteSettings } from "@/lib/site-settings";

export const HERO_CONFIG = {
  totalFrames: 90,
  extension: ".webp",
  canvasWidth: 1456,
  canvasHeight: 1080,
  sectionHeight: {
    desktop: "300vh",
    tablet: "250vh",
    tablet_breakpoint: 1280,
    mobile: "200vh",
    mobile_breakpoint: 768,
  },
  criticalFrames: [0, 44, 89],
  overlays: {
    revealStart: 0.0,
    revealEnd: 0.15,
    logoFadeStart: 0.03,
    logoFadeEnd: 0.12,
    scrollIndicatorFadeEnd: 0.08,
    textFadeStart: 0.8,
    textFadeEnd: 0.95,
  },
} as const;

export type HeroVariant = "desktop" | "mobile";

function getClientHeroBasePath(variant: HeroVariant) {
  if (variant === "mobile") {
    return `/clients/${siteSettings.clientSlug}/hero/mobile/hero-`;
  }

  return `/clients/${siteSettings.clientSlug}/hero/hero-`;
}

function getLegacyHeroBasePath() {
  return "/sequences/hero/hero-";
}

export function getFrameCandidates(index: number, variant: HeroVariant = "desktop"): string[] {
  const num = String(index + 1).padStart(4, "0");
  const fileName = `${num}${HERO_CONFIG.extension}`;

  if (siteSettings.clientSlug === "mundial") {
    return [`${getLegacyHeroBasePath()}${fileName}`];
  }

  if (variant === "mobile") {
    return [
      `${getClientHeroBasePath("mobile")}${fileName}`,
      `${getClientHeroBasePath("desktop")}${fileName}`,
      `${getLegacyHeroBasePath()}${fileName}`,
    ];
  }

  return [`${getClientHeroBasePath("desktop")}${fileName}`, `${getLegacyHeroBasePath()}${fileName}`];
}

export function getFramePath(index: number, variant: HeroVariant = "desktop"): string {
  return getFrameCandidates(index, variant)[0];
}
