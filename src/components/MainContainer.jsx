import { useState } from 'react';
import { Heading } from './Heading';
import { SearchSection } from './SearchSection';
import { Features } from './Features';
import { Cta } from './Cta';
import { PokemonCard } from './PokemonCard';

import "./MainContainer.css";



export function MainContainer() {
    const [isSearched, setIsSearched] = useState(0);
    const [pokimonData, setPokemonData] = useState(null);
    const [pokemonId, setPokemonId] = useState(null);
    const [loading,setLoading] = useState(true); 

    
    window.onload = function () {
        setIsSearched(0);
        setPokemonId(null);
    };
    if (isSearched == 0) {
        return (
            <main className="container">
                <Heading />
                <SearchSection 
                setPokemonId={setPokemonId} 
                setIsSearched={setIsSearched} isSearched={isSearched} 
                setPokemonData={setPokemonData} 
                setLoading={setLoading} />
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
                <PokemonCard pokimonData={pokimonData} pokemonId={pokemonId} loading={loading} setLoading={setLoading} />
                <Features />
                <Cta />
            </main>
        );
    }
}