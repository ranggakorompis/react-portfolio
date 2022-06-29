// Import useState, useEffect
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/skills")
      .then((res) => setSkills(res.data));
  });

  return (
    <section className="skills">
      <h2 className="subtitle">Skills</h2>
      <ul>
        {skills.map((item) => {
          return (
            <li>
              <h3>{item.skill}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
