// ============================================================
// App.jsx — ROTEADOR PRINCIPAL
//
// Define todas as rotas da aplicação. Cada <Route> mapeia
// uma URL para um componente de página. O layout com Header
// e Footer é compartilhado entre todas as páginas.
//
// ROTAS DEFINIDAS:
//   /             → HomePage
//   /missoes      → MissionsPage
//   /conquistas   → AchievementsPage
//
// ROTAS DAS SUBPÁGINAS (a serem implementadas por você):
//   /resident-evil   → sua página do RE4
//   /god-of-war      → sua página do God of War
//   /cyberpunk-2077  → sua página do Cyberpunk
// ============================================================

import { Routes, Route } from 'react-router-dom'

// Contexto de autenticação global
import { AuthProvider } from './context/AuthContext'

// Componentes de layout (presentes em todas as páginas)
import Header from './components/Header'
import Footer from './components/Footer'

// Páginas da aplicação
import HomePage from './pages/HomePage'
import MissionsPage from './pages/MissionsPage'
import AchievementsPage from './pages/AchievementsPage'

import CPPage from './{pages,components,context,styles,data}/CYBERPUNK/src/pages/CP-Page'
import CPSobre from './{pages,components,context,styles,data}/CYBERPUNK/src/pages/CP-Sobre'

import GOWPage from './{pages,components,context,styles,data}/GOW/src/pages/GOW-Page'
import GOWSobre from './{pages,components,context,styles,data}/GOW/src/pages/GOW-Sobre'
import './{pages,components,context,styles,data}/GOW/src/styles/gow.css'



export default function App() {
  return (
    // AuthProvider envolve tudo para que o estado de login
    // esteja disponível em qualquer componente da árvore
    <AuthProvider>

      {/* Header fixo no topo — aparece em todas as páginas */}
      <Header />

      {/* Área de conteúdo principal com padding-top para compensar o header fixo */}
      <main id="main-content">
        <Routes>

          {/* ── Página inicial ── */}
          <Route path="/" element={<HomePage />} />

          {/* ── Páginas internas ── */}
          <Route path="/missoes"    element={<MissionsPage />} />
          <Route path="/conquistas" element={<AchievementsPage />} />

          {/* ── Rotas das subpáginas de jogos ──────────────────────────
              Substitua o comentário abaixo pelo import e elemento
              do componente que você já criou para cada jogo.

              Exemplo:
                import ResidentEvilPage from './pages/ResidentEvilPage'
                <Route path="/resident-evil" element={<ResidentEvilPage />} />
          ─────────────────────────────────────────────────────────── */}
          <Route path="/resident-evil"    element={<div style={{padding:'100px 24px', textAlign:'center'}}>Página Resident Evil — substitua por seu componente</div>} />
          <Route path="/god-of-war"       element={<GOWPage />} />
          <Route path="/god-of-war/sobre" element={<GOWSobre />} />
          <Route path="/cyberpunk-2077" element={<CPPage />} />
          <Route path="/cyberpunk-2077/sobre" element={<CPSobre />}/>

        </Routes>
      </main>

      {/* Footer no final de todas as páginas */}
      <Footer />

    </AuthProvider>
  )
}
