export default function GOWTrailerPopup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="overlay-popup-gow" onClick={(e) => {
            if (e.target.className === 'overlay-popup-gow') onClose();
        }}>
            <div className="caixa-popup-gow">
                <span className="botao-fechar-gow" onClick={onClose}>×</span>
                <div className="conteudo-video-gow">
                    <iframe
                        src="https://www.youtube.com/embed/x6oF3Jxu7X0?autoplay=1&mute=1"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="God of War Ragnarök - Trailer"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
