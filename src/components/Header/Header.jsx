import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";

function Burger() {
  return (
    <header className="header">
      <nav className="desktop_nav">
        <Link to="/">
          <img src={logo} alt="logo Pilon" />
        </Link>
        <div>
          <Link to="/association">L'association</Link>
          <Link to="/Actions">Nos actions</Link>
          <Link to="/Agenda"> Agenda</Link>
          <Link to="/Boutique"> Boutique</Link>
          <Link to="/Rejoindre">Nous rejoindre</Link>
          <Link to="/Blog">BLog</Link>
          <Link to="/Presse">Presse</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="social_media">
          <a
            href="https://www.facebook.com/associationpilon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="logo Facebook" />
          </a>
          <a
            href="https://www.instagram.com/pilon_reunion/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="logo Instagram" />
          </a>
          <a
            href="https://www.youtube.com/@AssociationPilon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="logo YouTube" />
          </a>
          <a
            href="https://www.linkedin.com/company/association-pilon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="logo LinkedIn" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Burger;
