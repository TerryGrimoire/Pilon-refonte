/* eslint-disable no-param-reassign */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Star, GraduationCap, Quote } from "lucide-react";

function ClubDesMamies() {
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

  const mamies = [
    {
      nom: "Madame Jocelyne",
      role: "Référente Ateliers Couture",
      image:
        "https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=1887&auto=format&fit=crop",
      desc: "Une forme 'gayar' qui rayonne. Entre jardinage, maloya chanté et danse séga, elle est la gardienne des traditions. Elle ne maîtrise pas le lexique militant, mais elle possède une expertise du cœur : elle défend tout le monde contre le rejet.",
      anecdote: "Grâce à Pilon, elle a enfin vu une éruption au Volcan.",
    },
    {
      nom: "Madame Marie Andrée",
      role: "Référente Camping & Rando",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop",
      desc: "Autrefois tournée vers le regard des autres, elle vit aujourd'hui pour son propre bonheur. De la découverte de la machine à coudre à l'organisation d'un camping Cowboy, elle prouve qu'il n'y a pas d'âge pour s'émanciper.",
      anecdote: "Elle a créé des liens indéfectibles avec les jeunes.",
    },
    {
      nom: "Madame Berthe",
      role: "Référente Atelier Cuisine",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1824&auto=format&fit=crop",
      desc: "Discrète mais indispensable, elle veille sur le local et sur les jeunes avec une attention maternelle. Entre les soirées jeux et la cuisine, elle s'initie même au rouleur, montrant que la curiosité reste son moteur principal.",
      anecdote: "Elle est le pont entre l'entretien du lieu et le lien social.",
    },
  ];

  const styles = {
    hero: {
      height: "65vh",
      background:
        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070') center/cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      padding: "0 5vw",
      position: "relative",
    },
    section: { padding: "100px 0" },
    h2: {
      fontSize: "3.8rem",
      fontFamily: "var(--font-0)",
      color: "#000",
      marginBottom: "30px",
      lineHeight: "0.85",
      textTransform: "uppercase",
    },
    accent: { color: "rgb(190, 3, 34)" },
    mamieCard: {
      flex: "1",
      minWidth: "300px",
      background: "white",
      border: "1px solid #eee",
      borderRadius: "4px",
      overflow: "hidden",
      textAlign: "center",
      paddingBottom: "30px",
    },
  };

  return (
    <div style={{ backgroundColor: "var(--main-bg-color)" }}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1
          style={{
            fontSize: "5.5rem",
            fontFamily: "var(--font-0)",
            textTransform: "uppercase",
            lineHeight: "1",
          }}
        >
          L'HÉRITAGE DES <span style={styles.accent}>MAMIES</span>
        </h1>
        <p
          style={{
            fontSize: "1.4rem",
            fontFamily: "var(--font-3)",
            maxWidth: "900px",
            marginTop: "20px",
          }}
        >
          Quand la sagesse créole devient le bouclier des jeunesses LGBT+.
        </p>
      </section>

      <div style={{ maxWidth: "1250px", margin: "0 auto", padding: "0 5vw" }}>
        {/* SECTION 1 : POURQUOI LES MAMIES ? */}
        <section
          className="reveal"
          style={{
            ...styles.section,
            opacity: 0,
            transform: "translateY(30px)",
            transition: "0.8s",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "80px",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={styles.h2}>
                RECONSTRUIRE LA <span style={styles.accent}>FAMILLE</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-4)",
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  color: "#333",
                }}
              >
                Pour beaucoup de jeunes LGBT+ rejetés par leur propre foyer, nos
                mamies incarnent une <strong>"famille de substitution"</strong>.
                Elles ne sont pas là pour juger, mais pour{" "}
                <strong>cadrer et structurer</strong>. Là où le dialogue a été
                rompu avec les parents, elles recréent un espace de tendresse
                inconditionnelle.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-4)",
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  color: "#333",
                  marginTop: "20px",
                }}
              >
                Leur présence apaise les tensions et redonne des repères aux
                jeunes en perte de sens. Elles apportent cette stabilité
                émotionnelle qui permet aux jeunes de se projeter à nouveau dans
                l'avenir.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "40px",
                borderLeft: "5px solid rgb(190, 3, 34)",
              }}
            >
              <Quote
                size={40}
                color="rgb(190, 3, 34)"
                style={{ marginBottom: "20px" }}
              />
              <p
                style={{
                  fontFamily: "var(--font-0)",
                  fontSize: "1.8rem",
                  color: "#000",
                  fontStyle: "italic",
                }}
              >
                "Zot sé nout marmay, nout tout i mèn lo min mèm simin."
              </p>
              <p
                style={{
                  marginTop: "15px",
                  fontFamily: "var(--font-3)",
                  color: "#666",
                }}
              >
                (Vous êtes nos enfants, nous marchons tous sur le même chemin.)
              </p>
            </div>
          </div>
        </section>

        {/* LES TROIS MAMIES : AFFICHAGE CÔTE À CÔTE */}
        <section
          className="reveal"
          style={{ ...styles.section, opacity: 0, transition: "0.8s" }}
        >
          <h2 style={{ ...styles.h2, textAlign: "center" }}>
            NOS TROIS <span style={styles.accent}>PILIERS</span>
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row", // Force l'affichage en ligne
              flexWrap: "wrap", // Permet de passer en colonne uniquement sur mobile
              gap: "25px",
              justifyContent: "space-between",
            }}
          >
            {mamies.map((m, i) => (
              <div key={i} style={styles.mamieCard}>
                <div style={{ height: "350px", overflow: "hidden" }}>
                  <img
                    src={m.image}
                    alt={m.nom}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "25px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-0)",
                      fontSize: "2rem",
                      marginBottom: "5px",
                    }}
                  >
                    {m.nom}
                  </h3>
                  <div
                    style={{
                      color: "rgb(190, 3, 34)",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      fontSize: "0.8rem",
                      marginBottom: "15px",
                      letterSpacing: "1.5px",
                    }}
                  >
                    {m.role}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-3)",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      color: "#444",
                      marginBottom: "20px",
                    }}
                  >
                    {m.desc}
                  </p>
                  <div
                    style={{
                      padding: "15px",
                      background: "#f0f0f0",
                      borderRadius: "4px",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-4)",
                    }}
                  >
                    <strong>Le petit plus :</strong> {m.anecdote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 : CULTURE ET CRÉOLITÉ */}
        <section
          className="reveal"
          style={{
            ...styles.section,
            opacity: 0,
            background: "#000",
            color: "#fff",
            padding: "80px 40px",
            borderRadius: "4px",
            margin: "60px 0",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "60px",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-0)",
                  fontSize: "3rem",
                  color: "rgb(190, 3, 34)",
                }}
              >
                LO KÉR KRÉOL
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-3)",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  opacity: 0.9,
                }}
              >
                Les mamies apportent une dimension culturelle vitale au Centre
                LGBT. Elles transmettent le **vocabulaire "lontan"**, la cuisine
                au feu de bois et l'art de vivre réunionnais. En parlant créole
                avec les jeunes, elles ancrent l'identité LGBT+ dans le
                territoire : on peut être Gay, Lesbienne ou Trans et être fier
                de ses racines réunionnaises.
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <div
                  style={{
                    padding: "15px",
                    background: "rgba(190, 3, 34, 0.2)",
                    borderRadius: "50%",
                  }}
                >
                  <MessageCircle color="rgb(190, 3, 34)" />
                </div>
                <div>
                  <strong>Vocabulaire :</strong> Le créole comme langue du
                  réconfort et de l'appartenance.
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <div
                  style={{
                    padding: "15px",
                    background: "rgba(190, 3, 34, 0.2)",
                    borderRadius: "50%",
                  }}
                >
                  <GraduationCap color="rgb(190, 3, 34)" />
                </div>
                <div>
                  <strong>Savoir-faire :</strong> Couture, cuisine, jardinage...
                  la transmission du geste.
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <div
                  style={{
                    padding: "15px",
                    background: "rgba(190, 3, 34, 0.2)",
                    borderRadius: "50%",
                  }}
                >
                  <Star color="rgb(190, 3, 34)" />
                </div>
                <div>
                  <strong>Représentation :</strong> Des séniors alliées au
                  Conseil d'Administration.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 : UNE SYMBIOSE ÉTONNANTE */}
        <section
          className="reveal"
          style={{ ...styles.section, opacity: 0, textAlign: "center" }}
        >
          <h2 style={styles.h2}>
            UN ÉCHANGE <span style={styles.accent}>DOUBLE SENS</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-4)",
              fontSize: "1.3rem",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Si les jeunes y trouvent des mamies, elles y trouvent une nouvelle
            jeunesse. Elles apprennent à dompter WhatsApp, à animer des
            PowerPoints pour leurs réunions institutionnelles à la Mairie ou à
            l'Université, et surtout, elles brisent leur propre isolement.
            <strong>
              {" "}
              Chez Pilon, le conflit générationnel n'existe pas : il est
              remplacé par le respect mutuel.
            </strong>
          </p>
        </section>

        {/* CTA */}
        <section
          className="reveal"
          style={{ padding: "60px 0 120px 0", textAlign: "center", opacity: 0 }}
        >
          <Link to="/contact">
            <button
              type="button"
              className="button_style other"
              style={{
                backgroundColor: "rgb(190, 3, 34)",
                color: "#fff",
                fontSize: "1.5rem",
                padding: "20px 40px",
                border: "none",
                fontFamily: "var(--font-0)",
              }}
            >
              PARTAGER UN MOMENT AVEC ELLES
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default ClubDesMamies;
