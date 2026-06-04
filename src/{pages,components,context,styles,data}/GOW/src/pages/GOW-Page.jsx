import { useState } from 'react';
import GOWHeader from '../components/GOW-Header';
import GOWFooter from '../components/GOW-Footer';
import GOWTrailerPopup from '../components/GOW-TrailerPopup';
import GOWCard from '../components/GOW-Card';
import GOWSplashScreen from '../components/GOW-SplashScreen';
import { conquistas, missoes } from '../data/gowData';

export default function GOWPage() {
    const [trailerAberto, setTrailerAberto] = useState(false);
    const [splashFinalizado, setSplashFinalizado] = useState(false);

    return (
        <>
            {/* Vídeo de neve de fundo */}
            <video autoPlay muted loop className="video-neve-gow" playsInline>
                <source src="/src/{pages,components,context,styles,data}/GOW/src/assets/gow/videoNeveCaindo.mp4" type="video/mp4" />
            </video>

            {/* Splash de entrada com machado */}
            {!splashFinalizado && (
                <GOWSplashScreen onFinish={() => setSplashFinalizado(true)} />
            )}

            <GOWHeader onOpenTrailer={() => setTrailerAberto(true)} />

            <div className="body-gow">
                {/* Seção Hero */}
                <main className="secao-hero-gow">
                    <div className="conteudo-hero-gow">
                        <h1 className="titulo-principal-gow frase-nordica-gow">
                            <span className="iniciais-gow">E</span>nfrente a Fúria do{' '}
                            <span className="iniciais-gow">R</span>agnarok, a{' '}
                            <span className="iniciais-gow">V</span>ingança Nórdica o aguarda.
                        </h1>
                        <p className="descricao-hero-gow">
                            Junte-se à maior comunidade gamer. Complete missões exclusivas,
                            desbloqueie conquistas e compartilhe suas vitórias.
                        </p>
                       
                    </div>

                    <div className="simbolo-hero-gow">
                        <img
                            src="/src/{pages,components,context,styles,data}/GOW/src/assets/gow/simboloGOW-removebg-preview.png"
                            alt="Símbolo GOW"
                            className="imagem-flutuante-gow"
                        />
                    </div>
                </main>

                {/* Seção de Conquistas */}
                <section id="conquistas" className="secao-conteudo-gow">
                    <div className="cabecalho-secao-gow">
                        <h2 className="titulo-secao-gow frase-nordica-gow">🏆 Conquistas de Midgard e Além ⚔️</h2>
                    </div>
                    <div className="container-conquistas-gow">
                        {conquistas.map((item) => (
                            <GOWCard key={item.id} tipo="conquista" {...item} />
                        ))}
                    </div>
                </section>

                {/* Seção de Missões */}
                <section id="missoes" className="secao-missoes-gow">
                    <div className="cabecalho-secao-gow">
                        <h2 className="titulo-arvore-gow frase-nordica-gow">🌳 Árvore de Missões de Yggdrasil 🌳</h2>
                    </div>

                    <div className="arvore-missao-visual-gow">
                        {missoes.map((item) => {
                            const posClasses = [
                                'pos-tronco-principal-gow',
                                'pos-galho-e-superior-gow',
                                'pos-galho-d-superior-gow',
                                'pos-galho-central-gow',
                                'pos-galho-e-inferior-gow',
                                'pos-galho-d-inferior-gow'
                            ];
                            return (
                                <GOWCard
                                    key={item.id}
                                    tipo="missao"
                                    extraClass={posClasses[item.id - 1] || ''}
                                    {...item}
                                />
                            );
                        })}
                    </div>
                </section>
            </div>

            <GOWFooter />
            <GOWTrailerPopup isOpen={trailerAberto} onClose={() => setTrailerAberto(false)} />
        </>
    );
}
