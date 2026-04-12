import tour from "../assets/presentation5.jpg";
import piknik from "../assets/presentation.jpg";
import sante from "../assets/presentation3.jpg";
import ateliers from "../assets/presentation4.jfif";
import harcelement from "../assets/presentation6.jpg";
import famille from "../assets/presentation2.jpg";
import maloya from "../assets/maloya2.jpg";
import cuisine from "../assets/cuisine.jpg";
import couture from "../assets/couture.jpg";
import jeux from "../assets/jeux.jpg";
import peche from "../assets/peche.jpg";
import rando from "../assets/rando.jpg";
import camping from "../assets/camping.jpg";
import volley from "../assets/volley.jpg";

const actionsData = [
  {
    id: "pilon-emploi",
    pilier: "Social",
    categorie: "INSERTION PROFESSIONNELLE",
    titre: "Pilon vers l'Emploi",
    freq: "Sessions trimestrielles",
    frequence: "tous les 3 mois",
    frequence_detail: "4 sessions par an",
    desc: "Programme d'accompagnement intensif pour les personnes LGBTQIA+ victimes de discriminations à l'embauche.",
    contexte:
      "Le taux de chômage et la précarité chez les personnes trans et non-binaires à La Réunion restent largement supérieurs à la moyenne nationale.",
    objectifs: [
      "Rédaction de CV inclusifs",
      "Coaching en confiance en soi",
      "Mise en relation avec un réseau d'entreprises safe",
    ],
    infosPratiques: {
      prix: "Gratuit sur inscription",
      public: "Demandeurs d'emploi LGBTQIA+",
      modalite: "Entretien préalable",
      lieu: "Locaux de l'association / Distanciel",
    },
    partenaires: ["France Travail", "Mission Locale", "Face Réunion"],
    financeurs: ["FSE+", "Région Réunion", "DEETS"],
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    galerieParAnnee: [
      {
        annee: "2026",
        photos: [
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        ],
      },
    ],
    link: "/Actions/pilon-emploi",
    bilan2026: {
      participants: 32,
      donneeCle: "14 contrats signés (CDI/CDD)",
    },
  },
  {
    id: "marche-stdenis",
    pilier: "Visibilite",
    categorie: "VISIBILITÉ & DROITS",
    titre: "Marche de Saint-Denis",
    freq: "Annuel (Juin)",
    frequence: "annuelle",
    frequence_detail: "Mois des fiertés (Juin)",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
    desc: "Le festival des fiertés de La Réunion : marches, concerts, et villages associatifs pour la visibilité des droits.",
    contexte:
      "Le point d'orgue annuel pour porter haut les revendications d'égalité sur le territoire réunionnais.",
    objectifs: [
      "Visibilité médiatique",
      "Plaidoyer politique",
      "Célébration communautaire",
    ],
    infosPratiques: {
      prix: "Accès Libre",
      public: "Grand Public",
      modalite: "Événement de rue",
      lieu: "Saint-Denis / Toute l'île",
    },
    partenaires: ["Ville de Saint-Denis", "Interassociatif"],
    financeurs: ["Région Réunion", "Mairie de St-Denis", "Sponsors Privés"],
    presse: [
      {
        titre: "Une marche historique à St-Denis",
        source: "Clicanoo",
        url: "#",
      },
      { titre: "Le Pilon Festival voit plus grand", source: "JIR", url: "#" },
    ],
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    galerieParAnnee: [
      {
        annee: "2025",
        photos: [
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
          "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a",
        ],
      },
    ],
    link: "/Actions/pilon-festival",
    bilan2026: {
      participants: 3500,
      donneeCle: "Record d'affluence battu",
    },
  },
  {
    id: "marche-stpierre",
    pilier: "Visibilite",
    categorie: "VISIBILITÉ & DROITS",
    titre: "Marche de Saint-Pierre",
    freq: "Annuel (Juin)",
    frequence: "annuelle",
    frequence_detail: "Mois des fiertés (Juin)",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
    desc: "Le festival des fiertés de La Réunion : marches, concerts, et villages associatifs pour la visibilité des droits.",
    contexte:
      "Le point d'orgue annuel pour porter haut les revendications d'égalité sur le territoire réunionnais.",
    objectifs: [
      "Visibilité médiatique",
      "Plaidoyer politique",
      "Célébration communautaire",
    ],
    infosPratiques: {
      prix: "Accès Libre",
      public: "Grand Public",
      modalite: "Événement de rue",
      lieu: "Saint-Denis / Toute l'île",
    },
    partenaires: ["Ville de Saint-Denis", "Interassociatif"],
    financeurs: ["Région Réunion", "Mairie de St-Denis", "Sponsors Privés"],
    presse: [
      {
        titre: "Une marche historique à St-Denis",
        source: "Clicanoo",
        url: "#",
      },
      { titre: "Le Pilon Festival voit plus grand", source: "JIR", url: "#" },
    ],
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    galerieParAnnee: [
      {
        annee: "2025",
        photos: [
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
          "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a",
        ],
      },
    ],
    link: "/Actions/pilon-festival",
    bilan2026: {
      participants: 3500,
      donneeCle: "Record d'affluence battu",
    },
  },
  {
    id: "tour-ile",
    pilier: "Visibilite",
    categorie: "PROXIMITÉ",
    titre: "Le tour de l'île arc-en-ciel",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "Itinérant sur 2 semaines",
    desc: "Un convoi de sensibilisation qui parcourt les 24 communes de l'île pour rencontrer les habitants des zones isolées.",
    contexte:
      "Porter la visibilité au-delà des grandes agglomérations pour briser l'isolement des personnes rurales.",
    objectifs: [
      "Sensibilisation de proximité",
      "Célébration décentralisée",
      "Orientation vers les services de soin",
    ],
    infosPratiques: {
      prix: "15€",
      public: "Habitants des communes rurales",
      lieu: "Place des mairies / Itinérant",
    },
    img: tour,
    financeurs: ["Département de La Réunion", "CAF"],
    link: "/Actions/tour-ile",
    bilan2026: {
      participants: 500,
      donneeCle: "24 communes visitées",
    },
  },
  {
    id: "pique-nique",
    pilier: "Visibilite",
    categorie: "CONVIVIALITÉ",
    titre: "Le Pique-nique arc-en-ciel",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "Chaque année en Octobre",
    desc: "Le plus grand rassemblement convivial en plein air pour la communauté et ses alliés, un moment de partage sans jugement.",
    contexte:
      "Besoin d'espaces de socialisation sécurisants (safe spaces) en dehors du cadre militant classique.",
    objectifs: [
      "Renforcement des liens",
      "Solidarité intergénérationnelle",
      "Visibilité douce",
    ],
    infosPratiques: {
      prix: "Gratuit",
      public: "Familles & Individus",
      lieu: "Espaces naturels (L'Ermitage / Volcan)",
    },
    img: piknik,
    link: "/Actions/pique-nique",
    bilan2026: {
      participants: 300,
      donneeCle: "Record de participation",
    },
  },
  {
    id: "brunch",
    pilier: "Visibilite",
    categorie: "CONVIVIALITÉ",
    titre: "Le Brunch arc-en-ciel",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "Chaque année en Octobre",
    desc: "Le plus grand rassemblement convivial en plein air pour la communauté et ses alliés, un moment de partage sans jugement.",
    contexte:
      "Besoin d'espaces de socialisation sécurisants (safe spaces) en dehors du cadre militant classique.",
    objectifs: [
      "Renforcement des liens",
      "Solidarité intergénérationnelle",
      "Visibilité douce",
    ],
    infosPratiques: {
      prix: "Gratuit",
      public: "Familles & Individus",
      lieu: "Espaces naturels (L'Ermitage / Volcan)",
    },
    img: piknik,
    link: "/Actions/pique-nique",
    bilan2026: {
      participants: 300,
      donneeCle: "Record de participation",
    },
  },
  {
    id: "voyage-maurice",
    pilier: "Voyages",
    categorie: "COOPÉRATION RÉGIONALE",
    titre: "Le Pique-nique arc-en-ciel à Maurice",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "Échange de 5 jours",
    desc: "Programme d'échange avec les associations mauriciennes pour partager les bonnes pratiques en santé communautaire.",
    contexte:
      "Les problématiques de santé LGBTQ+ nécessitent une réponse coordonnée dans la zone Océan Indien.",
    objectifs: [
      "Echanges de pratiques",
      "Santé Mentale transfrontalière",
      "Plaidoyer régional",
    ],
    infosPratiques: {
      prix: "Prise en charge partielle",
      public: "Militants & Professionnels",
      lieu: "Maurice / Réunion",
    },
    img: sante,
    financeurs: ["Commission de l'Océan Indien", "INTERREG"],
    link: "/Actions/voyage-maurice",
    bilan2026: {
      participants: 45,
      donneeCle: "3 partenariats signés",
    },
  },
  {
    id: "voyage-nantes",
    pilier: "Voyages",
    categorie: "COOPÉRATION NATIONALE",
    titre: "Le Pique-nique arc-en-ciel à Nantes",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "Échange de 5 jours",
    desc: "Programme d'échange avec les associations mauriciennes pour partager les bonnes pratiques en santé communautaire.",
    contexte:
      "Les problématiques de santé LGBTQ+ nécessitent une réponse coordonnée dans la zone Océan Indien.",
    objectifs: [
      "Echanges de pratiques",
      "Santé Mentale transfrontalière",
      "Plaidoyer régional",
    ],
    infosPratiques: {
      prix: "Prise en charge partielle",
      public: "Militants & Professionnels",
      lieu: "Maurice / Réunion",
    },
    img: sante,
    financeurs: ["Commission de l'Océan Indien", "INTERREG"],
    link: "/Actions/voyage-maurice",
    bilan2026: {
      participants: 45,
      donneeCle: "3 partenariats signés",
    },
  },
  {
    id: "voyage-mada",
    pilier: "Voyages",
    categorie: "COOPÉRATION RÉGIONALE",
    titre: "FAG-Fihavanana Madagascar",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "Échange de 5 jours",
    desc: "Programme d'échange avec les associations mauriciennes pour partager les bonnes pratiques en santé communautaire.",
    contexte:
      "Les problématiques de santé LGBTQ+ nécessitent une réponse coordonnée dans la zone Océan Indien.",
    objectifs: [
      "Echanges de pratiques",
      "Santé Mentale transfrontalière",
      "Plaidoyer régional",
    ],
    infosPratiques: {
      prix: "Prise en charge partielle",
      public: "Militants & Professionnels",
      lieu: "Maurice / Réunion",
    },
    img: sante,
    financeurs: ["Commission de l'Océan Indien", "INTERREG"],
    link: "/Actions/voyage-maurice",
    bilan2026: {
      participants: 45,
      donneeCle: "3 partenariats signés",
    },
  },
  {
    id: "conf-papas",
    pilier: "Sensibilisation",
    categorie: "ÉDUCATION",
    titre: "La conférence des papas",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "Cycle de conférences (Université)",
    desc: "Conférences-débats destinées aux parents et proches de personnes LGBTQ+ pour faciliter le dialogue familial.",
    contexte:
      "Le rejet familial est la première cause d'itinérance chez les jeunes LGBTQ+ à La Réunion.",
    objectifs: [
      "Soutien à la parentalité",
      "Éducation aux terminologies",
      "Lutte contre les préjugés",
    ],
    infosPratiques: {
      prix: "Entrée libre",
      public: "Parents, Proches, Étudiants",
      lieu: "Université de La Réunion",
    },
    partenaires: ["Université de La Réunion", "Contact Réunion"],
    img: ateliers,
    link: "/Actions/conf-familles",
    bilan2026: {
      participants: 150,
      donneeCle: "12 intervenants experts",
    },
  },
  {
    id: "sens-jeunes",
    pilier: "Sensibilisation",
    categorie: "ÉDUCATION",
    titre: "Sensibilisation auprès des jeunes",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "sur demande",
    desc: "Sur demande des associations ou des structures, nous faisons des sensibilisation auprès du public jeune. Nous pouvons aussi intervenir en milieu scolaire.",
    contexte:
      "Le rejet familial est la première cause d'itinérance chez les jeunes LGBTQ+ à La Réunion.",
    objectifs: [
      "Soutien à la parentalité",
      "Éducation aux terminologies",
      "Lutte contre les préjugés",
    ],
    infosPratiques: {
      prix: "Entrée libre",
      public: "Parents, Proches, Étudiants",
      lieu: "Université de La Réunion",
    },
    partenaires: ["Université de La Réunion", "Contact Réunion"],
    img: ateliers,
    link: "/Actions/conf-familles",
    bilan2026: {
      participants: 150,
      donneeCle: "12 intervenants experts",
    },
  },
  {
    id: "lutte-cyber",
    pilier: "Sensibilisation",
    categorie: "VEILLE NUMÉRIQUE",
    titre: "Lutte contre le cyberharcèlement",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "Campagne permanente",
    desc: "Cellule d'écoute et de signalement des attaques LGBTQphobes sur les réseaux sociaux réunionnais.",
    contexte:
      "Hausse des violences numériques visant les jeunes en milieu scolaire.",
    objectifs: [
      "Aide aux victimes",
      "Signalement Pharos",
      "Éducation numérique",
    ],
    img: harcelement,
    financeurs: ["Dilcrah"],
    link: "/Actions/lutte-cyber",
    bilan2026: {
      participants: 1000,
      donneeCle: "250 signalements traités",
    },
  },
  {
    id: "sens-entreprise",
    pilier: "Sensibilisation",
    categorie: "ÉDUCATION",
    titre: "Sensibilisation en entreprise",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "sur demande",
    desc: "Conférences-débats destinées aux parents et proches de personnes LGBTQ+ pour faciliter le dialogue familial.",
    contexte:
      "Le rejet familial est la première cause d'itinérance chez les jeunes LGBTQ+ à La Réunion.",
    objectifs: [
      "Soutien à la parentalité",
      "Éducation aux terminologies",
      "Lutte contre les préjugés",
    ],
    infosPratiques: {
      prix: "Entrée libre",
      public: "Parents, Proches, Étudiants",
      lieu: "Université de La Réunion",
    },
    partenaires: ["Université de La Réunion", "Contact Réunion"],
    img: ateliers,
    link: "/Actions/conf-familles",
    bilan2026: {
      participants: 150,
      donneeCle: "12 intervenants experts",
    },
  },
  {
    id: "conf-gramouns",
    pilier: "Sensibilisation",
    categorie: "ÉDUCATION",
    titre: "La conférence des gramouns",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "Cycle de conférences (Université)",
    desc: "Conférences-débats destinées aux parents et proches de personnes LGBTQ+ pour faciliter le dialogue familial.",
    contexte:
      "Le rejet familial est la première cause d'itinérance chez les jeunes LGBTQ+ à La Réunion.",
    objectifs: [
      "Soutien à la parentalité",
      "Éducation aux terminologies",
      "Lutte contre les préjugés",
    ],
    infosPratiques: {
      prix: "Entrée libre",
      public: "Parents, Proches, Étudiants",
      lieu: "Université de La Réunion",
    },
    partenaires: ["Université de La Réunion", "Contact Réunion"],
    img: ateliers,
    link: "/Actions/conf-familles",
    bilan2026: {
      participants: 150,
      donneeCle: "12 intervenants experts",
    },
  },
  {
    id: "PSSM",
    pilier: "Formations",
    categorie: "FORMATIONS",
    titre: "Premiers secours en santé mentale adultes",
    freq: "Sessions trimestrielles",
    frequence: "2 fois par an",
    frequence_detail: "4 sessions par an",
    desc: "Programme d'accompagnement intensif pour les personnes LGBTQIA+ victimes de discriminations à l'embauche.",
    contexte:
      "Le taux de chômage et la précarité chez les personnes trans et non-binaires à La Réunion restent largement supérieurs à la moyenne nationale.",
    objectifs: [
      "Rédaction de CV inclusifs",
      "Coaching en confiance en soi",
      "Mise en relation avec un réseau d'entreprises safe",
    ],
    infosPratiques: {
      prix: "Gratuit sur inscription",
      public: "Demandeurs d'emploi LGBTQIA+",
      modalite: "Entretien préalable",
      lieu: "Locaux de l'association / Distanciel",
    },
    partenaires: ["France Travail", "Mission Locale", "Face Réunion"],
    financeurs: ["FSE+", "Région Réunion", "DEETS"],
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    galerieParAnnee: [
      {
        annee: "2026",
        photos: [
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        ],
      },
    ],
    link: "/Actions/pilon-emploi",
    bilan2026: {
      participants: 32,
      donneeCle: "14 contrats signés (CDI/CDD)",
    },
  },
  {
    id: "PSSM-jeunes",
    pilier: "Formations",
    categorie: "FORMATIONS",
    titre: "Premiers secours en santé mentale jeunes",
    freq: "Sessions trimestrielles",
    frequence: " ",
    frequence_detail: "2 sessions par an",
    desc: "Programme d'accompagnement intensif pour les personnes LGBTQIA+ victimes de discriminations à l'embauche.",
    contexte:
      "Le taux de chômage et la précarité chez les personnes trans et non-binaires à La Réunion restent largement supérieurs à la moyenne nationale.",
    objectifs: [
      "Rédaction de CV inclusifs",
      "Coaching en confiance en soi",
      "Mise en relation avec un réseau d'entreprises safe",
    ],
    infosPratiques: {
      prix: "Gratuit sur inscription",
      public: "Demandeurs d'emploi LGBTQIA+",
      modalite: "Entretien préalable",
      lieu: "Locaux de l'association / Distanciel",
    },
    partenaires: ["France Travail", "Mission Locale", "Face Réunion"],
    financeurs: ["FSE+", "Région Réunion", "DEETS"],
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    galerieParAnnee: [
      {
        annee: "2026",
        photos: [
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        ],
      },
    ],
    link: "/Actions/pilon-emploi",
    bilan2026: {
      participants: 32,
      donneeCle: "14 contrats signés (CDI/CDD)",
    },
  },
  {
    id: "EDUCFI",
    pilier: "Formations",
    categorie: "FORMATIONS",
    titre: "Education financière",
    freq: "Sessions trimestrielles",
    frequence: " ",
    frequence_detail: "4 sessions par an",
    desc: "Programme d'accompagnement intensif pour les personnes LGBTQIA+ victimes de discriminations à l'embauche.",
    contexte:
      "Le taux de chômage et la précarité chez les personnes trans et non-binaires à La Réunion restent largement supérieurs à la moyenne nationale.",
    objectifs: [
      "Rédaction de CV inclusifs",
      "Coaching en confiance en soi",
      "Mise en relation avec un réseau d'entreprises safe",
    ],
    infosPratiques: {
      prix: "Gratuit sur inscription",
      public: "Demandeurs d'emploi LGBTQIA+",
      modalite: "Entretien préalable",
      lieu: "Locaux de l'association / Distanciel",
    },
    partenaires: ["France Travail", "Mission Locale", "Face Réunion"],
    financeurs: ["FSE+", "Région Réunion", "DEETS"],
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    galerieParAnnee: [
      {
        annee: "2026",
        photos: [
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        ],
      },
    ],
    link: "/Actions/pilon-emploi",
    bilan2026: {
      participants: 32,
      donneeCle: "14 contrats signés (CDI/CDD)",
    },
  },
  {
    id: "Accueil",
    pilier: "Formations",
    categorie: "FORMATIONS",
    titre: "Bien accuellir le public LGBT",
    freq: "Sessions trimestrielles",
    frequence: " ",
    frequence_detail: "4 sessions par an",
    desc: "Programme d'accompagnement intensif pour les personnes LGBTQIA+ victimes de discriminations à l'embauche.",
    contexte:
      "Le taux de chômage et la précarité chez les personnes trans et non-binaires à La Réunion restent largement supérieurs à la moyenne nationale.",
    objectifs: [
      "Rédaction de CV inclusifs",
      "Coaching en confiance en soi",
      "Mise en relation avec un réseau d'entreprises safe",
    ],
    infosPratiques: {
      prix: "Gratuit sur inscription",
      public: "Demandeurs d'emploi LGBTQIA+",
      modalite: "Entretien préalable",
      lieu: "Locaux de l'association / Distanciel",
    },
    partenaires: ["France Travail", "Mission Locale", "Face Réunion"],
    financeurs: ["FSE+", "Région Réunion", "DEETS"],
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    galerieParAnnee: [
      {
        annee: "2026",
        photos: [
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        ],
      },
    ],
    link: "/Actions/pilon-emploi",
    bilan2026: {
      participants: 32,
      donneeCle: "14 contrats signés (CDI/CDD)",
    },
  },
  {
    id: "Canva",
    pilier: "Formations",
    categorie: "FORMATIONS",
    titre: "Apprendre à utiliser Canva",
    freq: "Sessions trimestrielles",
    frequence: "trimestrielles",
    frequence_detail: "4 sessions par an",
    desc: "Programme d'accompagnement intensif pour les personnes LGBTQIA+ victimes de discriminations à l'embauche.",
    contexte:
      "Le taux de chômage et la précarité chez les personnes trans et non-binaires à La Réunion restent largement supérieurs à la moyenne nationale.",
    objectifs: [
      "Rédaction de CV inclusifs",
      "Coaching en confiance en soi",
      "Mise en relation avec un réseau d'entreprises safe",
    ],
    infosPratiques: {
      prix: "Gratuit sur inscription",
      public: "Demandeurs d'emploi LGBTQIA+",
      modalite: "Entretien préalable",
      lieu: "Locaux de l'association / Distanciel",
    },
    partenaires: ["France Travail", "Mission Locale", "Face Réunion"],
    financeurs: ["FSE+", "Région Réunion", "DEETS"],
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    galerieParAnnee: [
      {
        annee: "2026",
        photos: [
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        ],
      },
    ],
    link: "/Actions/pilon-emploi",
    bilan2026: {
      participants: 32,
      donneeCle: "14 contrats signés (CDI/CDD)",
    },
  },
  {
    id: "conf-mamans",
    pilier: "Sensibilisation",
    categorie: "ÉDUCATION",
    titre: "La conférence des mamans",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "Cycle de conférences (Université)",
    desc: "Conférences-débats destinées aux parents et proches de personnes LGBTQ+ pour faciliter le dialogue familial.",
    contexte:
      "Le rejet familial est la première cause d'itinérance chez les jeunes LGBTQ+ à La Réunion.",
    objectifs: [
      "Soutien à la parentalité",
      "Éducation aux terminologies",
      "Lutte contre les préjugés",
    ],
    infosPratiques: {
      prix: "Entrée libre",
      public: "Parents, Proches, Étudiants",
      lieu: "Université de La Réunion",
    },
    partenaires: ["Université de La Réunion", "Contact Réunion"],
    img: ateliers,
    link: "/Actions/conf-familles",
    bilan2026: {
      participants: 150,
      donneeCle: "12 intervenants experts",
    },
  },

  {
    id: "weekend-vivre-ensemble",
    pilier: "Culture",
    categorie: "BIEN-ÊTRE",
    titre: "Week-end du vivre ensemble",
    freq: "Annuel",
    frequence: "annuelle",
    frequence_detail: "Séjour de 3 jours",
    desc: "Un weekend pour sensibiliser contre toutes les formes de discrimination, réunissant associations et artistes.",
    contexte:
      "Prévention du burn-out militant et renforcement de l'esprit de corps.",
    objectifs: [
      "Resilience collective",
      "Ateliers de bien-être",
      "Planning stratégique",
    ],
    img: famille,
    link: "/Actions/vivre-ensemble",
    bilan2026: {
      participants: 80,
      donneeCle: "100% de satisfaction",
    },
  },
  {
    id: "volley-rose",
    pilier: "Sport",
    categorie: "SPORT INCLUSIF",
    titre: "Le Volley Rose",
    freq: "Régulier",
    frequence: "régulier",
    frequence_detail: "Tous les mardis",
    desc: "Séances de volleyball ouvertes à tous les niveaux, où le respect est la seule règle de jeu.",
    contexte:
      "Le sport en club peut être un lieu d'exclusion pour les personnes de genre non-conforme.",
    objectifs: [
      "Inclusion par le sport",
      "Lutte contre les stéréotypes",
      "Santé physique",
    ],
    infosPratiques: {
      prix: "Adhésion asso",
      public: "Tous niveaux",
      lieu: "Gymnase municipal",
    },
    img: volley,
    link: "/Actions/volley-rose",
    bilan2026: {
      participants: 120,
      donneeCle: "24 entraînements",
    },
  },
  {
    id: "maloya-kwir",
    pilier: "Culture",
    categorie: "IDENTITÉS & PATRIMOINE",
    titre: "Maloya Kwir",
    freq: "Régulier",
    frequence: "régulier",
    frequence_detail: "Tous les jeudis",
    desc: "Ciné-débats et performances mêlant la culture réunionnaise (Maloya) et les questions de genre.",
    contexte:
      "Réconcilier l'identité culturelle locale et l'orientation sexuelle ou l'identité de genre.",
    objectifs: [
      "Valorisation du patrimoine",
      "Visibilité artistique",
      "Transmission culturelle",
    ],
    img: maloya,
    partenaires: ["DAC de La Réunion", "FRAC"],
    link: "/Actions/maloya-kwir",
    bilan2026: {
      participants: 200,
      donneeCle: "12 projections réalisées",
    },
  },
  {
    id: "sega-kwir",
    pilier: "Culture",
    categorie: "IDENTITÉS & PATRIMOINE",
    titre: "Alon danse séga",
    freq: "Régulier",
    frequence: " ",
    frequence_detail: "tous les mercredis",
    desc: "Ciné-débats et performances mêlant la culture réunionnaise (Maloya) et les questions de genre.",
    contexte:
      "Réconcilier l'identité culturelle locale et l'orientation sexuelle ou l'identité de genre.",
    objectifs: [
      "Valorisation du patrimoine",
      "Visibilité artistique",
      "Transmission culturelle",
    ],
    img: maloya,
    partenaires: ["DAC de La Réunion", "FRAC"],
    link: "/Actions/maloya-kwir",
    bilan2026: {
      participants: 200,
      donneeCle: "12 projections réalisées",
    },
  },
  {
    id: "cuisine",
    pilier: "Culture",
    categorie: "VIE QUOTIDIENNE",
    titre: "Ateliers cuisine",
    freq: "Régulier",
    frequence: "régulier",
    frequence_detail: "Un samedi par mois",
    desc: "Ateliers de partage de recettes traditionnelles et créatives dans une ambiance de bienveillance.",
    contexte:
      "Partager un repas est le premier levier de l'intégration sociale.",
    objectifs: ["Lien social", "Autonomie alimentaire", "Partage culturel"],
    img: cuisine,
    link: "/Actions/cuisine",
    bilan2026: {
      participants: 60,
      donneeCle: "12 repas partagés",
    },
  },
  {
    id: "couture",
    pilier: "Sport",
    categorie: "ARTISANAT",
    titre: "Ateliers couture",
    freq: "Régulier",
    frequence: "régulier",
    frequence_detail: "une fois par mois",
    desc: "Apprentissage de la couture, de la personnalisation de vêtements et de la création de drapeaux.",
    contexte:
      "Réappropriation de son image à travers le vêtement (notamment pour les transitions).",
    objectifs: ["Créativité", "Estime de soi", "Entraide"],
    img: couture,
    link: "/Actions/couture",
    bilan2026: {
      participants: 30,
      donneeCle: "1 défilé organisé",
    },
  },
  {
    id: "jeux",
    pilier: "Sport",
    categorie: "LOISIRS",
    titre: "Soirées jeux",
    freq: "Régulier",
    frequence: "régulier",
    frequence_detail: "Chaque deuxième vendredi du mois",
    desc: "Jeux de société et jeux de rôle dans un environnement sécurisant pour briser l'isolement.",
    contexte:
      "Offrir une alternative aux sorties en bar/boîte qui ne conviennent pas à tous.",
    objectifs: ["Lutte contre la solitude", "Cohésion", "Détente"],
    img: jeux,
    link: "/Actions/jeux",
    bilan2026: {
      participants: 100,
      donneeCle: "52 soirées par an",
    },
  },
  {
    id: "peche",
    pilier: "Sport",
    categorie: "PLEIN AIR",
    titre: "La pêche : Fil a eaux",
    freq: "Régulier",
    frequence: "régulier",
    frequence_detail: "Sorties ponctuelles",
    desc: "Sorties de pêche traditionnelle pour favoriser le dialogue calme et la contemplation en groupe.",
    contexte:
      "Utiliser des activités traditionnelles pour inclure les membres plus âgés de la communauté.",
    objectifs: ["Dialogue apaisé", "Sérénité", "Lien avec la nature"],
    img: peche,
    link: "/Actions/peche",
    bilan2026: {
      participants: 25,
      donneeCle: "8 sorties mer/rivière",
    },
  },
  {
    id: "rando",
    pilier: "Sport",
    categorie: "SPORT NATURE",
    titre: "Rando arc-en-ciel",
    freq: "Régulier",
    frequence: "régulier",
    frequence_detail: "Un dimanche sur deux",
    desc: "Randonnées sur les sentiers réunionnais pour découvrir le patrimoine naturel ensemble.",
    contexte:
      "L'inclusion par l'effort physique et la découverte du territoire.",
    objectifs: ["Sport santé", "Respect mutuel", "Découverte de l'île"],
    img: rando,
    link: "/Actions/rando",
    bilan2026: {
      participants: 150,
      donneeCle: "20 sentiers parcourus",
    },
  },
  {
    id: "camping",
    pilier: "Sport",
    categorie: "VIE COLLECTIVE",
    titre: "Camping arc-en-ciel",
    freq: "Régulier",
    frequence: "régulier",
    frequence_detail: "Pendant les vacances",
    desc: "Séjours de camping en autonomie pour renforcer les amitiés et la solidarité de groupe.",
    contexte:
      "Vivre ensemble sur plusieurs jours pour créer des liens familiaux choisis.",
    objectifs: ["Cohésion forte", "Vivre ensemble", "Autonomie"],
    img: camping,
    link: "/Actions/camping",
    bilan2026: {
      participants: 40,
      donneeCle: "4 camps organisés",
    },
  },

  {
    id: "psy",
    pilier: "Sante",
    categorie: "SANTÉ & PRÉVENTION",
    titre: "Permanence psychologique",
    freq: "Tous les Jeudis de 14h à 17h",
    frequence: " ",
    frequence_detail: "Hebdomadaire (Jeudi)",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
    desc: "Depuis 2021, l'association assure une présence hebdomadaire au sein du service d'infectiologie du CHU Félix Guyon pour accompagner les patients.",
    contexte:
      "La Réunion connaît une augmentation des découvertes de séropositivité à un stade avancé, nécessitant un soutien communautaire immédiat.",
    objectifs: [
      "Accompagnement au diagnostic",
      "Information sur le TasP (U=U)",
      "Rupture de l'isolement social",
    ],
    infosPratiques: {
      prix: "Gratuit",
      public: "PVVIH et entourage",
      modalite: "Anonyme & Sans RDV",
      lieu: "CHU Félix Guyon (Bellepierre)",
    },
    partenaires: ["CHU Félix Guyon", "COREVI Réunion", "AIDES"],
    financeurs: ["ARS La Réunion", "État (DREETS)"],
    presse: [
      {
        titre: "Une permanence pour libérer la parole",
        source: "Le Quotidien",
        url: "#",
      },
      {
        titre: "VIH à la Réunion : l'importance du lien",
        source: "Antenne Réunion",
        url: "#",
      },
    ],
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    galerieParAnnee: [
      {
        annee: "2026",
        photos: [
          "https://images.unsplash.com/photo-1516549655169-df83a0774514",
          "https://images.unsplash.com/photo-1584512605117-9eaaf3fd1f55",
        ],
      },
      {
        annee: "2025",
        photos: [
          "https://images.unsplash.com/photo-1576091160550-2173bdd99625",
        ],
      },
    ],
    link: "/Actions/chu-seropotes",
    bilan2026: {
      participants: 214,
      donneeCle: "48 séances réalisées",
    },
    documents: [
      { nom: "Livret d'accueil patient.pdf", url: "#" },
      { nom: "Rapport d'activité Infectiologie 2025.pdf", url: "#" },
    ],
  },
  {
    id: "educ-spe",
    pilier: "Social",
    categorie: "Accès aux droits",
    titre: "Permanence éducatrice spécialisée",
    freq: "Tous les Jeudis de 14h à 17h",
    frequence: " ",
    frequence_detail: "Hebdomadaire (Jeudi)",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
    desc: "Depuis 2021, l'association assure une présence hebdomadaire au sein du service d'infectiologie du CHU Félix Guyon pour accompagner les patients.",
    contexte:
      "La Réunion connaît une augmentation des découvertes de séropositivité à un stade avancé, nécessitant un soutien communautaire immédiat.",
    objectifs: [
      "Accompagnement au diagnostic",
      "Information sur le TasP (U=U)",
      "Rupture de l'isolement social",
    ],
    infosPratiques: {
      prix: "Gratuit",
      public: "PVVIH et entourage",
      modalite: "Anonyme & Sans RDV",
      lieu: "CHU Félix Guyon (Bellepierre)",
    },
    partenaires: ["CHU Félix Guyon", "COREVI Réunion", "AIDES"],
    financeurs: ["ARS La Réunion", "État (DREETS)"],
    presse: [
      {
        titre: "Une permanence pour libérer la parole",
        source: "Le Quotidien",
        url: "#",
      },
      {
        titre: "VIH à la Réunion : l'importance du lien",
        source: "Antenne Réunion",
        url: "#",
      },
    ],
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    galerieParAnnee: [
      {
        annee: "2026",
        photos: [
          "https://images.unsplash.com/photo-1516549655169-df83a0774514",
          "https://images.unsplash.com/photo-1584512605117-9eaaf3fd1f55",
        ],
      },
      {
        annee: "2025",
        photos: [
          "https://images.unsplash.com/photo-1576091160550-2173bdd99625",
        ],
      },
    ],
    link: "/Actions/chu-seropotes",
    bilan2026: {
      participants: 214,
      donneeCle: "48 séances réalisées",
    },
    documents: [
      { nom: "Livret d'accueil patient.pdf", url: "#" },
      { nom: "Rapport d'activité Infectiologie 2025.pdf", url: "#" },
    ],
  },
  {
    id: "demarches",
    pilier: "Social",
    categorie: "Accès aux droits",
    titre: "aide aux démarches administratives",
    freq: "Tous les Jeudis de 14h à 17h",
    frequence: " ",
    frequence_detail: "Hebdomadaire (Jeudi)",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
    desc: "Depuis 2021, l'association assure une présence hebdomadaire au sein du service d'infectiologie du CHU Félix Guyon pour accompagner les patients.",
    contexte:
      "La Réunion connaît une augmentation des découvertes de séropositivité à un stade avancé, nécessitant un soutien communautaire immédiat.",
    objectifs: [
      "Accompagnement au diagnostic",
      "Information sur le TasP (U=U)",
      "Rupture de l'isolement social",
    ],
    infosPratiques: {
      prix: "Gratuit",
      public: "PVVIH et entourage",
      modalite: "Anonyme & Sans RDV",
      lieu: "CHU Félix Guyon (Bellepierre)",
    },
    partenaires: ["CHU Félix Guyon", "COREVI Réunion", "AIDES"],
    financeurs: ["ARS La Réunion", "État (DREETS)"],
    presse: [
      {
        titre: "Une permanence pour libérer la parole",
        source: "Le Quotidien",
        url: "#",
      },
      {
        titre: "VIH à la Réunion : l'importance du lien",
        source: "Antenne Réunion",
        url: "#",
      },
    ],
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    galerieParAnnee: [
      {
        annee: "2026",
        photos: [
          "https://images.unsplash.com/photo-1516549655169-df83a0774514",
          "https://images.unsplash.com/photo-1584512605117-9eaaf3fd1f55",
        ],
      },
      {
        annee: "2025",
        photos: [
          "https://images.unsplash.com/photo-1576091160550-2173bdd99625",
        ],
      },
    ],
    link: "/Actions/chu-seropotes",
    bilan2026: {
      participants: 214,
      donneeCle: "48 séances réalisées",
    },
    documents: [
      { nom: "Livret d'accueil patient.pdf", url: "#" },
      { nom: "Rapport d'activité Infectiologie 2025.pdf", url: "#" },
    ],
  },
  {
    id: "dépistage",
    pilier: "Sante",
    categorie: "SANTÉ & PRÉVENTION",
    titre: "Dépistage au centre LGBT",
    freq: "Tous les Jeudis de 14h à 17h",
    frequence: " ",
    frequence_detail: "Hebdomadaire (Jeudi)",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
    desc: "Depuis 2021, l'association assure une présence hebdomadaire au sein du service d'infectiologie du CHU Félix Guyon pour accompagner les patients.",
    contexte:
      "La Réunion connaît une augmentation des découvertes de séropositivité à un stade avancé, nécessitant un soutien communautaire immédiat.",
    objectifs: [
      "Accompagnement au diagnostic",
      "Information sur le TasP (U=U)",
      "Rupture de l'isolement social",
    ],
    infosPratiques: {
      prix: "Gratuit",
      public: "PVVIH et entourage",
      modalite: "Anonyme & Sans RDV",
      lieu: "CHU Félix Guyon (Bellepierre)",
    },
    partenaires: ["CHU Félix Guyon", "COREVI Réunion", "AIDES"],
    financeurs: ["ARS La Réunion", "État (DREETS)"],
    presse: [
      {
        titre: "Une permanence pour libérer la parole",
        source: "Le Quotidien",
        url: "#",
      },
      {
        titre: "VIH à la Réunion : l'importance du lien",
        source: "Antenne Réunion",
        url: "#",
      },
    ],
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    galerieParAnnee: [
      {
        annee: "2026",
        photos: [
          "https://images.unsplash.com/photo-1516549655169-df83a0774514",
          "https://images.unsplash.com/photo-1584512605117-9eaaf3fd1f55",
        ],
      },
      {
        annee: "2025",
        photos: [
          "https://images.unsplash.com/photo-1576091160550-2173bdd99625",
        ],
      },
    ],
    link: "/Actions/chu-seropotes",
    bilan2026: {
      participants: 214,
      donneeCle: "48 séances réalisées",
    },
    documents: [
      { nom: "Livret d'accueil patient.pdf", url: "#" },
      { nom: "Rapport d'activité Infectiologie 2025.pdf", url: "#" },
    ],
  },
  {
    id: "chu-seropotes",
    pilier: "Sante",
    categorie: "SANTÉ & PRÉVENTION",
    titre: "Permanence CHU (Séropotes)",
    freq: "Tous les Jeudis de 14h à 17h",
    frequence: " ",
    frequence_detail: "Hebdomadaire (Jeudi)",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
    desc: "Depuis 2021, l'association assure une présence hebdomadaire au sein du service d'infectiologie du CHU Félix Guyon pour accompagner les patients.",
    contexte:
      "La Réunion connaît une augmentation des découvertes de séropositivité à un stade avancé, nécessitant un soutien communautaire immédiat.",
    objectifs: [
      "Accompagnement au diagnostic",
      "Information sur le TasP (U=U)",
      "Rupture de l'isolement social",
    ],
    infosPratiques: {
      prix: "Gratuit",
      public: "PVVIH et entourage",
      modalite: "Anonyme & Sans RDV",
      lieu: "CHU Félix Guyon (Bellepierre)",
    },
    partenaires: ["CHU Félix Guyon", "COREVI Réunion", "AIDES"],
    financeurs: ["ARS La Réunion", "État (DREETS)"],
    presse: [
      {
        titre: "Une permanence pour libérer la parole",
        source: "Le Quotidien",
        url: "#",
      },
      {
        titre: "VIH à la Réunion : l'importance du lien",
        source: "Antenne Réunion",
        url: "#",
      },
    ],
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    galerieParAnnee: [
      {
        annee: "2026",
        photos: [
          "https://images.unsplash.com/photo-1516549655169-df83a0774514",
          "https://images.unsplash.com/photo-1584512605117-9eaaf3fd1f55",
        ],
      },
      {
        annee: "2025",
        photos: [
          "https://images.unsplash.com/photo-1576091160550-2173bdd99625",
        ],
      },
    ],
    link: "/Actions/chu-seropotes",
    bilan2026: {
      participants: 214,
      donneeCle: "48 séances réalisées",
    },
    documents: [
      { nom: "Livret d'accueil patient.pdf", url: "#" },
      { nom: "Rapport d'activité Infectiologie 2025.pdf", url: "#" },
    ],
  },
];

export default actionsData;
