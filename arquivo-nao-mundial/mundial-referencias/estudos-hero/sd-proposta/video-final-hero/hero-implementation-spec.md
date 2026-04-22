# Especificacao direta - Nova Hero (base: video-final-hero.mp4)

## Objetivo visual

Reproduzir o movimento do video de referencia:

1. Plano inicial amplo do caminhao + guindaste + container.
2. Push-in continuo (camera avanca).
3. Final em close no logo `SD` do container.
4. Fundo (caminhao/chao) progressivamente desfocado no fim.

## Dados base

- Duracao alvo: `6.04s`
- FPS de referencia: `24` (145 frames)
- Aspect ratio de referencia: `464x688` (vertical)

## Arquitetura recomendada da Hero

Camadas:

1. `hero-root` (container full viewport)
2. `bg-layer` (imagem base, pequena escala, sem blur)
3. `subject-layer` (mesma imagem, mascarada no container principal)
4. `focus-layer` (zoom progressivo no container/logo)
5. `overlay-vignette` (leve escurecimento lateral/final)

Observacao: com uma unica imagem, o efeito de profundidade depende da separacao de camadas + blur seletivo.

## Timeline de implementacao (tempo)

Use `t` normalizado de `0 -> 1` (tempoAtual / 6.04).

### Keyframes principais (time-based)

- `t=0.00`
  - `focusScale = 1.00`
  - `focusX = 0%`
  - `focusY = 0%`
  - `bgBlur = 0px`
  - `vignette = 0.08`
- `t=0.18`
  - `focusScale = 1.08`
  - `focusX = 0.3%`
  - `focusY = -0.4%`
  - `bgBlur = 0px`
  - `vignette = 0.10`
- `t=0.36`
  - `focusScale = 1.22`
  - `focusX = 0.8%`
  - `focusY = -0.9%`
  - `bgBlur = 0.4px`
  - `vignette = 0.12`
- `t=0.52`
  - `focusScale = 1.45`
  - `focusX = 1.4%`
  - `focusY = -1.5%`
  - `bgBlur = 1.2px`
  - `vignette = 0.15`
- `t=0.68`
  - `focusScale = 1.76`
  - `focusX = 2.1%`
  - `focusY = -2.0%`
  - `bgBlur = 2.2px`
  - `vignette = 0.18`
- `t=0.82`
  - `focusScale = 2.08`
  - `focusX = 2.8%`
  - `focusY = -2.6%`
  - `bgBlur = 3.4px`
  - `vignette = 0.22`
- `t=1.00`
  - `focusScale = 2.38`
  - `focusX = 3.4%`
  - `focusY = -3.0%`
  - `bgBlur = 4.8px`
  - `vignette = 0.26`

## Easing

Use easing global de camera:

- `cubic-bezier(0.22, 0.61, 0.36, 1)`

Ajuste fino:

- Entrada (0.00 -> 0.36): mais suave.
- Meio (0.36 -> 0.82): progressao quase linear.
- Final (0.82 -> 1.00): acelera levemente para fechar no logo.

## Mapeamento por scroll (opcao)

Se Hero for scroll-driven, use:

- secao com `min-height: 260vh`
- bloco interno `sticky` de `100vh`
- `progress = clamp((-rect.top)/(rect.height - innerHeight), 0, 1)`
- aplique o mesmo conjunto de keyframes acima com `progress` no lugar de `t`

## Snippet de interpolacao (React/TS)

```ts
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function mapKeyframes(t: number) {
  const k = [
    { t: 0.0, scale: 1.0, x: 0.0, y: 0.0, blur: 0.0, vig: 0.08 },
    { t: 0.18, scale: 1.08, x: 0.3, y: -0.4, blur: 0.0, vig: 0.10 },
    { t: 0.36, scale: 1.22, x: 0.8, y: -0.9, blur: 0.4, vig: 0.12 },
    { t: 0.52, scale: 1.45, x: 1.4, y: -1.5, blur: 1.2, vig: 0.15 },
    { t: 0.68, scale: 1.76, x: 2.1, y: -2.0, blur: 2.2, vig: 0.18 },
    { t: 0.82, scale: 2.08, x: 2.8, y: -2.6, blur: 3.4, vig: 0.22 },
    { t: 1.0, scale: 2.38, x: 3.4, y: -3.0, blur: 4.8, vig: 0.26 },
  ];

  let i = 0;
  while (i < k.length - 1 && t > k[i + 1].t) i++;
  const a = k[i];
  const b = k[Math.min(i + 1, k.length - 1)];
  const lt = b.t === a.t ? 0 : (t - a.t) / (b.t - a.t);

  return {
    scale: lerp(a.scale, b.scale, lt),
    x: lerp(a.x, b.x, lt),
    y: lerp(a.y, b.y, lt),
    blur: lerp(a.blur, b.blur, lt),
    vignette: lerp(a.vig, b.vig, lt),
  };
}
```

## CSS base da camera

```css
.hero-focus {
  transform-origin: 50% 44%;
  will-change: transform, filter;
}

.hero-bg {
  will-change: filter, transform;
}

.hero-vignette {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 45%, transparent 45%, rgba(0, 0, 0, 0.35) 100%);
}
```

## Criterio de aceite (matching com o video)

1. Entre 0s e 2s, cena ainda mostra caminhao completo.
2. Por volta de 3s, container domina o quadro.
3. Entre 5s e 6s, close no logo `SD` com fundo desfocado.
4. Ultimo frame aproxima visualmente `frame_0145.png`.
