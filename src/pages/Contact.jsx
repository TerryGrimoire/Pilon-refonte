/* eslint-disable no-return-assign */
import React from "react";
import { Helmet } from "react-helmet";
import { Mail, MapPin, Phone } from "lucide-react";

// --- IMPORTS DES LOGOS RÉSEAUX (ASSETS LOCAUX) ---
import facebook from "../assets/facebook2.png";
import instagram from "../assets/instagram2.png";
import linkedin from "../assets/linkedin2.png";
import youtube from "../assets/youtube2.png";
import tiktok from "../assets/tiktok2.png";

function ContactPage() {
  const accentColor = "rgb(190, 3, 34)";

  // Style commun pour les petits logos réseaux
  const socialIconStyle = {
    width: "24px",
    height: "24px",
    objectFit: "contain",
    transition: "0.2s",
    filter: "grayscale(100%)", // Optionnel : pour un look noir & blanc qui devient coloré au survol
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <Helmet>
        <title>Contact | Pilon</title>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section
        style={{
          height: "45vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#FFF",
          overflow: "hidden",
        }}
      >
        <div
          className="veil"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.75)",
            zIndex: 1,
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070"
          alt="Contact Pilon"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 2, padding: "0 20px" }}>
          <h1
            style={{
              fontFamily: "var(--font-0)",
              fontSize: "clamp(50px, 10vw, 90px)",
              textTransform: "uppercase",
              margin: 0,
              lineHeight: "0.9",
            }}
          >
            Restons <br />
            <span style={{ color: accentColor, fontFamily: "var(--font-0)" }}>
              Connectés
            </span>
          </h1>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "6px",
            background:
              "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #9400D3)",
            zIndex: 3,
          }}
        />
      </section>

      {/* --- CONTENT SECTION --- */}
      <section
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "60px",
          }}
        >
          {/* INFOS DE CONTACT */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-0)",
                fontSize: "40px",
                textTransform: "uppercase",
                marginBottom: "40px",
              }}
            >
              Nos{" "}
              <span style={{ color: accentColor, fontFamily: "var(--font-0)" }}>
                Coordonnées
              </span>
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              {/* ADRESSE */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#191919",
                    padding: "12px",
                    borderRadius: "8px",
                    color: "#FFF",
                  }}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-3)",
                      fontWeight: "900",
                      margin: "0 0 5px 0",
                      textTransform: "uppercase",
                      fontSize: "14px",
                    }}
                  >
                    Adresse
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-3)",
                      color: "#555",
                      margin: 0,
                    }}
                  >
                    Centre LGBTQIA+ de la Source
                    <br />
                    11 Allée des Jaspes, 97400 Saint-Denis
                  </p>
                </div>
              </div>

              {/* TÉLÉPHONE */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#191919",
                    padding: "12px",
                    borderRadius: "8px",
                    color: "#FFF",
                  }}
                >
                  <Phone size={24} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-3)",
                      fontWeight: "900",
                      margin: "0 0 5px 0",
                      textTransform: "uppercase",
                      fontSize: "14px",
                    }}
                  >
                    Téléphone
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-3)",
                      color: "#555",
                      margin: 0,
                    }}
                  >
                    06 93 87 30 50
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#191919",
                    padding: "12px",
                    borderRadius: "8px",
                    color: "#FFF",
                  }}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-3)",
                      fontWeight: "900",
                      margin: "0 0 5px 0",
                      textTransform: "uppercase",
                      fontSize: "14px",
                    }}
                  >
                    Email
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-3)",
                      color: "#555",
                      margin: 0,
                    }}
                  >
                    contact@pilon.re
                  </p>
                </div>
              </div>

              {/* RÉSEAUX SOCIAUX AVEC LOGOS PNG */}
              <div style={{ marginTop: "20px" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-3)",
                    fontWeight: "900",
                    margin: "0 0 15px 0",
                    textTransform: "uppercase",
                    fontSize: "14px",
                  }}
                >
                  Suivez l'aventure
                </h4>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <a
                    href="https://www.facebook.com/associationpilon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={socialIconStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.filter = "none")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.filter = "grayscale(100%)")
                      }
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/pilon_reunion/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={socialIconStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.filter = "none")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.filter = "grayscale(100%)")
                      }
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@association.pilon?_r=1&_t=ZN-95OxYIxuGk2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={tiktok}
                      alt="TikTok"
                      style={socialIconStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.filter = "none")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.filter = "grayscale(100%)")
                      }
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@AssociationPilon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={youtube}
                      alt="YouTube"
                      style={socialIconStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.filter = "none")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.filter = "grayscale(100%)")
                      }
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/association-pilon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={linkedin}
                      alt="LinkedIn"
                      style={socialIconStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.filter = "none")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.filter = "grayscale(100%)")
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARTE INTERACTIVE */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                minHeight: "500px",
                backgroundColor: "#EEE",
                borderRadius: "15px",
                overflow: "hidden",
                border: "2px solid #191919",
                boxShadow: "15px 15px 0px #191919",
              }}
            >
              <iframe
                title="Localisation Centre LGBT"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.4774280217816!2d55.44669587601081!3d-20.89310316902233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827f5264e33deb%3A0xbf305a8600bbfffe!2sCentre%20LGBTQIA%2B%20de%20l&#39;%20Oc%C3%A9an%20Indien!5e0!3m2!1sfr!2sfr!4v1775759862901!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
