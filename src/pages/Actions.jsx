import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actionsData from "../data/data";
import hero6 from "../assets/hero6.jpg";

function NosActions() {
  const [filter, setFilter] = useState("Tous");

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  const piliersConfig = {
    Tous: { titre: "Toutes nos actions" },
    Sante: { titre: "Santé" },
    Social: { titre: "Accès aux droits" },
    Visibilite: { titre: "Mois des fiertés" },
    Culture: { titre: "Culture" },
    Sport: { titre: "Sport et Loisirs" },
    Sensibilisation: { titre: "Sensibilisation" },
    Formations: { titre: "Formations" },
    Voyages: { titre: "Voyages" },
  };

  const filteredActions =
    filter === "Tous"
      ? actionsData
      : actionsData.filter((a) => a.pilier === filter);

  return (
    <div
      style={{
        backgroundColor: "var(--main-bg-color)",
        minHeight: "100vh",
        paddingBottom: "100px",
        overflowX: "hidden", // Sécurité anti-débordement horizontal
      }}
    >
      <section
        className="home_hero"
        style={{
          height: "60vh",
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${hero6}) center/cover`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-3)",
            fontSize: "clamp(2.5rem, 8vw, 4rem)", // Taille adaptative
            textTransform: "uppercase",
            color: "white",
            margin: 0,
          }}
        >
          NOS <span style={{ color: "rgb(190, 3, 34)" }}>ACTIONS</span>
        </h1>
      </section>

      {/* Remplacement du padding fixe par un padding adaptatif */}
      <div
        className="container"
        style={{
          padding: "0 clamp(20px, 5vw, 12.5vw)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <nav
          style={{
            padding: "40px 0",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            borderBottom: "1px solid #eee",
            marginBottom: "50px",
          }}
        >
          {Object.keys(piliersConfig).map((key) => (
            <button
              type="button"
              key={key}
              onClick={() => setFilter(key)}
              className="no_button"
              style={{
                padding: "12px 24px",
                borderRadius: "12px",
                fontFamily: "var(--font-3)",
                fontSize: "13px",
                fontWeight: "800",
                textTransform: "uppercase",
                transition: "0.2s ease",
                backgroundColor: filter === key ? "#fff" : "#F3F4F6",
                color: "#191919",
                border:
                  filter === key
                    ? "2.5px solid #000"
                    : "2.5px solid transparent",
                cursor: "pointer",
              }}
            >
              {piliersConfig[key].titre}
            </button>
          ))}
        </nav>

        <div
          style={{
            display: "grid",
            // Utilisation de min(100%, 350px) pour éviter de dépasser la largeur de l'écran sur mobile
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
            gap: "30px",
            width: "100%",
          }}
        >
          {filteredActions.map((action) => (
            <div
              key={action.id}
              className="reveal"
              style={{
                backgroundColor: "#fff",
                padding: "clamp(20px, 5vw, 40px)", // Padding interne adaptatif
                borderRadius: "4px",
                borderLeft: "6px solid rgb(190, 3, 34)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div>
                <p
                  style={{
                    color: "rgb(190, 3, 34)",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  {piliersConfig[action.pilier]?.titre || action.pilier}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-0)",
                    fontSize: "1.8rem",
                    marginBottom: "15px",
                  }}
                >
                  {action.titre}
                </h3>
                <p
                  style={{
                    color: "var(--third-color)",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginBottom: "30px",
                  }}
                >
                  {action.desc}
                </p>
              </div>
              <Link
                to={`/actions/${action.id}`}
                className="button_style"
                style={{
                  textAlign: "center",
                  margin: 0,
                  textDecoration: "none",
                  display: "block", // Assure que le bouton prend la largeur dispo
                }}
              >
                Découvrir l'action
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default NosActions;
