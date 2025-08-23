import { Link } from "react-router";

import "./Features.css";


export function Features() {
  const features = [
    {
      icon: "📊",
      title: "Detailed Stats",
      link: "/details",
      description: "View comprehensive statistics including HP, Attack, Defense, Speed, and more. Get deep insights into each Pokemon's strengths and weaknesses with interactive charts."
    },
    {
      icon: "⚖️",
      title: "Compare Pokemon",
      description: "Advanced side-by-side comparison tool to analyze multiple Pokemon. Perfect for building competitive teams and strategic planning with visual stat comparisons."
    },
    {
      icon: "🎯",
      title: "Guess The Pokemon",
      description: "Interactive guessing game to identify Pokemon based on their silhouettes. Test your knowledge and have fun with friends!"
    }
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <Link to={feature.link} className="feature-card" key={index}>
          <span className="feature-icon">{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </Link>
      ))}
    </section>
  );
}