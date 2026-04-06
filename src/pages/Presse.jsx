/* eslint-disable no-nested-ternary */
import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import {
  ExternalLink,
  Calendar,
  Newspaper,
  Tv,
  Globe,
  Hash,
} from "lucide-react";

// --- BASE DE DONNÉES COMPLÈTE (64 ARTICLES) ---
const pressData = [
  {
    id: 64,
    nom: "LGBT : Pilon a exporté la seconde édition du pique nique arc-en-ciel à Maurice",
    journal: "Freedom",
    lien: "#",
    date: "2025-11-25",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 63,
    nom: "« Grand Week-end du Vivre Ensemble » : venez composer le drapeau de La Réunion",
    journal: "Freedom",
    lien: "https://freedom.fr/grand-week-end-du-vivre-ensemble-les-14-et-15-novembre-a-saint-denis/",
    date: "2025-11-09",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 62,
    nom: "Saint-Denis : l'association Pilon et l’académie des Camélias célèbrent la tolérance",
    journal: "Imaz Press",
    lien: "https://imazpress.com/zoom/saint-denis-association-pilon-et-l-academie-des-camelias-celebrent-la-tolerance",
    date: "2025-11-14",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 61,
    nom: "Le Grand Week-end du Vivre Ensemble : deux jours pour redéfinir la tolérance",
    journal: "Memento",
    lien: "https://www.memento.fr/article_05-11-2025-le-grand-week-end-du-vivre-ensemble-deux-jours-pour-redefinir-la-tolerance-a-la-reunion",
    date: "2025-11-05",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 60,
    nom: "Week-end du vivre ensemble : les Réunionnais appelés à créer un drapeau",
    journal: "Zinfos974",
    lien: "https://www.zinfos974.com/week-end-du-vivre-ensemble-les-reunionnais-appeles-a-participer-a-la-creation-dun-drapeau/",
    date: "2025-11-09",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 59,
    nom: "Ron’Kozé Ban Gramoun : les séniors parlent de LGBT+ à l'Université",
    journal: "Imaz Press",
    lien: "https://imazpress.com/actus-reunion/ron-koze-ban-gramoun-les-seniors-parlent-de-lgbt-a-l-universite",
    date: "2025-10-01",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 58,
    nom: "Saint-Denis : une conférence des gramouns à l'Université",
    journal: "Imaz Press",
    lien: "https://imazpress.com/actus-reunion/saint-denis-une-conference-des-gramouns-a-l-universite-concernant-les-lgbt",
    date: "2025-10-04",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 57,
    nom: "Bilan du mois des Visibilités LGBT+ : les mentalités évoluent",
    journal: "France Info",
    lien: "https://la1ere.franceinfo.fr/reunion/bilan-du-mois-des-visibilites-a-la-reunion-les-mentalites-sont-en-train-d-evoluer-dans-le-bon-sens-1599957.html",
    date: "2025-06-29",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 56,
    nom: "Un grand pique-nique arc-en-ciel ce samedi au Port",
    journal: "Freedom",
    lien: "https://freedom.fr/un-grand-pique-nique-arc-en-ciel-ce-samedi-au-port-pour-clore-le-mois-des-visibilites-lgbt/",
    date: "2025-06-23",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 55,
    nom: "LGBT+: le mois des visibilités se clôture par un pique-nique au Port",
    journal: "Le Quotidien Réunion",
    lien: "https://www.lequotidien.re/article/societe/2025/06/23/lgbt-le-mois-des-visibilites-se-cloture-par-un-pique-nique-au-port",
    date: "2025-06-23",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 54,
    nom: "Le Port : troisième édition du pique-nique arc-en-ciel",
    journal: "Imaz Press",
    lien: "https://imazpress.com/le-port-actualite/le-port-troisieme-edition-du-pique-nique-arc-en-ciel-sur-le-front-de-mer",
    date: "2025-06-26",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 53,
    nom: "3ème édition du pique-nique Arc-en-ciel",
    journal: "Ville du Port",
    lien: "https://www.ville-port.re/3eme-edition-du-pique-nique-arc-en-ciel-ville-port-2025/",
    date: "2025-07-07",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 52,
    nom: "Clap de fin pour le mois des fiertés LGBT au Port",
    journal: "Zinfos974",
    lien: "https://www.zinfos974.com/clap-de-fin-pour-le-mois-des-fiertes-lgbt-une-troisieme-edition-du-pique-nique-arc-en-ciel-au-port/",
    date: "2025-06-23",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 51,
    nom: "Une fête arc-en-ciel inédite pour le mois des visibilités",
    journal: "Mémento",
    lien: "https://www.memento.fr/article_09-05-2025-une-fete-arc-en-ciel-inedite-pour-le-mois-des-visibilites",
    date: "2025-06-09",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 50,
    nom: "La fête arc-en-ciel à Saint-Paul : célébrer la diversité",
    journal: "Freedom",
    lien: "https://freedom.fr/la-fete-arc-en-ciel-a-saint-paul-un-evenement-haut-en-couleur-pour-celebrer-la-diversite/",
    date: "2025-06-05",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 49,
    nom: "Saint-Paul: une Fête Arc-en-Ciel ce samedi",
    journal: "Le Quotidien Réunion",
    lien: "https://www.lequotidien.re/index.php/article/societe/2025/06/05/saint-paul-une-fete-arc-en-ciel-ce-samedi-placee-sous-le-signe-de-la-fierte-et-de-la-visibilite-lgbt",
    date: "2025-06-05",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 48,
    nom: "Saint-Paul : la fête de l’arc-en-ciel illumine le débarcadère",
    journal: "Imaz Press",
    lien: "https://imazpress.com/zoom/saint-paul-la-fete-de-l-arc-en-ciel-illumine-le-debarcadere",
    date: "2025-06-04",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 47,
    nom: "Un brunch intergénérationnel pour briser la solitude",
    journal: "Freedom",
    lien: "#",
    date: "2025-05-28",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 46,
    nom: "Un tour de l’île haut en couleurs, inclusif et intergénérationnel",
    journal: "Témoignages",
    lien: "https://www.temoignages.re/social/luttes-sociales/un-tour-de-l-ile-haut-en-couleurs-inclusif-et-intergenerationnel",
    date: "2025-05-05",
    image: "https://i.postimg.cc/LX5KL9Zx/IMG-9315.jpg",
  },
  {
    id: 45,
    nom: "Le Mois des fiertés s'ouvre par un tour de l'île arc-en-ciel",
    journal: "Le Quotidien Réunion",
    lien: "https://www.lequotidien.re/article/societe/2025/05/03/le-mois-des-fiertes-souvre-par-un-tour-de-lile-arc-en-ciel-en-car-jaune",
    date: "2025-05-03",
    image: "https://i.postimg.cc/LX5KL9Zx/IMG-9315.jpg",
  },
  {
    id: 44,
    nom: "Mois des fiertés LGBT : le Tour de l’île revient !",
    journal: "Freedom",
    lien: "https://freedom.fr/mois-des-fiertes-lgbt-le-tour-de-lile-arc-en-ciel-revient-pour-une-seconde-edition/",
    date: "2025-05-03",
    image: "https://i.postimg.cc/LX5KL9Zx/IMG-9315.jpg",
  },
  {
    id: 43,
    nom: "Le Tour de l’île Arc-en-ciel, porté par Pilon, revient",
    journal: "Imaz Press",
    lien: "https://imazpress.com/actus-reunion/le-tour-de-l-ile",
    date: "2025-05-03",
    image: "https://i.postimg.cc/LX5KL9Zx/IMG-9315.jpg",
  },
  {
    id: 42,
    nom: "Mois des fiertés LGBT : Le Tour de l’île revient !",
    journal: "Linfo.re",
    lien: "https://www.linfo.re/la-reunion/societe/mois-des-fiertes-lgbt-le-tour-de-l-ile-arc-en-ciel-revient-pour-une-seconde-edition",
    date: "2025-05-03",
    image: "https://i.postimg.cc/LX5KL9Zx/IMG-9315.jpg",
  },
  {
    id: 41,
    nom: "Clap de fin pour le festival Pilon à l’Université",
    journal: "Témoignages",
    lien: "https://www.temoignages.re/developpement/education-formation/clap-de-fin-pour-le-festival-pilon-a-l-universite-de-la-reunion",
    date: "2024-10-29",
    image: "https://i.postimg.cc/2jBzT5t8/kiki-ball.jpg",
  },
  {
    id: 40,
    nom: "Transmettre un message d’acceptation à travers les traditions",
    journal: "L'express Maurice",
    lien: "https://lexpress.mu/s/transmettre-un-message-dacceptation-a-travers-des-evenements-alliant-festivite-et-traditions-539540",
    date: "2024-10-26",
    image:
      "https://i.postimg.cc/FHtVDrnp/p7c-FHWZZEa-B3-Uk-DDQL0-Wu17lx8a-HE5cg-UVDQNUAz.jpg",
  },
  {
    id: 39,
    nom: "Collaboration inédite entre La Réunion et Maurice",
    journal: "Freedom",
    lien: "https://freedom.fr/renforcement-de-la-solidarite-lgbt-dans-locean-indien-une-collaboration-inedite-entre-la-reunion-et-maurice/",
    date: "2024-10-23",
    image:
      "https://i.postimg.cc/26xtfqgC/Whats-App-Image-2024-10-22-21-49-15-a2f5a3e2.jpg",
  },
  {
    id: 38,
    nom: "Pilon organise un événement LGBT à Maurice",
    journal: "Zinfos974",
    lien: "https://www.zinfos974.com/lassociation-reunionnaise-pilon-organise-un-evenement-lgbt-a-maurice-avec-une-association-locale/",
    date: "2024-10-23",
    image:
      "https://i.postimg.cc/26xtfqgC/Whats-App-Image-2024-10-22-21-49-15-a2f5a3e2.jpg",
  },
  {
    id: 37,
    nom: "L'agenda culturel: les Electropicales enflamment Saint-Denis",
    journal: "Réunion Première",
    lien: "https://la1ere.francetvinfo.fr/reunion/l-agenda-culturel-les-electropicales-enflamment-saint-denis-reunion-graffiti-attend-martha-cooper-1527882.html",
    date: "2024-10-21",
    image:
      "https://i.postimg.cc/PrM5FKS7/462197235-1083181743203135-8217061405662515869-n-6707e835a7ec7113274980.webp",
  },
  {
    id: 36,
    nom: "Les Electropicales dévoilent la programmation 2024",
    journal: "Imaz Press",
    lien: "https://imazpress.com/culture/les-electropicales-devoilent-la-programmation-complete-de-l-edition-2024",
    date: "2024-08-23",
    image:
      "https://i.postimg.cc/PrM5FKS7/462197235-1083181743203135-8217061405662515869-n-6707e835a7ec7113274980.webp",
  },
  {
    id: 35,
    nom: "Lorraine Nativel participe à la conférence des mamans",
    journal: "Imaz Press",
    lien: "https://imazpress.com/conseil-regional-actualite/lorraine-nativel-participe-a-la-conference-des-mamans",
    date: "2024-10-10",
    image:
      "https://i.postimg.cc/dQbs0pxp/Whats-App-Image-2024-10-09-10-50-05-b7d655cd.jpg",
  },
  {
    id: 34,
    nom: "Saint-Denis : 1ère conférence des mamans d’enfants LGBT",
    journal: "DomTom Actu",
    lien: "https://www.domtomactu.com/2024/10/09/saint-denis-1ere-conference-des-mamans-denfants-lgbt-pour-sensibiliser-et-partager-leurs-vecus/",
    date: "2024-10-09",
    image:
      "https://i.postimg.cc/dQbs0pxp/Whats-App-Image-2024-10-09-10-50-05-b7d655cd.jpg",
  },
  {
    id: 33,
    nom: "Saint-Denis : une conférence des mamans pour sensibiliser",
    journal: "Imaz Press",
    lien: "https://imazpress.com/saint-denis-actualite/saint-denis-une-conference-des-mamans-pour-sensibiliser-a-l-acceptation-de-son-enfant-lgbt",
    date: "2024-10-10",
    image:
      "https://i.postimg.cc/dQbs0pxp/Whats-App-Image-2024-10-09-10-50-05-b7d655cd.jpg",
  },
  {
    id: 32,
    nom: "Saint-Denis : 1ère conférence des mamans d’enfants LGBT",
    journal: "Freedom",
    lien: "https://freedom.fr/saint-denis-1ere-conference-des-mamans-denfants-lgbt-pour-sensibiliser-et-partager-leurs-vecus/",
    date: "2024-10-09",
    image:
      "https://i.postimg.cc/dQbs0pxp/Whats-App-Image-2024-10-09-10-50-05-b7d655cd.jpg",
  },
  {
    id: 31,
    nom: "FAG-Fihavanana - partenariat entre La Réunion et Madagascar",
    journal: "Témoignages",
    lien: "https://www.temoignages.re/social/luttes-sociales/article/fag-fihavanana-l-evenement-qui-lance-le-partenariat-entre-associations-lgbt-de-la-reunion-et-de-madagascar,111592",
    date: "2024-09-11",
    image:
      "https://i.postimg.cc/T14TjHdL/Whats-App-Image-2024-09-08-23-39-00-0be8252c.jpg",
  },
  {
    id: 30,
    nom: "Partenariat entre associations LGBT de La Réunion et Madagascar",
    journal: "Parallèle Sud",
    lien: "https://parallelesud.com/un-evenement-lance-le-partenariat-entre-associations-lgbt-de-la-reunion-et-de-madagascar/",
    date: "2024-09-10",
    image:
      "https://i.postimg.cc/T14TjHdL/Whats-App-Image-2024-09-08-23-39-00-0be8252c.jpg",
  },
  {
    id: 29,
    nom: "Antananarivo : FAG-Fihavanana, l'événement qui rapproche",
    journal: "Imaz Press",
    lien: "https://imazpress.com/actus-reunion/antananarivo-fag-fihavanana-l-evenement-qui-rapproche-les-communautes-lgbt-reuionnaises-et-malgaches",
    date: "2024-09-09",
    image:
      "https://i.postimg.cc/T14TjHdL/Whats-App-Image-2024-09-08-23-39-00-0be8252c.jpg",
  },
  {
    id: 28,
    nom: "FAG-Fihavanana, partenariat entre La Réunion et Madagascar",
    journal: "Zinfos974",
    lien: "https://www.zinfos974.com/communique-fag-fihavanana-levenement-qui-lance-le-partenariat-entre-associations-lgbt-de-la-reunion-et-de-madagascar/",
    date: "2024-09-09",
    image:
      "https://i.postimg.cc/T14TjHdL/Whats-App-Image-2024-09-08-23-39-00-0be8252c.jpg",
  },
  {
    id: 27,
    nom: "Saint-André : un pique-nique arc-en-ciel contre les discriminations",
    journal: "Réunion Première",
    lien: "https://la1ere.francetvinfo.fr/reunion/mois-des-visibilites-lgbtqia-a-saint-andre-un-pique-nique-arc-en-ciel-contre-les-discriminations-1499387.html",
    date: "2024-06-23",
    image:
      "https://i.postimg.cc/c4x7HPF2/Pink-and-Green-Pretty-Illustrated-Picnic-Birthday-Party-Invitation-4.png",
  },
  {
    id: 26,
    nom: "Saint-André : un pique-nique arc-en-ciel ce dimanche",
    journal: "Imaz Press",
    lien: "https://imazpress.com/actus-reunion/saint-andre-un-pique-nique-arc-en-ciel-pour-rassembler-pendant-le-mois-des-visibilites",
    date: "2024-06-22",
    image:
      "https://i.postimg.cc/c4x7HPF2/Pink-and-Green-Pretty-Illustrated-Picnic-Birthday-Party-Invitation-4.png",
  },
  {
    id: 25,
    nom: "Saint-André : Le pique-nique arc-en-ciel revient",
    journal: "Linfo.re",
    lien: "https://www.linfo.re/la-reunion/societe/saint-andre-le-pique-nique-arc-en-ciel-ouvert-a-tous-revient-pour-une-deuxieme-edition",
    date: "2024-06-22",
    image:
      "https://i.postimg.cc/c4x7HPF2/Pink-and-Green-Pretty-Illustrated-Picnic-Birthday-Party-Invitation-4.png",
  },
  {
    id: 24,
    nom: "Un pique-nique arc-en-ciel ouvert à tous organisé par Pilon",
    journal: "Zinfos974",
    lien: "https://www.zinfos974.com/communique-un-pique-nique-arc-en-ciel-ouvert-a-tous-organise-par-lassociation-pilon/",
    date: "2024-06-19",
    image:
      "https://i.postimg.cc/c4x7HPF2/Pink-and-Green-Pretty-Illustrated-Picnic-Birthday-Party-Invitation-4.png",
  },
  {
    id: 23,
    nom: "Pique-nique arc-en-ciel : rendez-vous au parc du Colosse",
    journal: "Freedom",
    lien: "https://freedom.fr/pique-nique-arc-en-ciel-rendez-vous-au-parc-du-colosse-ce-juin/",
    date: "2024-06-19",
    image:
      "https://i.postimg.cc/c4x7HPF2/Pink-and-Green-Pretty-Illustrated-Picnic-Birthday-Party-Invitation-4.png",
  },
  {
    id: 22,
    nom: "St-Denis: le centre LGBT renaît de ses cendres",
    journal: "Le Quotidien Réunion",
    lien: "https://www.lequotidien.re/actualites/societe/st-denis-le-centre-lgbt-renait-de-ses-cendres/",
    date: "2024-06-18",
    image:
      "https://i.postimg.cc/T3ktfTGt/20240617-114715-666ff713387e6457826431.webp",
  },
  {
    id: 21,
    nom: "Saint-Denis : le centre LGBTQIA+ de la Source rouvre",
    journal: "Réunion Première",
    lien: "https://la1ere.francetvinfo.fr/reunion/saint-denis-apres-avoir-ete-incendie-le-centre-lgbtqia-de-la-source-rouvre-ce-lundi-1497575.html",
    date: "2024-06-17",
    image:
      "https://i.postimg.cc/T3ktfTGt/20240617-114715-666ff713387e6457826431.webp",
  },
  {
    id: 20,
    nom: "L'arc-en-ciel autour de l'île",
    journal: "JIR",
    lien: "#",
    date: "2024-06-03",
    image: "https://i.postimg.cc/kgsq4LQ5/IMG-9094.jpg",
  },
  {
    id: 19,
    nom: "Mois des visibilites LGBT : Un tour de l’île arc-en-ciel",
    journal: "Zinfos974",
    lien: "https://www.zinfos974.com/communique-mois-des-visibilites-lgbt-un-tour-de-lile-arc-en-ciel-organise-par-lassociation-pilon/",
    date: "2024-05-31",
    image: "https://i.postimg.cc/kgsq4LQ5/IMG-9094.jpg",
  },
  {
    id: 18,
    nom: "Journée contre les LGBT-phobies : l'arc-en-ciel autour de l'île",
    journal: "Clicanoo",
    lien: "https://www.clicanoo.re/article/societe/2024/06/03/journee-mondiale-contre-les-lgbt-phobies-larc-en-ciel-autour-de-lile-665d24945f4ba",
    date: "2024-06-03",
    image: "https://i.postimg.cc/kgsq4LQ5/IMG-9094.jpg",
  },
  {
    id: 17,
    nom: "Mois des visibilités : tour de l'île aux couleurs de l'arc-en-ciel",
    journal: "Imaz Press",
    lien: "https://imazpress.com/actus-reunion/mois-des-visibilites-tour-de-l-ile-aux-couleurs-de-l-arc-en-ciel",
    date: "2024-05-31",
    image: "https://i.postimg.cc/kgsq4LQ5/IMG-9094.jpg",
  },
  {
    id: 16,
    nom: "Mois des visibilités LGBT : Un tour de l’île arc-en-ciel",
    journal: "Freedom",
    lien: "https://freedom.fr/mois-visibilites-lgbt-un-tour-de-lile-arc-en-ciel-organise-par-lassociation-pilon/",
    date: "2024-06-02",
    image: "https://i.postimg.cc/kgsq4LQ5/IMG-9094.jpg",
  },
  {
    id: 15,
    nom: "Le Tour de l’île en Arc-en-ciel dans un Car Jaune !",
    journal: "Linfo.re",
    lien: "https://www.linfo.re/la-reunion/societe/le-tour-de-l-ile-en-arc-en-ciel-dans-un-car-jaune-ce-dimanche",
    date: "2024-05-31",
    image: "https://i.postimg.cc/kgsq4LQ5/IMG-9094.jpg",
  },
  {
    id: 14,
    nom: "Saint-Paul : point de départ d'un Tour de l'île arc-en-ciel",
    journal: "Imaz Press",
    lien: "https://imazpress.com/zoom/saint-paul-point-de-depart-d-un-tour-de-l-ile-arc-en-ciel-pour-le-mois-des-visibilites",
    date: "2024-06-02",
    image: "https://i.postimg.cc/kgsq4LQ5/IMG-9094.jpg",
  },
  {
    id: 13,
    nom: "Le premier événement LGBT dédié aux mamans à St-Pierre",
    journal: "Zinfos974",
    lien: "https://www.zinfos974.com/communique-le-premier-evenement-lgbt-dedie-aux-mamans-a-eu-lieu-samedi-dernier-a-st-pierre/",
    date: "2024-05-28",
    image: "https://i.postimg.cc/hv55JbCh/NZ64644.jpg",
  },
  {
    id: 12,
    nom: "Premier brunch arc-en-ciel à Saint Pierre",
    journal: "Le Quotidien Réunion",
    lien: "https://drive.google.com/file/d/1kIAmiVtkXtgidOZQzQ6ssgaQfDF0BYCd/view?usp=sharing",
    date: "2024-05-25",
    image: "https://i.postimg.cc/xj4x35R1/NZ64350.jpg",
  },
  {
    id: 11,
    nom: "Mois des visibilités LGBT : brunch arc-en-ciel spécial maman",
    journal: "Freedom",
    lien: "https://freedom.fr/mois-des-visibilites-lgbt-ce-samedi-25-mai-se-deroulera-la-toute-premiere-edition-du-brunch-arc-en-ciel-edition-speciale-maman/",
    date: "2024-05-25",
    image: "https://i.postimg.cc/2jgpSrgG/NZ64485.jpg",
  },
  {
    id: 10,
    nom: "Les associations LGBT réagissent à la visite d'Aurore Bergé",
    journal: "Réunion Première",
    lien: "https://la1ere.francetvinfo.fr/reunion/",
    date: "2024-04-25",
    image: "https://i.postimg.cc/L6LCcKph/Aurore-berge-twit.jpg",
  },
  {
    id: 9,
    nom: "Une mamie réunionnaise à l’élection de Miss Granny France 2025",
    journal: "Freedom",
    lien: "https://freedom.fr/une-mamie-reunionnaise-a-lelection-de-miss-granny-france-2025/",
    date: "2024-04-18",
    image:
      "https://i.postimg.cc/SQGPzT0Q/436403192-811119827706150-335417546137463676-n.jpg",
  },
  {
    id: 8,
    nom: "Le comité Miss Réunion apporte son soutien à la cause LGBT",
    journal: "Le Quotidien Réunion",
    lien: "https://www.lequotidien.re/actualites/societe/le-comite-miss-reunion-apporte-son-soutien-a-la-cause-lgbt/",
    date: "2023-11-06",
    image: "https://i.postimg.cc/t4dcwKSt/danavirincredit-IG.jpg",
  },
  {
    id: 7,
    nom: "Aziz Patel, Dana Virin et Miss Mamie soutiennent Pilon",
    journal: "Freedom",
    lien: "https://freedom.fr/aziz-patel-dana-virin-et-miss-mamie-sont-venus-venus-soutenir-la-communaut%C3%A9-lgbt-a-la-fete-dhalloween/",
    date: "2023-11-05",
    image:
      "https://i.postimg.cc/6p1ZW3m9/401779788-903067467891882-7564140371837527243-n.jpg",
  },
  {
    id: 6,
    nom: "Un kiki ball historique organisé pour Halloween",
    journal: "Le Quotidien Réunion",
    lien: "https://www.lequotidien.re/actualites/societe/un-kiki-ball-historique-organise-par-la-communaute-lgbt-de-la-reunion-pour-halloween/",
    date: "2023-10-25",
    image:
      "https://i.postimg.cc/52tvWvp7/400181114-903065651225397-2687283452702664236-n.jpg",
  },
  {
    id: 5,
    nom: "Un pique-nique arc-en-ciel pour sensibiliser à la tolérance",
    journal: "Le Quotidien Réunion",
    lien: "https://drive.google.com/file/d/1VCOJhqTFZiCjKAJcOwDMk3z5pDIc19ag/view?usp=sharing",
    date: "2023-06-12",
    image: "https://i.postimg.cc/vHzCDFyq/journal.png",
  },
  {
    id: 4,
    nom: "Pique-nique arc-en-ciel à St-Paul ouvert à tous ce 11 juin",
    journal: "Freedom",
    lien: "https://freedom.fr/pique-nique-arc-en-ciel-a-st-paul-levenement-lgbt-ouvert-a-tous-ce-11-juin/",
    date: "2023-06-11",
    image: "https://i.postimg.cc/brM8B7v9/IMG20230707193147.jpg",
  },
  {
    id: 3,
    nom: "Mois des fiertés : un pique-nique arc-en-ciel à Saint-Paul",
    journal: "Imaz Press",
    lien: "https://imazpress.com/zoom/saint-paul-1ere-edition-du-pique-nique-arc-en-ciel",
    date: "2023-06-08",
    image: "https://i.postimg.cc/90zC1mcf/IMG20230611171257.jpg",
  },
  {
    id: 2,
    nom: "Le pique-nique arc-en-ciel, l’évènement LGBT ouvert à tous",
    journal: "Zinfos974",
    lien: "https://www.zinfos974.com/le-pique-nique-arc-en-ciel-levenement-lgbt-ouvert-a-tous/",
    date: "2023-06-06",
    image: "https://i.postimg.cc/TwdRLjSg/IMG20230611125259.jpg",
  },
  {
    id: 1,
    nom: "Saint-Paul: première édition du pique-nique arc-en-ciel",
    journal: "Le Quotidien Réunion",
    lien: "https://www.lequotidien.re/actualites/societe/saint-paul-premiere-edition-du-pique-nique-arc-en-ciel/",
    date: "2023-06-06",
    image: "https://i.postimg.cc/LsfqBVNW/73323219-51029148.png",
  },
];

// --- LOGIQUE MEDIA TYPE ---
const getMediaType = (journal) => {
  const name = journal.toLowerCase();
  if (
    name.includes("première") ||
    name.includes("france info") ||
    name.includes("radio")
  )
    return "TV / Radio";
  if (
    name.includes("quotidien") ||
    name.includes("jir") ||
    name.includes("journal de l'île") ||
    name.includes("témoignages") ||
    name.includes("memento") ||
    name.includes("clicanoo")
  )
    return "Presse Écrite";
  return "Web";
};

function PressPage() {
  const [filterType, setFilterType] = useState("Tous");
  const [filterYear, setFilterYear] = useState("Toutes");
  const accentColor = "rgb(190, 3, 34)";

  const availableYears = useMemo(() => {
    const years = pressData.map((item) => item.date.split("-")[0]);
    return ["Toutes", ...new Set(years)].sort((a, b) => b - a);
  }, []);

  const types = ["Tous", "Presse Écrite", "Web", "TV / Radio"];

  const filteredData = useMemo(() => {
    return pressData
      .filter((item) => {
        const typeMatch =
          filterType === "Tous" || getMediaType(item.journal) === filterType;
        const yearMatch =
          filterYear === "Toutes" || item.date.startsWith(filterYear);
        return typeMatch && yearMatch;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [filterType, filterYear]);

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Helmet>
        <title>Espace Presse | Pilon</title>
      </Helmet>

      {/* --- HERO --- */}
      <section
        style={{
          height: "60vh",
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
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 1,
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070"
          alt="Presse"
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
              fontSize: "clamp(45px, 9vw, 85px)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Pilon dans les <span style={{ color: accentColor }}>médias</span>
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginTop: "20px",
              fontFamily: "var(--font-3)",
              fontWeight: "800",
            }}
          >
            <Hash size={18} color={accentColor} />
            <span style={{ fontSize: "18px", letterSpacing: "1px" }}>
              {filteredData.length} ARTICLES ARCHIVÉS
            </span>
          </div>
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

      {/* --- FILTRES --- */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "-50px auto 70px auto",
          position: "relative",
          zIndex: 10,
          padding: "0 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFF",
            padding: "25px",
            borderRadius: "12px",
            border: "2px solid #191919",
            boxShadow: "12px 12px 0px #191919",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "25px",
            }}
          >
            {/* CATEGORIES MEDIA */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {types.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setFilterType(cat)}
                  style={{
                    padding: "12px 22px",
                    border: "2px solid #191919",
                    borderRadius: "4px",
                    backgroundColor:
                      filterType === cat ? "#191919" : "transparent",
                    color: filterType === cat ? "#FFF" : "#191919",
                    cursor: "pointer",
                    fontSize: "11px",
                    fontWeight: "900",
                    textTransform: "uppercase",
                    transition: "0.2s",
                    letterSpacing: "1px",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* ANNEES */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-3)",
                  fontSize: "11px",
                  fontWeight: "900",
                  color: "#999",
                  textTransform: "uppercase",
                  marginRight: "5px",
                }}
              >
                Filtrer par année :
              </span>
              {availableYears.map((year) => (
                <button
                  type="button"
                  key={year}
                  onClick={() => setFilterYear(year)}
                  style={{
                    padding: "8px 16px",
                    border: "1.5px solid #E0E0E0",
                    borderRadius: "4px",
                    backgroundColor:
                      filterYear === year ? accentColor : "transparent",
                    color: filterYear === year ? "#FFF" : "#191919",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "800",
                    transition: "0.2s",
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- GRILLE D'ARTICLES --- */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px 100px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "40px",
          }}
        >
          {filteredData.map((article) => {
            const mediaType = getMediaType(article.journal);
            return (
              <a
                key={article.id}
                href={article.lien}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#FFF",
                  border: "1px solid #EEE",
                  borderRadius: "8px",
                  overflow: "hidden",
                  textDecoration: "none",
                  transition: "0.3s",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative", height: "240px" }}>
                  <img
                    src={article.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      backgroundColor: "rgba(255,255,255,0.95)",
                      color: "#191919",
                      padding: "6px 12px",
                      fontSize: "10px",
                      fontWeight: "900",
                      borderRadius: "4px",
                      textTransform: "uppercase",
                      border: "1px solid #191919",
                    }}
                  >
                    {mediaType}
                  </div>
                </div>

                <div
                  style={{
                    padding: "25px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: accentColor,
                      fontSize: "12px",
                      fontWeight: "800",
                      marginBottom: "15px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    <Calendar size={14} />{" "}
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-0)",
                      fontSize: "26px",
                      color: "#191919",
                      margin: "0 0 20px 0",
                      lineHeight: "1",
                      textTransform: "uppercase",
                    }}
                  >
                    {article.nom}
                  </h3>

                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid #F5F5F5",
                      paddingTop: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        color: "#555",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {mediaType === "Presse Écrite" ? (
                        <Newspaper size={16} />
                      ) : mediaType === "Web" ? (
                        <Globe size={16} />
                      ) : (
                        <Tv size={16} />
                      )}
                      {article.journal}
                    </div>
                    <div
                      style={{
                        color: "#191919",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "12px",
                        fontWeight: "800",
                      }}
                    >
                      LIRE <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* --- FOOTER PRESSE --- */}
      <section
        style={{
          borderTop: "1px solid #EEE",
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#FDFDFD",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-0)",
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          ESPACE MÉDIA
        </h2>
        <p
          style={{
            fontFamily: "var(--font-3)",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Vous êtes journaliste ? Contactez-nous pour toute demande d'interview
          ou de reportage.
        </p>
        <a
          href="mailto:contact@pilon.re"
          style={{
            backgroundColor: "#191919",
            color: "#FFF",
            padding: "18px 35px",
            borderRadius: "4px",
            textDecoration: "none",
            fontFamily: "var(--font-3)",
            fontWeight: "900",
            textTransform: "uppercase",
            fontSize: "14px",
          }}
        >
          Nous contacter
        </a>
      </section>
    </div>
  );
}

export default PressPage;
