/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import agendaData from "../data/agendaData";
import actionsData from "../data/data";

function Agenda() {
  const allYears = [
    ...new Set(
      agendaData
        .filter((ev) => ev.date)
        .map((ev) => new Date(ev.date).getFullYear())
    ),
  ].sort((a, b) => b - a);

  const [selectedYear, setSelectedYear] = useState(allYears[0] || 2026);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const today = new Date();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedYear]);

  const recurrentes = agendaData.filter((ev) => ev.isRecurrent);
  const evenementsAnnee = agendaData.filter(
    (ev) => ev.date && new Date(ev.date).getFullYear() === selectedYear
  );

  const futurs = evenementsAnnee
    .filter((ev) => new Date(ev.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const passes = evenementsAnnee
    .filter((ev) => new Date(ev.date) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const getActionPath = (slug) => {
    if (!slug) return null;
    const exists = actionsData.find((a) => a.id === slug);
    return exists ? `/actions/${slug}` : null;
  };

  return (
    <div
      style={{ backgroundColor: "var(--main-bg-color)", minHeight: "100vh" }}
    >
      {/* HERO SECTION */}
      <section
        className="home_hero"
        style={{
          height: "60vh",
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('src/assets/presse.jpg') top/cover`,
        }}
      >
        <h1
          style={{
            top: "50%",
            width: "100%",
            fontFamily: "var(--font-0)",
            fontSize: "4rem",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          L'AGENDA <span style={{ color: "rgb(190, 3, 34)" }}>PILON</span>
        </h1>
      </section>

      {/* NAVIGATION ANNÉES (STICKY) */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "white",
          padding: "20px 0",
          borderBottom: "1px solid #eee",
        }}
      >
        <div className="flex justify-center wrap" style={{ gap: "10px" }}>
          {allYears.map((year) => (
            <button
              type="button"
              key={year}
              onClick={() => setSelectedYear(year)}
              className="no_button"
              style={{
                padding: "12px 24px",
                borderRadius: "12px",
                fontFamily: "var(--font-3)",
                fontSize: "13px",
                fontWeight: "800",
                textTransform: "uppercase",
                transition: "0.2s ease",
                backgroundColor: selectedYear === year ? "#fff" : "#F3F4F6",
                color: "#191919",
                border:
                  selectedYear === year
                    ? "2.5px solid #000"
                    : "2.5px solid transparent",
                cursor: "pointer",
              }}
            >
              {year}
            </button>
          ))}
        </div>
      </nav>

      <div className="container" style={{ padding: "60px 10vw 100px" }}>
        {/* RÉCURRENTS */}
        {selectedYear === today.getFullYear() && recurrentes.length > 0 && (
          <section style={{ marginBottom: "80px" }}>
            <h3
              style={{
                fontFamily: "var(--font-0)",
                fontSize: "2rem",
                borderBottom: "4px solid rgb(190, 3, 34)",
                display: "inline-block",
                marginBottom: "40px",
              }}
            >
              NOS RENDEZ-VOUS RÉCURRENTS
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "30px",
              }}
            >
              {recurrentes.map((ev) => (
                <EventCard
                  key={ev.id}
                  event={ev}
                  onClick={() => setSelectedEvent(ev)}
                />
              ))}
            </div>
          </section>
        )}

        {/* PROCHAINEMENT */}
        {futurs.length > 0 && (
          <section style={{ marginBottom: "80px" }}>
            <h3
              style={{
                fontFamily: "var(--font-0)",
                fontSize: "2rem",
                borderBottom: "4px solid #000",
                display: "inline-block",
                marginBottom: "40px",
              }}
            >
              PROCHAINEMENT EN {selectedYear}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "30px",
              }}
            >
              {futurs.map((ev) => (
                <EventCard
                  key={ev.id}
                  event={ev}
                  onClick={() => setSelectedEvent(ev)}
                />
              ))}
            </div>
          </section>
        )}

        {/* ARCHIVES */}
        {passes.length > 0 && (
          <section>
            <h3
              style={{
                fontFamily: "var(--font-0)",
                fontSize: "2rem",
                borderBottom: "4px solid #ccc",
                color: "#999",
                display: "inline-block",
                marginBottom: "40px",
              }}
            >
              SOUVENIRS {selectedYear}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "30px",
              }}
            >
              {passes.map((ev) => (
                <EventCard
                  key={ev.id}
                  event={ev}
                  onClick={() => setSelectedEvent(ev)}
                  isPast
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* MODALE DE DÉTAILS */}
      {selectedEvent && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            style={{
              backgroundColor: "white",
              maxWidth: "650px",
              width: "100%",
              borderRadius: "4px",
              overflow: "hidden",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedEvent.image}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
              alt=""
            />
            <div style={{ padding: "40px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-0)",
                  fontSize: "2.5rem",
                  marginBottom: "15px",
                }}
              >
                {selectedEvent.nom}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-3)",
                  color: "var(--third-color)",
                  lineHeight: "1.6",
                  marginBottom: "25px",
                }}
              >
                {selectedEvent.description}
              </p>

              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "4px",
                  marginBottom: "30px",
                  borderLeft: "5px solid rgb(190, 3, 34)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    margin: "5px 0",
                    fontWeight: "bold",
                  }}
                >
                  LIEU : {selectedEvent.lieux}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    margin: "5px 0",
                    fontWeight: "bold",
                  }}
                >
                  DATE :{" "}
                  {selectedEvent.date
                    ? new Date(selectedEvent.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                      })
                    : selectedEvent.reccurence}{" "}
                  {selectedEvent.horaires}
                </p>
              </div>

              <div className="flex wrap align-center" style={{ gap: "15px" }}>
                {getActionPath(selectedEvent.slug) && (
                  <Link
                    to={getActionPath(selectedEvent.slug)}
                    className="button_style other"
                    style={{ margin: 0 }}
                  >
                    Découvrir l'action
                  </Link>
                )}
                {selectedEvent.lien && selectedEvent.lien !== "#" && (
                  <a
                    href={selectedEvent.lien}
                    target="_blank"
                    rel="noreferrer"
                    className="button_style"
                    style={{ margin: 0 }}
                  >
                    S'inscrire
                  </a>
                )}
                <button
                  type="button"
                  className="no_button"
                  onClick={() => setSelectedEvent(null)}
                  style={{
                    marginLeft: "auto",
                    cursor: "pointer",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: "11px",
                    opacity: 0.5,
                  }}
                >
                  Fermer [x]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function EventCard({ event, onClick, isPast }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        transition: "0.4s",
        filter: isPast ? "grayscale(1) opacity(0.6)" : "none",
        backgroundColor: "white",
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: "var(--box-shadow)",
      }}
    >
      <img
        src={event.image}
        alt={event.nom}
        style={{ height: "220px", width: "100%", objectFit: "cover" }}
      />
      <div style={{ padding: "25px" }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: "800",
            color: "rgb(190, 3, 34)",
            margin: 0,
            textTransform: "uppercase",
            fontFamily: "var(--font-3)",
          }}
        >
          {event.date
            ? new Date(event.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
              })
            : event.reccurence}
        </p>
        <h4
          style={{
            fontFamily: "var(--font-0)",
            fontSize: "1.8rem",
            margin: "10px 0",
          }}
        >
          {event.nom}
        </h4>
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--third-color)",
            margin: 0,
            fontFamily: "var(--font-3)",
          }}
        >
          {event.lieux}
        </p>
      </div>
    </div>
  );
}

export default Agenda;
