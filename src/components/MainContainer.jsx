import { useEffect, useState } from 'react';
import { Heading } from './Heading';
import { SearchSection } from './SearchSection';
import { Features } from './Features';
import { Cta } from './Cta';

import "./MainContainer.css";
import "./Features.css";

export function MainContainer() {
    const [isSearched, setIsSearched] = useState(0);
    const [pokemonId, setPokemonId] = useState(null);




    return (
                <main className="container">
                    <Heading />
                    <SearchSection setPokemonId={setPokemonId} setIsSearched={setIsSearched} isSearched={isSearched} />
                    <Features />
                    <Cta />
                </main>
            );
    }