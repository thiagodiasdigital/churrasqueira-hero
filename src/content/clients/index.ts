import { siteSettings } from "@/lib/site-settings";
import * as mundial from "./mundial";

const clients = {
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

