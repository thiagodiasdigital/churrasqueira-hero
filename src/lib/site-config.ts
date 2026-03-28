import { siteSettings } from "@/lib/site-settings";
import { empresa, produtos, regioes, depoimentos, homeContent, theme } from "@/content";

export const siteConfig = {
  settings: siteSettings,
  company: empresa,
  theme,
  home: homeContent,
  products: produtos,
  regions: regioes,
  testimonials: depoimentos,
};
