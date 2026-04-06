/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HeroCarousel from "@components/Carousel";
import Faq from "../components/Faq";
import fleche from "../assets/fleche.png";

import chiffres from "../data/chiffres";
import missions from "../data/missions";
import actions from "../data/actions";
import actualite from "../data/actualite";
import centreLGBT from "../data/centreLGBT";
import approche from "../data/approche";

import video from "../assets/video.mp4";
import presentation from "../assets/presentation.jpg";
import presentation2 from "../assets/presentation2.jpg";
import presentation3 from "../assets/presentation3.jpg";
import presentation4 from "../assets/presentation4.jfif";
import presentation5 from "../assets/presentation5.jpg";
import presentation6 from "../assets/presentation6.jpg";
import facebook from "../assets/facebook2.png";
import instagram from "../assets/instagram2.png";
import youtube from "../assets/youtube2.png";
import linkedin from "../assets/linkedin2.png";
import tiktok from "../assets/tiktok2.png";

import localisation from "../assets/localisation.png";
import horaires from "../assets/horaires.png";
import telephone from "../assets/telephone.png";
import email from "../assets/email.png";

export default function Home({ helmet }) {
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Effet d'apparition au scroll (Intersection Observer)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.load();
      videoElement.play().catch((error) => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay()]
  );

  const currentYear = new Date().getFullYear();
  const years = ["2024", "2025", "2026"];
  const [dateSelected, setDateSelected] = useState(currentYear.toString());

  return (
    <main className="flex-col">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {/* HERO (Déjà animé par le CSS de base généralement) */}
      <section className="home_hero">
        <div className="veil" />
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
        />
        <h1>
          Ensemble luttons contre le rejet des personnes LGBT de La Réunion
        </h1>
        <Link to="/">
          <img src={fleche} alt="icone fleche" className="pulse-element" />
        </Link>
      </section>

      <section className="home_presentation reveal">
        <div className="gradient-rainbow" />
        <div>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {[
                presentation,
                presentation2,
                presentation3,
                presentation4,
                presentation5,
                presentation6,
              ].map((img, index) => (
                <div className="embla__slide" key={index}>
                  <img src={img} alt={`Présentation ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <article>
            <h3>Qui sommes-nous ?</h3>
            <p>
              Nous sommes un espace de vie et de solidarité où l’identité LGBT+
              s’épanouit au cœur de la créolité. Notre mission est de briser
              l’isolement et le rejet en plaçant la famille au centre de nos
              actions.
            </p>
            <Link to="/association" className="button_style">
              Découvrir l'association
            </Link>
          </article>
        </div>
      </section>

      <section className="home_approche reveal">
        <div className="home_approche_text">
          <h3>
            Notre approche mélange familles, créolité et lutte des classes
          </h3>
          {approche.map((item) => (
            <article key={item.id} className="approche_card">
              <img src={item.image} alt={item.titre} />
              <div>
                <h4>{item.titre}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="home_approche_images">
          <img src={presentation} alt="" className="img-large" />
          <img src={presentation4} alt="" />
          <img src={presentation2} alt="" />
          <img src={presentation3} alt="" />
          <img src={presentation5} alt="" />
          <img src={presentation6} alt="" />
        </div>
      </section>

      <section className="home_missions reveal">
        <h3>Nos missions</h3>
        <p>
          Nous luttons contre le rejet familial et sociétal à travers cinq
          piliers fondamentaux.
        </p>
        <div className="home_missions_container">
          {missions.map((mission) => (
            <div key={mission.id} className="home_missions_card">
              <img src={mission.image} alt={mission.title} />
              <h4>{mission.title}</h4>
              <p>{mission.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home_chiffres reveal">
        <div className="home_chiffres_description">
          <h3>Quelques chiffres</h3>
          <p>
            Voici quelques chiffres pour illustrer notre impact et nos actions
            pionnières.
          </p>
        </div>
        <div className="home_chiffres_chiffre">
          {chiffres.map((chiffre, index) => (
            <div key={index}>
              <div className="gradient-rainbow" />
              <h5>{chiffre.numero}</h5>
              <p>{chiffre.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home_regular reveal">
        <h3>Nos actions régulières</h3>
        <div className="regular_container">
          {actions
            .filter((action) => action.frequence === "régulier")
            .map((action) => (
              <div key={action.id} className="regular_card">
                <img src={action.image} alt={action.titre} />
                <h4>{action.titre}</h4>
                <Link to={action.link} className="button_style">
                  Découvrir nos actions
                </Link>
              </div>
            ))}
        </div>
      </section>
      <h3 className="home_phare">Nos actions phares</h3>

      <HeroCarousel />

      <section className="home_soutenir reveal">
        <div>
          <h4>Tu veux soutenir Pilon ou devenir bénévole ?</h4>
          <div>
            <Link to="/Rejoindre">
              <button type="button" className="button_style other">
                Soutenir Pilon
              </button>
            </Link>
            <Link to="/Rejoindre">
              <button type="button" className="button_style other">
                Devenir Bénévole
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="home_social reveal">
        <h4>Suivez-nous sur les réseaux sociaux pour ne rien manquer !</h4>

        <div>
          <a
            href="https://www.facebook.com/associationpilon.reunion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="logo Facebook" />
          </a>

          <a
            href="https://www.instagram.com/associationpilon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="logo Instagram" />
          </a>

          <a
            href="https://www.youtube.com/AssociationPilon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="logo YouTube" />
          </a>

          <a
            href="https://www.linkedin.com/company/association-pilon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="logo LinkedIn" />
          </a>

          <a
            href="https://www.tiktok.com/@associationpilon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktok} alt="logo TikTok" />
          </a>
        </div>
      </section>

      <section className="home_centre reveal">
        <div className="gradient-rainbow" />
        <h3>Pilon porte le Centre LGBT Nord</h3>
        <p>
          Depuis janvier 2026, Pilon est la nouvelle association qui porte le
          Centre LGBT Nord de La Réunion.
        </p>
        <div>
          {centreLGBT.map((item) => (
            <div key={item.id} className="duo">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.titre}</h4>
                <p>{item.description}</p>
                <Link to="/association" className="button_style other">
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home_map reveal">
        <h3>Nous trouver</h3>
        <div className="duo">
          <iframe
            title="carte"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.441086419714!2d55.47364431526044!3d-20.88243298609686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5b8e7a9c8e7%3A0x6b8c8c8c8c8c8c8!2sCentre%20LGBT%20de%20La%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1700000000000"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
          <div>
            <h4>Nous retrouver</h4>
            <ul>
              <li>
                <img src={localisation} alt="loc" /> 11 allée des Jaspes,
                St-Denis
              </li>
              <li>
                <img src={horaires} alt="clock" /> Lun-Ven 9h-16h
              </li>
              <li>
                <img src={telephone} alt="tel" /> 06 92 87 30 50
              </li>
              <li>
                <img src={email} alt="mail" /> contact@pilon.re
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="reveal">
        <Faq />
      </div>
    </main>
  );
}
