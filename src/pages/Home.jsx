/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HeroCarousel from "@components/Carousel";
import Faq from "../components/Faq";

import chiffres from "../data/chiffres";
import missions from "../data/missions";
import actions from "../data/data";
import centreLGBT from "../data/centreLGBT";
import approche from "../data/approche";

import video from "../assets/video.mp4";
import presentation from "../assets/presentation.jpg";
import presentation2 from "../assets/presentation2.jpg";
import presentation3 from "../assets/presentation3.jpg";
import presentation5 from "../assets/presentation5.jpg";
import presentation6 from "../assets/presentation6.jpg";
import presentation8 from "../assets/presentation8.jpg";
import presentation9 from "../assets/presentation9.jpg";
import presentation7 from "../assets/hero2.jpg";
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

  // Hook pour le nouveau carrousel Hero (Mobile)
  const [emblaHeroRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  return (
    <main className="flex-col">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {/* HERO MODIFIÉ POUR MOBILE */}
      <section className="home_hero">
        <div className="veil" />

        {/* Vidéo pour Desktop */}
        <video
          className="desktop-only"
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
        />

        {/* Carrousel pour Mobile */}
        <div
          className="embla mobile-only"
          ref={emblaHeroRef}
          style={{ height: "100%", width: "100%" }}
        >
          <div className="embla__container" style={{ height: "100%" }}>
            {[
              presentation7,
              presentation2,
              presentation3,
              presentation8,
              presentation5,
              presentation6,
            ].map((img, index) => (
              <div
                className="embla__slide"
                key={`hero-${index}`}
                style={{ flex: "0 0 100%", height: "100%" }}
              >
                <img
                  src={img}
                  alt="Illustration Pilon"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        <h1>
          Ensemble luttons contre le rejet des personnes LGBT de La Réunion
        </h1>
      </section>

      <section className="home_presentation reveal">
        <div className="gradient-rainbow" />
        <div>
          <img
            src={presentation}
            alt="lgbt pendant le tour de l'ile arc en ciel de l'association Pilon Réunion"
          />
          <article className="artocle">
            <h3>Qui sommes-nous ?</h3>
            <p>
              Pilon{" "}
              <strong>
                lutte contre le rejet familial et sociétal des LGBT à la Réunion{" "}
              </strong>
              avec un but clair : protéger les LGBT Réunionnais. Dans notre île,
              la famille a une place primordiale dans la vie d'un individu, et
              nous avons choisi de la placer au coeur de nos actions pour en
              faire une arme contre l'exclusion.
            </p>{" "}
            <p>
              Persuadés que chaque papa, maman, pépé, mémé, tatie, tonton,
              cousin, frère, soeur peut devenir un allié pour transformer le
              rejet en acceptation. Nous voulons leur rappeler le rôle essentiel
              qu'ils ont à jouer :{" "}
              <strong>
                celui d'un bouclier d'amour et de protection pour tous les
                membres de la famille
              </strong>
              , sans exception.
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
          <img src={presentation7} alt="" className="img-large" />
          <img src={presentation8} alt="" />
          <img src={presentation2} alt="" />
          <img src={presentation9} alt="" />
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
              <Link to={`/actions/${action.id}`} key={action.id}>
                <div className="regular_card">
                  <img src={action.img} alt={action.titre} />
                  <h4>{action.titre}</h4>
                  Découvrir nos actions
                </div>{" "}
              </Link>
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
        <h3>Pilon c'est aussi</h3>

        <div>
          {centreLGBT.map((item) => (
            <div key={item.id} className="duo">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.titre}</h4>
                <p>{item.description}</p>
                <Link to={item.lien} className="button_style other">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.4774280217816!2d55.44669587601081!3d-20.89310316902233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827f5264e33deb%3A0xbf305a8600bbfffe!2sCentre%20LGBTQIA%2B%20de%20l'%20Oc%C3%A9an%20Indien!5e0!3m2!1sfr!2sfr!4v1775950676521!5m2!1sfr!2sfr"
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
