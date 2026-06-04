export default function GOWFooter() {
    return (
        <footer className="footer-gow">
            <div className="footer-logos-gow">
                <img
                    src="/src/{pages,components,context,styles,data}/GOW/src/assets/gow/logoPlaystationSteam.png"
                    alt="PlayStation e Steam"
                />
                <img
                    src="/src/{pages,components,context,styles,data}/GOW/src/assets/gow/icon_esrb_portal_long.jpg"
                    alt="Classificação ESRB"
                />
            </div>

            <div className="footer-texto-gow">
                <p>
                    Não nos responsabilizamos, expressa ou implicitamente, por quaisquer problemas entre indivíduos
                    ou grupos que utilizem este serviço. A publicação, visualização, envio e recebimento de dados
                    são de responsabilidade exclusiva de cada usuário. "PlayStation Family Mark", "PlayStation",
                    "logotipo do PS5" e "PS5" são marcas registradas ou marcas comerciais da Sony Interactive
                    Entertainment Inc. O logotipo do Steam é uma marca comercial e/ou marca registrada da Valve
                    Corporation nos EUA e/ou em outros países. God of War é propriedade da Sony Interactive
                    Entertainment e Santa Monica Studio.
                </p>
            </div>
        </footer>
    );
}
