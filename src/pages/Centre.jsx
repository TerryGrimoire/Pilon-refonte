/* eslint-disable no-param-reassign */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, Briefcase, Coffee, ShieldCheck } from "lucide-react";

import centreLGBT from "../assets/centreLGBT.jpg";

function PageCentreLGBT() {
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

  const stats = [
    {
      chiffre: "582",
      label: "Personnes accueillies",
      desc: "Depuis janvier 2026",
    },
    {
      chiffre: "56",
      label: "Nouveaux visages",
      desc: "Première visite au centre",
    },
    {
      chiffre: "43",
      label: "actions réalisées",
      desc: "Ateliers, formations, activités, événements",
    },
    {
      chiffre: "1142",
      label: "Heures de bénévolat",
      desc: "Une implication de la communauté",
    },
  ];

  const styles = {
    hero: {
      height: "60vh",
      background:
        "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('src/assets/heroasso2.jpg') top/cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      padding: "0 5vw",
      position: "relative",
    },
    section: { padding: "80px 0" },
    h2: {
      fontSize: "3.5rem",
      fontFamily: "var(--font-0)",
      color: "#000",
      marginBottom: "30px",
      lineHeight: "0.9",
    },
    accent: { color: "rgb(190, 3, 34)" },
    card: {
      background: "#fff",
      padding: "30px",
      borderRadius: "4px",
      border: "1px solid #eee",
      transition: "0.3s",
    },
    iconBox: {
      marginBottom: "20px",
      display: "inline-block",
      padding: "10px",
      backgroundColor: "rgba(190, 3, 34, 0.1)",
      borderRadius: "4px",
    },
  };

  return (
    <div style={{ backgroundColor: "var(--main-bg-color)" }}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1
          style={{
            fontSize: "5rem",
            fontFamily: "var(--font-0)",
            textTransform: "uppercase",
          }}
        >
          LE CENTRE <span style={styles.accent}>LGBT+ NORD</span>
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            fontFamily: "var(--font-3)",
            maxWidth: "800px",
          }}
        >
          Un espace de solidarité et de culture au cœur de Saint-Denis.
        </p>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #FF0000, #FFFF00, #0000FF)",
          }}
        />
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5vw" }}>
        {/* PARTENARIAT MAIRIE */}
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
              display: "flex",
              flexWrap: "wrap",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1, minWidth: "350px" }}>
              <h2 style={styles.h2}>UNe nouvelle direction</h2>
              <p
                style={{
                  fontFamily: "var(--font-4)",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "var(--third-color)",
                }}
              >
                Situé au 11 allée des Jaspes, le local du Centre LGBT Nord de La
                Réunion est mis à disposition par la{" "}
                <strong>Mairie de Saint-Denis</strong>. C'est actuellement le{" "}
                <strong>seul local associatif LGBT+</strong> offert par une
                municipalité sur toute l'île.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-4)",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "var(--third-color)",
                  marginTop: "15px",
                }}
              >
                Depuis Janvier 2026,{" "}
                <strong>
                  Pilon est officiellement le nouveau porteur de projet du
                  Centre LGBT Nord
                </strong>
                . Pour mener à bien cette mission, Pilon s'appuie sur une{" "}
                <strong>gouvernance partagée en copilotage</strong> avec trois
                associations partenaires : Requeer, Kwir Mouvman et Timizé.
                Ensemble, nous insufflons une énergie nouvelle pour répondre aux
                besoins de notre communauté.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "350px", position: "relative" }}>
              <img
                src={centreLGBT}
                alt="Local"
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  boxShadow: "var(--box-shadow)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  background: "#000",
                  color: "#fff",
                  padding: "20px",
                  borderRadius: "4px",
                  fontFamily: "var(--font-0)",
                  fontSize: "1.5rem",
                }}
              >
                11 ALLÉE DES JASPES
              </div>
            </div>
          </div>
        </section>

        {/* CHIFFRES CLÉS */}
        <section
          className="reveal"
          style={{
            ...styles.section,
            background: "#fdfdfd",
            borderTop: "1px solid #eee",
            borderBottom: "1px solid #eee",
            opacity: 0,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h3 style={{ fontFamily: "var(--font-0)", fontSize: "2.5rem" }}>
              LE SUCCÈS DE LA <span style={styles.accent}>REPRISE</span>
            </h3>
            <p style={{ fontFamily: "var(--font-3)" }}>
              Impact mesuré depuis que Pilon pilote le centre (Janv. 2026)
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
            }}
          >
            {stats.map((s) => (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px",
                  border: "1px solid #eee",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    fontSize: "4rem",
                    fontFamily: "var(--font-0)",
                    color: "rgb(190, 3, 34)",
                  }}
                >
                  {s.chiffre}
                </div>
                <div
                  style={{
                    fontWeight: "800",
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                    letterSpacing: "1px",
                  }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#888" }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NOS MISSIONS AU CENTRE */}
        <section className="reveal" style={{ ...styles.section, opacity: 0 }}>
          <h2 style={styles.h2}>
            AU CŒUR DU <span style={styles.accent}>PILONNAGE</span> SOCIAL
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={styles.card}>
              <div style={styles.iconBox}>
                <ShieldCheck color="rgb(190, 3, 34)" />
              </div>
              <h4 style={{ fontFamily: "var(--font-0)", fontSize: "1.5rem" }}>
                ACCOMPAGNEMENT INDIVIDUEL
              </h4>
              <p style={{ fontFamily: "var(--font-3)", fontSize: "0.9rem" }}>
                Permanences psychologiques et assistance sociale une fois par
                mois pour répondre aux besoins spécifiques.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.iconBox}>
                <Briefcase color="rgb(190, 3, 34)" />
              </div>
              <h4 style={{ fontFamily: "var(--font-0)", fontSize: "1.5rem" }}>
                INSERTION PROFESSIONNELLE
              </h4>
              <p style={{ fontFamily: "var(--font-3)", fontSize: "0.9rem" }}>
                Un programme dédié pour aider nos membres à retrouver le chemin
                de l'emploi loin des discriminations.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.iconBox}>
                <Coffee color="rgb(190, 3, 34)" />
              </div>
              <h4 style={{ fontFamily: "var(--font-0)", fontSize: "1.5rem" }}>
                CLUB DES MAMIES & CUISINE
              </h4>
              <p style={{ fontFamily: "var(--font-3)", fontSize: "0.9rem" }}>
                Ateliers cuisine et couture avec nos aînées pour transmettre les
                savoirs et briser le conflit générationnel.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.iconBox}>
                <Users color="rgb(190, 3, 34)" />
              </div>
              <h4 style={{ fontFamily: "var(--font-0)", fontSize: "1.5rem" }}>
                VIE SOCIALE
              </h4>
              <p style={{ fontFamily: "var(--font-3)", fontSize: "0.9rem" }}>
                Soirées jeux, ateliers créatifs et espaces de parole pour que
                personne ne reste seul.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          className="reveal"
          style={{ padding: "100px 0", textAlign: "center", opacity: 0 }}
        >
          <div
            style={{
              background: "rgb(190, 3, 34)",
              padding: "60px",
              borderRadius: "4px",
              color: "#fff",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-0)", fontSize: "3rem" }}>
              VENEZ NOUS VOIR
            </h3>
            <p style={{ fontFamily: "var(--font-3)", marginBottom: "30px" }}>
              Le centre est ouvert du lundi au vendredi, de 9h à 16h.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Link to="/contact">
                {" "}
                <button
                  type="button"
                  className="button_style other"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  NOUS CONTACTER
                </button>
              </Link>

              <Link to="/Rejoindre">
                {" "}
                <button
                  type="button"
                  className="button_style other"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "1px solid #000",
                  }}
                >
                  Rejoindre Pilon
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PageCentreLGBT;
