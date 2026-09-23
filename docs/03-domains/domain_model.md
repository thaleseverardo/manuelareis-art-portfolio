# 03. Decomposição em Domínios

A arquitetura lógica do portfólio organiza-se em domínios essenciais voltados à apresentação e conversão profissional:

```mermaid
flowchart LR
    subgraph Core[Domínio Central / Core]
        D1[Catálogo de Projetos 3D]
        D2[Apresentação Multimídia: 3D, Vídeo, Imagens]
    end

    subgraph Supporting[Domínio de Suporte]
        D3[Filtragem Taxonômica por Categoria]
        D4[Provedor de Compartilhamento & QR Codes]
    end

    subgraph Generic[Domínio Genérico]
        D5[Servidor Web de Borda / Nginx Cache]
        D6[Canal de Contato & Redirecionamento Social]
    end

    D1 --> D2
    D3 --> D1
    D4 --> D1
    D5 --> D1
```

* **Catálogo de Projetos (Core):** Representação dos modelos autorais, dados de autoria, atribuições de conceito e assets vinculados.
* **Apresentação Multimídia (Core):** Orquestração de carrosséis, reprodutores de vídeo responsivos e iframes WebGL dark-themed.
* **Taxonomia e Filtros (Supporting):** Mecanismo declarativo de filtragem via classes de estilo (`CHA_REAL`, `CHA_STY`, `PRO_REAL`, `PRO_STY`).\n