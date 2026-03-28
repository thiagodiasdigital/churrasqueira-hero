import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const requestedSlug = args[0];
const projectRoot = process.cwd();
const siteConfigPath = join(projectRoot, "site.config.js");
const clientsRoot = join(projectRoot, "src", "content", "clients");

if (!existsSync(siteConfigPath)) {
  console.error(`site.config.js not found at ${siteConfigPath}`);
  process.exit(1);
}

if (!existsSync(clientsRoot)) {
  console.error(`Clients directory not found at ${clientsRoot}`);
  process.exit(1);
}

const availableClients = readdirSync(clientsRoot).filter((entry) => {
  return !entry.endsWith('.ts');
});

if (!requestedSlug || requestedSlug === "--list") {
  console.log("Available client slugs:");
  for (const client of availableClients) {
    console.log(`- ${client}`);
  }
  if (!requestedSlug) {
    console.log("\nUsage: npm run switch-client -- <slug>");
  }
  process.exit(0);
}

if (!availableClients.includes(requestedSlug)) {
  console.error(`Unknown client slug: ${requestedSlug}`);
  console.error("Run 'npm run switch-client -- --list' to see available clients.");
  process.exit(1);
}

const siteConfig = readFileSync(siteConfigPath, "utf8");
const updated = siteConfig.replace(/clientSlug:\s*"[^"]+"/, `clientSlug: "${requestedSlug}"`);

if (updated === siteConfig) {
  console.error("Could not update clientSlug in site.config.js");
  process.exit(1);
}

writeFileSync(siteConfigPath, updated, "utf8");
console.log(`Active client set to '${requestedSlug}'.`);
