import { PokemonHeader } from "./PokemonHeader";
import { StatsnAbilities } from "./StatsnAbilities";
import { EvolutionChain } from "./EvolutionChain";
import "./MainContent.css";


export function MainContent({ pokemonData }){

    return(
        <main className="container">
        <PokemonHeader pokemonData={pokemonData} />
        <StatsnAbilities pokemonData={pokemonData} />
        <EvolutionChain />

    </main>
    );
}