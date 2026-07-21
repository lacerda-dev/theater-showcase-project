import React from "react";
import "./Header.css";
import logo from "../../../assets/brand/logo-header.png";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <a href="#">
        <img
          src={logo}
          alt="Logo da CIA Teatral Sempre em Cena"
          className="logo"
        />
      </a>
      <span
        id="menu-icon"
        className="material-symbols-outlined"
        onClick={handleMenu}
      >
        menu
      </span>

      <nav>
        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#" onClick={closeMenu}>
              Início
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              Quem somos
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Galeria
            </a>
          </li>
          <li>
            <a href="#teachers" onClick={closeMenu}>
              Professores
            </a>
          </li>
          <li>
            <a href="#join" onClick={closeMenu}>
              Faça parte
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
