## Organizacao

Estrutura adotada para o projeto ativo da Mundial:

- `src/`: codigo da aplicacao
- `public/`: assets servidos em runtime
- `assets-source/`: arquivos-fonte e placeholders usados no desenvolvimento, mas nao servidos diretamente
- `docs/`: documentacao operacional do projeto ativo
- `arquivo-nao-mundial/`: legado, referencias paralelas e materiais fora da base ativa

Convencao:

- tudo que a aplicacao importa ou publica em runtime fica em `src/` ou `public/`
- fontes brutas, assets de apoio e placeholders de clonagem ficam em `assets-source/`
- materiais que nao pertencem ao projeto ativo ficam em `arquivo-nao-mundial/`
