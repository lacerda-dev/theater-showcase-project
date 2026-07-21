import React from "react";
import "./CTA.css";

import background from "../../../assets/backgrounds/background-cta.jpg";

export const CTA = () => {
  return (
    <section
      id="join"
      className="cta-section"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="cta-overlay"></div>

      <div className="cta-background-word">COMECE</div>

      <div className="cta-content">
        <h2 className="cta-title">Venha viver essa experiência.</h2>

        <p className="cta-text">
          Entre em contato com a CIA Sempre em Cena e descubra como o teatro
          pode fazer parte dessa jornada.
        </p>

        <a
          href="https://api.whatsapp.com/send/?phone=5521998385454&text&type=phone_number&app_absent=0&utm_source=ig"
          target="_blank"
          className="cta-button"
        >
          Agendar aula experimental →
        </a>
      </div>
    </section>
  );
};
