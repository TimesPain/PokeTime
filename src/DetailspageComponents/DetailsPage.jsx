

import { BackGround } from "./BackGround";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import "./DetailsPage.css";




export function DetailsPage({ pokemonData }) {
  return (
    <>
    <BackGround />
    <Header />
    <MainContent pokemonData={pokemonData} />
    </>
  );
}