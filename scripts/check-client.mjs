import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const requestedSlug = args[0];
const projectRoot = process.cwd();
const clientsRoot = join(projectRoot, "src", "content", "clients");
const publicClientsRoot = join(projectRoot, "public", "clients");
const requiredFiles = [
  "company.ts",
  "home.ts",
  "products.ts",
  "regions.ts",
  "testimonials.ts",
  "theme.ts",
  "index.ts",
];

if (!existsSync(clientsRoot)) {
  console.error(`Clients directory not found at ${clientsRoot}`);
  process.exit(1);
}

const availableClients = readdirSync(clientsRoot).filter((entry) => {
  const fullPath = join(clientsRoot, entry);
  return statSync(fullPath).isDirectory();
});

if (!requestedSlug || requestedSlug === "--list") {
  console.log("Available client slugs:");
  for (const client of availableClients) {
    console.log(`- ${client}`);
  }
  if (!requestedSlug) {
    console.log("\nUsage: npm run check-client -- <slug>");
  }
  process.exit(0);
}

if (!availableClients.includes(requestedSlug)) {
  console.error(`Unknown client slug: ${requestedSlug}`);
  process.exit(1);
}

const clientDir = join(clientsRoot, requestedSlug);
const clientAssetRoot = join(publicClientsRoot, requestedSlug);
const errors = [];
const warnings = [];

for (const file of requiredFiles) {
  if (!existsSync(join(clientDir, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

if (errors.length === 0) {
  checkCompany();
  checkHome();
  checkProducts();
  checkRegions();
  checkTestimonials();
  checkTheme();
  checkAssets();
}

if (errors.length > 0) {
  console.error(`Client '${requestedSlug}' failed validation.`);
  for (const error of errors) {
    console.error(`ERROR: ${error}`);
  }
  for (const warning of warnings) {
    console.warn(`WARN: ${warning}`);
  }
  process.exit(1);
}

console.log(`Client '${requestedSlug}' passed structural validation.`);
for (const warning of warnings) {
  console.warn(`WARN: ${warning}`);
}

function read(fileName) {
  return readFileSync(join(clientDir, fileName), "utf8");
}

function expectIncludes(content, needle, message) {
  if (!content.includes(needle)) {
    errors.push(message);
  }
}

function expectRegex(content, pattern, message) {
  if (!pattern.test(content)) {
    errors.push(message);
  }
}

function warnIfRegex(content, pattern, message) {
  if (pattern.test(content)) {
    warnings.push(message);
  }
}

function checkCompany() {
  const content = read("company.ts");
  expectIncludes(content, "export const empresa", "company.ts must export 'empresa'.");
  expectRegex(content, /nome:\s*".+"/, "company.ts must define company name.");
  expectRegex(content, /telefoneLimpo:\s*"\d{10,}"/, "company.ts must define numeric telefoneLimpo.");
  expectRegex(content, /whatsapp:\s*"https:\/\/wa\.me\//, "company.ts must define whatsapp wa.me URL.");
  expectRegex(content, /email:\s*".+@.+"/, "company.ts must define company email.");
  expectRegex(content, /cidade:\s*".+"/, "company.ts must define city.");
}

function checkHome() {
  const content = read("home.ts");
  expectIncludes(content, "export const homeContent", "home.ts must export 'homeContent'.");
  expectRegex(content, /hero:\s*\{/, "home.ts must define hero section.");
  expectRegex(content, /preMoldadas:\s*\{/, "home.ts must define preMoldadas section.");
  expectRegex(content, /finalCta:\s*\{/, "home.ts must define finalCta section.");
}

function checkProducts() {
  const content = read("products.ts");
  expectIncludes(content, "export const produtos", "products.ts must export 'produtos'.");
  const schemaCount = (content.match(/schema:\s*"(Product|Service)"/g) || []).length;
  if (schemaCount === 0) {
    errors.push("products.ts must define at least one product/service entry.");
  }
  warnIfRegex(content, /placeholder/gi, "products.ts still contains placeholder wording.");
}

function checkRegions() {
  const content = read("regions.ts");
  expectIncludes(content, "export const regioes", "regions.ts must export 'regioes'.");
  const regionCount = (content.match(/distanciaNum:/g) || []).length;
  if (regionCount === 0) {
    errors.push("regions.ts must define at least one region.");
  }
}

function checkTestimonials() {
  const content = read("testimonials.ts");
  expectIncludes(content, "export const depoimentos", "testimonials.ts must export 'depoimentos'.");
  const testimonialCount = (content.match(/nome:\s*"/g) || []).length;
  if (testimonialCount < 3) {
    warnings.push("testimonials.ts has fewer than 3 testimonials.");
  }
}

function checkTheme() {
  const content = read("theme.ts");
  expectIncludes(content, "export const theme", "theme.ts must export 'theme'.");
  expectRegex(content, /bg:\s*"#/, "theme.ts must define bg color.");
  expectRegex(content, /ambar:\s*"#/, "theme.ts must define primary accent color.");
}

function checkAssets() {
  const logoPath = join(clientAssetRoot, "logo", "logo.svg");
  const projectImagePath = join(clientAssetRoot, "products", "projeto-sob-medida.webp");
  const heroDir = join(clientAssetRoot, "hero");
  const docsDir = join(clientAssetRoot, "documents");

  if (!existsSync(clientAssetRoot)) {
    errors.push(`Missing asset root: public/clients/${requestedSlug}. Run prepare-client-assets first.`);
    return;
  }

  if (!existsSync(logoPath)) {
    errors.push(`Missing logo asset: public/clients/${requestedSlug}/logo/logo.svg`);
  }

  if (!existsSync(projectImagePath)) {
    warnings.push(`Missing project image: public/clients/${requestedSlug}/products/projeto-sob-medida.webp`);
  }

  if (!existsSync(heroDir)) {
    warnings.push(`Missing hero directory: public/clients/${requestedSlug}/hero`);
  }

  if (!existsSync(docsDir)) {
    warnings.push(`Missing documents directory: public/clients/${requestedSlug}/documents`);
  }
}
