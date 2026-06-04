export default function GOWCard({ tipo, titulo, descricao, imagem, progresso, raridade, status, statusTexto, extraClass }) {
    const isConquista = tipo === 'conquista';

    if (!isConquista) {
        return (
            <div className={`missao-card-gow ${status} ${extraClass || ''}`}>
                <h4 className="frase-nordica-gow">{titulo}</h4>
                <p>{descricao}</p>
                <span className={`status-missao-gow ${status}`}>{statusTexto}</span>
            </div>
        );
    }

    return (
        <div className={`conquista-card-gow ${raridade}`}>
            <div className="conquista-icone-gow">
                <img src={imagem} alt={titulo} />
            </div>
            <div className="conquista-info-gow">
                <h3>{titulo}</h3>
                <p className="descricao-gow">{descricao}</p>
                <div className="progresso-barra-gow">
                    <div className="progresso-preenchimento-gow" style={{ width: `${progresso}%` }}>
                        {progresso}% {progresso === 100 ? 'Obtida' : 'Concluído'}
                    </div>
                </div>
            </div>
        </div>
    );
}
