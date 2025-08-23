import "./PokemonHeader.css";

export function PokemonHeader(){

    return(
        <section className="pokemon-header">
            <div className="pokemon-image">🐉</div>
            <h1 className="pokemon-name">Charizard</h1>
            <p className="pokemon-id">#006</p>
            <div className="pokemon-types">
                <span className="type-badge type-fire">Fire</span>
                <span className="type-badge type-flying">Flying</span>
            </div>
            <p className="pokemon-description">
                Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.
            </p>
        </section>
    );
}