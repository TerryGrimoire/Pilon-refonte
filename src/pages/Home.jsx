import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import fleche from "../assets/fleche.png";

import chiffres from "../data/chiffres";
import missions from "../data/missions";
import actions from "../data/actions";
import actualite from "../data/actualite";
import centreLGBT from "../data/centreLGBT";

import video from "../assets/video.mp4";
import presentation from "../assets/presentation.jpg";
import presentation2 from "../assets/presentation2.jpg";
import presentation3 from "../assets/presentation3.jpg";
import presentation4 from "../assets/presentation4.jfif";
import presentation5 from "../assets/presentation5.jpg";
import presentation6 from "../assets/presentation6.jpg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

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
              Nous sommes un espace de vie et de solidarité où l’identité LGBT+
              s’épanouit au cœur de la créolité. Notre mission est de briser
              l’isolement et le rejet en plaçant la famille, biologique ou de
              cœur, au centre de nos actions. Nous accompagnons chaque parcours
              vers l'autonomie et le bien-être. Entre transmission avec le Club
              des Mamies, l'insertion professionnelle et la reconnexion aux
              racines , nous bâtissons une Réunion fière, inclusive et unie.
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

      <section className="home_missions">
        <h3>Nos missions</h3>
        <p>
          Nous luttons contre le rejet familial et sociétal des personnes LGBT à
          La Réunion et nos missions s'articulent autour de cinq pilliers
          fondamentaux.
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

      <section className="home_regular">
        <h3>Nos actions régulières</h3>
        <p>
          Nous organisons des actions régulières tout au long de l'année au
          Centre LGBT de Saint-Denis de La Réunion. Ces actions sont ouvertes à
          tous et visent à créer un espace de vie et de solidarité pour les
          personnes LGBT et leurs familles. Nous proposons des permanences psy,
          des ateliers d'insertion professionnelle, des séances d'information
          sur la santé sexuelle, des activités de promotion de la santé globale,
          ainsi que des événements sociaux pour lutter contre l'isolement.
          Rejoignez-nous pour vivre ces moments de partage et de soutien au sein
          de notre communauté.
        </p>

        <div className="regular_container">
          {actions
            .filter((action) => action.frequence === "régulier")
            .map((action) => (
              <div key={action.id} className="regular_card">
                <img src={action.image} alt={action.titre} />
                <h4>{action.titre}</h4>
                <p>{action.description}</p>
                <Link to={action.link} className="button_style">
                  Découvrir nos actions
                </Link>
              </div>
            ))}
        </div>
      </section>
      <section className="home_actions">
        <h3>Nos actions phares</h3>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {actions
              .filter((action) => action.frequence === "annuelle")
              .map((action) => (
                <div key={action.id} className="embla__slide">
                  <img src={action.image} alt={action.titre} />
                  <div className="action_card_content">
                    <div className="veil" />

                    <h4> {action.titre}</h4>
                    <p>{action.description}</p>
                    <Link to={action.link} className="button_style other">
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
      <section className="home_soutenir">
        <div>
          <h4>Tu veux soutenir Pilon ou devenir bénévole ?</h4>
          <div>
            <Link to="/Soutenir">
              <button type="button" className="button_style other">
                Soutenir Pilon
              </button>
            </Link>
            <Link to="/Soutenir/Benevoles">
              <button type="button" className="button_style other">
                Devenir Bénévole
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="home_social">
        <h4>Suivez-nous sur les réseaux sociaux !</h4>
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
        </div>
      </section>
      <section className="home_centre">
        <div className="gradient-rainbow" />

        <h3>Pilon porte le Centre LGBT Nord</h3>
        <p>
          Depuis janvier 2026, Pilon est la nouvelle association qui porte le
          Centre LGBT Nord de La Réunion. De part ses 5 axes fondamentaux autour
          de la santé et son approche innovante et impactante, Pilon a su
          obtenir la confiance des institutions. Une enveloppe de 35 000 euros a
          été allouée pour le fonctionnement du centre par l'Etat.
        </p>

        <div>
          {centreLGBT.map((item) => (
            <div key={item.id} className="duo">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.titre}</h4>
                <p>{item.description}</p>
                <Link to="/association" className="button_style other">
                  En savoir plus sur le centre LGBT
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
