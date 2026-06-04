// ============================================================
// pages/AchievementsPage.jsx — PÁGINA DE CONQUISTAS
//
// Converte a função renderAchievementsPage() do app.js para JSX.
// Exibe o painel de progresso geral e as conquistas por jogo.
// ============================================================

import { useAuth } from '../context/AuthContext'
import { ACHIEVEMENTS_DATA } from '../data/gameData'

export default function AchievementsPage() {
  const { user } = useAuth()

  // ── Cálculos de progresso geral (mesma lógica do app.js) ──
  const total    = ACHIEVEMENTS_DATA.reduce((acc, g) => acc + g.achievements.length, 0)
  const unlocked = ACHIEVEMENTS_DATA.reduce((acc, g) => acc + g.achievements.filter(a => a.unlocked).length, 0)
  const pct      = Math.round((unlocked / total) * 100)

  return (
    <div className="page-container">

      {/* ── Cabeçalho da página ── */}
      <div className="page-header">
        <div className="page-icon achievements">
          <i className="fas fa-trophy"></i>
        </div>
        <div>
          <h1 className="page-title">Conquistas</h1>
          <p className="page-subtitle">Suas conquistas desbloqueadas</p>
        </div>
      </div>

      {/* ── Painel de progresso geral ── */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '32px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '24px',
          marginBottom: '24px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{unlocked}</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Desbloqueadas</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{total}</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Total</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{pct}%</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Progresso</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <i className="fas fa-award" style={{ fontSize: '2rem', color: '#eab308', marginBottom: '8px' }}></i>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
              Nível {Math.floor(pct / 10)}
            </div>
          </div>
        </div>

        {/* Barra de progresso geral */}
        <div className="progress-bar" style={{ height: '12px' }}>
          <div
            className="progress-fill"
            style={{
              width: `${pct}%`,
              background: 'linear-gradient(135deg, #eab308 0%, #f97316 100%)'
            }}
          />
        </div>
      </div>

      {/* Aviso de login */}
      {!user && (
        <div style={{
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(147,51,234,0.2) 0%, rgba(6,182,212,0.2) 100%)',
          border: '1px solid rgba(147,51,234,0.3)',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <p style={{ color: 'white' }}>Faça login para salvar suas conquistas</p>
        </div>
      )}

      {/* ── Lista de conquistas agrupadas por jogo ── */}
      {ACHIEVEMENTS_DATA.map(gameData => (
        <div key={gameData.game} style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '24px' }}>{gameData.game}</h2>

          <div className="cards-grid">
            {gameData.achievements.map(achievement => (
              <div
                key={achievement.title}
                className="achievement-card"
                style={{ opacity: achievement.unlocked ? 1 : 0.6 }}
              >
                {/* Cadeado para conquistas bloqueadas */}
                {!achievement.unlocked && (
                  <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                    <i className="fas fa-lock" style={{ color: '#6b7280' }}></i>
                  </div>
                )}

                {/* Ícone do card */}
                <div
                  className="card-icon-wrapper"
                  style={{
                    background: achievement.unlocked
                      ? gameData.color
                      : 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
                    border: `2px solid ${achievement.unlocked
                      ? 'rgba(255,255,255,0.2)'
                      : 'rgba(107,114,128,0.5)'}`
                  }}
                >
                  <i className={`fas ${achievement.unlocked ? 'fa-trophy' : 'fa-lock'}`}></i>
                </div>

                <h3 className="card-title">{achievement.title}</h3>
                <p className="card-description">{achievement.desc}</p>

                <div className="card-footer">
                  <span style={{
                    fontSize: '0.875rem',
                    color: achievement.unlocked ? '#3b82f6' : '#6b7280'
                  }}>
                    {achievement.rarity}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                    {achievement.unlocked ? '50' : '??'} pts
                  </span>
                </div>

                {/* Badge dourado para conquistas desbloqueadas */}
                {achievement.unlocked && (
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: gameData.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}>
                    <i className="fas fa-trophy" style={{ fontSize: '16px' }}></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
