import React from "react";
import "./Theater.css";
import image from "../../../assets/images/image-hero-desktop2.png";

export const Theater = () => {
  return (
    <section className="theater-container">
      <div className="theater-background-word">TEATRO</div>

      <div className="theater-image-container">
        <img
          src={image}
          alt="Espetáculo da Companhia Sempre em Cena"
          className="theater-image"
        />
      </div>

      <div className="theater-content">
        <span className="theater-subtitle">Arte que transforma</span>

        <h2 className="theater-title">Por que o teatro?</h2>

        <div className="theater-divider" />

        <p className="theater-text">
          O teatro desperta a imaginação, fortalece vínculos e cria experiências
          que permanecem muito depois do último aplauso. É um espaço onde
          histórias ganham vida, emoções encontram voz e cada encontro entre
          artistas e público se torna uma oportunidade de transformação.
        </p>
      </div>
    </section>
  );
};
