export default function CPTrailerPopup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="overlay-popup-cp" onClick={(e) => {
            if (e.target.className === "overlay-popup-cp") onClose();
        }}>
            <div className="caixa-popup-cp">
                <span className="botao-fechar-cp" onClick={onClose}>×</span>
                <div className="conteudo-video-cp">
                    <iframe 
                        id="iframe-video"
                        src="https://www.youtube.com/embed/LembwKDo1Dk?autoplay=1&mute=1"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="Trailer"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}