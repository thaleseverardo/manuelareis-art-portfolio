# 13. Integrações de Terceiros

```mermaid
flowchart LR
    subgraph CorePlatform[Portfolio Client]
        DOM[Browser DOM]
    end

    subgraph Providers[Serviços Integrados]
        SF[Sketchfab Embed Engine]
        AS[ArtStation Media Storage]
        WX[Wix Static Media CDN]
        GH[Google Fonts / Bootstrap CDN]
    end

    DOM -->|Embed iframe escuro| SF
    DOM -->|Imagens e Vídeos MP4| AS
    DOM -->|Vídeos e Imagens de Alta Resolução| WX
    DOM -->|CSS & Ícones com verificação de integridade SRI| GH
```

* **Sketchfab:** Provedor de renderização de malhas 3D em tempo real com controle dinâmico de UI (`ui_theme=dark`).
* **ArtStation CDN / Wix Media:** Provedores de hospedagem descentralizada para arquivos de mídia pesada (vídeos 1080p e renders 4K).