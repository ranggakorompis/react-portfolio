// Import useState, useEffect, hero image
import React, { useState, useEffect } from "react";
import axios from "axios";
import heroImg from "../hero-img.jpg";

// Export function Header
export default function Header() {
  const [header, setHeader] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/header")
      .then((res) => setHeader(res.data));
  });

  return (
    <header className="header">
      {header.map((item) => {
        return (
          <div className="hero">
            <div className="hero-img">
              <img src={heroImg} alt="Hero Images" />
            </div>
            <h1 className="title">{item.title}</h1>
            <h2 className="tagline">{item.tagline}</h2>
          </div>
        );
      })}
    </header>
  );
}
