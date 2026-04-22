# AUDITORIA TECNICA — churrasqueira-hero (Mundial Churrasqueiras)

> Relatorio emitido por **The Surveyor** — 27/02/2026

---

## 1. SUMARIO EXECUTIVO (RAIO-X)

| Campo | Valor |
|:---|:---|
| **Nome do Projeto** | `churrasqueira-hero` (Mundial Churrasqueiras) |
| **Stack Principal** | Next.js 16.1.6 / React 19.2.3 / TypeScript 5.9.3 / Tailwind CSS 4.2.1 |
| **Package Manager** | npm (package-lock.json) |
| **Total de Arquivos Fonte** | 30 arquivos (.ts/.tsx) |
| **Total de Linhas de Codigo** | 2.566 linhas |
| **Status de Manutenibilidade** | **6/10** |
| **Risco de Obsolescencia** | **Baixo** — stack moderna e atualizada (fev/2026) |

---

## 2. INVENTARIO TECNICO (FACTS)

| Componente | Constatacao Tecnica | Observacao Forense |
|:---|:---|:---|
| **Framework** | Next.js 16.1.6 (App Router) — versao atual | `next.config.ts` vazio — nenhuma configuracao customizada aplicada |
| **Linguagem** | TypeScript 5.9.3, strict mode habilitado (`tsconfig.json:8`) | Compilacao correta. Target ES2017 |
| **UI / CSS** | Tailwind CSS 4.2.1 via PostCSS + CSS custom properties | Design tokens registrados em `globals.css` via `@theme inline` |
| **Scroll** | Lenis 1.3.17 (smooth scroll) + Canvas 2D (hero sequence) | 90 frames WebP, carregamento em batch de 6 |
| **Animacao** | Framer Motion 12.34.3 **declarada** como dependencia | **Nenhuma importacao encontrada em nenhum arquivo fonte** — dependencia morta |
| **Fontes** | Google Fonts — Montserrat + Playfair Display | `display: "block"` em ambas (`src/styles/fonts.ts:5,11`) — causa FOIT |
| **SEO** | JSON-LD (LocalBusiness, Product, Service, FAQ, Organization) | Implementado via `src/lib/schema.tsx`. Sitemap + robots.txt presentes |
| **Sitemap** | next-sitemap 4.2.3, script `postbuild` configurado | **Arquivo `next-sitemap.config.js` nao encontrado** no repositorio |
| **Dados** | Conteudo hardcoded em `src/lib/data.ts` (645 linhas) | Zero integracao com CMS ou API. Single source of truth local |
| **DB / Storage** | Informacao Oculta/Nao Documentada | Nenhum banco de dados, nenhum servico de storage identificado |
| **DevOps / CI** | Informacao Oculta/Nao Documentada | **Zero** arquivos de CI/CD (.github/workflows, vercel.json, Dockerfile) |
| **Hosting** | `.vercel` no .gitignore indica deploy via Vercel | Nenhum `vercel.json` encontrado. Configuracao default presumida |
| **Testes** | **Inexistentes** | 0 arquivos `.test.*` ou `.spec.*`. Nenhum framework de teste instalado |
| **Lint** | ESLint 9 com `eslint-config-next` (core-web-vitals + typescript) | Configurado em `eslint.config.mjs` |

---

## 3. MAPA DE DEBITO TECNICO E RISCOS

### CRITICO

1. **Dependencia morta: `framer-motion`** — `package.json:12`. Declarada em `dependencies` (nao `devDependencies`), porem **zero importacoes** em todo o codigo fonte. Peso morto no bundle de producao. Framer Motion e uma biblioteca de ~150KB+ minificada.

2. **Zero cobertura de testes** — Nenhum arquivo de teste existe. Nenhum framework de teste (Jest, Vitest, Testing Library) esta instalado. Qualquer regressao so sera detectada manualmente.

3. **34 MB de imagens estaticas no `public/`** — `public/sequences/hero/` contem 90 frames WebP (~380-490KB cada). Todos sao servidos sem CDN-level optimization do Next.js (nao passam pelo `next/image`). Carregados via `fetch()` + `createImageBitmap()` no cliente.

### ALTO

4. **Uso de `<img>` em vez de `next/image`** — 3 ocorrencias:
   - `src/components/Header.tsx:24` — logo no header
   - `src/components/Hero/HeroOverlayLogo.tsx:15` — logo no hero (com `eslint-disable`)
   - `src/components/Hero/Hero.tsx:98` — noscript fallback (com `eslint-disable`)

   Impacto: sem lazy loading automatico, sem otimizacao de formato, sem responsividade de tamanho.

5. **Logo SVG com 191 KB** — `public/logo-mundial.svg` (191.610 bytes). Tamanho atipicamente grande para um SVG, indicando paths nao otimizados ou dados embutidos.

6. **URL WhatsApp hardcoded** — `src/components/Hero/HeroOverlayText.tsx:38` contem `href="https://wa.me/5532999029461"` hardcoded em vez de usar `empresa.whatsapp` de `data.ts`. Viola o principio de single source of truth estabelecido pelo proprio projeto.

7. **`display: "block"` em Google Fonts** — `src/styles/fonts.ts:5,11`. O valor `"block"` causa Flash of Invisible Text (FOIT) — o texto fica invisivel ate a fonte carregar. O valor recomendado e `"swap"` para evitar CLS.

### MEDIO

8. **Imagens de produto sao placeholders** — `src/lib/data.ts` referencia paths como `/images/placeholder-churrasqueira-pre-moldada.webp`, `/images/placeholder-churrasqueira-vidro.webp`, etc. O diretorio `public/images/` **nao existe**. Todas as paginas de produto e a secao "sob medida" da home exibem `[Foto: ...]` em texto, nao imagens.

9. **SmoothScrollProvider: loop rAF sem controle** — `src/providers/SmoothScrollProvider.tsx:21-24`. O `requestAnimationFrame` recursivo nao utiliza a variavel de referencia para cancelamento granular — depende apenas do `lenis.destroy()` no cleanup. Funciona, mas o pattern e fragil.

10. **useImageSequence: copia de array a cada frame carregado** — `src/hooks/useImageSequence.ts:36`. `setFrames([...framesArray])` cria um novo array de 90 posicoes a cada frame carregado (90 alocacoes durante o loading).

11. **`ffmpeg-static` em devDependencies** — `package.json:22`. Binario pesado (~70MB) que nao tem relacao com o runtime do projeto. Provavelmente usado para gerar a sequencia de frames. Deveria ser ferramenta externa, nao dependencia do projeto.

12. **`next-sitemap.config.js` ausente** — O script `postbuild` (`package.json:8`) chama `next-sitemap`, mas nenhum arquivo de configuracao foi encontrado. O sitemap e gerado com configuracao default, o que pode nao refletir prioridades ou frequencias corretas.

13. **Arquivo `next.config.ts` vazio** — `next.config.ts:3-5`. Nenhuma configuracao de `images.remotePatterns`, `headers`, `redirects`, `compress`, ou `output` definida.

14. **Ausencia de pipeline CI/CD** — Nenhum arquivo `.github/workflows/*`, `vercel.json`, `netlify.toml` ou equivalente encontrado. Deploy presumido como manual via Vercel CLI ou dashboard.

15. **Schema `aggregateRating` com valor hardcoded** — `src/lib/schema.tsx:31-34`. `ratingValue: "5.0"` e `reviewCount: String(empresa.avaliacoesGoogle)` sao valores estaticos. Se as avaliacoes mudarem, o structured data ficara defasado.

16. **17 imagens JPG nao-rastreadas na raiz** — `git status` mostra 17 arquivos `.jpg` na raiz do projeto (churrasqueira-*.jpg). Nao estao no `.gitignore` nem commitados. Assets orfaos.

---

## 4. CONCLUSAO DE STATUS

### Operacional Instavel

**Justificativa:**

O projeto e tecnicamente funcional — a stack e moderna (Next.js 16, React 19, Tailwind 4, TypeScript 5.9) e o codigo fonte e coeso, com ~2.500 linhas distribuidas em 30 arquivos com boa separacao de responsabilidades.

Porem, fatores criticos impedem a classificacao como "Estavel":

- **Todas as imagens de produto sao placeholders inexistentes** — o site nao exibe nenhuma fotografia real nas paginas de produto, regiao e secao "sob medida". Isso o torna inoperante do ponto de vista comercial.
- **Zero testes, zero CI/CD** — qualquer alteracao no codigo nao tem rede de seguranca automatizada.
- **Dependencia morta (framer-motion)** inflando o bundle sem utilidade.
- **34 MB de assets do hero** servidos sem otimizacao server-side, impactando performance em conexoes lentas.

O codigo esta bem estruturado para um MVP, mas o projeto ainda nao atingiu maturidade para operacao comercial estavel.

---

### FORENSE DE HISTORICO GIT

| Campo | Valor |
|:---|:---|
| **Total de commits** | 7 |
| **Periodo** | 23/02/2026 — 26/02/2026 (3 dias) |
| **Autor unico** | thiagodiasdigital <thiagodias180986@gmail.com> |
| **Branch ativa** | `master` (unica branch existente) |
| **Padrao de commits** | Conventional Commits (`feat:`, `chore:`) |
| **Frequencia** | ~2.3 commits/dia — ritmo de sprint inicial |

**Historico completo (mais recente primeiro):**

```
c240e27 chore: adicionar .claude/ ao .gitignore
0e6a53a feat: integrar site completo (18 paginas) no projeto hero
3179a62 feat: aplicar tipografia premium e CTA WhatsApp
8cae138 feat: improve text rendering and canvas edge gradients
cfc3519 feat: replace text logo with Mundial Churrasqueiras SVG
53a5f1a feat: implement scroll-driven hero with image sequence animation
e2bca8a Initial commit from Create Next App
```

**Observacao:** Commit `0e6a53a` integra 18 paginas de uma so vez — commit monolitico com alta probabilidade de conter multiplas responsabilidades nao rastreadas individualmente.
