/* eslint-disable react/no-danger */
/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Calendar, User, Link as LinkIcon } from "lucide-react";

// --- IMPORT DES DONNÉES ---
import { blogContent } from "../data/blogData";

const shareButtonStyle = {
  backgroundColor: "#191919",
  color: "#FFF",
  border: "none",
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "0.3s ease",
  padding: "10px",
};

function ArticlePost() {
  const { id } = useParams();
  const article = blogContent[id]; // Récupère l'article via l'ID du blogData
  const accentColor = "rgb(190, 3, 34)";
  const currentUrl = window.location.href;

  if (!article) {
    return (
      <div
        style={{
          padding: "100px",
          textAlign: "center",
          fontFamily: "var(--font-0)",
        }}
      >
        ARTICLE INTROUVABLE
      </div>
    );
  }

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Lien copié !");
  };

  return (
    <div style={{ backgroundColor: "#FFF", minHeight: "100vh" }}>
      <Helmet>
        <title>{article.title} | Pilon</title>
        <meta property="og:title" content={article.title} />
        <meta property="og:image" content={article.image} />
      </Helmet>

      {/* --- HERO --- */}
      <div style={{ height: "60vh", position: "relative", overflow: "hidden" }}>
        <img
          src={article.image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.9))",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "0",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link
              to="/blog"
              style={{
                color: "#FFF",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "900",
                marginBottom: "20px",
              }}
            >
              <ArrowLeft size={16} /> RETOUR
            </Link>
            <h1
              style={{
                fontFamily: "var(--font-0)",
                fontSize: "clamp(30px, 6vw, 60px)",
                color: "#FFF",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* --- ARTICLE --- */}
      <article
        style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px" }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "40px",
            color: "#666",
            fontWeight: "700",
            fontSize: "14px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <User size={16} color={accentColor} /> {article.author}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Calendar size={16} color={accentColor} />{" "}
            {new Date(article.date).toLocaleDateString("fr-FR")}
          </span>
        </div>

        <div
          className="blog-body"
          style={{
            fontFamily: "var(--font-3)",
            lineHeight: "1.9",
            fontSize: "19px",
            color: "#222",
          }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* --- GALERIE --- */}
        {article.gallery && (
          <div
            style={{
              marginTop: "60px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {article.gallery.map((img, idx) => (
              <div
                key={idx}
                style={{
                  height: "300px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #EEE",
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        )}

        {/* --- SHARE --- */}
        <div
          style={{
            marginTop: "80px",
            paddingTop: "40px",
            borderTop: "2px solid #191919",
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontFamily: "var(--font-0)", margin: 0 }}>PARTAGER :</h4>

          <button type="button" onClick={copyLink} style={shareButtonStyle}>
            <LinkIcon size={20} />
          </button>
        </div>
      </article>

      <style>{`
        .blog-body h3 { font-family: var(--font-0); font-size: 30px; margin: 40px 0 20px; text-transform: uppercase; color: #191919; }
        .blog-body blockquote { border-left: 6px solid ${accentColor}; padding: 25px; margin: 40px 0; background: #fdf2f2; font-style: italic; font-weight: 800; font-size: 20px; }
      `}</style>
    </div>
  );
}

export default ArticlePost;
