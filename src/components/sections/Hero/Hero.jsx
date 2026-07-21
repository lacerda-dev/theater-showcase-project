import React from "react";
import heroMobile from "../../../assets/hero-images/textura.jpg";
import heroDesktop from "../../../assets/hero-images/image-hero-desktop.png";
import "./Hero.css";
import seta from "../../../assets/elements/seta.png";

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <h1 className="hero-headline">
          Um lugar para <br /> crescer, criar e se <br />{" "}
          <span className="highlight">
            <span className="highlight-text">EXPRESSAR</span>
          </span>
        </h1>
        <p className="hero-subheadline">
          Muito mais do que aulas de teatro. Um espaço onde crianças e
          adolescentes desenvolvem confiança, criatividade e comunicação através
          da arte.
        </p>
      </div>

      <picture className="hero-img">
        <source media="(min-width: 1024px)" srcSet={heroDesktop} />

        <img src={heroMobile} className="hero-img" />
      </picture>

      <p className="hero-cta">
        Conheça nossa Companhia <img src={seta} alt="" className="arrow" />
      </p>
    </div>
  );
};
