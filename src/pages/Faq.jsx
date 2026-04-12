/* eslint-disable react/no-array-index-key */
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ChevronDown, ArrowRight } from "lucide-react";

import heroImage from "../assets/presentation6.jpg";

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
          Pilon Réunion
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
      Catégorie: "Centre LGBT & Pilon",
      Question: "Pourquoi l'association s'appelle Pilon ?",
      Réponse:
        "Le pilon est un outil traditionnel présent dans tous les foyers réunionnais, souvent offert lors des mariages. Très attachés à la culture créole, nous avons choisi ce nom pour mettre en avant notre identité. C'est aussi une réappropriation militante : 'pilon' étant une insulte envers les personnes gays à Maurice et aux Seychelles, nous portons ce nom fièrement en solidarité avec nos voisins de l'Océan Indien.",
    },
    {
      Catégorie: "Centre LGBT & Pilon",
      Question: "Où se trouve le centre LGBT Nord de La Réunion ?",
      Réponse:
        "Le Centre LGBT Nord de la Réunion se trouve à Saint-Denis, quartier de La Source : 11 allée des Jaspes, 97400 Saint-Denis.",
    },
    {
      Catégorie: "Centre LGBT & Pilon",
      Question: "Pilon est le nouveau centre LGBT, ça veut dire quoi ?",
      Réponse:
        "Depuis janvier 2026, Pilon est l'association référente pour le nord de l'île. Nous pilotons le centre LGBT Nord de manière collective avec nos partenaires : Requeer, Timizé et Kwir Mouvman.",
    },
    {
      Catégorie: "Centre LGBT & Pilon",
      Question: "Qui porte le centre LGBT Sud ?",
      Réponse:
        "Le Centre LGBT Sud (La Kaz Masikrok) est porté par le Planning Familial 974, en collaboration avec Le Faar, La Collective Kwir et Pilon.",
    },
    {
      Catégorie: "Aide & Accompagnement",
      Question: "Comment faire pour être accompagné si j'ai besoin d'aide ?",
      Réponse:
        "L'équipe est présente du lundi au vendredi de 09h à 16h. Contactez-nous par email (contact@pilon.re) ou SMS (06.93.87.30.50) pour fixer un rendez-vous personnalisé.",
    },
    {
      Catégorie: "Aide & Accompagnement",
      Question:
        "Mes parents ne savent pas que je suis LGBT et j'ai peur de leur dire, comment faire ?",
      Réponse:
        "L'important est de ne pas te mettre en insécurité. Si tu redoutes de la violence ou d'être mis à la rue, il est parfois préférable de reporter l'annonce. Nous pouvons proposer une médiation avec tes parents au centre, ou te faire accompagner par un parent bénévole de Pilon pour te soutenir dans cette démarche.",
    },
    {
      Catégorie: "Aide & Accompagnement",
      Question: "Je viens d'apprendre ma séropositivité, je suis perdu·e.",
      Réponse:
        "Contacte-nous. Nous avons des personnes dédiées et concernées qui sont passées par là. Elles peuvent t'aider à mieux accepter la situation, t'orienter et te montrer qu'on peut très bien vivre avec la maladie.",
    },
    {
      Catégorie: "Aide & Accompagnement",
      Question: "J'ai peur de faire un dépistage, comment faire ?",
      Réponse:
        "On peut vous accompagner physiquement lors d'un test rapide si vous avez besoin d'être soutenu. Ne pas être seul face au résultat permet souvent de mieux gérer l'appréhension.",
    },
    {
      Catégorie: "Aide & Accompagnement",
      Question: "Si je veux me faire dépister au centre, est-ce possible ?",
      Réponse:
        "Bientôt oui ! En collaboration avec RIVE, des permanences pour tests rapides seront organisées au centre. Nous sommes aussi présents au CHU tous les jeudis matins.",
    },
    {
      Catégorie: "Famille",
      Question: "Que faire si je suis mis à la porte par mes parents ?",
      Réponse:
        "Il n'existe malheureusement plus de logement d'urgence LGBT spécifique à La Réunion. Cependant, nous pouvons fixer un rendez-vous d'urgence avec notre assistante sociale ou éducatrice spécialisée pour trouver des solutions adaptées à votre situation.",
    },
    {
      Catégorie: "Famille",
      Question:
        "Mon enfant ne m'a pas encore fait son coming-out, comment aborder le sujet ?",
      Réponse:
        "Laissez-le venir à son rythme. Le plus important est de créer un climat de confiance et de lui faire comprendre subtilement que votre amour est inconditionnel, peu importe son identité ou orientation.",
    },
    {
      Catégorie: "Famille",
      Question: "Le club des mamies c'est quoi ?",
      Réponse:
        "Un groupe de mamies hétéro-alliées qui participent à la vie du centre (cuisine, couture, jardin). Elles apportent une chaleur intergénérationnelle et soutiennent les jeunes tout en luttant contre l'isolement des seniors.",
    },
    {
      Catégorie: "Culture & Identité",
      Question:
        "Est-ce que Pilon peut m'aider à me reconnecter avec mon identité réunionnaise ?",
      Réponse:
        "Oui, c'est l'une de nos vocations ! Le créole est notre langue privilégiée. Nous organisons de nombreuses actions autour de la culture : cuisine traditionnelle, Maloya, Séga et transmission de nos racines.",
    },
    {
      Catégorie: "Culture & Identité",
      Question: "C'est quoi le Maloya Kwir ?",
      Réponse:
        "C'est un espace de pratique du Maloya pour exprimer nos identités plurielles. C'est un outil de guérison collective et de fierté réunionnaise.",
    },
    {
      Catégorie: "Adhésion & Social",
      Question:
        "J'ai peur de sociabiliser, je suis timide, ai-je ma place chez Pilon ?",
      Réponse:
        "Absolument ! Tout le monde est bienvenu. Beaucoup de nos membres étaient timides au début et ne regrettent pas d'avoir franchi le pas. On prend le temps de s'intégrer en douceur.",
    },
    {
      Catégorie: "Adhésion & Social",
      Question: "Quel âge pour rejoindre l'association ?",
      Réponse:
        "Tout le monde est accepté. Pour les mineurs, une autorisation parentale (ou être accompagné) est nécessaire. Certains événements spécifiques sont réservés aux adultes ou demandent un accompagnement.",
    },
    {
      Catégorie: "Adhésion & Social",
      Question: "Comment adhérer et quels sont les avantages ?",
      Réponse:
        "Via HelloAsso (10€/an). Cela finance nos actions et vous donne accès aux ateliers couture/cuisine, aux campings gratuits, aux sorties et aux infos prioritaires.",
    },
    {
      Catégorie: "Adhésion & Social",
      Question: "Faut-il être LGBT pour participer ?",
      Réponse:
        "Non, nos événements sont ouverts à tous dans le respect et la bienveillance. Seules certaines actions 'prioritaires' ciblent spécifiquement le public LGBT réunionnais.",
    },
    {
      Catégorie: "Inclusivité",
      Question:
        "L'association est-elle accessible aux personnes en situation de handicap ?",
      Réponse:
        "L'inclusivité est au cœur de notre projet. Malheureusment, le local du Centre LGBT Nord, n'est pas accessible pour les personnes à mobilité réduite car nous avons des escaliers et le local est situé dans une pente. Néanmoins, nous travaillons à rendre nos actions accessibles au plus grand nombre. Nous travaillons notamment avec l'association Kouler sourds 974 pour rendre nos événements plus inclusifs pour les personnes sourdes ou malentendantes.",
    },
    {
      Catégorie: "Inclusivité",
      Question:
        "Proposez-vous un accompagnement pour les changements d'état civil (Prénom/Sexe) ?",
      Réponse:
        "Oui, nous pouvons vous accompagner dans vos démarches administratives et vous orienter vers des partenaires juridiques et médicaux 'safe' sur l'île.",
    },
    {
      Catégorie: "Inclusivité",
      Question: "Puis-je venir au centre de façon anonyme ou discrète ?",
      Réponse:
        "Tout à fait. Nous respectons totalement votre vie privée et votre besoin de discrétion. Ce qui se dit et se passe au centre reste au centre.",
    },
    {
      Catégorie: "Comprendre & Apprendre",
      Question: "Ça veut dire quoi LGBTQIA+ ? (Explication lettre par lettre)",
      Réponse:
        "C’est un grand mot qui sert à rassembler toutes les personnes qui s'aiment ou se sentent différentes des modèles classiques. C'est une façon de dire que, peu importe qui on aime ou qui on est au fond de soi, on a tous notre place dans la société. Le petit " +
        " à la fin est là pour n'oublier personne, car il existe mille façons d'être soi-même !",
    },
    {
      Catégorie: "Comprendre & Apprendre",
      Question: "Pourquoi le sigle est-il aussi long et compliqué ?",
      Réponse:
        "Le sigle s'est allongé pour que personne ne se sente oublié. À l'origine, on disait juste 'homosexuel', mais cela effaçait les femmes, les personnes bi ou trans. Ce n'est pas pour compliquer les choses, c'est pour être précis et s'assurer que chaque identité a sa place et sa visibilité.",
    },
    {
      Catégorie: "Comprendre & Apprendre",
      Question: "Pourquoi avez-vous autant de drapeaux différents ?",
      Réponse:
        "Si le drapeau arc-en-ciel est le symbole universel, chaque communauté (lesbienne, trans, bi, etc.) a créé son propre drapeau pour affirmer sa fierté et ses besoins spécifiques. C'est un peu comme les drapeaux des pays : on est tous sur la même planète, mais chacun est fier de son histoire particulière.",
    },
    {
      Catégorie: "Comprendre & Apprendre",
      Question:
        "Je ne comprends pas les personnes non-binaires, faut m'expliquer.",
      Réponse:
        "Une personne non-binaire est quelqu'un qui ne se sent ni exclusivement homme, ni exclusivement femme. Elle peut se sentir un peu des deux, ou ni l'un ni l'autre. L'important n'est pas de tout 'comprendre' techniquement, mais de respecter le prénom et le pronom que la personne choisit pour être en accord avec elle-même.",
    },
    {
      Catégorie: "Comprendre & Apprendre",
      Question: "Les LGBT c'est une mode, il y en a de plus en plus non ?",
      Réponse:
        "Il n'y a pas 'plus' de personnes LGBT qu'avant, il y a simplement plus de liberté pour le dire. C'est comme les gauchers : quand on a arrêté de les forcer à écrire de la main droite, le nombre de gauchers a 'augmenté' d'un coup. Aujourd'hui, les jeunes se sentent plus en sécurité pour assumer qui ils sont.",
    },
    {
      Catégorie: "Comprendre & Apprendre",
      Question: "Pourquoi faites-vous encore des Marches des Visibilités ?",
      Réponse:
        "Tant que des personnes se font insulter, rejeter par leur famille ou discriminer au travail à La Réunion, ces marches seront nécessaires. C'est un moment de fête, mais aussi une manière de dire que nous existons, que nous sommes vos voisins, vos collègues, vos enfants, et que nous avons les mêmes droits que tout le monde.",
    },
    {
      Catégorie: "Actions de l'Asso",
      Question:
        "Pourquoi faire un programme d'insertion pro spécifique pour les LGBT ?",
      Réponse:
        "Bien sûr que nous voulons être 'comme tout le monde' au travail ! Mais les chiffres montrent qu'une personne LGBT subit plus de discriminations à l'embauche ou de harcèlement. Ce programme aide à reprendre confiance, à sécuriser son parcours et à trouver des entreprises 'safe' où l'on ne sera pas jugé sur son identité.",
    },
    {
      Catégorie: "Actions de l'Asso",
      Question: "En quoi consiste le programme 'Pilon vers l'emploi' ?",
      Réponse:
        "C'est un accompagnement sur-mesure : aide à la rédaction de CV, préparation aux entretiens, aide à la mobilité et mise en relation avec un réseau d'entreprises partenaires bienveillantes à La Réunion. C'est un tremplin pour l'autonomie financière.",
    },
    {
      Catégorie: "Actions de l'Asso",
      Question: "Faites-vous des interventions en milieu scolaire ?",
      Réponse:
        "Oui, nous intervenons dans les collèges et lycées pour sensibiliser les élèves et le personnel éducatif. L'objectif est de lutter contre le harcèlement scolaire et de promouvoir le vivre-ensemble pour que chaque jeune réunionnais puisse étudier sereinement.",
    },
    {
      Catégorie: "Actions de l'Asso",
      Question: "Est-ce que Pilon accepte des stagiaires ?",
      Réponse:
        "Oui ! Nous accueillons régulièrement des stagiaires (travail social, communication, gestion, etc.). Si tu cherches un stage avec du sens dans une structure militante et dynamique, envoie-nous ton CV et ta lettre de motivation par email.",
    },
    {
      Catégorie: "Actions de l'Asso",
      Question: "Est-ce que Pilon prend des Services Civiques ?",
      Réponse:
        "Tout à fait. Nous proposons régulièrement des missions de Service Civique pour accompagner nos actions culturelles, sociales ou de santé. Surveille nos réseaux sociaux ou contacte-nous directement pour savoir si une mission est ouverte.",
    },
    {
      Catégorie: "Adhésion & Social",
      Question: "Je veux faire un don, comment faire ?",
      Réponse:
        "Votre aide est précieuse ! Vous pouvez faire un don ponctuel ou régulier via notre page HelloAsso (https://www.helloasso.com/associations/pilon). Chaque euro sert directement à financer nos permanences, nos ateliers et l'accueil des personnes en difficulté.",
    },
    {
      Catégorie: "Comprendre & Apprendre",
      Question: "Est-ce qu'il y a de plus en plus de LGBT à La Réunion ?",
      Réponse:
        "Il y en a toujours eu à La Réunion ! Avant, elles étaient obligée de se cacher, de quitter l'île, de se marier et fonder des familles par pression familiale. Aujourd'hui, la société a évolué et le travail des associations a permis aux LGBT de sortir de l'ombre. Avant, beaucoup vivaient cachés ou s'exilaient. Aujourd'hui, on reste au péi, on assume notre identité créole et notre orientation. Ce n'est pas le nombre de personnes qui augmente, c'est le nombre de personnes qui osent enfin être elles-mêmes.",
    },
    {
      Catégorie: "Comprendre & Apprendre",
      Question:
        "Est-ce que c'est une mode importée des États-Unis, de France ou d'Europe ?",
      Réponse:
        "Absolument pas. L'homosexualité et la transidentité existent dans toutes les cultures du monde depuis la nuit des temps, y compris dans l'histoire de l'Océan Indien. Être LGBT à La Réunion, c'est être Réunionnais avant tout, avec notre culture, notre langue et nos traditions. Ce n'est pas un concept étranger, c'est une réalité de nos familles réunionnaises qui a été très longtemps caché et rejeté par notre société.",
    },
    {
      Catégorie: "Lexique",
      Question: "C'est quoi une personne Lesbienne (L) ?",
      Réponse: "C’est une femme qui tombe amoureuse d’autres femmes.",
    },
    {
      Catégorie: "Lexique",
      Question: "Que signifie le mot Gay (G) ?",
      Réponse: "C’est un homme qui tombe amoureux d’autres hommes.",
    },
    {
      Catégorie: "Lexique",
      Question: "C’est quoi être Bisexuel·le (B) ?",
      Réponse:
        "C’est quand une personne peut ressentir de l'amour ou de l'attirance aussi bien pour les hommes que pour les femmes.",
    },
    {
      Catégorie: "Lexique",
      Question: "C’est quoi être une personne Transgenre (T) ?",
      Réponse:
        "C’est quand une personne ne se sent pas en accord avec le genre (garçon ou fille) qu'on lui a donné à la naissance. Par exemple, une personne née dans un corps de garçon qui se sent fille.",
    },
    {
      Catégorie: "Lexique",
      Question: "Que veut dire le mot Queer ou Questionnement (Q) ?",
      Réponse:
        "C'est pour les personnes qui ne veulent pas d'étiquette précise (Queer) ou qui se posent encore des questions sur qui elles sont (Questionnement).",
    },
    {
      Catégorie: "Lexique",
      Question: "Que signifie Intersexe (I) ?",
      Réponse:
        "Cela concerne les personnes qui naissent avec un corps qui ne correspond pas tout à fait aux définitions classiques de 'garçon' ou 'fille'.",
    },
    {
      Catégorie: "Lexique",
      Question: "C'est quoi l'Asexualité (A) ?",
      Réponse:
        "C’est quand une personne ne ressent pas d'attirance sexuelle pour les autres, même si elle peut avoir des sentiments amoureux.",
    },
    {
      Catégorie: "Lexique",
      Question: "Pourquoi y a-t-il un '+' à la fin du sigle ?",
      Réponse:
        "Le '+' est là pour inclure toutes les autres façons d'aimer ou d'être soi-même. Comme ça, personne n'est oublié !",
    },
    {
      Catégorie: "Comprendre & Apprendre",
      Question: "C'est quoi une personne pansexuelle ?",
      Réponse:
        "Une personne pansexuelle est quelqu'un qui peut être amoureux de n'importe qui, peu importe son sexe ou son genre. Pour elle, c'est la personnalité et l'âme de la personne qui comptent avant tout, sans que le fait d'être un homme, une femme ou non-binaire ne soit un critère.",
    },
    {
      Catégorie: "Comprendre & Apprendre",
      Question: "Quelle différence entre pansexuel et bisexuel ?",
      Réponse:
        "La différence est subtile : une personne bisexuelle aime les hommes et les femmes (et parfois d'autres genres). Une personne pansexuelle dit souvent qu'elle est 'aveugle au genre' : elle aime une personne pour ce qu'elle est globalement, sans que le genre n'entre en ligne de compte dans son attirance. Dans les deux cas, ce sont des façons valables de vivre sa pluralité amoureuse.",
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
