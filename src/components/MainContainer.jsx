import { useState } from 'react';
import { Heading } from './Heading';
import { SearchSection } from './SearchSection';
import { Features } from './Features';
import { Cta } from './Cta';

import "./MainContainer.css";
import "./Features.css";

export function MainContainer() {
    const [isSearched, setIsSearched] = useState(0);
    const [pokimonData, setPokemonData] = useState(null);
    const [pokemonId, setPokemonId] = useState(null);
    window.onload = function () {
        setIsSearched(0);
        setPokemonId(null);
    };
    if (isSearched == 0) {
        return (
            <main className="container">
                <Heading />
                <SearchSection setPokemonId={setPokemonId} setIsSearched={setIsSearched} isSearched={isSearched} setPokemonData={setPokemonData} />
                <Features />
                <Cta />
            </main>
        );
    }


    else {
        return (
            <main className="container">
                <Heading />
                <SearchSection setPokemonId={setPokemonId} setIsSearched={setIsSearched} isSearched={isSearched} setPokemonData={setPokemonData} />
                <div className="feature-card">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} />
                    <h3 style={{ textTransform: 'capitalize' }}>{pokimonData.name}</h3>
                    <p>Abilities : {pokimonData.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
                    <p>Hp : {pokimonData.stats.find(stat => stat.stat.name === 'hp').base_stat}</p>
                    <p>Defence : {pokimonData.stats.find(stat => stat.stat.name === 'defense').base_stat}</p>
                    <p>Type : {pokimonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                </div>
                <Features />
                <Cta />
            </main>
        );
    }
}