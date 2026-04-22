# Frame-by-frame - video-final-hero.mp4

## Metadados

- Arquivo origem: `C:\Users\Larissa\Desktop\agencia\sd-proposta\video-final-hero.mp4`
- Resolucao: `464x688`
- FPS: `24`
- Duracao: `6.0417s`
- Frames totais: `145`

## Saidas geradas

- Frames PNG: `artifacts/sd-proposta/video-final-hero/frames/frame_0001.png` ate `frame_0145.png`
- Storyboard: `artifacts/sd-proposta/video-final-hero/storyboard-4fps.png`
- Indice de frames (frame -> tempo): `artifacts/sd-proposta/video-final-hero/frame-index.csv`

## Leitura visual inicial (macro)

- `frame_0001` (0.00s): plano aberto, caminhao completo visivel, container suspenso com logo SD.
- `frame_0073` (~3.00s): camera avanca, container ocupa boa parte da tela, caminhão ainda visível.
- `frame_0145` (~6.00s): close no logo SD do container; caminhão fica desfocado no fundo.

## Interpretacao de movimento

- Movimento principal: **zoom-in/push-in continuo** em toda a duracao.
- Enfase visual: transicao progressiva de contexto (cena completa) para marca (logo SD no container).
- Profundidade: no fim, fundo desfoca e o plano do container domina a composicao.

## Proxima etapa (frame-by-frame detalhado)

1. Marcar checkpoints a cada 6 frames (0.25s): total 25 checkpoints.
2. Para cada checkpoint, registrar:
   - escala aparente do container
   - posicao do centro do logo SD
   - nivel de desfoque de fundo
   - recorte visivel do caminhão
3. Transformar checkpoints em especificacao de animacao para a nova Hero (timeline + easing + keyframes).
