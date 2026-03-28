import { siteSettings } from "@/lib/site-settings";
import * as demo from "./demo";
import * as mundial from "./mundial";
import * as influxoRefrigeracao from "./influxo-refrigeracao";

const clients = {
  influxoRefrigeracao,
  demo,
  mundial,
};

type ClientSlug = keyof typeof clients;

function resolveClient(slug: string) {
  if (slug in clients) {
    return clients[slug as ClientSlug];
  }

  return clients.mundial;
}

export const activeClient = resolveClient(siteSettings.clientSlug);
export { clients };
export type { ClientSlug };

