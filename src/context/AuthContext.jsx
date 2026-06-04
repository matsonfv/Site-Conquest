// ============================================================
// context/AuthContext.jsx — CONTEXTO GLOBAL DE AUTENTICAÇÃO
//
// Substitui o objeto `state` do app.js original.
// O Context API do React permite que qualquer componente
// acesse o usuário logado sem precisar passar props manualmente
// em cada nível da árvore de componentes.
// ============================================================

import { createContext, useContext, useState, useEffect } from 'react'

// 1. Criação do contexto (o "canal" de comunicação global)
const AuthContext = createContext(null)

// 2. Provider — envolve toda a aplicação e disponibiliza o estado
export function AuthProvider({ children }) {
  // Estado do usuário: começa como null (não logado)
  const [user, setUser] = useState(null)

  // Ao montar o componente, verifica se há usuário salvo no localStorage
  // (equivalente à função loadUser() do app.js original)
  useEffect(() => {
    const saved = localStorage.getItem('gameAchievementsUser')
    if (saved) {
      setUser(JSON.parse(saved))
    }
  }, [])

  // Função de login/cadastro
  // (equivalente à função handleAuth() do app.js original)
  function login({ name, email }) {
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: name || email.split('@')[0],
      email,
      achievements: []
    }
    localStorage.setItem('gameAchievementsUser', JSON.stringify(newUser))
    setUser(newUser)
  }

  // Função de logout
  // (equivalente à função logout() do app.js original)
  function logout() {
    localStorage.removeItem('gameAchievementsUser')
    setUser(null)
  }

  // Tudo dentro de `value` fica disponível para qualquer componente filho
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 3. Hook personalizado — simplifica o acesso ao contexto em outros arquivos
// Uso: const { user, login, logout } = useAuth()
export function useAuth() {
  return useContext(AuthContext)
}
