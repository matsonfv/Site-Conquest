// ============================================================
// components/Header.jsx — CABEÇALHO FIXO
//
// Contém: logo, botão do menu hambúrguer, info do usuário,
// menu lateral deslizante (SideMenu) e modal de login.
//
// Substitui toda a lógica do header + menu + modal do app.js:
//   toggleMenu(), closeMenu(), openLoginModal(), handleAuth()
// ============================================================

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LoginModal from './LoginModal'

export default function Header() {
  // ── Estado local do header ──────────────────────────────
  const [menuOpen, setMenuOpen]       = useState(false)
  const [loginOpen, setLoginOpen]     = useState(false)

  // Acessa o usuário logado e a função de logout do contexto global
  const { user, logout } = useAuth()

  // Sabe qual rota está ativa para destacar o item correto no menu
  const location = useLocation()

  // ── Helpers ─────────────────────────────────────────────
  function closeAll() {
    setMenuOpen(false)
    setLoginOpen(false)
  }

  // Itens de navegação interna (rotas React)
  const navItems = [
    { label: 'Início',      path: '/',           icon: 'fa-home' },
    { label: 'Missões',     path: '/missoes',    icon: 'fa-crosshairs' },
    { label: 'Conquistas',  path: '/conquistas', icon: 'fa-trophy' },
  ]

  // Itens de jogos — usam Link do React Router em vez de window.location.href
  // Basta trocar o `path` para a rota que você definiu no App.jsx
  const gameItems = [
    { label: 'Resident Evil',  path: '/resident-evil',  color: 'red' },
    { label: 'God of War',     path: '/god-of-war',     color: 'blue' },
    { label: 'Cyberpunk 2077', path: '/cyberpunk-2077', color: 'cyber' },
  ]

  return (
    <>
      {/* ══════════════════════════════════════════════════
          HEADER FIXO
      ══════════════════════════════════════════════════ */}
      <header id="header">
        <div className="header-content">

          {/* ── Lado esquerdo: hambúrguer + logo ── */}
          <div className="header-left">
            <button
              className="menu-btn"
              aria-label="Abrir menu"
              onClick={() => setMenuOpen(true)}
            >
              <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </button>

            {/* Logo — clique volta para home */}
            <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="logo-icon">
                <i className="fas fa-star"></i>
              </div>
              <span className="logo-text">Conquest</span>
            </Link>
          </div>

          {/* ── Lado direito: info do usuário ou botão login ── */}
          <div className="header-right">
            {user ? (
              /* Usuário logado: mostra nome e botão Sair */
              <div className="user-info" style={{ display: 'flex' }}>
                <div className="user-badge">
                  <i className="fas fa-user"></i>
                  <span>{user.name}</span>
                </div>
                <button className="btn btn-danger" onClick={logout}>
                  Sair
                </button>
              </div>
            ) : (
              /* Não logado: mostra botão Login */
              <button className="btn btn-primary" onClick={() => setLoginOpen(true)}>
                <i className="fas fa-user"></i>
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════
          MENU LATERAL DESLIZANTE
          A classe "open" é adicionada/removida via estado
          (antes era feito com classList.toggle no app.js)
      ══════════════════════════════════════════════════ */}
      <div id="side-menu" className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="side-menu-content">

          {/* Cabeçalho do menu com botão fechar */}
          <div className="menu-header">
            <span>Menu</span>
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* ── Seção: Navegação ── */}
          <div className="menu-section">
            <div className="menu-label">Navegação</div>

            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
                onClick={() => setMenuOpen(false)}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* ── Seção: Jogos ──
              Usa <Link> do React Router — substitui window.location.href do original.
              O caminho em `to` deve bater com as rotas definidas no App.jsx.
          ── */}
          <div className="menu-section">
            <div className="menu-label">Jogos</div>

            {gameItems.map(game => (
              <Link
                key={game.path}
                to={game.path}
                className={`menu-item game-item ${location.pathname === game.path ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
                onClick={() => setMenuOpen(false)}
              >
                <div className={`game-dot ${game.color}`}></div>
                <span>{game.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          OVERLAY (fundo escuro ao abrir menu ou modal)
          Clicar nele fecha tudo — equivale ao overlay.addEventListener
          do app.js original
      ══════════════════════════════════════════════════ */}
      <div
        className={`overlay ${menuOpen || loginOpen ? 'active' : ''}`}
        onClick={closeAll}
      />

      {/* ══════════════════════════════════════════════════
          MODAL DE LOGIN
          Componente separado para manter o Header mais limpo
      ══════════════════════════════════════════════════ */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />
    </>
  )
}
