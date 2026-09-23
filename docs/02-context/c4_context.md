# 02. Ecossistema e Contexto (C4 Nível 1)

## 2.1 Diagrama de Contexto de Sistema

O diagrama abaixo descreve a relação do sistema estático do portfólio com usuários humanos e provedores de infraestrutura/CDN de terceiros.

```mermaid
flowchart TD
    subgraph Users[Usuários]
        U1[Recrutadores / Art Directors]
        U2[Comunidade Técnica & Artística]
    end

    subgraph Platform[Plataforma Portfolio Web]
        App[Static Web Application / Nginx Gateway]
    end

    subgraph CDNs[CDNs & Storage Externos]
        Wix[Wix Media CDN - Imagens & Vídeos]
        ArtStation[ArtStation CDN - Imagens & Vídeos]
    end

    subgraph ThirdParty[Serviços Terceirizados]
        Sketchfab[Sketchfab 3D WebGL Viewer]
        EmailClient[Agente de Email Externo]
        Social[Redes Sociais: ArtStation, LinkedIn, IG]
    end

    U1 -->|Acessa via HTTPS / Porta 80-8080| App
    U2 -->|Acessa via HTTPS / Porta 80-8080| App
    App -->|Carrega Assets Dinâmicos| Wix
    App -->|Carrega Assets Dinâmicos| ArtStation
    App -->|Embarca Modelos Interativos via iFrame| Sketchfab
    App -->|Aciona envio de mensagem| EmailClient
    App -->|Links e Compartilhamento Web Share/QR| Social
```\n