// ============================================================
// main.jsx — PONTO DE ENTRADA DA APLICAÇÃO
// Aqui o React é conectado ao HTML (div#root do index.html)
// e o BrowserRouter é envolvido em volta de tudo para
// habilitar a navegação por URL no React Router.
// ============================================================

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Importa o CSS global da aplicação (convertido do style2.css original)
import './styles/style2.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter habilita o uso de <Routes>, <Link>, useNavigate etc. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
