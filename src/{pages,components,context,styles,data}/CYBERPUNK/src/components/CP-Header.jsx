import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function CPHeader({ onOpenTrailer }) {
    const [menuAtivo, setMenuAtivo] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header className="header-cp">
            <div className="logo-central-cp">
                <Link to="/cyberpunk-2077">
                    <img src="https://www.cyberpunk.net/build/images/home8/logo-franchise-yellow-en@1x-b4c9e65b.png" alt="Logo Cyberpunk" />
                </Link>
            </div>

            <button id="menu-mobile-btn" onClick={() => setMenuAtivo(!menuAtivo)} style={{ display: 'none' }}>Menu</button>

            <nav className={`menu-navegacao-cp ${menuAtivo ? 'ativo' : ''}`} id="menu-navegacao">
                <Link to="/">Início</Link>
                <button onClick={onOpenTrailer}>Trailer</button>
                
                {isHome && (
                    <>
                        <a href="#conquistas">Conquistas</a>
                        <a href="#missoes">Missões</a>
                    </>
                )}
                
                <Link to="/cyberpunk-2077/sobre">Sobre</Link>
            </nav>
        </header>
    );
}