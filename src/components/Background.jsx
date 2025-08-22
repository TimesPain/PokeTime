
import "./Background.css";

export function Background(){

    const className = "floating-pokemon";
    return(
        <div className="bg-animation">
        <div className={className}>🔥</div>
        <div className={className}>⚡</div>
        <div className={className}>💧</div>
        <div className={className}>🍃</div>
        <div className={className}>❄️</div>
        <div className={className}>👻</div>
        <div className={className}>🌙</div>
        <div className={className}>⭐</div>
        <div className={className}>💎</div>
        <div className={className}>🌟</div>
        <div className="pokeball"></div>
        <div className="pokeball"></div>
        <div className="pokeball"></div>
    </div>
    );
}