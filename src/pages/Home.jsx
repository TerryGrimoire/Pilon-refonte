import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import fleche from "../assets/fleche.png";

import chiffres from "../data/chiffres";
import actions from "../data/actions";
import actualite from "../data/actualite";

import video from "../assets/video.mp4";
import presentation from "../assets/presentation.jpg";
import presentation2 from "../assets/presentation2.jpg";
import presentation3 from "../assets/presentation3.jpg";
import presentation4 from "../assets/presentation4.jfif";
import presentation5 from "../assets/presentation5.jpg";
import presentation6 from "../assets/presentation6.jpg";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const videoRef = useRef(null);
  useEffect(() => {
    const videoElement = videoRef.current;

    // Ensure video is loaded and ready to play for autoplay to work reliably
    if (videoElement) {
      videoElement.load();
      videoElement.play().catch((error) => {
        console.error("Autoplay was prevented on iOS:", error);
      });
    }
  }, []);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start", // Aligne le début de l'image au début du cadre
      containScroll: "trimSnaps", // Évite les espaces vides au début/fin
    },
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

      <section className="home_hero">
        <div className="veil" />
        <video
          src={video} // Replace with your video URL
          autoPlay
          muted
          loop
          playsinline
          disablePictureInPicture
        />
        <h1>
          Ensemble luttons contre le rejet des personnes LGBT de La Réunion
        </h1>
        <Link to="/">
          <img src={fleche} alt="icone fleche" className="pulse-element" />
        </Link>
      </section>
      <section className="home_presentation">
        <div className="gradient-rainbow" />

        <div>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img src={presentation} alt="" />
              </div>
              <div className="embla__slide">
                <img src={presentation2} alt="" />
              </div>
              <div className="embla__slide">
                <img src={presentation3} alt="" />
              </div>
              <div className="embla__slide">
                <img src={presentation4} alt="" />
              </div>
              <div className="embla__slide">
                <img src={presentation5} alt="" />
              </div>
              <div className="embla__slide">
                <img src={presentation6} alt="" />
              </div>
            </div>
          </div>
          <article>
            <h3>Qui sommes-nous ?</h3>
            <p>
              L'association Pilon est une association loi 1901, créée en 2013 à
              La Réunion, qui a pour but de lutter contre les discriminations et
              les violences envers les personnes LGBT+ (Lesbiennes, Gays,
              Bisexuel·le·s, Transgenres, Queer et autres identités de genre et
              orientations sexuelles minoritaires). Nous œuvrons pour la
              visibilité, les droits et le bien-être des personnes LGBT+ à
              travers diverses actions de sensibilisation, d'accompagnement et
              de soutien.
            </p>
            <div className="button_container">
              <Link to="/association" className="button_style">
                En savoir plus sur l'association
              </Link>
              <Link to="/Actions" className="button_style">
                Découvrir nos actions
              </Link>
            </div>
          </article>
        </div>
        <div />
      </section>

      <section className="home_chiffres">
        <div className="home_chiffres_description">
          <h3>Quelques chiffres</h3>
          <p>
            Voici quelques chiffres pour illustrer notre impact. Notre
            association est pionnière dans plusieurs domaines et ses actions
            s'exportent désormais dans plusieurs pays.{" "}
          </p>
        </div>

        <div className="home_chiffres_chiffre">
          {chiffres.map((chiffre) => (
            <div>
              <div className="gradient-rainbow" />
              <h5>{chiffre.numero}</h5> <p>{chiffre.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home_actions">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {actions.map((action) => (
              <div key={action.id} className="embla__slide">
                <img src={action.image} alt={action.title} />
                <div className="action_card_content">
                  <div className="veil" />

                  <h4> {action.title}</h4>
                  <p>{action.description}</p>
                  <Link to={action.link} className="button_style">
                    Découvrir nos actions
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="home_agenda">
        <h2>Notre agenda</h2>
        <div className="home_dates">
          {years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => setDateSelected(year)}
              className={dateSelected.includes(year) ? "red" : ""}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="agenda_container">
          {actualite
            .filter((item) => item.year.includes(dateSelected))
            .map((item) => (
              <div key={item.id} className="agenda_card">
                <img src={item.image} alt={item.title} />
                <div className="agenda_card_content">
                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                  <a href="/">s'inscrire</a>
                  <div>
                    <p>{item.date}</p>
                  </div>
                  <Link to="/agenda">Découvrir tous les événements</Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
