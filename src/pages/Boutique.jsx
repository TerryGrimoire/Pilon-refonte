/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ShoppingBag, ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import fleche from "../assets/fleche.png"; // On réutilise la flèche de l'accueil
import jupes from "../assets/jupes.jpg";
import drapeau from "../assets/drapeau.jpg";
import eventail from "../assets/boutique.jpg";
import jupe2 from "../assets/jupe2.jpg";

const produits = [
  {
    id: 1,
    nom: "Drapeau Arc-en-ciel",
    prix: "10€",
    categorie: "Accessoires",
    image: drapeau,
  },
  {
    id: 2,
    nom: "Grand Éventail Pride",
    prix: "10€",
    categorie: "Accessoires",
    image: eventail,
  },
  {
    id: 3,
    nom: "Jupe Maloya Arc-en-ciel",
    prix: "35€",
    categorie: "Vêtements",
    image: jupe2,
  },
  {
    id: 4,
    nom: "maloya pour Enfant",
    prix: "30€ l'ensemble",
    categorie: "Vêtements",
    image: jupes,
  },
];

export default function Boutique() {
  const accentColor = "rgb(190, 3, 34)";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('src/assets/boutique2.jpg') bottom/cover",
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
    <main
      style={{ backgroundColor: "var(--main-bg-color)", minHeight: "100vh" }}
    >
      <Helmet>
        <title>Boutique Solidaire | Pilon</title>
      </Helmet>

      {/* --- HERO SECTION (Cohérent avec l'accueil) --- */}
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

      {/* --- INFOS DE COMMANDE (Blocs collés) --- */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "var(--secondary-bg-color)",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "40px",
            borderRight: "1px solid #333",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <ExternalLink size={40} color={accentColor} />
          <div>
            <a
              href="https://www.helloasso.com/associations/pilon/boutiques/la-boutique-des-mamies"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <h4
                style={{
                  color: "white",
                  fontFamily: "var(--font-0)",
                  fontSize: "1.5rem",
                  margin: 0,
                }}
              >
                COMMANDE EN LIGNE
              </h4>
              <p style={{ color: "#aaa", fontSize: "0.9rem", margin: 0 }}>
                Paiement sécurisé via HelloAsso
              </p>
            </a>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            padding: "40px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <MapPin size={40} color={accentColor} />
          <div>
            <h4
              style={{
                color: "white",
                fontFamily: "var(--font-0)",
                fontSize: "1.5rem",
                margin: 0,
              }}
            >
              ACHAT SUR PLACE
            </h4>
            <p style={{ color: "#aaa", fontSize: "0.9rem", margin: 0 }}>
              Au Centre LGBT+ de Saint-Denis
            </p>
          </div>
        </div>
      </section>

      {/* --- GRILLE PRODUITS --- */}
      <section id="produits" style={{ padding: "80px 5vw" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "50px",
          }}
        >
          <ShoppingBag size={35} color={accentColor} />
          <h2
            style={{
              fontFamily: "var(--font-0)",
              fontSize: "3.5rem",
              margin: 0,
            }}
          >
            NOTRE VITRINE
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {produits.map((item) => (
            <div
              key={item.id}
              className="product_card"
              style={{
                border: "1px solid #eee",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "380px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={item.image}
                  alt={item.nom}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "20px" }}>
                <span
                  style={{
                    color: accentColor,
                    fontWeight: "900",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                  }}
                >
                  {item.categorie}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-0)",
                    fontSize: "2rem",
                    margin: "5px 0",
                  }}
                >
                  {item.nom}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-0)",
                    fontSize: "2.2rem",
                    color: "#000",
                    margin: "10px 0",
                  }}
                >
                  {item.prix}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "20px",
                  }}
                >
                  <a
                    href="https://www.helloasso.com/associations/pilon/boutiques/la-boutique-des-mamies" // À remplacer par ton lien exact
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button_style"
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      backgroundColor: accentColor,
                      color: "white",
                    }}
                  >
                    COMMANDER SUR HELLOASSO
                  </a>
                  <Link
                    to="/contact"
                    className="button_style other"
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      borderColor: "black",
                      color: "black",
                    }}
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER BOUTIQUE --- */}
      <section
        style={{
          padding: "60px 5vw",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-3)",
            maxWidth: "800px",
            margin: "0 auto",
            color: "var(--third-color)",
          }}
        >
          Note : Les stocks de jupes de Maloya sont limités car elles sont
          confectionnées de manière artisanale. Pour toute demande de taille
          spécifique ou personnalisation, contactez-nous directement.
        </p>
      </section>
    </main>
  );
}
