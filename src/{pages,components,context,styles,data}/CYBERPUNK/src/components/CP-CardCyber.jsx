export default function CPCardCyber({ tipo, titulo, descricao, imagem, progresso }) {
    const isConquista = tipo === 'conquista';

    return (
        <div className={`card-cyber-cp ${isConquista ? 'conquista' : 'missao'}`}>
            <div className="card-imagem-cp">
                <img src={imagem} alt={titulo} />
                <span className="tag-tipo-cp">{tipo.toUpperCase()}</span>
            </div>

            <div className="card-info-cp">
                <h3>{titulo}</h3>
                <p>{descricao}</p>

                {isConquista ? (
                    <div className="barra-progresso-cp">
                        <div className="preenchimento-cp" style={{ width: `${progresso}%` }}></div>
                    </div>
                ) : (
                    <button className="btn-card-cp">Aceitar Contrato</button>
                )}
            </div>
        </div>
    );
}