import { HomePage } from './components/HomePage';
import { DetailsPage } from './DetailspageComponents/DetailsPage';
import {Routes, Route} from "react-router";
import { useState } from 'react';
import './App.css'


function App() {
 
  const [pokemonData, setPokemonData] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<HomePage pokemonData={pokemonData} setPokemonData={setPokemonData} />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
    
}

export default App
