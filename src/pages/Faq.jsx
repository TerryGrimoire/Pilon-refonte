/* eslint-disable react/no-array-index-key */
import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { ChevronDown, ArrowRight } from "lucide-react";

import heroImage from "../assets/camping.jpg";

// --- COMPOSANT FAQ ITEM (INDIVIDUEL) ---
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ borderBottom: "1px solid #E0E0E0", backgroundColor: "#FFFFFF" }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: "17px",
            fontWeight: "500",
            color: "#191919",
            paddingRight: "15px",
            fontFamily: "var(--font-3)", // Outfit
          }}
        >
          {question}
        </span>
        <ChevronDown
          size={18}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            flexShrink: 0,
            color: "#191919",
          }}
        />
      </button>

      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p
          style={{
            paddingBottom: "24px",
            color: "#4A4A4A",
            lineHeight: "1.7",
            fontSize: "15px",
            margin: 0,
            fontFamily: "var(--font-3)", // Outfit
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

// --- COMPOSANT HERO IMMERSIF (AVEC PHOTO) ---
function Hero() {
  const accentColor = "rgb(190, 3, 34)";
  // Image illustrative d'un moment de partage/écoute
  const bgImage = heroImage;

  return (
    <section
      className="home_hero"
      style={{ height: "75vh", position: "relative" }}
    >
      {/* Filtre sombre (veil) pour la lisibilité */}
      <div
        className="veil"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />

      {/* Image d'arrière-plan */}
      <img
        src={bgImage}
        alt="Écoute et partage Pilon"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: 0,
        }}
      />

      {/* Contenu textuel */}
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
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            backgroundColor: "#fff",
            color: "#000",
            fontSize: "11px",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "24px",
            borderRadius: "2px",
            fontFamily: "var(--font-3)",
          }}
        >
          Centre LGBT+ Nord - Pilon
        </div>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.9)",
            maxWidth: "650px",
            marginBottom: "40px",
            fontFamily: "var(--font-3)", // Outfit
          }}
        >
          Droits, santé, famille, culture : vous avez des questions, nous avons
          l'expérience. Trouvez ici les réponses pour avancer sereinement.
        </p>

        {/* Boutons d'action cohérents */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <button
            type="button"
            style={{
              padding: "16px 32px",
              backgroundColor: accentColor, // Rouge Pilon
              color: "#FFFFFF",
              border: "none",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: "800",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-3)",
              textTransform: "uppercase",
            }}
          >
            Poser une question <ArrowRight size={18} />
          </button>
          <button
            type="button"
            style={{
              padding: "16px 32px",
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "2px solid #FFFFFF",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: "800",
              cursor: "pointer",
              fontFamily: "var(--font-3)",
              textTransform: "uppercase",
            }}
          >
            Nous contacter
          </button>
        </div>
      </div>

      {/* Barre Arc-en-ciel Signature en bas du Hero */}
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
  );
}

// --- PAGE FAQ COMPLÈTE ---
function FaqPage() {
  const faqData = [
    {
      Catégorie: "Santé",
      Question: "Les permanences psychologiques sont-elles gratuites ?",
      Réponse:
        "Oui, toutes nos permanences de santé mentale sont entièrement gratuites et financées par l'association pour garantir l'accès à tous.",
    },
    {
      Catégorie: "Santé",
      Question: "Comment prendre rendez-vous avec l'assistante sociale ?",
      Réponse:
        "Vous pouvez nous appeler directement ou passer au local. Les rendez-vous sont fixés rapidement pour répondre aux urgences sociales.",
    },
    {
      Catégorie: "Santé",
      Question: "Proposez-vous un accompagnement pour la santé sexuelle ?",
      Réponse:
        "Oui, nous faisons de la prévention, de l'orientation vers le dépistage et nous distribuons du matériel de protection.",
    },
    {
      Catégorie: "Santé",
      Question: "Aidez-vous les personnes trans dans leur parcours de soin ?",
      Réponse:
        "Absolument. Nous orientons vers des praticiens safe à la Réunion et accompagnons dans les démarches d'ALD ou de transition.",
    },
    {
      Catégorie: "Santé",
      Question: "La santé financière, c'est quoi exactement ?",
      Réponse:
        "C'est un pôle qui vous aide à gérer votre budget, à comprendre vos droits aux aides (RSA, APL) et à monter des dossiers de surendettement si besoin.",
    },
    {
      Catégorie: "Famille",
      Question: "Que faire si je suis mis à la porte par mes parents ?",
      Réponse:
        "Contactez-nous d'urgence. Nous activons notre réseau pour trouver des solutions d'hébergement temporaire et de médiation familiale si possible.",
    },
    {
      Catégorie: "Famille",
      Question: "Mon enfant est LGBT, comment puis-je l'aider ?",
      Réponse:
        "Nous proposons des espaces d'échange pour les parents afin de déconstruire les préjugés et maintenir le dialogue au sein du foyer.",
    },
    {
      Catégorie: "Famille",
      Question: "Comment rejoindre le Club des Mamies ?",
      Réponse:
        "Le club est ouvert à toutes les seniors bienveillantes. Il suffit de venir partager un moment au local lors des ateliers couture ou cuisine.",
    },
    {
      Catégorie: "Famille",
      Question: "Les mamies participent-elles vraiment aux actions ?",
      Réponse:
        "Oui ! Elles sont le pilier de notre association, elles transmettent leur savoir et sont présentes lors de nos événements majeurs.",
    },
    {
      Catégorie: "Famille",
      Question: "Organisez-vous des médiations entre parents et enfants ?",
      Réponse:
        "Oui, avec l'aide de notre psychologue, nous facilitons le dialogue pour lutter contre le rejet familial.",
    },
    {
      Catégorie: "Social",
      Question: "C'est quoi le programme d'insertion professionnelle ?",
      Réponse:
        "C'est un accompagnement sur-mesure : aide au CV, préparation aux entretiens et lutte contre les discriminations à l'embauche.",
    },
    {
      Catégorie: "Social",
      Question: "Puis-je venir si je n'ai pas de diplôme ?",
      Réponse:
        "Bien sûr. Notre programme est ouvert à tous les profils, peu importe le niveau de formation.",
    },
    {
      Catégorie: "Social",
      Question: "Aidez-vous à trouver des stages à la Réunion ?",
      Réponse:
        "Nous avons un réseau d'entreprises partenaires 'safe' qui accueillent nos bénéficiaires en stage ou en alternance.",
    },
    {
      Catégorie: "Social",
      Question: "Faites-vous des ateliers de couture et de cuisine ?",
      Réponse:
        "Oui, une fois par semaine. C'est l'occasion d'apprendre un savoir-faire et de renforcer le lien social dans une ambiance conviviale.",
    },
    {
      Catégorie: "Social",
      Question: "Les soirées jeux sont-elles ouvertes aux non-membres ?",
      Réponse:
        "Oui, la première fois est libre. C'est un excellent moyen de découvrir l'association sans pression.",
    },
    {
      Catégorie: "Culture",
      Question: "C'est quoi le Maloya Kwir ?",
      Réponse:
        "C'est un espace où l'on pratique le maloya malizé pour se reconnecter à l'histoire réunionnaise tout en exprimant nos identités plurielles.",
    },
    {
      Catégorie: "Culture",
      Question: "Tout le monde peut participer au Groupe Milé ?",
      Réponse:
        "Oui, seniors, jeunes, personnes handicapées ou victimes de violences... le maloya ici est un outil de guérison collective.",
    },
    {
      Catégorie: "Culture",
      Question: "Pourquoi mélanger maloya et LGBT ?",
      Réponse:
        "Pour affirmer que nous sommes réunionnais avant tout et que nos racines et nos identités ne sont pas contradictoires.",
    },
    {
      Catégorie: "Culture",
      Question: "Participez-vous au défilé du 20 décembre ?",
      Réponse:
        "Oui, nous défilons fièrement chaque année pour célébrer la liberté et l'abolition de l'esclavage.",
    },
    {
      Catégorie: "Culture",
      Question: "Peut-on apprendre à jouer des instruments ?",
      Réponse:
        "Oui, lors des séances de Maloya Kwir, nous initions au rouleur, au kayamb et au triangle.",
    },
    {
      Catégorie: "Événements",
      Question: "C'est quoi le pique-nique arc-en-ciel ?",
      Réponse:
        "Un grand moment de partage qui change de commune chaque année à la Réunion pour aller à la rencontre de tous.",
    },
    {
      Catégorie: "Événements",
      Question: "Comment se passe le pique-nique à Maurice ?",
      Réponse:
        "Une fois par an, nous partons chez nos voisins mauriciens pour renforcer les liens régionaux et la solidarité océan Indien.",
    },
    {
      Catégorie: "Événements",
      Question: "C'est quoi le tour de l'île en Car Jaune ?",
      Réponse:
        "Une journée de visibilité festive où nous utilisons les transports en commun pour marquer notre présence sur toute l'île.",
    },
    {
      Catégorie: "Événements",
      Question: "C'est quoi le Grand Weekend de l'Académie des Camélias ?",
      Réponse:
        "Un événement de trois jours axé sur le vivre-ensemble, avec des débats, des spectacles et des ateliers.",
    },
    {
      Catégorie: "Événements",
      Question: "Faites-vous des conférences à l'Université ?",
      Réponse:
        "Oui, chaque année nous organisons la conférence des parents et tenons un village associatif sur le campus.",
    },
    {
      Catégorie: "Engagement",
      Question: "Comment adhérer à l'association ?",
      Réponse:
        "L'adhésion se fait en ligne ou au local. Elle permet de soutenir nos actions et d'accéder à tous nos ateliers.",
    },
    {
      Catégorie: "Engagement",
      Question: "Puis-je rester anonyme au sein de l'asso ?",
      Réponse:
        "Tout à fait. Nous respectons le degré de visibilité de chacun. Vous pouvez aider en coulisses sans être exposé.",
    },
    {
      Catégorie: "Engagement",
      Question: "Où va l'argent de mon don ?",
      Réponse:
        "Il sert directement à financer les permanences psy, le matériel pour les ateliers et le transport pour les sorties des jeunes isolés.",
    },
    {
      Catégorie: "Engagement",
      Question: "Acceptez-vous les dons de vêtements ou de tissus ?",
      Réponse:
        "Oui ! Pour nos ateliers couture, nous récupérons tissus, fils et machines à coudre en bon état.",
    },
    {
      Catégorie: "Engagement",
      Question: "L'association est-elle ouverte aux personnes handicapées ?",
      Réponse:
        "Oui, l'inclusivité est au cœur de notre projet. Nos locaux et nos activités (comme le Maloya) sont adaptés.",
    },
  ];

  const [categorieActive, setCategorieActive] = useState("Tous");

  const listeCategories = useMemo(() => {
    return ["Tous", ...new Set(faqData.map((item) => item.Catégorie))];
  }, [faqData]);

  const questionsFiltrees =
    categorieActive === "Tous"
      ? faqData
      : faqData.filter((item) => item.Catégorie === categorieActive);

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Helmet>
        <title>Questions Fréquentes | Pilon</title>
      </Helmet>

      <Hero />

      <div
        style={{
          maxWidth: "850px",
          margin: "80px auto 100px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            color: "#191919",
            fontSize: "36px",
            marginBottom: "8px",
            fontWeight: "800",
            textAlign: "center",
            fontFamily: "var(--font-0)", // Bebas Neue
            textTransform: "uppercase",
          }}
        >
          Questions fréquentes
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "50px",
            fontSize: "17px",
            fontFamily: "var(--font-3)", // Outfit
          }}
        >
          Nout l'association, nout l'accompagnement.
        </p>

        {/* FILTRES COHÉRENTS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
            marginBottom: "60px",
          }}
        >
          {listeCategories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setCategorieActive(cat)}
              style={{
                padding: "10px 18px",
                border: "1.5px solid #191919",
                borderRadius: "4px",
                backgroundColor:
                  categorieActive === cat ? "#191919" : "transparent",
                color: categorieActive === cat ? "#FFFFFF" : "#191919",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                transition: "0.2s",
                fontFamily: "var(--font-3)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* LISTE FAQ */}
        <div style={{ borderTop: "2px solid #191919" }}>
          {questionsFiltrees.map((item, index) => (
            <FaqItem
              key={index}
              question={item.Question}
              answer={item.Réponse}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
