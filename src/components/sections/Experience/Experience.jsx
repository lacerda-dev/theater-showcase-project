import React from "react";
import "./Experience.css";

import image from "../../../assets/images/image-hero-desktop2.png";

import image1 from "../../../assets/experience-images/experience-image1.webp"
import image2 from "../../../assets/experience-images/experience-image2.jpg"
import image3 from "../../../assets/experience-images/experience-image3.webp"
import image4 from "../../../assets/experience-images/experience-image4.webp"
import image5 from "../../../assets/experience-images/experience-image5.jpg"
import image6 from "../../../assets/experience-images/experience-image6.jpg"

import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";

export const Experience = () => {
  return (
    <section className="experience-container">
      <div className="experience-background-word">MEMÓRIAS</div>

      <SectionTitle title="A experiência" />

      <span className="experience-divider"></span>

      <h2 className="experience-subtitle">
        Cada ensaio é uma nova descoberta.
      </h2>

      <div className="experience-gallery">
        <img src={image1} alt="" className="photo photo-1" />

        <img src={image4} alt="" className="photo photo-2" />

        <img src={image3} alt="" className="photo photo-3" />
      </div>

      <p className="experience-text">
        Ensaios, risadas, descobertas, apresentações e amizades que permanecem
        muito além do palco. Cada encontro constrói memórias que acompanham os
        alunos por toda a vida.
      </p>

      <a href="#" className="experience-button">
        Conheça nossa galeria →
      </a>
    </section>
  );
};