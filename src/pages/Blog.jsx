import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { User, Calendar, ArrowRight, Heart } from "lucide-react";

// --- IMPORT DE LA LISTE DES ARTICLES ---
import { blogList } from "../data/blogData";

function BlogPage() {
  const [filter, setFilter] = useState("Tous");
  const categories = [
    "Tous",
    "Parents",
    "Identité",
    "Associations",
    "Culture",
    "Santé",
    "Droits",
    "Société",
  ];
  const accentColor = "rgb(190, 3, 34)";

  // On filtre dynamiquement la liste importée
  const filteredPosts =
    filter === "Tous"
      ? blogList
      : blogList.filter((p) => p.category === filter);

  return (
    <div style={{ backgroundColor: "#FFF", minHeight: "100vh" }}>
      <Helmet>
        <title>Le Mag | Pilon</title>
      </Helmet>

      {/* --- HERO --- */}
      <section
        style={{
          padding: "100px 20px 60px",
          textAlign: "center",
          backgroundColor: "#191919",
          color: "#FFF",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-0)",
            fontSize: "clamp(40px, 8vw, 80px)",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Le <span style={{ color: accentColor }}>Mag'</span> Pilon
        </h1>
        <p
          style={{
            fontFamily: "var(--font-3)",
            maxWidth: "600px",
            margin: "20px auto",
            opacity: 0.8,
          }}
        >
          Ressources, témoignages et conseils pour la communauté LGBT+
          réunionnaise.
        </p>
      </section>

      {/* --- FILTRES --- */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          padding: "40px 20px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <button
            type="button"
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "10px 20px",
              borderRadius: "50px",
              border:
                filter === cat ? `2px solid ${accentColor}` : "2px solid #EEE",
              backgroundColor: filter === cat ? accentColor : "transparent",
              color: filter === cat ? "#FFF" : "#191919",
              fontWeight: "800",
              cursor: "pointer",
              transition: "0.2s",
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- GRID AUTOMATIQUE --- */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "40px",
          }}
        >
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card"
              style={{
                border: "1px solid #EEE",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <div style={{ height: "200px", position: "relative" }}>
                <img
                  src={post.image}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    backgroundColor: accentColor,
                    color: "#FFF",
                    padding: "5px 12px",
                    borderRadius: "4px",
                    fontSize: "10px",
                    fontWeight: "900",
                    textTransform: "uppercase",
                  }}
                >
                  {post.category}
                </span>
              </div>

              <div style={{ padding: "25px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    fontSize: "11px",
                    color: "#999",
                    marginBottom: "15px",
                    fontWeight: "700",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <User size={12} /> {post.author}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Calendar size={12} />{" "}
                    {new Date(post.date).toLocaleDateString("fr-FR")}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-0)",
                    fontSize: "22px",
                    marginBottom: "15px",
                    color: "#191919",
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-3)",
                    color: "#666",
                    fontSize: "14px",
                    marginBottom: "20px",
                  }}
                >
                  {post.description}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  style={{
                    textDecoration: "none",
                    color: accentColor,
                    fontWeight: "900",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  LIRE L'ARTICLE <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section
        style={{
          backgroundColor: "#F9F9F9",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <Heart color={accentColor} size={40} style={{ marginBottom: "20px" }} />
        <h2 style={{ fontFamily: "var(--font-0)", fontSize: "32px" }}>
          VOUS AVEZ UNE HISTOIRE À RACONTER ?
        </h2>
        <button
          type="button"
          style={{
            backgroundColor: "#191919",
            color: "#FFF",
            padding: "15px 30px",
            borderRadius: "4px",
            border: "none",
            fontWeight: "800",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          DEVENIR CONTRIBUTEUR
        </button>
      </section>
    </div>
  );
}

export default BlogPage;
