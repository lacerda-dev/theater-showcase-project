import React from "react";
import "./Footer.css";
import logo from "../../../assets/brand/logo-header.png";

import { SocialButton } from "../../shared/SocialButton/SocialButton";

import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          src={logo}
          alt="Companhia Sempre em Cena"
          className="footer-logo"
        />

        <p className="footer-quote">
          Esperamos encontrar você na próxima história
        </p>

        <div className="footer-socials">
          <SocialButton
            icon={faInstagram}
            href="https://www.instagram.com/ciasempreemcena/"
            label="Instagram"
            variant="purple"
          />

          <SocialButton
            icon={faWhatsapp}
            href="https://api.whatsapp.com/send/?phone=5521998385454&text&type=phone_number&app_absent=0&utm_source=ig"
            label="WhatsApp"
            variant="green"
          />

          <SocialButton
            icon={faEnvelope}
            href="mailto:ciasempreemcena@gmail.com"
            label="Email"
            variant="blue"
          />
        </div>

        <span className="footer-divider"></span>

        <div className="footer-links">
          <a
            href="https://api.whatsapp.com/send/?phone=5521998385454&text&type=phone_number&app_absent=0&utm_source=ig"
            target="_blank"
          >
            Trabalhe Conosco
          </a>

          <a href="#">Área Administrativa</a>
        </div>

        <div className="footer-bottom">
          <p> &copy; 2026 Companhia Sempre em Cena </p>
        </div>
      </div>
    </footer>
  );
};
