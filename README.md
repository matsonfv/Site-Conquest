<div align="center">

# 🏆 Conquest — Plataforma de Conquistas Gamer

**Plataforma web para acompanhamento de conquistas e missões dos seus jogos favoritos**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6.23-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Estilização-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Jogos Disponíveis](#-jogos-disponíveis)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Rotas da Aplicação](#-rotas-da-aplicação)
- [Como Executar](#-como-executar)
- [Melhorias Futuras](#-melhorias-futuras)

---

## 💡 Sobre o Projeto

**Conquest** é uma plataforma gamer desenvolvida em React que centraliza o acompanhamento de conquistas e missões dos jogos Resident Evil, God of War Ragnarök e Cyberpunk 2077. Cada jogo possui uma subpágina temática própria — com identidade visual, assets e componentes independentes — integrada a uma home principal com sistema de autenticação, feed de ofertas e estatísticas gerais.

O projeto representa uma migração completa de uma aplicação vanilla JS para React com Vite, introduzindo React Router, Context API e componentização modular.

---

## 🎮 Jogos Disponíveis

| Jogo | Gênero | Tema Visual | Rota |
|---|---|---|---|
| **Resident Evil** | Survival Horror | Vermelho / Terror | `/resident-evil` |
| **God of War Ragnarök** | Action Adventure | Nórdico / Neve | `/god-of-war` |
| **Cyberpunk 2077** | RPG Open World | Neon / Night City | `/cyberpunk-2077` |

---

## ✅ Funcionalidades

### 🏠 Plataforma Principal (Conquest)
- **Hero banner** com imagem de fundo e botões de ação rápida para Missões e Conquistas
- **Seção "Como Funciona"** com cards de features (Conquistas, Missões, Comunidade)
- **Grid de jogos disponíveis** — cards com imagem de fundo, overlay colorido e navegação por rota
- **Seção de ofertas Nuuvem** — cards de afiliado com selos de desconto, preço e link externo
- **Painel de estatísticas** — 3 jogos, 150+ conquistas, 50K+ jogadores, 500+ missões
- **Página de Missões** — lista agrupada por jogo com barra de progresso e XP
- **Página de Conquistas** — painel de progresso geral (desbloqueadas / total / %) + cards por jogo com raridade (Comum, Raro, Épico, Lendário)

### 🔐 Autenticação (Context API)
- Modal de Login/Cadastro com toggle entre os modos
- Persistência de sessão via `localStorage` (chave `gameAchievementsUser`)
- Hook personalizado `useAuth()` para acesso global ao usuário
- Exibição do nome do usuário no header e botão de logout
- Aviso contextual nas páginas de Missões/Conquistas para usuários não logados

### 🔵 God of War — Subpágina Temática
- **Splash Screen interativa**: animação do Machado Leviatã arremessado com som, tremor de tela e efeito de rachadura antes de entrar no site
- **Vídeo de neve** em loop como plano de fundo da página
- **Seção de Conquistas** com 10 troféus reais do jogo (Platina, Ouro, Prata, Bronze), imagens e barras de progresso
- **Árvore de Missões visual** inspirada em Yggdrasil — 6 missões posicionadas como galhos da árvore
- **Trailer popup** integrado
- **Página "Sobre"** com informações do jogo

### 🟡 Cyberpunk 2077 — Subpágina Temática
- **Vídeo animado** da arte-chave do jogo como plano de fundo do hero
- **Efeito glitch** no título "CONQUISTAS" com CSS puro
- 3 conquistas e 3 missões principais com cards estilizados no tema neon
- **Trailer popup** integrado
- **Página "Sobre"** com informações do jogo
- Fontes customizadas: `Cyberpunk.ttf` e `Refinery 25 Bold`

---

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| React | ^18.3.1 | Biblioteca de UI e componentização |
| React DOM | ^18.3.1 | Renderização no navegador |
| React Router DOM | ^6.23.1 | Roteamento client-side com `BrowserRouter` |
| Vite | ^5.3.1 | Bundler e servidor de desenvolvimento |
| @vitejs/plugin-react | ^4.3.1 | Suporte a JSX e Fast Refresh |
| Font Awesome 6 | CDN | Ícones (header, menus, cards, páginas) |

---

## 🏗 Arquitetura

A aplicação segue uma estrutura de **SPA com sub-aplicações temáticas**. A plataforma central (Conquest) provê o layout com Header e Footer globais, enquanto cada jogo possui sua própria pasta com componentes, estilos, dados e assets isolados — funcionando como mini-apps dentro do mesmo projeto React.

```
main.jsx
  └── BrowserRouter
        └── App.jsx (AuthProvider + Header + Routes + Footer)
              ├── / ──────────────── HomePage
              ├── /missoes ────────── MissionsPage
              ├── /conquistas ─────── AchievementsPage
              ├── /resident-evil ──── (placeholder — a implementar)
              ├── /god-of-war ─────── GOWPage
              │     └── /god-of-war/sobre ── GOWSobre
              ├── /cyberpunk-2077 ─── CPPage
              │     └── /cyberpunk-2077/sobre ── CPSobre
              └── [outros jogos futuros]
```

### Fluxo de Autenticação

```
AuthProvider (Context)
  │
  ├── user: null | { id, name, email, achievements[] }
  ├── login({ name, email }) → salva no localStorage
  └── logout() → remove do localStorage

useAuth() → acessa { user, login, logout } em qualquer componente
```

---

## 📁 Estrutura de Pastas

```
Conquest4.0/
│
├── index.html                  # Ponto de entrada HTML (Vite)
├── vite.config.js              # Configuração do Vite + plugin React
├── package.json                # Dependências do projeto
│
└── src/
    ├── main.jsx                # Monta o React + BrowserRouter
    ├── App.jsx                 # Roteador principal + AuthProvider + layout
    │
    ├── components/
    │   ├── Header.jsx          # Header fixo: logo, hambúrguer, menu lateral, modal de login
    │   ├── Footer.jsx          # Rodapé com links institucionais
    │   └── LoginModal.jsx      # Modal de login/cadastro com toggle
    │
    ├── context/
    │   └── AuthContext.jsx     # Context API: user, login(), logout(), useAuth()
    │
    ├── data/
    │   └── gameData.js         # Dados centralizados: GAMES, MISSIONS_DATA, ACHIEVEMENTS_DATA, DEALS
    │
    ├── pages/
    │   ├── HomePage.jsx        # Hero + Features + Jogos + Ofertas + Stats
    │   ├── MissionsPage.jsx    # Missões por jogo com progresso e XP
    │   └── AchievementsPage.jsx# Conquistas com painel de progresso geral
    │
    ├── styles/
    │   └── style2.css          # CSS global da plataforma principal
    │
    └── {pages,components,context,styles,data}/
        │
        ├── GOW/src/            # Sub-app God of War
        │   ├── App.jsx
        │   ├── main.jsx
        │   ├── assets/gow/     # Imagens, vídeo de neve, áudio (machado + tema)
        │   ├── components/
        │   │   ├── GOW-Card.jsx
        │   │   ├── GOW-Footer.jsx
        │   │   ├── GOW-Header.jsx
        │   │   ├── GOW-SplashScreen.jsx  # Animação do machado com áudio
        │   │   └── GOW-TrailerPopup.jsx
        │   ├── data/
        │   │   └── gowData.js           # 10 conquistas + 6 missões reais do GOW
        │   ├── pages/
        │   │   ├── GOW-Page.jsx         # Hero + conquistas + árvore de missões
        │   │   └── GOW-Sobre.jsx
        │   └── styles/
        │       └── gow.css
        │
        └── CYBERPUNK/src/      # Sub-app Cyberpunk 2077
            ├── App.jsx
            ├── main.jsx
            ├── assets/cyberpunk/  # Imagens, vídeo webm, fontes customizadas
            ├── components/
            │   ├── CP-CardCyber.jsx
            │   ├── CP-Footer.jsx
            │   ├── CP-Header.jsx
            │   └── CP-TrailerPopup.jsx
            ├── data/
            │   └── cyberpunkData.js    # 3 conquistas + 3 missões principais CP
            ├── pages/
            │   ├── CP-Page.jsx         # Hero com vídeo + conquistas + missões glitch
            │   └── CP-Sobre.jsx
            └── styles/
                └── cyberpunk.css
```

---

## 🗺 Rotas da Aplicação

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `HomePage` | Landing com jogos, missões, ofertas e stats |
| `/missoes` | `MissionsPage` | Missões dos 3 jogos com barras de progresso |
| `/conquistas` | `AchievementsPage` | Conquistas com painel de progresso geral |
| `/resident-evil` | *(placeholder)* | A implementar |
| `/god-of-war` | `GOWPage` | Splash + hero + conquistas + árvore de missões |
| `/god-of-war/sobre` | `GOWSobre` | Página sobre God of War Ragnarök |
| `/cyberpunk-2077` | `CPPage` | Hero com vídeo + conquistas + missões glitch |
| `/cyberpunk-2077/sobre` | `CPSobre` | Página sobre Cyberpunk 2077 |

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) v18 ou superior
- npm (incluído com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/conquest.git
cd conquest

# 2. Instale as dependências
# (node_modules não está incluso no repositório)
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em **http://localhost:5173**

### Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento com Hot Reload
npm run build    # Build de produção (gera a pasta /dist)
npm run preview  # Preview local do build de produção
```

> **Nota:** A pasta `node_modules` não está inclusa. O comando `npm install` irá instalá-la automaticamente com base no `package.json`.

---

## 🔮 Melhorias Futuras

- [ ] Implementar a subpágina de **Resident Evil** (rota `/resident-evil` já definida)
- [ ] Persistir progresso real de conquistas e missões por usuário no `localStorage`
- [ ] Adicionar backend para autenticação real (JWT ou OAuth)
- [ ] Sistema de XP e ranking entre usuários
- [ ] Animações de transição entre rotas com React Router + CSS
- [ ] Responsividade mobile nas subpáginas de GOW e Cyberpunk
- [ ] Mover assets dos sub-apps para a pasta `/public` do Vite (caminhos de assets padronizados)
- [ ] Lazy loading das rotas dos jogos com `React.lazy` + `Suspense`
- [ ] Adicionar novos jogos ao catálogo (ex: The Last of Us, Elden Ring)

---

## 👨‍💻 Autor

Desenvolvido por **Matson** e parceiros

[![GitHub](https://img.shields.io/badge/GitHub-matsonfv-181717?style=for-the-badge&logo=github)](https://github.com/matsonfv)

---

<div align="center">
  <sub>Feito com ⚔️ React + Vite — Que as conquistas sejam suas.</sub>
</div>
