import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const slug = args[0];
const projectRoot = process.cwd();
const clientsRoot = join(projectRoot, "src", "content", "clients");
const publicClientsRoot = join(projectRoot, "public", "clients");

if (!slug || slug === "--list") {
  const clients = listClients(clientsRoot);
  console.log("Available client slugs:");
  for (const client of clients) {
    console.log(`- ${client}`);
  }
  if (!slug) {
    console.log("\nUsage: npm run prepare-client-assets -- <slug>");
  }
  process.exit(0);
}

if (!existsSync(join(clientsRoot, slug))) {
  console.error(`Unknown client slug: ${slug}`);
  process.exit(1);
}

const clientAssetRoot = join(publicClientsRoot, slug);
const logoDir = join(clientAssetRoot, "logo");
const productsDir = join(clientAssetRoot, "products");
const heroDir = join(clientAssetRoot, "hero");
const documentsDir = join(clientAssetRoot, "documents");

for (const dir of [clientAssetRoot, logoDir, productsDir, heroDir, documentsDir]) {
  mkdirSync(dir, { recursive: true });
}

const sharedLogo = join(projectRoot, "assets-source", "mundial", "client-template", "logo", "logo.svg");
const sharedProjectImage = join(projectRoot, "assets-source", "mundial", "client-template", "products", "projeto-sob-medida.webp");
const targetLogo = join(logoDir, "logo.svg");
const targetProjectImage = join(productsDir, "projeto-sob-medida.webp");

if (!existsSync(targetLogo) && existsSync(sharedLogo)) {
  copyFileSync(sharedLogo, targetLogo);
}

if (!existsSync(targetProjectImage) && existsSync(sharedProjectImage)) {
  copyFileSync(sharedProjectImage, targetProjectImage);
}

for (const readme of [
  [logoDir, "Coloque aqui o logo final do cliente como logo.svg."],
  [productsDir, "Coloque aqui imagens do cliente, incluindo projeto-sob-medida.webp quando houver."],
  [heroDir, "Coloque aqui frames ou mídia do hero quando o cliente usar sequência própria."],
  [documentsDir, "Coloque aqui catálogos, PDFs e outros materiais do cliente."],
]) {
  const readmePath = join(readme[0], "README.md");
  if (!existsSync(readmePath)) {
    writeFileSync(readmePath, `${readme[1]}\n`, "utf8");
  }
}

console.log(`Assets prepared for '${slug}'.`);
console.log(`Path: public/clients/${slug}`);
console.log("Created folders:");
console.log("- logo");
console.log("- products");
console.log("- hero");
console.log("- documents");
console.log("Initial placeholders copied when available:");
console.log(`- ${existsSync(targetLogo) ? "logo/logo.svg" : "logo/logo.svg (missing source placeholder)"}`);
console.log(`- ${existsSync(targetProjectImage) ? "products/projeto-sob-medida.webp" : "products/projeto-sob-medida.webp (missing source placeholder)"}`);

function listClients(root) {
  if (!existsSync(root)) return [];
  return readdirSync(root).filter((entry) => statSync(join(root, entry)).isDirectory());
}
