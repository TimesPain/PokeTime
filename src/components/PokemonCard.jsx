
import "./Features.css";


export function PokemonCard({ pokemonData }) {




    return (
        <div className="pokemon-card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`} />
            <h3 style={{ textTransform: 'capitalize' }}>{pokemonData.name}</h3>
            <p>Abilities : {pokemonData.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
            <p>Hp : {pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat}</p>
            <p>Attack : {pokemonData.stats.find(stat => stat.stat.name === 'attack').base_stat}</p>
            <p>Defence : {pokemonData.stats.find(stat => stat.stat.name === 'defense').base_stat}</p>
            <p>Type : {pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>

        </div>
    );

}
