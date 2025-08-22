import { Background } from './components/Background';
import { Header } from './components/Header';
import { Heading } from './components/Heading';
import { SearchSection } from './components/SearchSection';
import { Features } from './components/Features';
import { Cta } from './components/Cta';
import './App.css'


function App() {



  return (
    <>
        <Background />
        <Header />
    
    <main className="container">
      <Heading />
    

        <SearchSection />
        <Features />

        

        <Cta />
    </main>    
  
    </>
  )
}

export default App
