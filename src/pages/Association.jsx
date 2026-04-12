/* eslint-disable no-param-reassign */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, Heart, Target, Sparkles } from "lucide-react";
import histoire from "../assets/histoire.jpeg";
import centre from "../assets/centreLGBT.jpg";
import pilon from "../assets/out.jpg";
import myriam from "../assets/myriam.jfif";
import amandine from "../assets/amandine.jpg";
import dorine from "../assets/dorine.jpg";
import tommy from "../assets/logoa.png";
import jocelyne from "../assets/jocelyne.jpg";
import marie from "../assets/marie.jpg";
import berthe from "../assets/berthe.jpg";
import alexandre from "../assets/alexandre.jpg";
import christopher from "../assets/christopher.jpg";
import samuel from "../assets/samuel.jpg";
import charles from "../assets/charles.jpg";

function PageAssociationPilon() {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemzejdRkm0NwZbmeYQvJrFkgA1itVzCo_fw&s";

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

  const bureau = [
    { nom: "Myriam Araste", poste: "Présidente", photo: myriam },
    { nom: "Amandine Augerai", poste: "Trésorière", photo: amandine },
    { nom: "Dorine Treport", poste: "Trésorière adjointe", photo: dorine },
    { nom: "Tommy Pothin", poste: "Secrétaire", photo: tommy },
    { nom: "Adrien Techer", poste: "Secrétaire adjoint", photo: tommy },
  ];

  const salaries = [
    {
      nom: "Terry Grimoire",
      poste: "Coordinateur de projets",
      photo: imageUrl,
    },
  ];

  const benevoles = [
    {
      nom: "Madame Jocelyne",
      role: "Club des mamies & référente cuisine",
      photo: jocelyne,
    },
    {
      nom: "Madame Marie Andrée",
      role: "Club des mamies & référente cuisine",
      photo: marie,
    },
    {
      nom: "Madame Berthe",
      role: "Club des mamies & référente cuisine",
      photo: berthe,
    },
    {
      nom: "Alexandre Pignolet",
      role: "Volley Rose & référent soirées jeux",
      photo: alexandre,
    },
    {
      nom: "Christopher Poiny-Vaity",
      role: "Référent Brunchs & ateliers cuisine",
      photo: christopher,
    },
    {
      nom: "Samuel Poiny-Vaity",
      role: "Danse indienne & cuisine",
      photo: samuel,
    },
    {
      nom: "Charles Girouard",
      role: "Données & club d'échecs",
      photo: charles,
    },
  ];

  const styles = {
    mainContainer: {
      backgroundColor: "var(--main-bg-color)",
      color: "#1a1a1a",
      paddingBottom: "100px",
      overflow: "hidden",
    },
    hero: {
      height: "70vh",
      background:
        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('src/assets/hero3.jpg') center/cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      padding: "0 5vw",
      position: "relative",
    },
    rainbowLine: {
      height: "4px",
      width: "100%",
      background:
        "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)",
      position: "absolute",
      bottom: 0,
      left: 0,
      opacity: 0.8,
    },
    container: { maxWidth: "1200px", margin: "0 auto", padding: "0 5vw" },
    reveal: {
      opacity: "0",
      transform: "translateY(40px)",
      transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
    },
    sectionTitle: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "2.5rem",
      fontFamily: "var(--font-0)",
      color: "#000",
      marginBottom: "40px",
      marginTop: "80px",
      borderBottom: "1px solid #eee",
      paddingBottom: "15px",
      textTransform: "uppercase",
    },
    splitSection: {
      display: "flex",
      alignItems: "center",
      gap: "60px",
      marginBottom: "100px",
      flexWrap: "wrap",
    },
    splitImage: {
      flex: "1",
      minWidth: "350px",
      borderRadius: "4px",
      overflow: "hidden",
      boxShadow: "var(--box-shadow)",
    },
    splitText: { flex: "1", minWidth: "350px" },
    h2: {
      fontSize: "3.5rem",
      fontFamily: "var(--font-0)",
      color: "#000",
      textTransform: "uppercase",
      marginBottom: "20px",
      lineHeight: "0.9",
    },
    p: {
      fontSize: "1.1rem",
      lineHeight: "1.8",
      color: "var(--third-color)",
      marginBottom: "20px",
      fontFamily: "var(--font-4)",
    },
    teamGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "30px",
    },
    memberCard: {
      textAlign: "center",
      background: "#fff",
      padding: "30px 20px",
      borderRadius: "4px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
      border: "1px solid #f9f9f9",
      transition: "0.3s",
    },
    photoCircle: {
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "20px",
      border: "4px solid #f0f0f0",
    },
    benevoleCard: {
      position: "relative",
      background: "#fff",
      padding: "25px",
      borderRadius: "4px",
      border: "1px solid #eee",
      textAlign: "center",
      transition: "0.3s",
    },
    cardRainbow: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "3px",
      background: "linear-gradient(90deg, #FF0000, #FFFF00, #0000FF)",
    },
  };

  return (
    <div style={styles.mainContainer}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1
          style={{
            fontSize: "5rem",
            fontFamily: "var(--font-0)",
            textTransform: "uppercase",
            letterSpacing: "-1px",
            lineHeight: "0.8",
          }}
        >
          L'ASSOCIATION <span style={{ color: "rgb(190, 3, 34)" }}>PILON</span>
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            fontWeight: "400",
            maxWidth: "800px",
            marginTop: "20px",
            fontFamily: "var(--font-3)",
            opacity: 0.9,
          }}
        >
          Mélanger les cultures, écraser les préjugés. Nout combat pour une
          Réunion fière et solidaire.
        </p>
        <div style={styles.rainbowLine} />
      </section>

      <div style={styles.container}>
        {/* 1. HISTOIRE */}
        <div
          className="reveal"
          style={{
            ...styles.splitSection,
            ...styles.reveal,
            marginTop: "100px",
          }}
        >
          <div style={styles.splitImage}>
            <img
              src={histoire}
              alt="Histoire"
              style={{ width: "100%", height: "450px", objectFit: "cover" }}
            />
          </div>
          <div style={styles.splitText}>
            <h2 style={styles.h2}>NOTRE HISTOIRE</h2>
            <p style={styles.p}>
              L'association Pilon est née au lendemain de la toute première marche des visibilités de St Denis en 2021. Elle a débuté par un groupe d'amis qui voulait se retrouver et faire de la danse en talons.
            </p>
            <p style={styles.p}>
              La toute première action de Pilon est un pique-nique arc-en-ciel dont l'idée vient de la maman du fondateur, qui lui propose de faire un événement pour les familles. C'est comme ça qu'est né le pique-nique arc-en-ciel.
            </p>
          </div>
        </div>

        {/* 2. CENTRE LGBT NORD */}
        <div
          className="reveal"
          style={{
            ...styles.splitSection,
            flexDirection: "row-reverse",
            ...styles.reveal,
          }}
        >
          <div style={styles.splitImage}>
            <img
              src={centre}
              alt="Centre LGBT+ NORD"
              style={{ width: "100%", height: "450px", objectFit: "cover" }}
            />
          </div>
          <div style={styles.splitText}>
            <h2 style={styles.h2}>CENTRE LGBT NORD</h2>
            <p style={styles.p}>
              Pilon est la structure qui porte le{" "}
              <strong>Centre LGBT Nord de La Réunion</strong>. Copiloté par 4 associations, Requeer, Kwir Mouvman, Timizé et Pilon, nous y assurons
              des missions de service public : permanences psychologiques,
              assistance sociale et santé sexuelle.
            </p>
            <Link to="/centre"
              style={{
                padding: "20px",
                borderLeft: "4px solid rgb(190, 3, 34)",
                background: "#f9f9f9",
                fontFamily: "var(--font-3)",
                fontSize: "0.9rem",
                fontWeight: "700",
              }}
            >
              UN LIEU UNIQUE D'ACCUEIL ET DE DROITS.
            </Link>
          </div>
        </div>

        {/* 3. SIGNIFICATION */}
        <div
          className="reveal"
          style={{ ...styles.splitSection, ...styles.reveal }}
        >
          <div style={styles.splitImage}>
            <img
              src={pilon}
              alt="Pilon"
              style={{ width: "100%", height: "450px", objectFit: "cover" }}
            />
          </div>
          <div style={styles.splitText}>
            <h2 style={styles.h2}>
              Que signigie{" "}
              <span style={{ color: "rgb(190, 3, 34)" }}>pilon</span> ?
            </h2>
            <p style={styles.p}>
              Deux raisons nous ont poussé à choisir le nom Pilon. La première est que notre association souhaite valoriser la culture créole et l'héritage ancestrales Réunionnais. Or, le Pilon est traditionnellement offert aux jeunes mariés lorsqu'ils fondent un foyer. Ce qui en fait un instrument traditionnel que tous les Réunionnais possèdent. 
            </p>
            <p style={styles.p}>
            De plus, en créole Mauricien et Seychellois, Pilon est une insulte pour désigner les homosexuels. Nous avons voulu nous réapproprier cette insulte par solidarité avec les autres peuples de l'Océan Indien, pour leur montrer que tant qu'on sera fiers d'être Pilon, aucune insulte ne peut nous atteindre. 
            </p>
          </div>
        </div>

        {/* ÉQUIPE : BUREAU */}
        <div className="reveal" style={styles.reveal}>
          <h3 style={styles.sectionTitle}>
            <Users size={32} color="rgb(190, 3, 34)" /> LE BUREAU
          </h3>
          <div style={styles.teamGrid}>
            {bureau.map((m) => (
              <div key={m.nom} style={styles.memberCard} className="hover-card">
                <img src={m.photo} alt={m.nom} style={styles.photoCircle} />
                <div
                  style={{
                    fontWeight: "900",
                    fontSize: "1.1rem",
                    fontFamily: "var(--font-3)",
                    textTransform: "uppercase",
                  }}
                >
                  {m.nom}
                </div>
                <div
                  style={{
                    color: "rgb(190, 3, 34)",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    marginTop: "5px",
                    letterSpacing: "1px",
                  }}
                >
                  {m.poste}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SALARIÉS */}
        <div className="reveal" style={styles.reveal}>
          <h3 style={styles.sectionTitle}>
            <Target size={32} color="rgb(190, 3, 34)" /> L'ÉQUIPE SALARIÉE
          </h3>
          <div style={styles.teamGrid}>
            {salaries.map((s) => (
              <div key={s.nom} style={styles.memberCard}>
                <img
                  src={s.photo}
                  alt={s.nom}
                  style={{ ...styles.photoCircle, borderColor: "#000" }}
                />
                <div
                  style={{
                    fontWeight: "900",
                    fontSize: "1.1rem",
                    fontFamily: "var(--font-3)",
                    textTransform: "uppercase",
                  }}
                >
                  {s.nom}
                </div>
                <div
                  style={{
                    color: "#555",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    marginTop: "5px",
                  }}
                >
                  {s.poste}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BÉNÉVOLES AVEC TOUCHES ARC-EN-CIEL */}
        <div className="reveal" style={styles.reveal}>
          <h3 style={styles.sectionTitle}>
            <Heart size={32} color="rgb(190, 3, 34)" /> BÉNÉVOLES ACTIFS
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {benevoles.map((b) => (
              <div
                key={b.nom}
                style={styles.benevoleCard}
                className="benevole-hover"
              >
                <div style={styles.cardRainbow} />
                <img
                  src={b.photo}
                  alt={b.nom}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    marginBottom: "15px",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    fontWeight: "800",
                    fontSize: "0.95rem",
                    fontFamily: "var(--font-3)",
                    textTransform: "uppercase",
                  }}
                >
                  {b.nom}
                </div>
                <div
                  style={{
                    color: "#888",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    marginTop: "8px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                  }}
                >
                  {b.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
            position: "relative",
          }}
          className="reveal"
        >
          <Link to="/Rejoindre">
            <button
              type="button"
              className="button_style"
              style={{ padding: "20px 50px", fontSize: "1.1rem" }}
            >
              REJOINDRE NOUT FAMILLE
            </button>
          </Link>
          <div
            style={{
              marginTop: "20px",
              fontSize: "0.8rem",
              fontFamily: "var(--font-3)",
              fontWeight: "800",
              opacity: 0.4,
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            <Sparkles size={14} style={{ marginRight: "10px" }} /> Ensemble,
            nous sommes plus forts
          </div>
        </div>
      </div>

      <style>{`
        .hover-card:hover { transform: translateY(-5px); border-color: rgb(190, 3, 34); }
        .benevole-hover:hover { border-color: #000; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
      `}</style>
    </div>
  );
}

export default PageAssociationPilon;
