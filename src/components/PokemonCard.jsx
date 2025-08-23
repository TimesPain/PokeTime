
import "./Features.css";


export function PokemonCard({ pokimonData, pokemonId, loading, setLoading }) {




    return(
        <div className="pokemon-card">
                    {loading && <p>Loading image...</p>}          
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} onLoad={() => {setLoading(false)}} />
                    <h3 style={{ textTransform: 'capitalize' }}>{pokimonData.name}</h3>
                    <p>Abilities : {pokimonData.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
                    <p>Hp : {pokimonData.stats.find(stat => stat.stat.name === 'hp').base_stat}</p>
                    <p>Attack : {pokimonData.stats.find(stat => stat.stat.name === 'attack').base_stat}</p>
                    <p>Defence : {pokimonData.stats.find(stat => stat.stat.name === 'defense').base_stat}</p>
                    <p>Type : {pokimonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                    
                </div>
    );
    
}
