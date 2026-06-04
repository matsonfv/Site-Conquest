export default function CPFooter() {
    return (
        <footer className="footer-cp">
            <div className="content-cp">
                <div className="partners-cp">
                    <img loading="lazy" src="https://www.cyberpunk.net/build/images/footer/partners/nvidia-5a0ab065.svg" alt="NVIDIA" />
                    <img loading="lazy" src="https://www.cyberpunk.net/build/images/footer/partners/alienware-3d98dd93.svg" alt="Alienware" />
                    <img loading="lazy" src="https://www.cyberpunk.net/build/images/footer/partners/amd-a823d277.svg" alt="AMD" />
                </div>
            </div>

            <div className="content-cp">
                <div className="links-cp">
                    <a href="https://regulations.cdprojektred.com/privacy_policy" target="_blank" rel="noreferrer">Termos de Uso & Política de Privacidade</a>
                    <a href="https://en.cdprojektred.com/jobs/" target="_blank" rel="noreferrer">Carreiras</a>
                    <a href="https://regulations.cdprojektred.com/user_agreement" target="_blank" rel="noreferrer">User agreement</a>
                    <a href="https://cdprojektred.com/fan-content" target="_blank" rel="noreferrer">Fan Content Guidelines</a>
                    <a href="https://www.cyberpunk.net/pt-br/modding-support" target="_blank" rel="noreferrer">REDmod</a>
                </div>
            </div>

            <div className="content-cp">
                <div className="copyright-cp">
                    <a href="https://cdprojektred.com" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="https://www.cyberpunk.net/build/images/CDProjektRed-White-e4ac7847.svg" alt="CD Projekt Red" />
                    </a>
                    <p>© 2026 CD PROJEKT S.A. Todos os direitos reservados. CD PROJEKT, o logotipo CD PROJEKT, Cyberpunk, Cyberpunk 2077 e o logotipo Cyberpunk 2077 são marcas comerciais e/ou marcas registradas da CD PROJEKT S.A. nos EUA e/ou em outros países.</p>
                </div>
                <div className="projects-cp">
                    <a href="http://thewitcher.com" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="https://www.cyberpunk.net/build/images/witcher-dbdb7666.png" alt="Witcher" />
                    </a>
                    <a href="https://www.playgwent.com" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="https://www.cyberpunk.net/build/images/gwent-f7fcd4e6.png" alt="Gwent" />
                    </a>
                </div>
            </div>
        </footer>
    );
}