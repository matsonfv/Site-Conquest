import { useEffect, useRef } from 'react';

export default function GOWSplashScreen({ onFinish }) {
    const axeWrapperRef = useRef(null);
    const axeImgRef = useRef(null);
    const crackRef = useRef(null);
    const splashBgRef = useRef(null);
    const splashContainerRef = useRef(null);

    function iniciar() {
        const entrarSite = document.getElementById('entrar-site-gow');
        if (entrarSite) entrarSite.style.display = 'none';

        const splashContainer = splashContainerRef.current;
        if (splashContainer) splashContainer.style.display = 'flex';

        const somVoo = new Audio('/src/{pages,components,context,styles,data}/GOW/src/assets/gow/SomArremesso.mp3');
        const somAmbiente = new Audio('/src/{pages,components,context,styles,data}/GOW/src/assets/gow/temaGodofwar.mp3');
        somAmbiente.loop = false;
        somAmbiente.volume = 0;

        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            if (axeWrapperRef.current) axeWrapperRef.current.classList.add('animate-axe-move-gow');
            somVoo.play().catch(() => {});

            setTimeout(() => {
                if (axeImgRef.current) axeImgRef.current.classList.add('stop-spin-gow');
                if (crackRef.current) crackRef.current.classList.add('crack-visible-gow');
                document.body.classList.add('shake-active-gow');

                somVoo.pause();
                somAmbiente.play().catch(() => {});

                let fadeAudio = setInterval(() => {
                    if (somAmbiente.volume < 1.0) {
                        somAmbiente.volume = Math.min(somAmbiente.volume + 0.1, 1.0);
                    } else {
                        clearInterval(fadeAudio);
                    }
                }, 200);

                if (splashBgRef.current) splashBgRef.current.style.opacity = '0';

                setTimeout(() => {
                    document.body.classList.remove('shake-active-gow');
                }, 300);

                setTimeout(() => {
                    if (splashContainer) {
                        splashContainer.style.transition = 'opacity 1s';
                        splashContainer.style.opacity = '0';
                        setTimeout(() => {
                            onFinish();
                            document.body.style.overflow = 'auto';
                        }, 1000);
                    }
                }, 3000);

            }, 700);
        }, 500);
    }

    return (
        <>
            {/* Tela de entrada */}
            <div id="entrar-site-gow" className="entrar-site-gow">
                <div className="conteudo-entrada-gow">
                    <button id="btn-iniciar-gow" className="btn-iniciar-gow frase-nordica-gow" onClick={iniciar}>
                        Iniciar Experiência
                    </button>
                </div>
            </div>

            {/* Splash do machado */}
            <div id="splash-container-gow" ref={splashContainerRef} className="splash-container-gow" style={{ display: 'none' }}>
                <div id="splash-black-bg-gow" ref={splashBgRef} className="splash-black-bg-gow"></div>
                <div className="axe-wrapper-gow" ref={axeWrapperRef}>
                    <img
                        src="/src/{pages,components,context,styles,data}/GOW/src/assets/gow/machadokratos.png"
                        className="kratos-axe-gow"
                        ref={axeImgRef}
                        alt="Machado Leviatã"
                    />
                </div>
                <img
                    src="/src/{pages,components,context,styles,data}/GOW/src/assets/gow/Rachadura.png"
                    className="screen-crack-gow"
                    ref={crackRef}
                    alt="Rachadura"
                />
            </div>
        </>
    );
}
