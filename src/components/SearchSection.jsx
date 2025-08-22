import { useState } from "react";
import "./SearchSection.css";

export function SearchSection({ setPokemonId, isSearched , setIsSearched , setPokemonData})   {
    
    const [inputTerm, setInputTerm] = useState('');
    return (
        <section className="search-section">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for any Pokemon" value={inputTerm} onChange={(e) => setInputTerm(e.target.value)} />
                <button onClick={() => {
                    setInputTerm('');
                    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
                    const searchTerm = baseUrl + inputTerm.toLowerCase().trim();
                    fetch(searchTerm)
                        .then(response => response.json())
                        .then(data => {
                            setPokemonId(data.id);
                            setIsSearched(isSearched + 1);
                            setPokemonData(data);
                            
                        })
                        .catch(error => {
                            alert('Error fetching Pokémon data:', error);
                        });

                }} className="search-btn">Search</button>
            </div>
            <p className="search-description">🎯 Try searching for your favorite Pokemon to see detailed stats and information!</p>
        </section>
    );
}