import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../assets/brand/logo-header.png";
import "./Header.css";

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
      <HashLink to="/#">
        <img
          src={logo}
          alt="Logo da CIA Teatral Sempre em Cena"
          className="logo"
        />
      </HashLink>
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
            <HashLink to="/#" onClick={closeMenu}>
              Início
            </HashLink>
          </li>
          <li>
            <HashLink to="/#about" onClick={closeMenu}>
              Quem somos
            </HashLink>
          </li>
          <li>
            <Link to="/gallery" onClick={closeMenu}>
              Galeria
            </Link>
          </li>
          <li>
            <HashLink to="/#teachers" onClick={closeMenu}>
              Professores
            </HashLink>
          </li>
          <li>
            <HashLink to="/#classes" onClick={closeMenu}>
              Turmas
            </HashLink>
          </li>
          <li>
            <HashLink to="/#join" onClick={closeMenu}>
              Faça parte
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
