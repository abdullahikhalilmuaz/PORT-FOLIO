import { useEffect, useState } from "react";
import "../Styles/portfolio.css";
export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    async function fecthProjects() {
      const res = await fetch("/src/data/portfolio.json");
      const data = await res.json();
      setPortfolio(data.portfolio);
    }
    fecthProjects();
  }, []);
  return (
    <div className="portfolio" id="portfolio">
      <div>
        <p>Portfolio</p>
        <div className="header">
          <h2>
            Port<span>Folio</span>
          </h2>
          <a>Visit My Github</a>
        </div>
        <div className="projects">
          {portfolio.map((projects) => (
            <div className="card-wrapper" key={projects.id}>
              <div className="src">
                <img src={projects.src} alt="" />
              </div>
              <div className="description">
                <h4>{projects.project}</h4>
                <span>{projects.description}</span>
                <br />
              <a href={projects.link} style={{marginTop: "10px"}}>Visit my Github --&raquo;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
