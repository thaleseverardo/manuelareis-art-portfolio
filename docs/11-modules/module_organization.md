# 11. Organização dos Módulos Físicos

```text
.
├── css/
│   └── theme.css              # Variáveis de identidade, estilos dos modais e sombras
├── js/
│   ├── functions.js           # Camada de compatibilidade histórica
│   ├── javascript.js          # Runtime de controle, handlers de eventos e construtor DOM
│   └── projects-data.js       # Fonte da verdade do catálogo de projetos
├── img/                       # Assets vetoriais (SVG), logos, ícones e QR Codes nativos
├── projects/                  # Renders locais e backups estruturados por projeto
├── nginx.conf                 # Servidor de borda, compressão e cache policies
├── Dockerfile                 # Especificação de build OCI (Nginx Alpine)
├── docker-compose.yml         # Orquestração local e mapeamento de volumes
└── index.html                 # Shell semântico e pontos de montagem
```\n