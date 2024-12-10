import { useEffect, useState } from "react";
import "./../Styles/expertise.css";

export default function Expertise() {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    async function fetchSkills() {
      const res = await fetch("/src/data/skills.json");
      const skill = await res.json();
      setSkill(skill.skill);
    }
    fetchSkills();
  }, []);
  return (
    <div className="main" id="expertise">
      {" "}
      <div className="expertise-container">
        <p>Expertise</p>
        <h2>Expertise</h2>
        <div className="expertise-wrapper">
          {skill.map((skill) => (
            <div className="skills" key={skill.id}>
              <h3>{skill.skill}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
