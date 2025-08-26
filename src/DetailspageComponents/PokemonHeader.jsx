import "./PokemonHeader.css";

export function PokemonHeader({ pokemonData }){

    return(
        <section className="pokemon-header">
            <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`} />
            <h1 className="pokemon-name">{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h1>
            <p className="pokemon-id">#{pokemonData.id}</p>
            <div className="pokemon-types">
                {pokemonData.types.map((typeInfo) =>{
                    return(
                    <span key={crypto.randomUUID()} className={`type-badge type-${typeInfo.type.name}`}>{typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}</span>
               ) }) }
            </div>
            <p className="pokemon-description">
                Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.
            </p>
        </section>
    );
}