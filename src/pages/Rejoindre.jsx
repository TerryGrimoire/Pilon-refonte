/* eslint-disable react/no-array-index-key */
import React from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, Heart, Users, Sparkles, ShieldCheck } from "lucide-react";
import hero12 from "../assets/hero14.jpg";

// --- COMPOSANT SECTION TITLE ---
function SectionTitle({ subtitle, title, centered = true }) {
  return (
    <div
      style={{ marginBottom: "50px", textAlign: centered ? "center" : "left" }}
    >
      <h2
        style={{
          fontFamily: "var(--font-0)",
          fontSize: "42px",
          textTransform: "uppercase",
          color: "#191919",
          margin: 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "var(--font-3)",
            color: "#666",
            fontSize: "17px",
            marginTop: "10px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// --- COMPOSANT CARD ---
function FeatureCard({ icon, title, text }) {
  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        padding: "30px",
        borderRadius: "8px",
        border: "1px solid #E0E0E0",
        flex: "1 1 250px",
      }}
    >
      <div style={{ color: "rgb(190, 3, 34)", marginBottom: "15px" }}>
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-0)",
          fontSize: "24px",
          marginBottom: "10px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-3)",
          fontSize: "15px",
          color: "#4A4A4A",
          lineHeight: "1.6",
        }}
      >
        {text}
      </p>
    </div>
  );
}

// --- PAGE PRINCIPALE ---
function JoinUsPage() {
  const accentColor = "rgb(190, 3, 34)";
  const bgHero = hero12;

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Helmet>
        <title>Nous Rejoindre | Pilon</title>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section
        className="home_hero"
        style={{ height: "70vh", position: "relative" }}
      >
        <div
          className="veil"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        />
        <img
          src={bgHero}
          alt="Rejoindre l'aventure Pilon"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            padding: "0 5vw",
            color: "#FFF",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              color: "#000",
              padding: "6px 12px",
              fontSize: "11px",
              fontWeight: "800",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontFamily: "var(--font-3)",
            }}
          >
            Faites partie du mouvement
          </div>
          <h1
            style={{
              fontFamily: "var(--font-0)",
              fontSize: "clamp(45px, 8vw, 75px)",
              lineHeight: "0.9",
              marginBottom: "20px",
            }}
          >
            nou lé <span style={{ color: accentColor }}>Ansanm</span>.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-3)",
              fontSize: "20px",
              maxWidth: "600px",
              opacity: 0.9,
            }}
          >
            Que vous cherchiez du soutien, de la convivialité ou que vous
            vouliez agir, il y a une place pour vous chez Pilon.
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "6px",
            background:
              "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #9400D3)",
            zIndex: 3,
          }}
        />
      </section>

      {/* --- CHIFFRES CLÉS --- */}
      <div
        style={{ backgroundColor: "#191919", color: "#FFF", padding: "40px 0" }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "20px",
            textAlign: "center",
          }}
        >
          {[
            { n: "74", t: "Adhérents" },
            { n: "27", t: "Bénévoles" },
            { n: "+3000", t: "Bénéficiaires" },
          ].map((s) => (
            <div>
              <div
                style={{
                  fontFamily: "var(--font-0)",
                  fontSize: "40px",
                  color: accentColor,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-3)",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {s.t}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION POURQUOI NOUS REJOINDRE --- */}
      <section
        style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}
      >
        <SectionTitle
          title="Pourquoi rejoindre Pilon ?"
          subtitle="Plus qu'une association, une famille de cœur à la Réunion."
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <FeatureCard
            icon={<Users size={32} />}
            title="Sortir de l'isolement"
            text="Rencontrez des personnes qui partagent vos réalités dans un cadre sécurisant et bienveillant."
          />
          <FeatureCard
            icon={<Sparkles size={32} />}
            title="Se reconnecter"
            text="Redécouvrez la culture réunionnaise (Maloya Kwir, ateliers) à travers le prisme de nos identités."
          />
          <FeatureCard
            icon={<ShieldCheck size={32} />}
            title="Être soutenu"
            text="Accédez à nos permanences santé, sociales et psychologiques gratuitement."
          />
        </div>
      </section>

      {/* --- SECTION ADHÉSION --- */}
      <section style={{ backgroundColor: "#F9F9F9", padding: "80px 20px" }}>
        <div
          style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}
        >
          <SectionTitle
            title="Devenir adhérent"
            subtitle="Une adhésion simple pour un impact réel."
          />
          <div
            style={{
              backgroundColor: "#FFF",
              padding: "40px",
              borderRadius: "12px",
              border: "2px solid #191919",
              boxShadow: "10px 10px 0px #191919",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-0)",
                fontSize: "60px",
                color: accentColor,
                marginBottom: "10px",
              }}
            >
              10€{" "}
              <span style={{ fontSize: "20px", color: "#191919" }}>/ an</span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-3)",
                fontSize: "17px",
                lineHeight: "1.6",
                color: "#4A4A4A",
                marginBottom: "30px",
              }}
            >
              L'adhésion est annuelle et peut se faire à tout moment. Elle vous
              donne accès à :
              <br />
              <strong>• Tarifs préférentiels</strong> sur nos événements
              festifs.
              <br />
              <strong>• Activités gratuites</strong> (Volley Rose, Pêche,
              Ateliers couture...).
              <br />
              <strong>• informations en avant première</strong> sur tous nos
              événements.
            </p>
            <a
              href="https://www.helloasso.com/associations/pilon/adhesions/adherer-a-l-association"
              target="_blink"
            >
              <button
                type="button"
                style={{
                  backgroundColor: "#191919",
                  color: "#FFF",
                  border: "none",
                  padding: "18px 40px",
                  fontFamily: "var(--font-3)",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: "4px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Adhérer à l'association <ArrowRight size={18} />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION BÉNÉVOLAT & DONS --- */}
      <section
        style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {/* BÉNÉVOLAT */}
          <div style={{ flex: "1 1 400px" }}>
            <SectionTitle title="Devenir bénévole" centered={false} />
            <p
              style={{
                fontFamily: "var(--font-3)",
                fontSize: "16px",
                color: "#4A4A4A",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              Vous avez du temps ou un talent ? Rejoignez nos équipes !
              <br />
              <br />
              <em>
                Note : Pour des raisons d'assurance, nos bénévoles doivent être
                adhérents.
              </em>
            </p>
            <div style={{ display: "grid", gap: "15px", marginBottom: "30px" }}>
              {[
                {
                  t: "Brigade Arc-en-ciel",
                  d: "Actions de terrain et prévention.",
                },
                {
                  t: "Actions Récurrentes",
                  d: "Ateliers cuisine, Maloya, sport.",
                },
                {
                  t: "Événements Phares",
                  d: "Pique-nique arc-en-ciel, Tour de l'île.",
                },
                {
                  t: "Support Administratif",
                  d: "Aidez-nous dans la gestion quotidienne.",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ color: accentColor, marginTop: "4px" }}>
                    <Heart size={16} fill={accentColor} />
                  </div>
                  <div>
                    <span
                      style={{ fontWeight: "700", fontFamily: "var(--font-3)" }}
                    >
                      {b.t} :
                    </span>
                    <span
                      style={{
                        color: "#666",
                        fontSize: "14px",
                        marginLeft: "5px",
                      }}
                    >
                      {b.d}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://www.helloasso.com/associations/pilon/adhesions/adherer-a-l-association"
              target="_blink"
            >
              {" "}
              <button
                type="button"
                style={{
                  border: "2px solid #191919",
                  padding: "12px 25px",
                  fontFamily: "var(--font-3)",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  background: "none",
                }}
              >
                Devenir bénévole
              </button>
            </a>
          </div>

          {/* DONS */}
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#191919",
              color: "#FFF",
              padding: "40px",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-0)",
                fontSize: "36px",
                marginBottom: "15px",
              }}
            >
              Nous soutenir
            </h2>
            <p
              style={{
                fontFamily: "var(--font-3)",
                opacity: 0.8,
                marginBottom: "30px",
                lineHeight: "1.6",
              }}
            >
              Chaque don nous permet de financer les permanences psy, le
              matériel des ateliers et l'aide d'urgence pour les jeunes en
              rupture familiale.
            </p>
            <a
              href="https://www.helloasso.com/associations/pilon/formulaires/2"
              target="_blink"
            >
              {" "}
              <button
                type="button"
                style={{
                  backgroundColor: accentColor,
                  color: "#FFF",
                  border: "none",
                  padding: "18px",
                  fontFamily: "var(--font-3)",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Faire un don
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoinUsPage;
