import "./StatsnAbilities.css";

export function StatsnAbilities({ pokemonData }) {

    
    


    return (
        <section className="stats-grid">
            <div className="stats-card">
                <h2 className="card-title">Base Stats</h2>
                {pokemonData.stats.map((stat) => {

                    return (
                        <div className="stat-item">
                            <span className="stat-name" key={stat.stat.name}>{stat.stat.name.toUpperCase()}</span>
                            <div>
                                <span className="stat-value">{stat.base_stat}</span>
                                <div className="stat-bar">
                                    <div className="stat-fill stat-hp" style={{ width: `${stat.base_stat}%` }}></div>
                                </div>
                            </div>
                        </div>
                    );
                })}


            </div>

            <div className="abilities-card">
                <h2 className="card-title">Abilities</h2>

                <div className="abilities-list">
                    {pokemonData.abilities.map((abilityinfo) => {
                        return (
                            <div className="ability-item">
                                <div className="ability-name" key={crypto.randomUUID()}>{abilityinfo.ability.name.toUpperCase()}</div>
                                <div className="ability-description">Powers up Fire-type moves when the Pokémon's HP is low.</div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    );
}