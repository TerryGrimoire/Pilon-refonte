import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";

function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="desktop_nav">
        {/* LOGO */}
        <Link to="/" className="logo_link" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="logo Pilon" />
        </Link>

        {/* BOUTON BURGER (Mobile uniquement) */}
        <div
          className={`burger_icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>

        {/* MENU DE NAVIGATION */}
        <div className={`nav_links ${isOpen ? "active" : "desktop"}`}>
          <div className="links_container">
            <Link to="/association" onClick={toggleMenu}>
              L'association
            </Link>
            <Link to="/Centre" onClick={toggleMenu}>
              Le Centre LGBT
            </Link>
            <Link to="/Actions" onClick={toggleMenu}>
              Nos actions
            </Link>
            <Link to="/Mamies" onClick={toggleMenu}>
              Le club des mamies
            </Link>

            <Link to="/Agenda" onClick={toggleMenu}>
              Agenda
            </Link>
            <Link to="/Boutique" onClick={toggleMenu}>
              Boutique
            </Link>
            <Link to="/Rejoindre" onClick={toggleMenu}>
              Nous rejoindre
            </Link>
            <Link to="/Contact" onClick={toggleMenu}>
              Contact
            </Link>
          </div>

          {/* RÉSEAUX SOCIAUX (S'adaptent selon l'écran) */}
        </div>
        <div className="social_media desktop">
          <a
            href="https://www.facebook.com/associationpilon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/pilon_reunion/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.youtube.com/@AssociationPilon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="YouTube" />
          </a>
          <a
            href="https://www.linkedin.com/company/association-pilon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Burger;
