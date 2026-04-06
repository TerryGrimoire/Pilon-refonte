/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Info,
  BarChart3,
  Handshake,
  PlayCircle,
  Image as ImageIcon,
  Download,
  Users2,
  TrendingUp,
  X,
  MapPin,
  Clock,
  HelpCircle,
  Target,
  Mail,
  Phone,
  User,
} from "lucide-react";

import actionsData from "../data/data";

// --- COMPOSANT DE COMPTEUR ANIMÉ ---
function Counter({ target, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;
    const totalMiliseconds = duration;
    const incrementTime =
      totalMiliseconds / end > 10 ? totalMiliseconds / end : 10;
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [target, duration]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function ActionDetails() {
  const { id } = useParams();
  const [activePhoto, setActivePhoto] = useState(null);
  const action = actionsData.find((a) => a.id === id);
  const accentColor = "rgb(190, 3, 34)";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!action)
    return (
      <div
        style={{
          padding: "100px",
          textAlign: "center",
          fontFamily: "var(--font-3)",
          minHeight: "100vh",
        }}
      >
        Action introuvable.
      </div>
    );

  const openLightbox = (index) => setActivePhoto(index);
  const closeLightbox = () => setActivePhoto(null);

  const styles = {
    page: {
      backgroundColor: "var(--main-bg-color)",
      minHeight: "100vh",
      paddingBottom: "100px",
      color: "#191919",
    },
    banner: {
      height: "500px",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
      display: "flex",
      alignItems: "flex-end",
      padding: "60px 0",
    },
    container: { maxWidth: "1200px", margin: "0 auto", padding: "0 5vw" },
    title: {
      color: "white",
      fontSize: "4.5rem",
      fontFamily: "var(--font-0)",
      margin: "10px 0",
      textTransform: "uppercase",
      lineHeight: "0.9",
    },
    card: {
      backgroundColor: "white",
      padding: "40px",
      borderRadius: "4px",
      boxShadow: "var(--box-shadow)",
      marginBottom: "30px",
      border: "1px solid #eee",
      overflow: "hidden",
    },
    sectionTitle: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "1.6rem",
      fontFamily: "var(--font-0)",
      color: "#1a1a1a",
      marginBottom: "30px",
      borderBottom: "1px solid #eee",
      paddingBottom: "15px",
    },
    statBox: {
      textAlign: "center",
      padding: "25px",
      backgroundColor: "#fdfdfd",
      border: "1px solid #eee",
      borderRadius: "4px",
    },
    infoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "1px",
      backgroundColor: "#eee",
      border: "1px solid #eee",
      borderRadius: "4px",
      overflow: "hidden",
      marginBottom: "30px",
    },
    infoItem: {
      backgroundColor: "#fff",
      padding: "25px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    rainbowGlow: {
      height: "4px",
      width: "100%",
      background:
        "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)",
      opacity: 0.15,
      position: "absolute",
      top: 0,
      left: 0,
    },
    galleryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "15px",
      marginTop: "20px",
    },
    galleryImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "0.3s",
    },
    videoResponsive: {
      overflow: "hidden",
      paddingBottom: "56.25%",
      position: "relative",
      height: 0,
      borderRadius: "4px",
    },
    contactCard: {
      backgroundColor: "#fdfdfd",
      border: `1px dashed ${accentColor}`,
      padding: "20px",
      borderRadius: "4px",
      marginTop: "15px",
    },
  };

  return (
    <div style={styles.page}>
      {/* LIGHTBOX */}
      {activePhoto !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.95)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
          onClick={closeLightbox}
        >
          <button
            style={{
              position: "absolute",
              top: 30,
              right: 30,
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            <X size={40} />
          </button>
          <img
            src={action.galerie[activePhoto]}
            style={{ maxWidth: "90%", maxHeight: "85vh", objectFit: "contain" }}
            alt=""
          />
        </div>
      )}

      {/* HEADER BANNER */}
      <div style={styles.banner}>
        <img
          src={action.img}
          alt={action.titre}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={styles.overlay}>
          <div style={styles.container}>
            <span
              style={{
                backgroundColor: accentColor,
                color: "white",
                padding: "6px 15px",
                fontSize: "0.8rem",
                fontWeight: "800",
                fontFamily: "var(--font-3)",
                textTransform: "uppercase",
              }}
            >
              {action.pilier}
            </span>
            <h1 style={styles.title}>{action.titre}</h1>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        {/* BOUTON RETOUR */}
        <div
          style={{
            position: "relative",
            marginTop: "-30px",
            display: "inline-block",
            zIndex: 10,
          }}
        >
          <div
            style={{
              ...styles.rainbowGlow,
              borderRadius: "2px 2px 0 0",
              height: "3px",
              opacity: 0.3,
            }}
          />
          <Link
            to="/actions"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#000",
              color: "white",
              padding: "15px 30px",
              textDecoration: "none",
              fontFamily: "var(--font-3)",
              fontWeight: "bold",
              fontSize: "0.9rem",
              textTransform: "uppercase",
            }}
          >
            <ArrowLeft size={18} /> RETOUR AUX ACTIONS
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            marginTop: "60px",
            alignItems: "start",
          }}
        >
          <div style={{ gridColumn: "span 2" }}>
            {/* NOVEAU : SECTION INFOS PRATIQUES (Carrés collés) */}
            <section style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: accentColor,
                    fontWeight: "800",
                    fontFamily: "var(--font-3)",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                  }}
                >
                  <MapPin size={18} /> LIEU / SECTEUR
                </div>
                <div style={{ fontFamily: "var(--font-3)", fontWeight: "600" }}>
                  {action.lieu || "La Réunion (Itinérant)"}
                </div>
              </div>
              <div style={styles.infoItem}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: accentColor,
                    fontWeight: "800",
                    fontFamily: "var(--font-3)",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                  }}
                >
                  <Clock size={18} /> FRÉQUENCE
                </div>
                <div style={{ fontFamily: "var(--font-3)", fontWeight: "600" }}>
                  {action.frequence_detail || "Sur rendez-vous"}
                </div>
              </div>
              <div style={styles.infoItem}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: accentColor,
                    fontWeight: "800",
                    fontFamily: "var(--font-3)",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                  }}
                >
                  <Users2 size={18} /> PUBLIC VISÉ
                </div>
                <div style={{ fontFamily: "var(--font-3)", fontWeight: "600" }}>
                  {action.public || "Tout public LGBT+"}
                </div>
              </div>
              <div style={styles.infoItem}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: accentColor,
                    fontWeight: "800",
                    fontFamily: "var(--font-3)",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                  }}
                >
                  <HelpCircle size={18} /> MODALITÉS
                </div>
                <div style={{ fontFamily: "var(--font-3)", fontWeight: "600" }}>
                  {action.modalite || "Gratuit / Anonyme"}
                </div>
              </div>
            </section>

            {/* PRÉSENTATION & CONTEXTE */}
            <section style={styles.card}>
              <h2 style={styles.sectionTitle}>
                <Info size={26} color={accentColor} /> PRÉSENTATION DU PROJET
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--third-color)",
                  lineHeight: "1.8",
                  fontFamily: "var(--font-3)",
                }}
              >
                {action.desc}
              </p>

              {/* NOUVEAU : SECTION OBJECTIFS (Pour les financeurs) */}
              <div
                style={{
                  marginTop: "30px",
                  padding: "25px",
                  border: `1px solid ${accentColor}33`,
                  backgroundColor: `${accentColor}05`,
                  borderRadius: "4px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-0)",
                    fontSize: "1.4rem",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Target size={20} color={accentColor} /> OBJECTIFS & IMPACTS
                  ATTENDUS
                </h3>
                <ul
                  style={{
                    paddingLeft: "20px",
                    color: "var(--third-color)",
                    fontFamily: "var(--font-3)",
                    lineHeight: "1.6",
                  }}
                >
                  {action.objectifs?.map((obj, i) => (
                    <li key={i} style={{ marginBottom: "8px" }}>
                      {obj}
                    </li>
                  )) || (
                    <li>Lutter contre l'isolement et favoriser l'inclusion.</li>
                  )}
                </ul>
              </div>

              <div
                style={{
                  marginTop: "35px",
                  padding: "30px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "4px",
                  borderLeft: "6px solid #000",
                }}
              >
                <strong
                  style={{
                    fontFamily: "var(--font-3)",
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                    color: "#000",
                  }}
                >
                  CONTEXTE ET ENJEUX :
                </strong>
                <p
                  style={{
                    marginTop: "10px",
                    color: "var(--third-color)",
                    lineHeight: "1.7",
                    fontFamily: "var(--font-3)",
                  }}
                >
                  {action.contexte}
                </p>
              </div>
            </section>

            {/* VIDÉO EXPLICATIVE */}
            {action.videoUrl && (
              <section style={styles.card}>
                <h2 style={styles.sectionTitle}>
                  <PlayCircle size={26} color={accentColor} /> COMPRENDRE LE
                  PROJET EN VIDÉO
                </h2>
                <div style={styles.videoResponsive}>
                  <iframe
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                    src={action.videoUrl}
                    title="Vidéo"
                    allowFullScreen
                  />
                </div>
              </section>
            )}

            {/* GALERIE PHOTOS */}
            {action.galerie && action.galerie.length > 0 && (
              <section style={styles.card}>
                <h2 style={styles.sectionTitle}>
                  <ImageIcon size={26} color={accentColor} /> GALERIE PHOTOS
                </h2>
                <div style={styles.galleryGrid}>
                  {action.galerie.map((imgUrl, index) => (
                    <img
                      key={index}
                      src={imgUrl}
                      alt=""
                      style={styles.galleryImage}
                      onClick={() => openLightbox(index)}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* COMPTEURS */}
            <section style={styles.card}>
              <h2 style={styles.sectionTitle}>
                <Users2 size={26} color={accentColor} /> INDICATEURS DE
                PERFORMANCE
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "25px",
                }}
              >
                <div style={styles.statBox}>
                  <div
                    style={{
                      fontSize: "3rem",
                      fontFamily: "var(--font-0)",
                      color: accentColor,
                      lineHeight: 1,
                    }}
                  >
                    <Counter target={action.bilan2026.participants} />
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "800",
                      color: "#888",
                      textTransform: "uppercase",
                      marginTop: "10px",
                    }}
                  >
                    Participants
                  </div>
                </div>
                <div style={styles.statBox}>
                  <div
                    style={{
                      fontSize: "3rem",
                      fontFamily: "var(--font-0)",
                      lineHeight: 1,
                    }}
                  >
                    <Counter target={48} suffix="%" />
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "800",
                      color: "#888",
                      textTransform: "uppercase",
                      marginTop: "10px",
                    }}
                  >
                    Hommes
                  </div>
                </div>
                <div style={styles.statBox}>
                  <div
                    style={{
                      fontSize: "3rem",
                      fontFamily: "var(--font-0)",
                      lineHeight: 1,
                    }}
                  >
                    <Counter target={52} suffix="%" />
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "800",
                      color: "#888",
                      textTransform: "uppercase",
                      marginTop: "10px",
                    }}
                  >
                    Femmes
                  </div>
                </div>
              </div>
            </section>

            {/* RAPPORTS */}
            <section style={styles.card}>
              <h2 style={styles.sectionTitle}>
                <Download size={26} color={accentColor} /> DOCUMENTS À
                TÉLÉCHARGER
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {[
                  { n: "Rapport d'activité 2025", s: "2.4 MB" },
                  { n: "Bilan d'impact social", s: "1.8 MB" },
                ].map((doc, i) => (
                  <a
                    key={i}
                    href="#"
                    className="rainbow-hover-link"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "20px",
                      border: "1px solid #eee",
                      textDecoration: "none",
                      color: "#191919",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "800",
                        fontFamily: "var(--font-3)",
                        fontSize: "0.9rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {doc.n}{" "}
                      <small style={{ color: "#888", marginLeft: "10px" }}>
                        PDF - {doc.s}
                      </small>
                    </span>
                    <Download size={20} color={accentColor} />
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* COLONNE DROITE */}
          <aside style={{ position: "sticky", top: "20px" }}>
            {/* NOUVEAU : RÉFÉRENT DE L'ACTION */}
            <div style={styles.card}>
              <h2
                style={{
                  ...styles.sectionTitle,
                  fontSize: "1.3rem",
                  marginBottom: "20px",
                }}
              >
                <User size={22} color={accentColor} /> RÉFÉRENT ACTION
              </h2>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "#eee",
                    margin: "0 auto 15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    border: `2px solid ${accentColor}`,
                  }}
                >
                  {action.referent_img ? (
                    <img
                      src={action.referent_img}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="Référent"
                    />
                  ) : (
                    <User size={40} color="#ccc" />
                  )}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-0)",
                    fontSize: "1.4rem",
                    margin: "0 0 5px 0",
                  }}
                >
                  {action.referent_nom || "Équipe Pilon"}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-3)",
                    fontSize: "0.8rem",
                    color: "#888",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  {action.referent_titre || "Responsable de projet"}
                </p>
              </div>
              <div style={styles.contactCard}>
                <a
                  href={`mailto:${action.referent_mail || "contact@pilon.re"}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    color: "#191919",
                    marginBottom: "12px",
                    fontSize: "0.9rem",
                    fontFamily: "var(--font-3)",
                  }}
                >
                  <Mail size={16} color={accentColor} />{" "}
                  {action.referent_mail || "contact@pilon.re"}
                </a>
                <a
                  href={`tel:${action.referent_tel || "0262000000"}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    color: "#191919",
                    fontSize: "0.9rem",
                    fontFamily: "var(--font-3)",
                  }}
                >
                  <Phone size={16} color={accentColor} />{" "}
                  {action.referent_tel || "0692 XX XX XX"}
                </a>
              </div>
            </div>

            <div
              style={{
                ...styles.card,
                background: "linear-gradient(135deg, #191919 0%, #333 100%)",
                color: "white",
                border: "none",
              }}
            >
              <h2
                style={{
                  ...styles.sectionTitle,
                  color: "white",
                  borderBottom: "1px solid #444",
                }}
              >
                <BarChart3 size={24} color={accentColor} /> FOCUS IMPACT
              </h2>
              <div style={{ textAlign: "center", padding: "30px 0" }}>
                <div
                  style={{
                    fontSize: "6rem",
                    fontFamily: "var(--font-0)",
                    lineHeight: 1,
                  }}
                >
                  <Counter
                    target={action.bilan2026.participants}
                    duration={2500}
                  />
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    opacity: 0.7,
                    fontWeight: "800",
                    marginTop: "15px",
                  }}
                >
                  ACCOMPAGNEMENTS
                </div>
              </div>
              <div
                style={{
                  borderTop: "1px solid #444",
                  paddingTop: "20px",
                  marginTop: "20px",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "var(--font-3)",
                }}
              >
                <TrendingUp
                  size={16}
                  color={accentColor}
                  style={{ marginRight: "10px" }}
                />
                <strong>Donnée clé :</strong> {action.bilan2026.donneeCle}
              </div>
            </div>

            <div style={styles.card}>
              <h2 style={{ ...styles.sectionTitle, fontSize: "1.3rem" }}>
                <Handshake size={22} color={accentColor} /> PARTENAIRES
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {action.partenaires.map((p, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.75rem",
                      background: "#f0f0f0",
                      padding: "8px 15px",
                      fontWeight: "700",
                      fontFamily: "var(--font-3)",
                      textTransform: "uppercase",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .rainbow-hover-link:hover { border-color: transparent !important; transform: translateY(-2px); }
        .rainbow-hover-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3); transform: scaleX(0); transition: 0.3s; transform-origin: left; }
        .rainbow-hover-link:hover::after { transform: scaleX(1); }
      `}</style>
    </div>
  );
}

export default ActionDetails;
