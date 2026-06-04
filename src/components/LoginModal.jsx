// ============================================================
// components/LoginModal.jsx — MODAL DE LOGIN / CADASTRO
//
// Substitui toda a lógica do modal do app.js:
//   openLoginModal(), closeLoginModal(), toggleAuthMode(), handleAuth()
//
// Props recebidas:
//   isOpen  — boolean que controla se o modal está visível
//   onClose — função chamada para fechar o modal
// ============================================================

import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function LoginModal({ isOpen, onClose }) {
  // ── Estado local do formulário ──────────────────────────
  const [isRegister, setIsRegister] = useState(false)  // false = Login | true = Cadastro
  const [name,     setName]         = useState('')
  const [email,    setEmail]        = useState('')
  const [password, setPassword]     = useState('')

  // Função de login vinda do contexto global
  const { login } = useAuth()

  // ── Submit do formulário ─────────────────────────────────
  // Equivale à função handleAuth(e) do app.js original
  function handleSubmit(e) {
    e.preventDefault()
    login({ name, email })   // salva no localStorage via AuthContext
    resetForm()
    onClose()
  }

  function resetForm() {
    setName('')
    setEmail('')
    setPassword('')
    setIsRegister(false)
  }

  function handleClose() {
    resetForm()
    onClose()
  }

  return (
    /* A classe "active" mostra o modal com opacity:1 (definido no CSS original) */
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="modal-content">

        {/* ── Cabeçalho do modal ── */}
        <div className="modal-header">
          {/* Título muda entre Login e Criar Conta */}
          <h2>{isRegister ? 'Criar Conta' : 'Login'}</h2>
          <button className="close-btn" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* ── Formulário ── */}
        <form onSubmit={handleSubmit}>

          {/* Campo Nome — só aparece no modo cadastro */}
          {isRegister && (
            <div className="form-group">
              <label>Nome</label>
              <div className="input-wrapper">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Campo Email */}
          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="seu@email.com"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div className="form-group">
            <label>Senha</label>
            <div className="input-wrapper">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            {isRegister ? 'Criar Conta' : 'Entrar'}
          </button>
        </form>

        {/* ── Rodapé com toggle entre Login e Cadastro ── */}
        <div className="modal-footer">
          <button
            className="btn-link"
            onClick={() => setIsRegister(prev => !prev)}
          >
            {isRegister
              ? 'Já tem uma conta? Faça login'
              : 'Não tem conta? Cadastre-se'}
          </button>
        </div>

      </div>
    </div>
  )
}
