# 08. Mapeamento de Eventos

| Evento | Origem | Destino | Efeito Arquitetural |
| :--- | :--- | :--- | :--- |
| `DOMContentLoaded` | Janela (`window`) | `javascript.js` | Dispara `renderPortfolioGallery()` e `setupCategoryFilters()`. |
| `change` | `.theme-toggle-filter` | Elementos de Card | Alterna visualização através da injeção ou remoção da classe utilitária `d-none`. |
| `click` | Links de Navegação | `window` | Executa `scrollToElement(id, offset)` com cálculo dinâmico de cabeçalho fixo. |
| `click` | Card de Projeto | Bootstrap Modal | Instancia modal fullscreen correspondente com autoplay de vídeos e inicialização de iframe 3D. |
| `click` | Botões de Compartilhamento | APIs Web Nativas | Avalia disponibilidade de `navigator.share` com fallback para `navigator.clipboard`. |