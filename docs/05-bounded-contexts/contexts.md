# 05. Bounded Contexts

O isolamento contextual é mantido na fronteira de dados estáticos e apresentação:

```mermaid
flowchart TB
    subgraph BC_Catalog[Contexto de Catálogo e Dados]
        PD[projects-data.js]
        DS[PORTFOLIO_DATA Specification]
    end

    subgraph BC_Presentation[Contexto de Apresentação e Interação]
        JS[javascript.js Runtime]
        HTML[index.html Semantic DOM]
        CSS[theme.css Custom Properties]
    end

    subgraph BC_Delivery[Contexto de Infraestrutura e Entrega]
        NGINX[nginx.conf Gateway]
        DK[Dockerfile & Compose]
    end

    BC_Catalog -->|Injeta catálogo global window| BC_Presentation
    BC_Delivery -->|Serve assets estáticos e aplica políticas| BC_Presentation
```

### Contratos de Fronteira:
* **Entrada de Dados:** `window.PORTFOLIO_DATA` atua como contrato formal estuturado de leitura desacoplado da renderização.
* **Saída para o DOM:** O runtime `javascript.js` compila templates literais e injeta nós nos seletores `#gallery-items-container` e `#gallery-modals-outlet`.\n