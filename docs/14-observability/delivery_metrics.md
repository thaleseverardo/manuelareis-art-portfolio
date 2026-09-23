# 14. Observabilidade e Telemetria de Borda

A arquitetura sendo estática concentra sua observabilidade no gateway Nginx e nos sinais vitais de carregamento no cliente:

## 14.1 Métricas de Borda (Nginx)
* **Access Logs:** Status HTTP 200/304 e taxa de erro 404 (assets inexistentes).
* **Gzip Efficiency:** Rastreamento da taxa de compressão em arquivos `.js`, `.css` e `.svg`.
* **Cache Hits:** Verificação de cabeçalho `Cache-Control: public, no-transform` para requisições de mídia.

## 14.2 Métricas de Experiência do Cliente (Core Web Vitals)
* **LCP (Largest Contentful Paint):** Monitoramento das imagens de capa no carrossel inicial.
* **FID / INP:** Tempo de resposta na alternância de filtros e abertura de modais.
* **CLS (Cumulative Layout Shift):** Garantido em 0 através do uso de classes de proporção nativas (`ratio ratio-16x9`).