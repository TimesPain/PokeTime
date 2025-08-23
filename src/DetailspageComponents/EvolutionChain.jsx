import "./EvolutionChain.css";


export function EvolutionChain() {

    return(
        <section className="evolution-section">
            <h2 className="card-title">Evolution Chain</h2>
            <div className="evolution-chain">
                <div className="evolution-pokemon">
                    <span className="evolution-sprite">🦎</span>
                    <div className="evolution-name">Charmander</div>
                    <div className="evolution-level">Base Form</div>
                </div>
                <span className="evolution-arrow">→</span>
                <div className="evolution-pokemon">
                    <span className="evolution-sprite">🔥</span>
                    <div className="evolution-name">Charmeleon</div>
                    <div className="evolution-level">Level 16</div>
                </div>
                <span className="evolution-arrow">→</span>
                <div className="evolution-pokemon">
                    <span className="evolution-sprite">🐉</span>
                    <div className="evolution-name">Charizard</div>
                    <div className="evolution-level">Level 36</div>
                </div>
            </div>
        </section>
    );
}