/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  MessageCircle,
  GraduationCap,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import jocelyne from "../assets/jocelyne.jpg";
import marieAndree from "../assets/marie.jpg";
import berthe from "../assets/berthe.jpg";
import mamies7 from "../assets/mamies7.jpg";
import mamies2 from "../assets/mamies12.jpg";
import centre1 from "../assets/centre1.jpg";
import centre2 from "../assets/centre2.jpg";
import centre4 from "../assets/centre4.jpg";
import volcan1 from "../assets/volcan1.mp4";
import volcan2 from "../assets/volcan2.jpg";
import volcan3 from "../assets/volcan3.jpg";
import volcan4 from "../assets/volcan4.jpg";
import maloya02 from "../assets/maloya2.jpg";
import maloya03 from "../assets/maloya3.jpg";
import cuisine1 from "../assets/cuisine1.jpg";
import cuisine2 from "../assets/cuisine2.jfif";
import cuisine3 from "../assets/cuisine3.mp4";
import cuisine5 from "../assets/cuisine5.jfif";
import hero8 from "../assets/hero8.jpg";

// Composant interne pour les carrousels thématiques
function ThemeCarousel({ items, styles, title }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div style={{ marginBottom: "40px", width: "100%" }}>
      <h3
        style={{
          fontFamily: "var(--font-0)",
          fontSize: "1.5rem",
          marginBottom: "15px",
          textTransform: "uppercase",
          color: "#333",
        }}
      >
        {title}
      </h3>
      <div style={styles.carouselContainer}>
        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              style={{ ...styles.navButton, left: "15px" }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              style={{ ...styles.navButton, right: "15px" }}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        <div style={{ width: "100%", height: "100%" }}>
          {items[currentSlide].type === "image" ? (
            <img
              src={items[currentSlide].url}
              alt={items[currentSlide].caption}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <video
              key={items[currentSlide].url}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              controls
              autoPlay
              muted
              loop
            >
              <source src={items[currentSlide].url} type="video/mp4" />
            </video>
          )}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              background: "rgba(0,0,0,0.7)",
              color: "#fff",
              padding: "15px",
              textAlign: "center",
              fontSize: "0.9rem",
              fontFamily: "var(--font-3)",
            }}
          >
            {items[currentSlide].caption}
          </div>
        </div>
      </div>
    </div>
  );
}

function ClubDesMamies() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }, []);

  const mamies = [
    {
      nom: "Madame Jocelyne",
      role: "Référente Ateliers Couture",
      image: jocelyne,
      desc: "Une forme 'gayar' qui rayonne. Entre jardinage, maloya chanté et danse séga, elle est la gardienne des traditions. Elle ne maîtrise pas le lexique militant, mais elle possède une expertise du cœur : elle défend tout le monde contre le rejet.",
      anecdote:
        "Lorsqu'elle en a eu besoin, les jeunes LGBT se sont mobilisés pour l'aider à déménager.",
    },
    {
      nom: "Madame Marie Andrée",
      role: "Référente Camping & Rando",
      image: marieAndree,
      desc: "Autrefois tournée vers le regard des autres, elle vit aujourd'hui pour son propre bonheur. De la découverte de la machine à coudre à l'organisation d'un camping Cowboy, elle prouve qu'il n'y a pas d'âge pour s'émanciper.",
      anecdote:
        "Elle a découvert la couture grâce à l'association et envisage de s'acheter une machine.",
    },
    {
      nom: "Madame Berthe",
      role: "Référente Atelier Cuisine",
      image: berthe,
      desc: "Discrète mais indispensable, elle veille sur le local et sur les jeunes avec une attention maternelle. Entre les soirées jeux et la cuisine, elle s'initie même au rouleur, montrant que la curiosité reste son moteur principal.",
      anecdote:
        "Grâce à Pilon, elle a vu pour la première fois de sa vie une éruption volcanique.",
    },
  ];

  const styles = {
    hero: {
      minHeight: "65vh",
      width: "100%",
      boxSizing: "border-box",
      background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${hero8}) top/cover`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      padding: "100px 5vw",
      position: "relative",
    },
    section: { padding: "100px 0", width: "100%", boxSizing: "border-box" },
    h2: {
      fontSize: "clamp(2rem, 8vw, 3rem)",
      fontFamily: "var(--font-0)",
      color: "#000",
      marginBottom: "30px",
      lineHeight: "1",
      textTransform: "uppercase",
    },
    accent: { color: "rgb(190, 3, 34)" },
    mamieCard: {
      flex: "1",
      minWidth: "280px",
      background: "white",
      border: "1px solid #eee",
      borderRadius: "4px",
      overflow: "hidden",
      textAlign: "center",
      paddingBottom: "30px",
    },
    carouselContainer: {
      position: "relative",
      height: "450px",
      borderRadius: "4px",
      overflow: "hidden",
      backgroundColor: "#000",
      width: "100%",
    },
    navButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: "rgba(255,255,255,0.8)",
      border: "none",
      borderRadius: "50%",
      padding: "10px",
      cursor: "pointer",
      zIndex: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <div
      style={{ backgroundColor: "var(--main-bg-color)", overflowX: "hidden" }}
    >
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 10vw, 5.5rem)",
            fontFamily: "var(--font-0)",
            textTransform: "uppercase",
            lineHeight: "1",
            maxWidth: "100%",
          }}
        >
          Le club DES <span style={styles.accent}>MAMIES</span>
        </h1>
        <p
          style={{
            fontSize: "clamp(1.1rem, 4vw, 1.4rem)",
            fontFamily: "var(--font-3)",
            maxWidth: "900px",
            marginTop: "20px",
          }}
        >
          Quand lutter contre l'isolement des personnes âgées croise la lutte
          contre le rejet des LGBT.
        </p>
      </section>

      <div style={{ maxWidth: "1250px", margin: "0 auto", padding: "0 5vw" }}>
        {/* SECTION 1 : TEXTE + PHOTO UNIQUE */}
        <section
          className="reveal"
          style={{
            ...styles.section,
            opacity: 0,
            transform: "translateY(30px)",
            transition: "0.8s",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={styles.h2}>
                UNE ALLIANCE{" "}
                <span style={styles.accent}>INTERGÉNÉRATIONNELLE</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-4)",
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  color: "#333",
                }}
              >
                À La Réunion, la famille est bien plus qu'un simple cercle :
                c'est notre socle, notre monde, l'espace où l'on se construit.
                Le rejet familial des LGBT les laissent souvent sans foyer, sans
                repère, ni protection. Pilon a toujours porté une dimension
                familiale dans son ADN. C'est pourquoi, intégrer des mamies au
                cœur de nos actions nous est apparu comme une évidence.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-4)",
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  color: "#333",
                  marginTop: "20px",
                }}
              >
                C’est une rencontre entre deux mondes qui avaient besoin l’un de
                l’autre. D’un côté, des jeunes en quête d’une famille de
                substitution ; de l’autre, des aînées qui souffrent parfois de
                solitude, dont les enfants n'ont pas toujours le temps de rendre
                visite, et qui ressentent le besoin vital de rester actives et
                utiles.
              </p>
            </div>
            <div
              style={{
                height: "500px",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <img
                src={volcan3}
                alt="Les mamies"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* SECTION CAROUSELS - CORRECTION ICI POUR LE 2x2 */}
        <section
          className="reveal"
          style={{ padding: "60px 0", opacity: 0, transition: "0.8s" }}
        >
          <h2
            style={{ ...styles.h2, textAlign: "center", marginBottom: "50px" }}
          >
            NOS SOUVENIRS <span style={styles.accent}>EN IMAGES</span>
          </h2>
          <div
            style={{
              display: "grid",
              // Force 2 colonnes sur desktop, passe à 1 sur mobile
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 450px), 1fr))",
              gap: "40px",
            }}
          >
            <ThemeCarousel
              title="Au centre LGBT"
              items={[
                { type: "image", url: centre1, caption: "Partage au centre" },
                {
                  type: "image",
                  url: centre2,
                  caption: "Une jeune masse une mamie",
                },
                { type: "image", url: mamies7, caption: "Atelier couture" },
                {
                  type: "image",
                  url: centre4,
                  caption: "Marie-Andrée présente le camping Cow-Boy",
                },
              ]}
              styles={styles}
            />
            <ThemeCarousel
              title="Atelier Cuisine"
              items={[
                {
                  type: "video",
                  url: cuisine3,
                  caption: "Le brunch de Pâques",
                },
                {
                  type: "image",
                  url: cuisine1,
                  caption: "La transmission culinaire",
                },
                {
                  type: "image",
                  url: cuisine2,
                  caption: "Madame Jocelyne fait une salade russe",
                },
                {
                  type: "image",
                  url: cuisine5,
                  caption: "La transmission culinaire",
                },
              ]}
              styles={styles}
            />
            <ThemeCarousel
              title="Le Maloya"
              items={[
                {
                  type: "image",
                  url: mamies2,
                  caption: "Les mamies chantent le maloya",
                },
                { type: "image", url: maloya02, caption: "Initiation rouler" },
                {
                  type: "image",
                  url: maloya03,
                  caption: "An Nah sur un rouler",
                },
              ]}
              styles={styles}
            />
            <ThemeCarousel
              title="Au Volcan"
              items={[
                {
                  type: "image",
                  url: volcan2,
                  caption: "Photo de groupe au volcan",
                },
                {
                  type: "image",
                  url: volcan4,
                  caption: "Marche jusqu'au volcan",
                },
                {
                  type: "image",
                  url: volcan3,
                  caption:
                    "les trois mamies devant la route coupée par la lave",
                },
                {
                  type: "video",
                  url: volcan1,
                  caption: "chantons sous la pluie",
                },
              ]}
              styles={styles}
            />
          </div>
        </section>

        {/* CITATION */}
        <section
          className="reveal"
          style={{ paddingBottom: "100px", opacity: 0, transition: "0.8s" }}
        >
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "40px 20px",
              borderLeft: "5px solid rgb(190, 3, 34)",
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Quote
              size={40}
              color="rgb(190, 3, 34)"
              style={{
                marginBottom: "20px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-0)",
                fontSize: "1.8rem",
                color: "#000",
                fontStyle: "italic",
              }}
            >
              "Na pwin po rojoté, sa sé nout marmay la Réynyon"
            </p>
            <p
              style={{
                marginTop: "15px",
                fontFamily: "var(--font-3)",
                color: "#666",
              }}
            >
              (Il ne faut pas rejeter. Ce sont nos enfants de La Réunion.)
            </p>
          </div>
        </section>

        {/* NOS TROIS PILIERS */}
        <section
          className="reveal"
          style={{ ...styles.section, opacity: 0, transition: "0.8s" }}
        >
          <h2 style={{ ...styles.h2, textAlign: "center" }}>
            NOS TROIS <span style={styles.accent}>PILIERS</span>
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "25px",
              justifyContent: "center",
            }}
          >
            {mamies.map((m, index) => (
              <div key={index} style={styles.mamieCard}>
                <div style={{ height: "350px", overflow: "hidden" }}>
                  <img
                    src={m.image}
                    alt={m.nom}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "25px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-0)",
                      fontSize: "2rem",
                      marginBottom: "5px",
                    }}
                  >
                    {m.nom}
                  </h3>
                  <div
                    style={{
                      color: "rgb(190, 3, 34)",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      fontSize: "0.8rem",
                      marginBottom: "15px",
                      letterSpacing: "1.5px",
                    }}
                  >
                    {m.role}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-3)",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      color: "#444",
                      marginBottom: "20px",
                    }}
                  >
                    {m.desc}
                  </p>
                  <div
                    style={{
                      padding: "15px",
                      background: "#f0f0f0",
                      borderRadius: "4px",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-4)",
                    }}
                  >
                    <strong>Le petit plus :</strong> {m.anecdote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 : CULTURE ET CRÉOLITÉ */}
        <section
          className="reveal"
          style={{
            ...styles.section,
            opacity: 0,
            background: "#000",
            color: "#fff",
            padding: "60px 40px",
            borderRadius: "4px",
            margin: "60px 0",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-0)",
                  fontSize: "3rem",
                  color: "rgb(190, 3, 34)",
                }}
              >
                Une échange
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-3)",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  opacity: 0.9,
                }}
              >
                Piliers du Centre, nos mamies soignent le jardin mais aussi les
                liens : formées au secourisme en santé mentale (PSSM), elles
                veillent sur les plus fragiles et transmettent notre culture
                créole aux jeunes. L'échange est réciproque : elles sortent de
                l'isolement, domptent les technologies et partagent des émotions
                fortes, de l'éruption du Volcan au rythme du roulèr avec Maloya
                Kwir. Chez Pilon, cette famille choisie devient un rempart quand
                la famille de sang fait défaut.
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <div
                  style={{
                    padding: "15px",
                    background: "rgba(190, 3, 34, 0.2)",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  <MessageCircle color="rgb(190, 3, 34)" />
                </div>
                <div style={{ fontSize: "0.95rem" }}>
                  <strong>Gardiennes :</strong> Elles prennent soin du Centre
                  LGBT et des jeunes avec amour.
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <div
                  style={{
                    padding: "15px",
                    background: "rgba(190, 3, 34, 0.2)",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap color="rgb(190, 3, 34)" />
                </div>
                <div style={{ fontSize: "0.95rem" }}>
                  <strong>Savoir-faire :</strong> Cuisine au feu de bois,
                  couture... la transmission du geste.
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <div
                  style={{
                    padding: "15px",
                    background: "rgba(190, 3, 34, 0.2)",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  <Heart color="rgb(190, 3, 34)" />
                </div>
                <div style={{ fontSize: "0.95rem" }}>
                  <strong>Amour inconditionnel :</strong> Lutter contre le rejet
                  sociétal et familial par le lien.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="reveal"
          style={{ padding: "60px 0 120px 0", textAlign: "center", opacity: 0 }}
        >
          <Link to="/Rejoindre">
            <button
              type="button"
              className="button_style other"
              style={{
                backgroundColor: "rgb(190, 3, 34)",
                color: "#fff",
                fontSize: "1.5rem",
                padding: "20px 40px",
                border: "none",
                fontFamily: "var(--font-0)",
                cursor: "pointer",
              }}
            >
              Rejoindre le club des mamies
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default ClubDesMamies;
