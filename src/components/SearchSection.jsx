import { useState } from "react";
import "./SearchSection.css";

export function SearchSection({ setPokemonId, isSearched, setIsSearched, setPokemonData, setLoading }) {

    const [inputTerm, setInputTerm] = useState('');
    return (
        <section className="search-section">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for any Pokemon" value={inputTerm} onChange={(e) => setInputTerm(e.target.value)} />
                <button onClick={async () => {

                    try {
                        setInputTerm('');

                        const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
                        const searchTerm = baseUrl + inputTerm.toLowerCase().trim();
                        const response = await fetch(searchTerm)
                        const data = await response.json()
                        setPokemonId(data.id);
                        setIsSearched(isSearched + 1);
                        setPokemonData(data);


                    }
                    catch (e) {
                        alert("Oops, Something went wrong. Error Details ", e);
                    }
                    setLoading(true);

                }} className="search-btn">Search</button>
            </div>
            <p className="search-description">🎯 Try searching for your favorite Pokemon to see detailed stats and information!</p>
        </section>
    );
}