# Recomendações SEO, GEO e AIO

## Projeto

Mundial Churrasqueiras  
Baseado na auditoria do site atual e na leitura dos documentos em `C:\Users\Dell\Desktop\seo-aio-geo`.

## Entendimento consolidado

Os materiais analisados defendem que, em 2026, o site de um negócio local precisa funcionar como núcleo da entidade da marca. Isso significa que o site não deve ser tratado apenas como um conjunto de páginas para ranquear, mas como a referência principal de:

- nome da empresa
- endereço e área atendida
- serviços e produtos
- reputação e prova
- consistência com GBP, diretórios e superfícies de IA

O ponto central é que SEO clássico, Local SEO e GEO/AIO não são camadas independentes. A base técnica e editorial é a mesma:

- páginas rastreáveis
- URLs canônicas
- boa renderização
- dados estruturados coerentes
- conteúdo people-first
- clareza semântica
- sinais fortes de confiança

Os documentos também reforçam que não existe atalho secreto para AI Overviews ou LLMs. A elegibilidade continua vindo dos fundamentos clássicos bem executados. O que muda é o formato ideal do conteúdo:

- blocos autocontidos
- linguagem natural
- respostas claras
- frases citáveis
- comparativos
- FAQs reais
- dados objetivos

Em termos operacionais, o site precisa ser tratado como peça central de uma entidade local robusta, conectada a GBP, reviews, diretórios, redes e fontes externas de autoridade.

## Diagnóstico atual da Mundial Churrasqueiras

### 1. Conteúdo-base institucional ainda está inconsistente

Arquivos como `src/content/clients/mundial/company.ts`, `src/content/clients/mundial/home.ts` e `src/content/clients/mundial/testimonials.ts` ainda apresentam texto corrompido ou empobrecido por encoding/ASCII forçado.

Exemplos encontrados:

- `prÃ©-moldadas`
- `Sao Pedro`
- `Jose Lourenco`
- `as 18h`
- `paixao`
- `memorias`

Impacto:

- enfraquece a percepção de qualidade
- reduz confiança editorial
- contamina descrições institucionais, schema e metadata

### 2. Entidade local ainda está básica demais

O schema atual já cobre `LocalBusiness`, `Organization`, `Product`, `Service` e `FAQPage`, mas ainda falta maturidade de entidade.

Lacunas:

- ausência de `sameAs`
- ausência de `openingHours`
- identidade externa ainda pouco conectada
- pouca profundidade de reconciliação entre marca, endereço, redes e presença local

Impacto:

- entidade menos robusta para Google e motores generativos
- menor consistência entre site e superfícies externas

### 3. Falta `BreadcrumbList`

O site ainda não expõe breadcrumb schema nas páginas principais.

Impacto:

- hierarquia menos explícita
- menor apoio semântico para SEO técnico
- perda de clareza estrutural para buscadores

### 4. Páginas de produto ainda não estão maduras para GEO/AIO

O template de produto está funcional, mas ainda enxuto demais para ambientes de IA.

Hoje a estrutura gira em torno de:

- hero
- bloco "como"
- bloco "modelos"
- FAQ
- CTA

Faltam blocos mais citáveis e mais úteis para answer engines:

- o que é
- para quem serve
- quando escolher
- diferenças entre modelos
- instalação e entrega
- faixa de preço ou fatores de preço
- critérios de escolha

Impacto:

- reduz chance de reutilização em AIO/LLMs
- diminui cobertura de intenção híbrida e informacional

### 5. Páginas de região ainda estão genéricas

As páginas de região já representam uma boa base, mas ainda não atingem um nível forte de Local SEO diferenciado.

Faltam:

- mais contexto local
- bairros atendidos
- informações logísticas
- prazo
- detalhes de instalação
- provas locais
- diferenciais por cidade

Impacto:

- presença regional funcional, mas ainda rasa
- menor autoridade local por página

### 6. Ainda há resíduo editorial de projeto removido

A página `/sobre` ainda usa a imagem `projeto-sob-medida.webp`, mesmo após a retirada do serviço "Projeto de Churrasqueira Sob Medida".

Impacto:

- narrativa visual desalinhada com o catálogo atual
- reduz consistência institucional

## O que já está bom

- `canonical`, `og`, `twitter` e metadata básica foram organizados
- páginas dedicadas de produto já existem
- `/pre-moldada` já redireciona corretamente
- sitemap e robots estão funcionando
- há schema útil nas principais rotas
- slugs de produto e região estão estáveis

## Plano de ação

### Prioridade 1. Higiene de entidade e conteúdo-base

Corrigir definitivamente:

- `src/content/clients/mundial/company.ts`
- `src/content/clients/mundial/home.ts`
- `src/content/clients/mundial/testimonials.ts`

Objetivos:

- restaurar acentuação correta
- padronizar NAP
- padronizar horário
- consolidar descrição institucional
- fortalecer narrativa da marca

### Prioridade 2. Reforço de schema e identidade

Evoluir a camada de structured data para incluir:

- `sameAs`
- `openingHours`
- `BreadcrumbList`
- `image` e `url` em `Product`, onde aplicável
- maior coerência entre conteúdo visível e schema

Objetivo:

- fortalecer reconciliação de entidade para Google, AIO e LLMs

### Prioridade 3. Reestruturação GEO/AIO das páginas de produto

Expandir o template das páginas de produto para incluir blocos mais reutilizáveis por motores generativos.

Estrutura recomendada:

- o que é este produto
- para quem ele é ideal
- quando escolher este modelo
- diferenças em relação a outros modelos
- entrega e instalação
- dúvidas frequentes reais
- CTA final contextual

Objetivo:

- aumentar citabilidade
- melhorar cobertura de intenção
- fortalecer SEO híbrido e GEO

### Prioridade 4. Aprofundamento das páginas de região

Enriquecer cada página de cidade com:

- contexto da cidade
- bairros atendidos
- logística de entrega
- instalação
- FAQ local
- sinais de prova local

Objetivo:

- deixar as páginas menos genéricas
- reforçar autoridade local real

### Prioridade 5. Limpeza editorial final

Remover resíduos herdados do projeto antigo e alinhar todo o ativo visual e textual com o posicionamento atual da Mundial Churrasqueiras.

Ação imediata:

- substituir a imagem usada em `/sobre`

## Roadmap sugerido

### 30 dias

- corrigir conteúdo-base
- consolidar entidade institucional
- revisar NAP
- reforçar schema técnico
- adicionar breadcrumbs

### 60 dias

- reescrever páginas principais de produto com lógica GEO/AIO
- aprofundar FAQs reais
- inserir comparativos e critérios de escolha

### 90 dias

- expandir páginas de região
- reforçar prova local
- iniciar rotina de observabilidade de LLM visibility

## Próximo passo lógico

Executar juntos:

- Prioridade 1
- Prioridade 2

Essa rodada melhora simultaneamente:

- SEO técnico
- consistência de entidade
- prontidão para GEO/AIO
- qualidade editorial do site

