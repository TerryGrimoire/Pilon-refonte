/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft, Info, BarChart3, Handshake, PlayCircle, Image as ImageIcon,
  Download, Users2, TrendingUp, X, MapPin, Clock, HelpCircle, Target,
  Mail, Phone, User, Heart, Newspaper, ChevronRight, ChevronLeft
} from "lucide-react";

import actionsData from "../data/data";

function ActionDetails() {
  const { id } = useParams();
  const [activePhoto, setActivePhoto] = useState(null);
  const action = actionsData.find((a) => a.id === id);
  const accentColor = "rgb(190, 3, 34)";

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!action) return <div style={{ padding: "100px", textAlign: "center", fontFamily: "var(--font-3)" }}>Action introuvable.</div>;

  // Gestion de la galerie à plat pour la lightbox
  const allPhotos = action.galerieParAnnee?.flatMap(g => g.photos) || action.galerie || [];
  
  const styles = {
    page: { backgroundColor: "var(--main-bg-color)", minHeight: "100vh", paddingBottom: "100px", color: "#191919" },
    banner: { height: "550px", width: "100%", position: "relative", overflow: "hidden" },
    overlay: { position: "absolute", inset: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.85))", display: "flex", alignItems: "flex-end", padding: "60px 0" },
    container: { maxWidth: "1200px", margin: "0 auto", padding: "0 5vw" },
    title: { color: "white", fontSize: "4.5rem", fontFamily: "var(--font-0)", margin: "10px 0", textTransform: "uppercase", lineHeight: "0.9" },
    card: { backgroundColor: "white", padding: "40px", borderRadius: "4px", boxShadow: "var(--box-shadow)", marginBottom: "30px", border: "1px solid #eee" },
    sectionTitle: { display: "flex", alignItems: "center", gap: "15px", fontSize: "1.6rem", fontFamily: "var(--font-0)", color: "#1a1a1a", marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "15px" },
    infoGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", backgroundColor: "#eee", border: "1px solid #eee", borderRadius: "4px", overflow: "hidden", marginBottom: "30px" },
    infoItem: { backgroundColor: "#fff", padding: "20px", display: "flex", flexDirection: "column", gap: "5px" },
    label: { color: accentColor, fontWeight: "800", fontFamily: "var(--font-3)", fontSize: "0.75rem", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" },
    galleryGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "15px", marginTop: "15px" },
    rainbowGlow: { height: "3px", width: "100%", background: "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)", opacity: 0.3 }
  };

  return (
    <div style={styles.page}>
      {/* LIGHTBOX */}
      {activePhoto !== null && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.95)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setActivePhoto(null)}>
          <button style={{ position: "absolute", top: 30, right: 30, background: "none", border: "none", color: "white", cursor: "pointer" }}><X size={40} /></button>
          <img src={allPhotos[activePhoto]} style={{ maxWidth: "90%", maxHeight: "85vh", objectFit: "contain" }} alt="" />
        </div>
      )}

      {/* HEADER BANNER */}
      <div style={styles.banner}>
        <img src={action.img} alt={action.titre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={styles.overlay}>
          <div style={styles.container}>
            <span style={{ backgroundColor: accentColor, color: "white", padding: "6px 15px", fontSize: "0.8rem", fontWeight: "800", fontFamily: "var(--font-3)", textTransform: "uppercase" }}>
              {action.categorie || action.pilier}
            </span>
            <h1 style={styles.title}>{action.titre}</h1>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        {/* RETOUR */}
        <div style={{ position: "relative", marginTop: "-30px", display: "inline-block", zIndex: 10 }}>
          <div style={styles.rainbowGlow} />
          <Link to="/actions" style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "#000", color: "white", padding: "15px 30px", textDecoration: "none", fontFamily: "var(--font-3)", fontWeight: "bold", fontSize: "0.9rem", textTransform: "uppercase" }}>
            <ArrowLeft size={18} /> RETOUR AUX ACTIONS
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginTop: "60px", alignItems: "start" }}>
          
          <div style={{ gridColumn: "span 2" }}>
            
            {/* INFOS PRATIQUES & BÉNÉFICIAIRES */}
            <section style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <div style={styles.label}><Users2 size={16} /> Public Visé</div>
                <div style={{ fontFamily: "var(--font-3)", fontWeight: "600" }}>{action.infosPratiques?.public || action.public || "Tout public"}</div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.label}><HelpCircle size={16} /> Prix / Accès</div>
                <div style={{ fontFamily: "var(--font-3)", fontWeight: "600" }}>{action.infosPratiques?.prix || "Gratuit / Libre"}</div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.label}><Clock size={16} /> Fréquence</div>
                <div style={{ fontFamily: "var(--font-3)", fontWeight: "600" }}>{action.frequence_detail || action.freq}</div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.label}><MapPin size={16} /> Lieu</div>
                <div style={{ fontFamily: "var(--font-3)", fontWeight: "600" }}>{action.infosPratiques?.lieu || action.lieu || "La Réunion"}</div>
              </div>
            </section>

            {/* POURQUOI CETTE ACTION & CONTEXTE */}
            <section style={styles.card}>
              <h2 style={styles.sectionTitle}><Target size={26} color={accentColor} /> Pourquoi cette action ?</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
                <div>
                  <h4 style={{ fontFamily: "var(--font-0)", fontSize: "1.2rem", marginBottom: "15px" }}>Objectifs & Impacts</h4>
                  <ul style={{ paddingLeft: "20px", color: "var(--third-color)", fontFamily: "var(--font-3)", lineHeight: "1.7" }}>
                    {action.objectifs?.map((obj, i) => <li key={i} style={{ marginBottom: "8px" }}>{obj}</li>)}
                  </ul>
                </div>
                <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderLeft: `4px solid ${accentColor}` }}>
                  <h4 style={{ fontFamily: "var(--font-0)", fontSize: "1.2rem", marginBottom: "10px" }}>Contexte</h4>
                  <p style={{ fontFamily: "var(--font-3)", fontSize: "0.95rem", lineHeight: "1.6" }}>{action.contexte}</p>
                </div>
              </div>
            </section>

            {/* DESCRIPTION DÉTAILLÉE */}
            <section style={styles.card}>
              <h2 style={styles.sectionTitle}><Info size={26} color={accentColor} /> Description de l'action</h2>
              <p style={{ fontSize: "1.1rem", color: "var(--third-color)", lineHeight: "1.8", fontFamily: "var(--font-3)" }}>{action.desc}</p>
            </section>

            {/* PHOTOS PAR ANNÉE */}
            {(action.galerieParAnnee || action.galerie) && (
              <section style={styles.card}>
                <h2 style={styles.sectionTitle}><ImageIcon size={26} color={accentColor} /> Galerie Photos</h2>
                {action.galerieParAnnee ? (
                  action.galerieParAnnee.map((group, i) => (
                    <div key={i} style={{ marginBottom: "30px" }}>
                      <h3 style={{ fontFamily: "var(--font-0)", fontSize: "1.1rem", color: "#888", marginBottom: "10px" }}>{group.annee}</h3>
                      <div style={styles.galleryGrid}>
                        {group.photos.map((img, idx) => (
                          <img key={idx} src={img} style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "2px", cursor: "pointer" }} 
                               onClick={() => setActivePhoto(allPhotos.indexOf(img))} alt="" />
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={styles.galleryGrid}>
                    {action.galerie?.map((img, idx) => (
                      <img key={idx} src={img} style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "2px", cursor: "pointer" }} 
                           onClick={() => setActivePhoto(idx)} alt="" />
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* VIDÉOS (CAROUSEL) */}
            {action.videos && (
              <section style={styles.card}>
                <h2 style={styles.sectionTitle}><PlayCircle size={26} color={accentColor} /> Vidéos de l'action</h2>
                <div style={{ display: "flex", gap: "20px", overflowX: "auto", paddingBottom: "15px" }}>
                  {action.videos.map((url, i) => (
                    <div key={i} style={{ minWidth: "350px", height: "200px", borderRadius: "4px", overflow: "hidden" }}>
                      <iframe src={url} width="100%" height="100%" frameBorder="0" allowFullScreen title={`vid-${i}`} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* COLONNE DROITE : CHIFFRES & INSTITUTIONNEL */}
          <aside style={{ position: "sticky", top: "20px" }}>
            
            {/* RÉSULTATS / CHIFFRES */}
            <div style={{ ...styles.card, background: "linear-gradient(135deg, #191919 0%, #333 100%)", color: "white", border: "none", textAlign: "center" }}>
              <h2 style={{ ...styles.sectionTitle, color: "white", borderBottom: "1px solid #444", fontSize: "1.2rem" }}>
                <BarChart3 size={22} color={accentColor} /> Résultats obtenus
              </h2>
              <div style={{ padding: "20px 0" }}>
                <div style={{ fontSize: "5rem", fontFamily: "var(--font-0)", lineHeight: 1 }}>{action.bilan2026?.participants || "0"}</div>
                <div style={{ fontSize: "0.7rem", letterSpacing: "2px", opacity: 0.7, fontWeight: "800", marginTop: "10px" }}>BÉNÉFICIAIRES</div>
              </div>
              <div style={{ borderTop: "1px solid #444", paddingTop: "15px", fontSize: "0.9rem", textAlign: "left" }}>
                 <TrendingUp size={14} color={accentColor} style={{ marginRight: "8px" }} />
                 <strong>Clé :</strong> {action.bilan2026?.donneeCle}
              </div>
            </div>

            {/* PRESSE */}
            {action.presse && (
              <div style={styles.card}>
                <h3 style={{ ...styles.sectionTitle, fontSize: "1.2rem" }}><Newspaper size={22} color={accentColor} /> Dans la presse</h3>
                {action.presse.map((art, i) => (
                  <a key={i} href={art.url} target="_blank" rel="noreferrer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #eee", textDecoration: "none", color: "inherit" }}>
                    <div style={{ fontSize: "0.9rem", fontFamily: "var(--font-3)" }}>
                      <strong>{art.source}</strong><br/>{art.titre}
                    </div>
                    <ChevronRight size={16} color={accentColor} />
                  </a>
                ))}
              </div>
            )}

            {/* FINANCEURS & PARTENAIRES */}
            <div style={styles.card}>
              <h3 style={{ ...styles.sectionTitle, fontSize: "1.2rem", marginBottom: "20px" }}><Heart size={22} color={accentColor} /> Financeurs</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "30px" }}>
                {action.financeurs?.map((f, i) => (
                  <span key={i} style={{ fontSize: "0.7rem", backgroundColor: "#fdf2f2", color: accentColor, padding: "6px 12px", fontWeight: "700", borderRadius: "2px" }}>{f}</span>
                ))}
              </div>
              <h3 style={{ ...styles.sectionTitle, fontSize: "1.2rem", marginBottom: "20px" }}><Handshake size={22} color={accentColor} /> Partenaires</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {action.partenaires?.map((p, i) => (
                  <span key={i} style={{ fontSize: "0.7rem", backgroundColor: "#f0f0f0", padding: "6px 12px", fontWeight: "700" }}>{p}</span>
                ))}
              </div>
            </div>

            {/* DOCUMENTS */}
            <div style={styles.card}>
              <h3 style={{ ...styles.sectionTitle, fontSize: "1.2rem" }}><Download size={22} color={accentColor} /> Documents</h3>
              {action.documents?.map((doc, i) => (
                <a key={i} href={doc.url} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "15px", border: "1px solid #eee", textDecoration: "none", color: "#191919", marginBottom: "10px", borderRadius: "2px" }}>
                  <Download size={18} color={accentColor} />
                  <span style={{ fontSize: "0.8rem", fontWeight: "800", fontFamily: "var(--font-3)" }}>{doc.nom}</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ActionDetails;