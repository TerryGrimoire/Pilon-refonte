import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid #E0E0E0",
        backgroundColor: "#FFFFFF",
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#191919",
            fontFamily: "sans-serif",
          }}
        >
          {question}
        </span>
        <ChevronDown
          size={20}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            color: "#191919",
          }}
        />
      </button>

      <div
        style={{
          maxHeight: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "all 0.3s ease-in-out",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p
          style={{
            paddingBottom: "24px",
            color: "#4A4A4A",
            lineHeight: "1.6",
            fontSize: "16px",
            margin: 0,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

function Faq() {
  const faqData = [
    {
      question: "Comment rejoindre le Club des Mamies ?",
      answer:
        "Le club est ouvert à toutes les seniors qui souhaitent soutenir l'association. Il suffit de venir nous voir lors d'une permanence ou de nous contacter par téléphone pour participer à nos après-midis couture ou cuisine.",
    },
    {
      question: "Les permanences sont-elles anonymes ?",
      answer:
        "Oui, nos permanences avec la psychologue et l'assistante sociale sont strictement confidentielles et gratuites pour garantir la sécurité et la sérénité de chacun.",
    },
    {
      question: "C'est quoi exactement le Maloya Kwir ?",
      answer:
        "C'est un espace de reconnexion culturelle où l'on apprend le maloya traditionnel tout en adaptant les textes à nos vécus. C'est un moment de partage entre les jeunes LGBT, les seniors et les personnes en situation de handicap.",
    },
  ];

  return (
    <div
      className="faqsty"
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 20px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <h2
        style={{
          color: "#191919",
          fontSize: "32px",
          marginBottom: "40px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Questions fréquentes
      </h2>

      <Link to="/Faq" className="linkfaq">
        {" "}
        <button type="button" className="button_style">
          Voir la FAQ complète
        </button>{" "}
      </Link>
      
      <div style={{ borderTop: "1px solid #E0E0E0", marginBottom: "50px" }}>
        {faqData.map((item) => (
          <FaqItem question={item.question} answer={item.answer} />
        ))}
      </div>
       <Link to="/Blog" className="linkfaq">
        {" "}
        <button type="button"   className="button_style other"
                  style={{ backgroundColor: "#fff", color: "#000", border : "1px, solid, black" }}>
          Plus d'articles sur notre blog
        </button>{" "}
      </Link>
    </div>
  );
}

export default Faq;
