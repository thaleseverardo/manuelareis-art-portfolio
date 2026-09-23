# Changelog de Arquitetura e Documentação

Todas as alterações arquiteturais e documentais relevantes serão registradas neste arquivo.
O formato baseia-se em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/) e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.2.0] - 2025-02-14
### Adicionado
- Pipeline de integração contínua (`.github/workflows/ci.yml`) para bloqueio automático de *documentation drift*.
- Teste de contrato automatizado (`tests/test_schema.py`) para validação estrutural de `PORTFOLIO_DATA`.
- Criação do portal de entrada `README.md` com link prioritário para a matriz de competências da Seção 17.
- Validação automática de sintaxe Nginx no pipeline de CI.

## [1.1.0] - 2025-02-14
### Adicionado
- Materialização completa da **Pirâmide de Abstração Oficial** nos níveis 01 a 17 sob o diretório `docs/`.
- Especificação formal de componentes e fluxos com diagramas Mermaid (`flowchart`, `sequenceDiagram`, `stateDiagram-v2`, `classDiagram`, `timeline`, `mindmap`).
- Criação de `docs/17-tech-skills/SKILLS_E_ARQUITETURA.md` com análise aprofundada de Hard Skills, Soft Skills, Engenharia de Software e Git Tags.
- Matriz de segurança, análise de modos de falha e observabilidade de borda Nginx.

## [1.0.0] - 2024-06-15
### Adicionado
- Estruturação da aplicação estática conteinerizada via Nginx Alpine Slim.
- Centralização declarativa do catálogo de projetos no arquivo `js/projects-data.js`.
- Desacoplamento da camada de renderização e controle de carrosséis e modais dinâmicos em `js/javascript.js`.
- Eliminação de dependência do jQuery com migração para Bootstrap 5.3 nativo.
- Suporte a compressão Gzip e cache de 30 dias para ativos estáticos no `nginx.conf`.