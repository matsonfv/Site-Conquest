// ============================================================
// pages/MissionsPage.jsx — PÁGINA DE MISSÕES
//
// Converte a função renderMissionsPage() do app.js para JSX.
// Exibe as missões agrupadas por jogo com barra de progresso.
// ============================================================

import { useAuth } from '../context/AuthContext'
import { MISSIONS_DATA } from '../data/gameData'

export default function MissionsPage() {
  const { user } = useAuth()

  return (
    <div className="page-container">

      {/* ── Cabeçalho da página ── */}
      <div className="page-header">
        <div className="page-icon missions">
          <i className="fas fa-crosshairs"></i>
        </div>
        <div>
          <h1 className="page-title">Missões</h1>
          <p className="page-subtitle">Complete desafios e ganhe recompensas</p>
        </div>
      </div>

      {/* Aviso de login — aparece apenas se o usuário não estiver logado */}
      {!user && (
        <div style={{
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(147,51,234,0.2) 0%, rgba(6,182,212,0.2) 100%)',
          border: '1px solid rgba(147,51,234,0.3)',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <p style={{ color: 'white' }}>
            Faça login para acompanhar seu progresso nas missões
          </p>
        </div>
      )}

      {/* ── Lista de missões agrupadas por jogo ── */}
      {MISSIONS_DATA.map(gameData => (
        <div key={gameData.game} style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '24px' }}>{gameData.game}</h2>

          <div className="cards-grid">
            {gameData.missions.map(mission => (
              <div key={mission.title} className="mission-card">

                {/* Ícone colorido do jogo */}
                <div
                  className="card-icon-wrapper"
                  style={{ background: gameData.color }}
                >
                  <i className="fas fa-crosshairs"></i>
                </div>

                <h3 className="card-title">{mission.title}</h3>
                <p className="card-description">{mission.desc}</p>

                {/* Barra de progresso */}
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                    fontSize: '0.875rem'
                  }}>
                    <span style={{ color: '#9ca3af' }}>Progresso</span>
                    <span>{mission.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${mission.progress}%`, background: gameData.color }}
                    />
                  </div>
                </div>

                {/* Rodapé do card: XP e botão de ação */}
                <div className="card-footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#eab308' }}>
                    <i className="fas fa-trophy"></i>
                    <span style={{ fontSize: '0.875rem' }}>
                      {mission.progress === 100 ? '100' : '50'} XP
                    </span>
                  </div>
                  <button
                    className={`btn ${mission.progress === 100 ? 'btn-primary' : 'btn-outline'}`}
                    style={{ padding: '8px 16px', fontSize: '0.875rem' }}
                  >
                    {mission.progress === 100 ? 'Completa' : 'Iniciar'}
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
