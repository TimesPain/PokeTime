import "./StatsnAbilities.css";

export function StatsnAbilities() {

    return(
        <section className="stats-grid">
            <div className="stats-card">
                <h2 className="card-title">Base Stats</h2>
                <div className="stat-item">
                    <span className="stat-name">HP</span>
                    <div>
                        <span className="stat-value">78</span>
                        <div className="stat-bar">
                            <div className="stat-fill stat-hp"></div>
                        </div>
                    </div>
                </div>
                <div className="stat-item">
                    <span className="stat-name">Attack</span>
                    <div>
                        <span className="stat-value">84</span>
                        <div className="stat-bar">
                            <div className="stat-fill stat-attack"></div>
                        </div>
                    </div>
                </div>
                <div className="stat-item">
                    <span className="stat-name">Defense</span>
                    <div>
                        <span className="stat-value">78</span>
                        <div className="stat-bar">
                            <div className="stat-fill stat-defense"></div>
                        </div>
                    </div>
                </div>
                <div className="stat-item">
                    <span className="stat-name">Sp. Attack</span>
                    <div>
                        <span className="stat-value">109</span>
                        <div className="stat-bar">
                            <div className="stat-fill stat-sp-attack"></div>
                        </div>
                    </div>
                </div>
                <div className="stat-item">
                    <span className="stat-name">Sp. Defense</span>
                    <div>
                        <span className="stat-value">85</span>
                        <div className="stat-bar">
                            <div className="stat-fill stat-sp-defense"></div>
                        </div>
                    </div>
                </div>
                <div className="stat-item">
                    <span className="stat-name">Speed</span>
                    <div>
                        <span className="stat-value">100</span>
                        <div className="stat-bar">
                            <div className="stat-fill stat-speed"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abilities-card">
                <h2 className="card-title">Abilities</h2>
                <div className="abilities-list">
                    <div className="ability-item">
                        <div className="ability-name">Blaze</div>
                        <div className="ability-description">Powers up Fire-type moves when the Pokémon's HP is low.</div>
                    </div>
                    <div className="ability-item">
                        <div className="ability-name">Solar Power</div>
                        <div className="ability-description">In harsh sunlight, the Pokémon's Sp. Atk stat is boosted, but its HP decreases every turn.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}