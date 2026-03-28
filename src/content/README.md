# Multi-client content

Cada cliente vive em `src/content/clients/<slug>`.

## Estrutura mínima

- `company.ts`
- `home.ts`
- `products.ts`
- `regions.ts`
- `testimonials.ts`
- `theme.ts`
- `index.ts`

## Cliente ativo

O cliente ativo é definido em `site.config.js` pela chave `clientSlug`.

Exemplo:

```js
const clientSlug = "demo";

const siteSettings = {
  clientSlug,
  siteName: "Brasa Prime Gourmet",
  siteUrl: "https://brasaprimegourmet.com.br",
  locale: "pt_BR",
  logoPath: `/clients/${clientSlug}/logo/logo.svg`,
};
```

## Gerar novo cliente

```bash
npm run new-client -- casa-forte-gourmet "Casa Forte Gourmet"
```

O script:

1. copia `src/content/clients/demo`
2. cria `src/content/clients/<slug>`
3. registra o novo cliente em `src/content/clients/index.ts`
4. aplica substituições iniciais de nome e handle

## Preparar assets

```bash
npm run prepare-client-assets -- casa-forte-gourmet
```

O script cria:

- `public/clients/<slug>/logo`
- `public/clients/<slug>/products`
- `public/clients/<slug>/hero`
- `public/clients/<slug>/documents`

E copia placeholders iniciais quando disponíveis.

## Trocar cliente ativo

Listar slugs:

```bash
npm run switch-client -- --list
```

Ativar um cliente:

```bash
npm run switch-client -- demo
```

## Validar cliente

Listar slugs:

```bash
npm run check-client -- --list
```

Validar um cliente:

```bash
npm run check-client -- demo
```

O script verifica estrutura mínima, exports esperados, campos essenciais e assets básicos por slug.

## Como finalizar a clonagem

1. Rodar `npm run new-client -- <slug> "Nome da Empresa"`
2. Rodar `npm run prepare-client-assets -- <slug>`
3. Revisar `company.ts`
4. Ajustar `home.ts`
5. Ajustar `products.ts`, `regions.ts` e `testimonials.ts`
6. Substituir assets em `public/clients/<slug>/`
7. Rodar `npm run check-client -- <slug>`
8. Ativar o cliente com `npm run switch-client -- <slug>`
