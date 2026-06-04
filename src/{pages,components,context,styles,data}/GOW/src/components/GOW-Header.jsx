import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function GOWHeader({ onOpenTrailer }) {
    const [menuAtivo, setMenuAtivo] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/god-of-war';

    return (
        <header className="header-gow">
            <div className="logo-gow">
                <Link to="/">
                    <img src="/src/{pages,components,context,styles,data}/GOW/src/assets/gow/LogoGOW.png" alt="God of War Ragnarök" />
                </Link>
            </div>

            <button className="menu-mobile-gow" onClick={() => setMenuAtivo(!menuAtivo)}>☰</button>

            <nav className={`menu-navegacao-gow ${menuAtivo ? 'ativo' : ''}`}>
                <Link to="/god-of-war">Início</Link>
                <button onClick={onOpenTrailer}>Trailer</button>

                {isHome && (
                    <>
                        <a href="#conquistas">Conquistas</a>
                        <a href="#missoes">Missões</a>
                    </>
                )}

                <Link to="/god-of-war/sobre">Sobre o Jogo</Link>
            </nav>
        </header>
    );
}
