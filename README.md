# Jon Ink Tattoo Studio - Full Stack Project 🖋️💻

Este projeto é uma aplicação Full Stack desenvolvida para automatizar a gestão de orçamentos e a exibição de portfólio de um estúdio de tatuagem real. A aplicação une uma interface moderna em React com um ecossistema robusto em Django.

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React.js (Vite):** SPA rápida e responsiva.
- **CSS3 (Premium Stealth Design):** UI focada na estética da arte, com foco em experiência mobile.
- **React Router Dom:** Gerenciamento de rotas (Home, Solicitação de Orçamento).

### Backend
- **Django & Django REST Framework (DRF):** API robusta para gerenciamento de dados.
- **SQLite:** Banco de dados para persistência de projetos e solicitações.
- **CORS Headers:** Gerenciamento de políticas de segurança para integração entre domínios.

## 🧠 Desafios Técnicos & Aprendizados

Durante o desenvolvimento, foram aplicados conceitos avançados de engenharia de software:

1.  **Consumo de API Assíncrona:** Implementação de `fetch` com Hooks (`useEffect`, `useState`) para carregar a vitrine de fotos dinamicamente.
2.  **Configuração de CORS:** Resolução de conflitos de segurança entre portas de desenvolvimento (`5173`) e produção (`4173`) no Django.
3.  **Arquitetura de Mídia:** Gestão de arquivos estáticos e de mídia (`MEDIA_ROOT`), garantindo que o Django sirva as imagens corretamente para o Frontend.
4.  **Automação de Lead:** Criação de um fluxo de orçamentos que salva os dados no banco e redireciona o cliente para o WhatsApp com uma mensagem pré-formatada.

## 🚀 Como Rodar o Projeto

### Backend
1. Navegue até `/backend`.
2. Ative o ambiente virtual: `source venv/bin/activate` (ou `venv\Scripts\activate` no Windows).
3. Rode: `python manage.py runserver 8001`.

### Frontend
1. Navegue até `/frontend`.
2. Instale as dependências: `npm install`.
3. Rode em modo desenvolvimento: `npm run dev` ou build: `npm run build`.

---
Desenvolvido por **Jon Ink** - Unindo arte e tecnologia.
