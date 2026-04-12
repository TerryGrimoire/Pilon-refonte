/* eslint-disable import/no-unresolved */
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

// Styles Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import actionsData from "../data/data";

// --- STYLES DÉFINIS AVANT LA FONCTION (Supprime les erreurs VS Code) ---
const containerStyle = {
  width: "100%",
  padding: "40px 0",
  backgroundColor: "#ffffff",
  overflow: "hidden",
};
const cardStyle = {
  position: "relative",
  width: "100%",
  height: "450px",
  backgroundColor: "#111",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
};
const imageStyle = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
};
const overlayStyle = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
  zIndex: 2,
};
const contentAreaStyle = {
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  padding: "30px",
  color: "#fff",
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};
const titleStyle = {
  fontSize: "1.6rem",
  fontWeight: "800",
  margin: 0,
  textTransform: "uppercase",
  letterSpacing: "-0.5px",
};
const descriptionStyle = {
  fontSize: "0.95rem",
  lineHeight: "1.4",
  opacity: 0.85,
  margin: "0 0 10px 0",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};
const buttonStyle = {
  backgroundColor: "#fff",
  color: "#000",
  padding: "10px 20px",
  borderRadius: "50px",
  fontSize: "0.85rem",
  fontWeight: "bold",
  width: "fit-content",
  textTransform: "uppercase",
};

function HeroCarousel() {
  const actionsPhares = useMemo(
    () => actionsData.filter((action) => action.frequence === "annuelle"),
    []
  );

  if (!actionsPhares || actionsPhares.length === 0) return null;

  return (
    <div style={containerStyle}>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        grabCursor
        centeredSlides
        loop
        slidesPerView={1.2}
        spaceBetween={15}
        breakpoints={{
          768: { slidesPerView: 1.8, spaceBetween: 20 },
          1024: { slidesPerView: 2.5, spaceBetween: 30 },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ padding: "20px 0 60px 0" }}
      >
        {actionsPhares.map((action) => (
          <SwiperSlide key={action.id}>
            <Link
              to={`/actions/${action.id}`}
              style={{ textDecoration: "none" }}
            >
              <div style={cardStyle}>
                {/* L'image utilise action.image car on l'a défini comme ça dans la data */}
                <img
                  src={action.img}
                  alt={action.titre}
                  style={imageStyle}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x500?text=Image+Introuvable";
                  }}
                />

                <div style={overlayStyle} />

                <div style={contentAreaStyle}>
                  <h2 style={titleStyle}>{action.titre}</h2>
                  <p style={descriptionStyle}>{action.description}</p>
                  <div style={buttonStyle}>En savoir plus</div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-pagination-bullet { background: #000 !important; opacity: 0.2; }
        .swiper-pagination-bullet-active { width: 30px !important; border-radius: 5px !important; opacity: 1 !important; background: #000 !important; }
        .swiper-slide { transition: transform 0.3s ease, opacity 0.3s ease; }
        .swiper-slide-active { transform: scale(1.05); z-index: 10; }
        .swiper-slide:not(.swiper-slide-active) { opacity: 0.7; }
      `}</style>
    </div>
  );
}

export default HeroCarousel;
