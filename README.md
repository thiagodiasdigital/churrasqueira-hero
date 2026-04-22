# Churrasqueira Hero

Landing page em Next.js para Mundial Churrasqueiras.

## Stack

- Next.js 16.1.6 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Como rodar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Producao (Vercel)

- Alias atual: `https://churrasqueira-hero.vercel.app`
- Dominio configurado: `https://mundialchurrasqueiras.com.br`

## Secao Pre-Moldadas (estado atual)

Componente principal: `src/components/PreMoldadasSection.tsx`

### Fluxo desktop (scroll vertical com secao sticky)

A secao `#pre-moldadas` usa `md:min-h-[700vh]` e container interno sticky em `100svh`.

A progressao do scroll foi dividida em paineis:

1. Painel de introducao (frases)
2. 5 paineis de modelos
3. 1 painel final de CTA

### Sequencia visual no desktop

1. Entrando na secao, as frases aparecem progressivamente com o scroll:
   - `Prontas para instalar.`
   - `Duraveis.`
   - `Acabamento impecavel.`
2. Quando inicia a revelacao dos modelos, as 3 frases somem da tela com fade curto.
3. Cada faixa de scroll mostra 1 card completo (texto + imagem), evitando meio-card, texto cortado ou imagem cortada.
4. No final aparece o CTA:
   - `Qual modelo combina com seu espaco?`
   - Botao `Receber orientacao` para `https://wa.me/5532999029461`

### Modelos (ordem atual)

1. `COLONIAL BABY 45cm`
2. `BABY MINI 45cm`
3. `COLONIAL COM BALCAO 45cm`
4. `PREDIAL 65cm`
5. `COLONIAL 55cm` + subtitulo `COLONIAL 65cm`

### Assets utilizados na secao

Origem: `assets-source/mundial/pre-moldadas`

- `baby-45cm.png`
- `mini-baby.png`
- `com-balcao-45cm.png`
- `predial.png`
- `colonial-65cm-55cm.png`

Background da secao:

- `public/images/premoldadas-bg.png`

### Mobile

No mobile (`md:hidden`) a secao usa swipe horizontal com `snap`.

- 1 slide por viewport
- Imagem com `object-contain`
- Gradiente inferior para contraste do texto
- Altura do slide: `76vh`

### Tamanhos atuais de imagem (desktop)

- Container da imagem: `h-[min(78svh,820px)]`
- Largura: `w-[min(58vw,860px)]`

## Arquivos principais alterados neste ciclo

- `src/components/PreMoldadasSection.tsx`
- `README.md`
