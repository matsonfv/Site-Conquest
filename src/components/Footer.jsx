// ============================================================
// components/Footer.jsx — RODAPÉ DA APLICAÇÃO
//
// Componente estático, convertido diretamente do HTML original.
// ============================================================

export default function Footer() {
  return (
    <footer className="footer">

      {/* ── Linha de links institucionais ── */}
      <div className="content">
        <div className="links">
          <a href="https://regulations.cdprojektred.com/privacy_policy">
            Termos de Uso &amp; Política de Privacidade
          </a>
          <a href="https://en.cdprojektred.com/jobs/">Carreiras</a>
          <a href="https://regulations.cdprojektred.com/user_agreement">User agreement</a>
          <a href="https://cdprojektred.com/fan-content">Fan Content Guidelines</a>
          <a href="#cookie">Declaração de cookies</a>
          <a href="/pt-br/modding-support">REDmod</a>
        </div>
      </div>

      {/* ── Linha de copyright ── */}
      <div className="content">
        <div className="copyright">
          <p>© 2026 Todos os direitos reservados.</p>
        </div>
      </div>

    </footer>
  )
}
