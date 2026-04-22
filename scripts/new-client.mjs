import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const slug = args[0];
const displayName = args.slice(1).join(" ").trim() || toDisplayName(slug);

if (!slug) {
  console.error("Usage: npm run new-client -- <slug> [Display Name]");
  process.exit(1);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error("Invalid slug. Use lowercase letters, numbers and hyphens only.");
  process.exit(1);
}

const projectRoot = process.cwd();
const clientsRoot = join(projectRoot, "src", "content", "clients");
const templateSlug = "mundial";
const templateDir = join(clientsRoot, templateSlug);
const targetDir = join(clientsRoot, slug);
const clientsIndexPath = join(clientsRoot, "index.ts");

if (!existsSync(templateDir)) {
  console.error(`Template client not found: ${templateDir}`);
  process.exit(1);
}

if (existsSync(targetDir)) {
  console.error(`Target client already exists: ${targetDir}`);
  process.exit(1);
}

cpSync(templateDir, targetDir, { recursive: true });

const compactSlug = slug.replace(/-/g, "");
const replacements = [
  [/Mundial Churrasqueiras/g, displayName],
  [/Mundial/g, displayName],
  [/mundialchurrasqueiras/g, compactSlug],
  [/@mundial\.churrasqueiras/g, `@${compactSlug}`],
];

rewriteFiles(targetDir, replacements);
registerClient(clientsIndexPath, slug);

console.log(`Client '${slug}' created from '${templateSlug}'.`);
console.log(`Path: src/content/clients/${slug}`);
console.log("Next steps:");
console.log("1. Review company.ts and site-specific contact data");
console.log("2. Replace product, region and testimonial content");
console.log("3. Update assets in public/ as needed");
console.log(`4. Switch site.config.js clientSlug to '${slug}' when ready`);

function rewriteFiles(rootDir, replacementPairs) {
  for (const entry of readdirSync(rootDir)) {
    const fullPath = join(rootDir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      rewriteFiles(fullPath, replacementPairs);
      continue;
    }

    if (!fullPath.endsWith(".ts") && !fullPath.endsWith(".tsx") && !fullPath.endsWith(".md")) {
      continue;
    }

    let content = readFileSync(fullPath, "utf8");
    for (const [pattern, value] of replacementPairs) {
      content = content.replace(pattern, value);
    }
    writeFileSync(fullPath, content, "utf8");
  }
}

function registerClient(indexPath, newSlug) {
  const importName = toIdentifier(newSlug);
  const importLine = `import * as ${importName} from "./${newSlug}";`;
  const entryLine = `  ${importName},`;

  let content = readFileSync(indexPath, "utf8");

  if (content.includes(importLine)) {
    return;
  }

  const importBlock = /^import .*;$/gm;
  const matches = [...content.matchAll(importBlock)];
  const lastImport = matches.at(-1);
  if (!lastImport) {
    throw new Error("Unable to locate import block in clients/index.ts");
  }

  const insertImportAt = lastImport.index + lastImport[0].length;
  content = `${content.slice(0, insertImportAt)}\n${importLine}${content.slice(insertImportAt)}`;

  const clientsBlock = "const clients = {\n";
  if (!content.includes(clientsBlock)) {
    throw new Error("Unable to locate clients object in clients/index.ts");
  }

  content = content.replace(clientsBlock, `${clientsBlock}${entryLine}\n`);
  writeFileSync(indexPath, content, "utf8");
}

function toDisplayName(value) {
  if (!value) return "Novo Cliente";
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toIdentifier(value) {
  const parts = value.split("-").filter(Boolean);
  const [first = "client", ...rest] = parts;
  return [first, ...rest.map((part) => part.charAt(0).toUpperCase() + part.slice(1))].join("");
}
