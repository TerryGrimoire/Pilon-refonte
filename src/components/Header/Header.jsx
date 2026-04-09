import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// Importe tes icônes sociales ici comme tu le faisais

function Burger() {
  // État pour savoir si le menu est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour fermer le menu quand on clique sur un lien
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="desktop_nav">
        {/* LOGO toujours visible */}
        <Link to="/" className="logo_link">
          <img src={logo} alt="logo Pilon" />
        </Link>

        {/* BOUTON BURGER (Visible uniquement sur mobile via CSS) */}
        <div
          className={`burger_icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>

        {/* LIENS DE NAVIGATION */}
        <div className={`nav_links ${isOpen ? "active" : ""}`}>
          <Link to="/association" onClick={toggleMenu}>
            L'association
          </Link>
          <Link to="/Centre" onClick={toggleMenu}>
            Le Centre LGBT
          </Link>
          <Link to="/Actions" onClick={toggleMenu}>
            Nos actions
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
          <Link to="/FAQ" onClick={toggleMenu}>
            FAQ
          </Link>
          <Link to="/Contact" onClick={toggleMenu}>
            Contact
          </Link>

          {/* Optionnel : tu peux remettre les réseaux sociaux en bas du menu mobile */}
        </div>
      </nav>
    </header>
  );
}

export default Burger;
