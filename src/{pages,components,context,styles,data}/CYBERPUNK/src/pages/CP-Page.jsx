import { useState } from 'react';
import CPHeader from '../components/CP-Header';
import CPFooter from '../components/CP-Footer';
import CPTrailerPopup from '../components/CP-TrailerPopup';
import CPCardCyber from '../components/CP-CardCyber';
import { conquistas, missoes } from '../data/cyberpunkData';

export default function CPPage() {
    const [trailerAberto, setTrailerAberto] = useState(false);

    return (
        <>
        
            <CPHeader onOpenTrailer={() => setTrailerAberto(true)} />
            <body className="body-cp">
            <main className="secao-hero-cp">
                <video className="video-background-cp" autoPlay muted loop playsInline>
                    <source src="/src/{pages,components,context,styles,data}/CYBERPUNK/src/assets/cyberpunk/CP2077_UE_KV_Animation_1920x1080.webm" type="video/webm" />
                </video>
                
                <div className="conteudo-hero-cp">
                    <h1 className="titulo-principal-cp">Aventure-se em Night City</h1>
                    <p className="descricao-hero-cp">
                        Uma história de ação e aventura em mundo aberto ambientada em Night City,
                        uma megalópole obcecada por poder, glamour e biomodificações.
                    </p>
                    <br />
                    <button className="botao-destaque-cp" onClick={() => setTrailerAberto(true)}>
                        Assistir Trailer
                    </button>
                </div>
            </main>

            <section id="conquistas" className="secao-conteudo-cp">
                <div className="cabecalho-secao-cp">
                    <h2 className="titulo-glitch-cp">CONQUISTAS</h2>
                    <p className="subtitulo-cp">Desafios completados por lendas.</p>
                </div>
                <div className="container-grid-cp">
                    {conquistas.map((item) => (
                        <CPCardCyber key={item.id} tipo="conquista" {...item} />
                    ))}
                </div>
            </section>

            <section id="missoes" className="secao-conteudo-cp fundo-alternado-cp">
                <div className="cabecalho-secao-cp">
                    <h2 className="titulo-glitch-cp" style={{ color: 'var(--cor-vermelho-neon)' }}>
                        MISSÕES PRINCIPAIS
                    </h2>
                    <p className="subtitulo-cp">Contratos disponíveis no Fixer.</p>
                </div>
                <div className="container-grid-cp">
                    {missoes.map((item) => (
                        <CPCardCyber key={item.id} tipo="missao" {...item} />
                    ))}
                </div>
            </section>
            </body>
            <CPFooter />
            <CPTrailerPopup isOpen={trailerAberto} onClose={() => setTrailerAberto(false)} />
        </>
    );
}