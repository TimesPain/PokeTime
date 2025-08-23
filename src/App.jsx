import { HomePage } from './components/HomePage';
import { DetailsPage } from './DetailspageComponents/DetailsPage';
import {Routes, Route} from "react-router";
import './App.css'


function App() {
 


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
    
}

export default App
