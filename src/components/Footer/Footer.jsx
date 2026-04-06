import React from "react";
import logo from "../../assets/logoa.png";
import region from "../../assets/region.png";
import ue from "../../assets/ue.png";

function Footer() {
  return (
    <footer className=" footer ">
      <div className="gradient-rainbow" />
      <img src={logo} alt="logo de Pilon" />
      <p> Nous contacter : contact@pilon.re | 06 93 87 30 50</p>
      <p>
        Association Pilon - Tous droits réservés. Site réalisé par le{" "}
        <a href="https://grimoire-numerique.re">Grimoire Numérique</a>.
      </p>
      <p>
        Ce site a été financé à l’aide du FEDER (REACT-UE) dans le cadre de la
        réponse de l’Union Européenne à la pandémie COVID-19. L’Europe s’engage
        à La Réunion.
      </p>
      <div>
        <img src={region} alt="logo de la Région Réunion" />
        <img src={ue} alt="logo de l'Union Européenne" />
      </div>
    </footer>
  );
}

export default Footer;
