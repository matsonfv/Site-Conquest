// ============================================================
// pages/HomePage.jsx — PÁGINA INICIAL
//
// Converte a função renderHomePage() do app.js para JSX.
// Contém todas as seções da home:
//   1. Hero banner
//   2. Como funciona (features)
//   3. Jogos disponíveis
//   4. Ofertas Nuuvem
//   5. Estatísticas gerais
// ============================================================

import { useNavigate } from 'react-router-dom'
import { GAMES, DEALS } from '../data/gameData'

export default function HomePage() {
  // useNavigate substitui o navigateToPage() do app.js para
  // navegar para /missoes e /conquistas pelos botões do Hero
  const navigate = useNavigate()

  return (
    <>
      {/* ════════════════════════════════════════════════════
          SEÇÃO 1 — HERO BANNER
          Título principal com botões de ação rápida
      ════════════════════════════════════════════════════ */}
      <section className="hero-section">
        {/* Imagem de fundo com animação de zoom lento */}
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1695074185991-136f993ad998?w=1920&q=80')" }}
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-title">Desbloqueie Seu Potencial</h1>
          <p className="hero-subtitle">
            Acompanhe conquistas, complete missões e domine seus jogos favoritos
          </p>

          <div className="hero-buttons">
            {/* Navega para a página de missões via React Router */}
            <button
              className="btn btn-primary btn-large"
              onClick={() => navigate('/missoes')}
            >
              Explorar Missões
            </button>
            {/* Navega para a página de conquistas via React Router */}
            <button
              className="btn btn-outline btn-large"
              onClick={() => navigate('/conquistas')}
            >
              Ver Conquistas
            </button>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SEÇÃO 2 — COMO FUNCIONA (FEATURES)
      ════════════════════════════════════════════════════ */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Como Funciona</h2>
          <p className="section-subtitle">Descubra todas as funcionalidades da plataforma</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon trophy">
              <i className="fas fa-trophy"></i>
            </div>
            <h3 className="feature-title">Conquistas</h3>
            <p className="feature-description">
              Acompanhe todas as conquistas desbloqueadas em seus jogos favoritos
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon target">
              <i className="fas fa-crosshairs"></i>
            </div>
            <h3 className="feature-title">Missões</h3>
            <p className="feature-description">
              Complete missões desafiadoras e ganhe recompensas exclusivas
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon users">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="feature-title">Comunidade</h3>
            <p className="feature-description">
              Compare seu progresso com outros jogadores ao redor do mundo
            </p>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SEÇÃO 3 — JOGOS DISPONÍVEIS
          Os cards usam useNavigate para redirecionar às
          subpáginas cujas rotas você definiu no App.jsx.
      ════════════════════════════════════════════════════ */}
      <section className="games-section">
        <div className="section-header">
          <h2 className="section-title">Jogos Disponíveis</h2>
          <p className="section-subtitle">Explore conquistas e missões dos melhores jogos</p>
        </div>

        <div className="games-grid">
          {/* Renderiza um card para cada jogo definido em gameData.js */}
          {GAMES.map(game => (
            <div
              key={game.id}
              className="game-card"
              onClick={() => navigate(game.path)}  // ← navega para a rota do jogo
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && navigate(game.path)}
            >
              {/* Imagem de fundo do card */}
              <div
                className="game-card-bg"
                style={{ backgroundImage: `url('${game.bgImage}')` }}
              />
              {/* Overlay colorido sobre a imagem */}
              <div className={`game-card-overlay ${game.overlayClass}`} />

              {/* Conteúdo do card */}
              <div className="game-card-content">
                <span className="game-genre">{game.genre}</span>
                <h3 className="game-title">{game.title}</h3>
                <button className="game-btn">Explorar</button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SEÇÃO 4 — OFERTAS NUUVEM
          Cards de afiliado com links externos
      ════════════════════════════════════════════════════ */}
      <section className="deals-section" style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
        <div className="section-header">
          <h2 className="section-title" style={{ color: '#10b981' }}>
            <i className="fas fa-percentage"></i> Ofertas Nuuvem
          </h2>
          <p className="section-subtitle">Os melhores preços com links de afiliado</p>
        </div>

        <div className="games-grid">
          {DEALS.map((deal, index) => (
            <div key={index} className="game-card affiliate-card">
              {/* Selo de desconto no canto */}
              <div
                className="discount-badge"
                style={{ background: deal.badgeColor }}
              >
                {deal.badge}
              </div>

              <img src={deal.image} alt={deal.name} />

              <div className="deal-content">
                <h3 className="deal-name">{deal.name}</h3>

                <div className="price-container">
                  <span className="price-old">{deal.priceOld}</span>
                  <span className="price-current">{deal.priceCurrent}</span>
                </div>

                {/* Link externo — abre em nova aba */}
                <a
                  href={deal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-buy"
                  style={{ background: deal.btnColor }}
                >
                  Comprar na Nuuvem <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SEÇÃO 5 — ESTATÍSTICAS GERAIS
      ════════════════════════════════════════════════════ */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-gamepad"></i></div>
            <div className="stat-value">3</div>
            <div className="stat-label">Jogos Disponíveis</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-trophy"></i></div>
            <div className="stat-value">150+</div>
            <div className="stat-label">Conquistas</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-chart-line"></i></div>
            <div className="stat-value">50K+</div>
            <div className="stat-label">Jogadores Ativos</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-award"></i></div>
            <div className="stat-value">500+</div>
            <div className="stat-label">Missões</div>
          </div>
        </div>
      </section>
    </>
  )
}
