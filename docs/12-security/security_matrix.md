# 12. Segurança e Hardening

| Vetor | Estratégia de Mitigação | Status |
| :--- | :--- | :--- |
| **Execução de Contêiner** | Utilização de imagem base mínima `nginx:alpine-slim` reduzindo drasticamente superfície de ataque CVE. | Implementado |
| **Permissões de Volume** | Mapeamento no docker-compose como Read-Only (`:ro`) impedindo manipulação de arquivos estáticos em tempo de execução. | Implementado |
| **XSS (Cross-Site Scripting)** | Catálogo de dados estático e versionado; ausência de inputs de usuário com persistência em backend. | Implementado |
| **iFrame Security** | Embeds do Sketchfab isolados com permissões explícitas limitadas a `autoplay; fullscreen; xr-spatial-tracking`. | Implementado |
| **External Links** | Todos os links externos utilizam `rel="noopener"` ou `rel="noopener noreferrer"` para mitigar `window.opener` exploits. | Implementado |\n