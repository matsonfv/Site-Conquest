import { useState } from 'react';
import GOWHeader from '../components/GOW-Header';
import GOWFooter from '../components/GOW-Footer';
import GOWTrailerPopup from '../components/GOW-TrailerPopup';

export default function GOWSobre() {
    const [trailerAberto, setTrailerAberto] = useState(false);

    return (
        <>
            {/* Vídeo de neve de fundo */}
            <video autoPlay muted loop className="video-neve-gow" playsInline>
                <source src="/src/{pages,components,context,styles,data}/GOW/src/assets/gow/videoNeveCaindo.mp4" type="video/mp4" />
            </video>

            <GOWHeader onOpenTrailer={() => setTrailerAberto(true)} />

            <div className="body-gow">
                <div className="sobre-gow">
                    <h1 className="frase-nordica-gow">God of War Ragnarok</h1>
                    <p>
                        God of War Ragnarök não é apenas uma sequência; é a conclusão ambiciosa da saga Nórdica,
                        dando continuidade à jornada de Kratos e Atreus em um mundo que está literalmente congelado
                        e à beira da guerra. O jogo se passa três anos após os eventos do título anterior, com o
                        rigoroso Fimbulwinter cobrindo os Nove Reinos em gelo e neve, um presságio do iminente
                        Ragnarök, a profecia do fim de tudo.
                    </p>
                </div>

                <section className="video-container-gow">
                    <iframe
                        src="https://www.youtube.com/embed/GAPZXwI_UBE"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="God of War Ragnarök - Gameplay"
                    ></iframe>
                </section>

                <div className="enredo-gow">
                    <h1 className="frase-nordica-gow">Enredo</h1>
                    <p>
                        <strong>A Profecia e a Busca por Identidade</strong><br /><br />
                        No centro da narrativa está o crescimento de Atreus. Agora mais velho e mais consciente
                        de sua identidade como Loki, o gigante Jötunn, ele se sente compelido a entender a verdade
                        por trás das profecias que ligam seu nome ao colapso de Asgard. Essa busca por conhecimento
                        e por um propósito próprio o leva a conflitos crescentes com Kratos, que deseja apenas paz
                        e segurança.<br /><br />

                        <strong>Ameaças de Asgard</strong><br /><br />
                        A dupla não pode mais se esconder. A morte de Baldur no jogo anterior despertou a ira de
                        Odin, o Pai de Todos, e ele envia seu exército para caçar Kratos e Atreus. Os heróis são
                        confrontados por Thor, o Deus do Trovão, que busca vingança pela morte de seus filhos.<br /><br />

                        <strong>O Coração da Aventura</strong><br /><br />
                        Pela primeira vez, os jogadores terão acesso a todos os Nove Reinos. A mecânica de combate
                        foi aprimorada, mantendo a brutalidade satisfatória das Lâminas do Caos e do Machado
                        Leviatã, mas adicionando novas habilidades e possibilidades de ataque em equipe com Atreus.<br /><br />

                        God of War Ragnarök é uma história densa e emocional sobre as difíceis escolhas da
                        paternidade, o fardo do legado e se é realmente possível reescrever o próprio destino.
                    </p>
                </div>
            </div>

            <GOWFooter />
            <GOWTrailerPopup isOpen={trailerAberto} onClose={() => setTrailerAberto(false)} />
        </>
    );
}
