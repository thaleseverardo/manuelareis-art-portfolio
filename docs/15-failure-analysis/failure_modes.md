# 15. Análise de Falhas (Failure Modes & Effects)

```mermaid
flowchart TD
    Fault1[CDN de Mídia Externa Indisponível] -->|Fallback| LocalAssets[Assets Locais em projects/ e img/]
    Fault2[Navegador Sem Suporte a Web Share API] -->|Fallback| ClipAPI[Cópia para Clipboard via navigator.clipboard]
    Fault3[Navegador Sem Suporte a Clipboard API] -->|Fallback| AlertFallback[Exibição de Modal com QR Code SVG Nativo]
    Fault4[Falha no iFrame do Sketchfab] -->|Isolamento| VisualDegradation[Degradação Graciosa: Vídeos e Galeria 2D permanecem funcionais]
```\n