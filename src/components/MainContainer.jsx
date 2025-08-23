import { useState } from 'react';
import { Heading } from './Heading';
import { SearchSection } from './SearchSection';
import { Features } from './Features';
import { Cta } from './Cta';
import { PokemonCard } from './PokemonCard';

import "./MainContainer.css";



export function MainContainer({ pokemonData, setPokemonData }) {
    const [isSearched, setIsSearched] = useState(0);
    

    
    window.onload = function () {
        setIsSearched(0);
    };
    if (isSearched == 0) {
        return (
            <main className="container">
                <Heading />
                <SearchSection  
                setIsSearched={setIsSearched} isSearched={isSearched} 
                setPokemonData={setPokemonData} />
                <Features />
                <Cta />
            </main>
        );
    }


    else {
        return (
            <main className="container">
                <Heading />
                <SearchSection setIsSearched={setIsSearched} isSearched={isSearched} setPokemonData={setPokemonData} />
                <PokemonCard pokemonData={pokemonData} />
                <Features />
                <Cta />
            </main>
        );
    }
}