export const HERO_CONFIG = {
  totalFrames: 90,
  basePath: "/sequences/hero/hero-",
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
    // Black reveal: starts fully black, churrasqueira revealed by 15%
    revealStart: 0.0,
    revealEnd: 0.15,
    // Logo fades out BEFORE reveal completes (never over churrasqueira)
    logoFadeStart: 0.03,
    logoFadeEnd: 0.12,
    scrollIndicatorFadeEnd: 0.08,
    textFadeStart: 0.8,
    textFadeEnd: 0.95,
  },
} as const;

export function getFramePath(index: number): string {
  const num = String(index + 1).padStart(4, "0");
  return `${HERO_CONFIG.basePath}${num}${HERO_CONFIG.extension}`;
}
