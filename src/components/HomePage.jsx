import { Background } from './Background';
import { Header } from './Header';
import { MainContainer } from './MainContainer';



export function HomePage({  pokemonData, setPokemonData }) {
  return (
    <>
      <Background />
      <Header />
      <MainContainer pokemonData={pokemonData} setPokemonData={setPokemonData} />
    </>
  )
}