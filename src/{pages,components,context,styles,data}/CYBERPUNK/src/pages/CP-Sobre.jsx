import { useState } from 'react';
import CPHeader from '../components/CP-Header';
import CPFooter from '../components/CP-Footer';
import CPTrailerPopup from '../components/CP-TrailerPopup';

export default function CPSobre() {
    const [trailerAberto, setTrailerAberto] = useState(false);

    // Array com os IDs dos vídeos da Steam
    const videosSteam = [
        { poster: "4719eddcc4434da05f0226f8564f68a4.poster", src: "4719eddcc4434da05f0226f8564f68a4" },
        { poster: "3917d8ce7a57dc0a1d7245846ee87bbe.poster", src: "bee28314117d263d1ca8f0b38c75f9e1" },
        { poster: "c851ccb251786e31dc8c288f9cce0199.poster", src: "3917d8ce7a57dc0a1d7245846ee87bbe" },
        { poster: "7708e1f93550cffa78381aa939f6b062.poster", src: "c851ccb251786e31dc8c288f9cce0199" },
        { poster: "4719eddcc4434da05f0226f8564f68a4.poster", src: "7708e1f93550cffa78381aa939f6b062" },
        { poster: "4719eddcc4434da05f0226f8564f68a4.poster", src: "e2a07c1431cca0a9da3be5c3a0f218d4" }
    ];

    return (
        <>
            <CPHeader onOpenTrailer={() => setTrailerAberto(true)} />
            <body className="body-cp">
            <main className="secao-hero-cp" style={{ height: 'auto', marginTop: '120px', paddingBottom: '50px' }}>
                <div className="conteudo-hero-cp" style={{ zIndex: 1 }}>
                    <h1 className="titulo-principal-cp">SOBRE O JOGO</h1>
                    <p className="descricao-hero-cp">
                        Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto que se passa em Night City, uma megalópole perigosa onde todos são obcecados por poder, glamour e alterações corporais.
                    </p>
                    <br />
                    <button className="botao-destaque-cp" onClick={() => setTrailerAberto(true)}>
                        Assistir Trailer
                    </button>
                </div>

                <div className="bb_paragraph-cp" style={{ zIndex: 1, marginTop: '50px' }}>
                    {videosSteam.map((vid, index) => (
                        <span key={index} className="bb_img_ctn-cp">
                            <video className="bb_img-cp" autoPlay muted loop playsInline crossOrigin="anonymous" 
                                poster={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/extras/${vid.poster}.avif?t=1765554351`} width="1000" height="370">
                                <source src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/extras/${vid.src}.webm?t=1765554351`} type="video/webm; codecs=vp9" />
                            </video>
                        </span>
                    ))}
                </div>
            </main>
            </body>
            <CPFooter />
            <CPTrailerPopup isOpen={trailerAberto} onClose={() => setTrailerAberto(false)} />
        </>
    );
}