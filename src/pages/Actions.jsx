import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actionsData from "../data/data";

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
      }}
    >
      <section
        className="home_hero"
        style={{
          height: "60vh",
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('src/assets/hero6.jpg') center/cover`,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-3)",
            fontSize: "4rem",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          NOS <span style={{ color: "rgb(190, 3, 34)" }}>ACTIONS</span>
        </h1>
      </section>

      <div className="container" style={{ padding: "0 12.5vw" }}>
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
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "30px",
          }}
        >
          {filteredActions.map((action) => (
            <div
              key={action.id}
              className="reveal"
              style={{
                backgroundColor: "#fff",
                padding: "40px",
                borderRadius: "4px",
                borderLeft: "6px solid rgb(190, 3, 34)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
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
