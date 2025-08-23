import { PokemonHeader } from "./PokemonHeader";
import { StatsnAbilities } from "./StatsnAbilities";
import { EvolutionChain } from "./EvolutionChain";
import "./MainContent.css";


export function MainContent(){

    return(
        <main className="container">
        <PokemonHeader />
        <StatsnAbilities />
        <EvolutionChain />

    </main>
    );
}