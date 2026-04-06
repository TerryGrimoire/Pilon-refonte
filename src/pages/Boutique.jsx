/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ShoppingBag, ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import fleche from "../assets/fleche.png"; // On réutilise la flèche de l'accueil

const produits = [
  {
    id: 1,
    nom: "Drapeau Arc-en-ciel (150x90)",
    prix: "15€",
    categorie: "Accessoires",
    image:
      "https://images.unsplash.com/photo-1562592306-4500ed91c442?q=80&w=2070",
  },
  {
    id: 2,
    nom: "Éventail Pilon Pride",
    prix: "12€",
    categorie: "Accessoires",
    image:
      "https://images.unsplash.com/photo-1624536253995-926343204983?q=80&w=2072",
  },
  {
    id: 3,
    nom: "Jupe Maloya Arc-en-ciel",
    prix: "45€",
    categorie: "Vêtements",
    image:
      "https://images.unsplash.com/photo-1582142407894-ec85a1268a4e?q=80&w=2070",
  },
  {
    id: 4,
    nom: "Jupe Maloya Saphir (Bleu)",
    prix: "45€",
    categorie: "Vêtements",
    image:
      "https://images.unsplash.com/photo-1515347644552-781dc20f9a99?q=80&w=2070",
  },
];

export default function Boutique() {
  const accentColor = "rgb(190, 3, 34)";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      style={{ backgroundColor: "var(--main-bg-color)", minHeight: "100vh" }}
    >
      <Helmet>
        <title>Boutique Solidaire | Pilon</title>
      </Helmet>

      {/* --- HERO SECTION (Cohérent avec l'accueil) --- */}
      <section className="home_hero" style={{ height: "70vh" }}>
        <div className="veil" />
        <img
          src="https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?q=80&w=2070"
          alt="Boutique Pilon"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
        />
        <div style={{ zIndex: 2, textAlign: "center", padding: "0 5vw" }}>
          <h1
            style={{
              fontFamily: "var(--font-0)",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              lineHeight: "0.9",
              textTransform: "uppercase",
              color: "white",
            }}
          >
            PORTEZ NOS <span style={{ color: accentColor }}>COULEURS</span>
          </h1>
          <p
            style={{
              color: "white",
              fontFamily: "var(--font-3)",
              fontSize: "1.2rem",
              marginTop: "20px",
              maxWidth: "700px",
            }}
          >
            Soutenez les actions de Pilon à La Réunion. Tous nos articles sont
            disponibles en ligne via HelloAsso ou directement à notre local à
            Saint-Denis.
          </p>
          <a
            href="#produits"
            style={{ marginTop: "40px", display: "inline-block" }}
          >
            <img
              src={fleche}
              alt="vers boutique"
              className="pulse-element"
              style={{ width: "50px" }}
            />
          </a>
        </div>
        {/* Barre Arc-en-ciel Signature */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "6px",
            background:
              "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #9400D3)",
          }}
        />
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
                    href="https://www.helloasso.com/associations/pilon" // À remplacer par ton lien exact
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
                    to="/association"
                    className="button_style other"
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      borderColor: "black",
                      color: "black",
                    }}
                  >
                    VOIR LE POINT DE VENTE
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
