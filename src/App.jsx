import { Background } from './components/Background';
import { Header } from './components/Header';
import { Heading } from './components/Heading';
import { SearchSection } from './components/SearchSection';
import { Features } from './components/Features';
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

        

        <section className="cta-section">
            <h2>Ready to Become a Pokemon Master?</h2>
            <p>Join thousands of trainers who use PokéTime to optimize their teams and dominate battles!</p>
            <a href="#" className="cta-btn">Start Your Journey</a>
        </section>
    </main>    
  
    </>
  )
}

export default App
