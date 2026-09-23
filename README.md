# Portfolio Manuela Reis — 3D Character & Creature Artist

Plataforma estática conteinerizada de altíssima fidelidade e performance para exibição de ativos 3D (personagens, criaturas e props) para estúdios de games, cinema e experiências VR/XR.

Projetada com foco em **longevidade de 10+ anos**, utilizando padrões abertos da web, dependências mínimas e documentação viva.

---

## 🎯 Síntese para Recrutadores & Lideranças Técnicas

Para avaliar as **Hard Skills**, **Soft Skills**, **paradigmas de arquitetura** e **padrões de versionamento** aplicados neste projeto, consulte o documento oficial:

👉 **[docs/17-tech-skills/SKILLS_E_ARQUITETURA.md](docs/17-tech-skills/SKILLS_E_ARQUITETURA.md)**

---

## 🏛️ Pirâmide de Abstração Arquitetural (Docs as Code)

A documentação do ecossistema é mantida sob a **Pirâmide de Abstração Oficial**:

```text
docs/
├── 01-vision/             # Visão estratégica e proposta de valor
├── 02-context/            # C4 Nível 1 - Diagrama de Contexto
├── 03-domains/            # Decomposição em Domínios
├── 04-capabilities/       # Árvore de Capacidades
├── 05-bounded-contexts/   # Bounded Contexts e fronteiras
├── 06-components/         # C4 Nível 3 - Visão de Componentes
├── 07-flows/              # Diagramas de Sequência e Hidratação
├── 08-events/             # Mapeamento de Eventos DOM
├── 09-state-machines/     # Máquina de Estados dos Filtros
├── 10-conceptual-model/   # Modelo Conceitual e Schemas
├── 11-modules/            # Organização dos Módulos Físicos
├── 12-security/           # Matriz de Segurança e Hardening
├── 13-integrations/       # Integrações (Sketchfab, CDNs)
├── 14-observability/      # Métricas de Borda e Core Web Vitals
├── 15-failure-analysis/   # Modos de Falha e Resiliência
├── 16-roadmap/            # Timeline de Evolução
├── 17-tech-skills/        # Perfil Técnico, Skills & Arquitetura
└── change_log.md          # Histórico SemVer de Alterações
```

---

## 🚀 Execução Local via Docker

```bash
# Subir o ambiente local com Nginx Alpine
docker compose up -d

# Acessar a aplicação no navegador
# URL: http://localhost:8080
```

---

## 🧪 Validações Automatizadas

```bash
# Validar integridade da documentação arquitetural
python3 validate_docs.py

# Validar contrato de dados do catálogo
python3 tests/test_schema.py
```

---

## 📜 Licença

Distribuído sob a licença [MIT](LICENSE). Desenvolvido com foco em engenharia resiliente e sustentável.\n