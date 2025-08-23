import { Link } from "react-router";
import "./Header.css";

 
export function Header(){

    return(
        <header className="header">
        <div className="header-content">
            <a href="#" className="logo">PokéTime</a>
            <Link to="/" className="back-btn">← Back to Search</Link>
        </div>
    </header>
    );
}