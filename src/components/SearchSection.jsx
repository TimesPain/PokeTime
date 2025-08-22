import "./SearchSection.css";

export function SearchSection(){


    return(
        <section className="search-section">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for any Pokemon" />
                <button className="search-btn">Search</button>
            </div>
            <p className="search-description">🎯 Try searching for your favorite Pokemon to see detailed stats and information!</p>
        </section>
    );
}