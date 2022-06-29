import React, { useState, useEffect } from "react";
import axios from "axios";

export default function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3004/about").then((res) => setAbout(res.data));
  }, []);

  return (
    <section className="about">
      {about.map((item) => {
        return (
          <>
            <h2 className="subtitle">{item.subtitle}</h2>
            <h3>{item.desc}</h3>
          </>
        );
      })}
    </section>
  );
}
