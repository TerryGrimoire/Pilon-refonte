import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

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
      </nav>
    </header>
  );
}

export default Burger;
