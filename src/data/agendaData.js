import couture from "../assets/couture.jpg";
import out from "../assets/out.jpg";
import maloya from "../assets/maloya2.jpg";
import cuisine from "../assets/cuisine.jpg";
import cuisine2 from "../assets/cuisine4.jfif";
import gbp from "../assets/logo.png";

const agendaData = [
  // --- ANNÉE 2024 ---
  {
    id: 2411,
    nom: "Le tour de l'île arc-en-ciel",
    type: "Tournée",
    date: "2024-05-15", // Date estimée basée sur la saison des marches
    lieux: "Toute l'île",
    horaires: "Journée",
    organisateur: "Pilon",
    description:
      "Parce que le Tour de l'île fait partie intégrante de la culture réunionnaise, nous proposons un tour aux couleurs de l'arc-en-ciel pour découvrir les paysages et faire la fête.",
    image:
      "https://i.postimg.cc/cCzb4VHb/474450891-122182142270090035-5365895623819231331-n.jpg",
    galerie: [
      "https://i.postimg.cc/N0xYKSRM/IMG-8896.jpg",
      "https://i.postimg.cc/fRnhBDKy/IMG-8920.jpg",
      "https://i.postimg.cc/jjRYYcBr/IMG-8924.jpg",
      "https://i.postimg.cc/bvLcybjS/IMG-8927.jpg",
    ],
    video: "https://www.youtube.com/embed/DIVRbqpW6D4?si=dKjOLzPuFSCCmBdM",
  },
  {
    id: 2412,
    nom: "Le brunch arc-en-ciel",
    type: "Brunch",
    date: "2024-06-02",
    lieux: "La Réunion",
    organisateur: "Pilon",
    description:
      "Moment festif et gourmand mélangeant petit-déjeuner et déjeuner, avec une touche de créolité en partenariat avec des entreprises locales.",
    image:
      "https://i.postimg.cc/rmZPFctt/pexels-sebastian-coman-photography-3475617.jpg",
  },
  {
    id: 2413,
    nom: "Le pique-nique arc-en-ciel II",
    type: "Pique-Nique",
    date: "2024-07-20",
    lieux: "Parc Du Colosse, St André",
    organisateur: "Pilon",
    description:
      "Seconde édition mettant en lumière la culture malbar : danses indiennes, bonbons kalou et ladou au programme.",
    image: "https://i.postimg.cc/vBx2WPxZ/IMG-1328.jpg",
  },
  {
    id: 2414,
    nom: "Le drapeau arc-en-ciel géant",
    type: "Action",
    date: "2024-05-18",
    lieux: "St Denis / Paris / Maurice",
    organisateur: "Pilon & IVA Signature",
    description:
      "Fabrication d'un drapeau de 10 mètres ayant voyagé de la marche de St-Denis jusqu'à Paris et Maurice, signé par des artistes comme Billal Hassani.",
    image: "https://i.postimg.cc/qRcbbNwP/IMG-9422.jpg",
  },
  {
    id: 2415,
    nom: "FAG-Fihavanana",
    type: "Solidarité",
    date: "2024-08-15",
    lieux: "Madagascar",
    organisateur: "Pilon",
    description:
      "Événement symbolisant l'amitié et la coopération entre les organisations LGBT malgaches et réunionnaises.",
    image: "https://i.postimg.cc/hvBvLtPZ/tggggg.jpg",
  },
  {
    id: 2416,
    nom: "Conférence des mamans",
    type: "Éducation",
    date: "2024-09-10",
    lieux: "Université de La Réunion",
    organisateur: "Pilon",
    description:
      "Partage de vécus entre mamans d'enfants LGBT pour sensibiliser les parents et donner espoir aux jeunes.",
    image: "https://i.postimg.cc/NMVMn00x/conference-des-mamans.jpg",
  },
  {
    id: 2417,
    nom: "Rainbow party",
    type: "Fête",
    date: "2024-10-05",
    lieux: "Université de La Réunion",
    organisateur: "Pilon & K-Univ",
    description:
      "Show de danse, défilé, séga et Kpop réunissant plus de 600 personnes avec Virtual Malicia et Sheina.",
    image: "https://i.postimg.cc/13ZB8GQD/kiki-ball.jpg",
  },
  {
    id: 2418,
    nom: "Pique-nique arc-en-ciel à Maurice",
    type: "Voyage",
    date: "2024-10-20",
    lieux: "Maurice",
    organisateur: "Pilon",
    description:
      "Première édition mauricienne du pique-nique solidaire, adaptée aux réalités locales.",
    image:
      "https://i.postimg.cc/GpgvxYZ7/Whats-App-Image-2024-10-22-21-39-58-b1c6b8b2-1-1.jpg",
  },
  {
    id: 2628,
    nom: "Fête Kaf",
    type: "Culture",
    date: "2025-12-20",
    lieux: "Saint-Denis",
    organisateur: "Académie des Camélias",
    description: "Défilé de commémoration avec nos partenaires.",
    image: maloya,
  },
  {
    id: 2628,
    nom: "Fête Kaf",
    type: "Culture",
    date: "2024-12-20",
    lieux: "Saint-Denis",
    organisateur: "Académie des Camélias",
    description: "Défilé de commémoration avec nos partenaires.",
    image: maloya,
  },
  {
    id: 2419,
    nom: "Back to School Kiki Ball",
    type: "Culture",
    date: "2024-11-15",
    lieux: "Université",
    organisateur: "Pilon",
    description:
      "Kiki Ball sur le thème de l'école : catégories professeurs, cantinières et sorties piscine dans une ambiance bienveillante.",
    image:
      "https://i.postimg.cc/v8V554Xh/462197235-1083181743203135-8217061405662515869-n-6707e835a7ec7113274980-1.jpg",
  },

  // --- ANNÉE 2023 ---
  {
    id: 2311,
    nom: "Le pique-nique arc-en-ciel I",
    type: "Pique-Nique",
    date: "2023-06-11",
    lieux: "La Réunion",
    organisateur: "Pilon",
    description:
      "Mise en avant du pique-nique créole dans un environnement queer et familial, ouvert à toutes et tous.",
    image: "https://i.postimg.cc/zGZSzTsw/73323219-51029148.png",
    galerie: [
      "https://i.postimg.cc/0QBr2rL5/IMG20230611125259.jpg",
      "https://i.imgur.com/QuQ0qMX.jpg",
      "https://i.postimg.cc/GtTtBdCF/journal.png",
    ],
  },
  {
    id: 2312,
    nom: "Le kiki ball d'Halloween",
    type: "Culture",
    date: "2023-10-31",
    lieux: "St Denis",
    organisateur: "Pilon",
    description:
      "Premier événement queer d'Halloween sur l'île avec un jury de prestige incluant Miss Réunion 2021 et Miss Mamie St Denis.",
    image:
      "https://i.postimg.cc/vBhbB724/400181114-903065651225397-2687283452702664236-n.jpg",
    video: "https://www.youtube.com/embed/wXiuykV-teA?si=vgZxIlXaDbkdNeqt2",
  },
  {
    id: 2313,
    nom: "Le fonnkèr Kwir",
    type: "Culture",
    date: "2023-12-10",
    lieux: "Kabar Défilé",
    organisateur: "Pilon",
    description:
      "Poème en créole dédié à la communauté, traitant de l'acceptation de soi. Prix coup de cœur du jury pour Terry Grimoire.",
    image: "https://i.postimg.cc/jdFN2PB3/fonker.jpg",
    video: "https://www.youtube.com/embed/kqns4HcsrYo?si=cDXG9fN_9SKM5teZ",
  },
  // --- ACTIONS RÉCURRENTES (Mise à jour 2026) ---
  {
    id: 100,
    nom: "Maloya Kwir",
    type: "Culture",
    date: null,
    horaires: "de 18h00 à 20h00",
    isRecurrent: true,
    reccurence: "Tous les jeudis",
    lieux: "Académie des Camélias",
    organisateur: "Groupe Milé",
    prix: "Gratuit",
    description:
      "Nous apprenons à jouer du maloya tous les jeudis accompagné par des membres du groupe Milé.",
    lien: "https://www.helloasso.com/associations/pilon/adhesions/adherer-a-l-association",
    image: "https://i.postimg.cc/76G7rcpd/maloya2-B5P2h-TIz.jpg",
  },
  {
    id: 101,
    nom: "Volley Rose",
    type: "Sport",
    date: null,
    reccurence: "Tous les mardis",

    horaires: "18h à 20h",
    isRecurrent: true,
    lieux: "Terrain de Beach Volley de la Trinité",
    organisateur: "Alexandre / Pilon Sport",
    prix: "Gratuit",
    description:
      "Sport collectif inclusif à la Trinité pour tous les niveaux. COMPLET",
    image: "https://images.unsplash.com/photo-1592656094267-764a45160876",
  },
  {
    id: 102,
    nom: "Allons danse séga",
    type: "Culture",
    reccurence: "Tous les mercredis",
    date: null,
    horaires: "Mercredis de 18h à 20h",
    isRecurrent: true,
    lieux: "Centre LGBT Nord",
    organisateur: "Maelle / Pilon",
    description:
      "Nous dansons le séga et le maloya au Centre LGBT Nord de La Réunion.",
    image: "https://i.postimg.cc/xdqNLhTk/jupe2-B2v44Cyk.jpg",
  },

  // --- PROCHAINEMENT (Ateliers & Sorties) ---

  // --- AVRIL 2026 ---
  {
    id: 2606,
    nom: "Brunch de Pâques",
    type: "Brunch",
    date: "2026-04-04",
    horaires: "11h",
    lieux: "Centre LGBT Nord Réunion",
    prix: "15€ (adhérent)",
    organisateur: "Pilon",
    description:
      "Brunch solidaire pour financer la participation aux Gay Games.",
    image: "https://i.postimg.cc/W4pC8mQn/IMG-20260404-131806-1.jpg",
  },
  {
    id: 2607,
    nom: "Camping Arc-en-ciel",
    type: "Loisir",
    date: "2026-04-17",
    horaires: "- 18 avril - 19 avril",
    lieux: "Extérieur",
    organisateur: "Pilon",
    description:
      "Week-end camping avec une grande soirée Cowboy le samedi soir.",
    image: "https://i.postimg.cc/HW8K6khT/camp.jpg",
  },
  {
    id: 2608,
    nom: "Atelier Couture",
    type: "Atelier",
    date: "2026-04-25",
    horaires: "14h",
    lieux: "Centre LGBT Nord Réunion",
    description: "Confection et partage autour de la couture.",
    image: couture,
  },

  // --- MAI 2026 ---
  {
    id: 2609,
    nom: "Marche des Visibilités",
    type: "Marche",
    date: "2026-05-17",
    horaires: "3 jours",
    lieux: "Saint-Denis",
    description:
      "3 jours de fête, restitution Maloya Kwir, vente de goodies et jupes maloya.",
    image: "https://i.postimg.cc/cCvFjXmt/25-tourile-reunion-49.jpg",
  },
  {
    id: 2610,
    nom: "Soirée Pyjama au centre lgbt",
    type: "Ciné",
    date: "2026-05-22",
    horaires: "Soirée",
    lieux: "Centre LGBT",
    description:
      "Visionnage du film 'Kwir nou exist' en mode cocooning. (Date à confirmer).",
    image:
      "https://i.postimg.cc/bNHm5D0T/669076262-3514012565403734-3048160929028898783-n.jpg",
  },
  {
    id: 2611,
    nom: "Brunch Arc-en-ciel des Familles",
    type: "Brunch",
    date: "2026-05-30",
    horaires: "11h",
    lieux: "Saint-Denis",
    description:
      "Édition spéciale pour mettre en avant nos parents, grands-parents et proches.",
    image: "https://i.postimg.cc/YSj8jd5Z/IMG-20260404-124537-1.jpg",
  },

  // --- JUIN 2026 ---
  {
    id: 2612,
    nom: "Tour de l'île en Car Jaune",
    type: "Tournée",
    date: "2026-06-07",
    lieux: "Toute l'île",
    description:
      "Tour de l'île arc-en-ciel édition spéciale les hauts, en collaboration avec Car Jaune et La Région Réunion.",
    image: "https://i.postimg.cc/fyvY8X4w/25-tourile-reunion-82.jpg",
  },
  {
    id: 2613,
    nom: "Pique-nique à Cilaos",
    type: "Pique-Nique",
    date: "2026-06-20",
    lieux: "Cilaos",
    description: "Moment de convivialité dans les hauts.",
    image: out,
  },
  {
    id: 2614,
    nom: "Marche de St-Pierre",
    type: "Marche",
    date: "2026-06-27",
    lieux: "Saint-Pierre",
    description: "Visibilité et fierté dans le Sud.",
    image:
      "https://i.postimg.cc/Y04xpTqv/Whats-App-Image-2025-05-02-14-04-32-ef6485b6.jpg",
  },

  {
    id: 2616,
    nom: "Spectacle maloya kwir",
    type: "Voyage",
    date: "2026-06-25",
    horaires: "7 jours",
    lieux: "Nantes",
    description: "Restitution spectacle Maloya Kwir et échange culturel.",
    image: maloya,
  },

  // --- JUILLET 2026 ---
  {
    id: 2617,
    nom: "Gay Games Valencia",
    type: "Sport",
    date: "2026-07-01",
    horaires: "4 jours",
    lieux: "Valence, Espagne",
    description: "Participation de la délégation réunionnaise aux Gay Games.",
    image:
      "https://scontent.frun3-2.fna.fbcdn.net/v/t39.30808-6/647351200_122250803960250378_5653534193130827254_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=xzTV66QKM70Q7kNvwEjeTTI&_nc_oc=AdoxzHE320UjlumvYKG7b-DREJCxBx7wLCR79JWol4pUMrOZYcKFPzDPviwO9JgBN40&_nc_zt=23&_nc_ht=scontent.frun3-2.fna&_nc_gid=oJMNu9WPuxC5Q9dnUrVuHw&_nc_ss=7a3a8&oh=00_Af3DpSnBwwmxWUedIFybAyBlx4aSPOMSrZzXZCy0IyZhqg&oe=69E0B3C7",
  },
  {
    id: 2618,
    nom: "Pique-nique arc-en-ciel Nantes",
    type: "Pique-Nique",
    date: "2026-07-05",
    lieux: "Nantes",
    description: "Partage créole avec la communauté nantaise.",
    image:
      "https://asset-prod.france.fr/Adobe_Stock_369913603_Editorial_Use_Only_2_b21813ce36.jpeg",
  },
  {
    id: 2619,
    nom: "Anniversaire Pilon : 5 ans",
    type: "Fête",
    date: "2026-07-11",
    lieux: "Centre LGBT",
    description:
      "Fête arc-en-ciel édition spéciale pour les 5 ans de l'association.",
    image:
      "https://scontent.frun3-2.fna.fbcdn.net/v/t39.30808-6/586562342_767510699688261_5450647960444737166_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=2GFL1wJEVIwQ7kNvwH82u1a&_nc_oc=Adrnm-DJITaNwOVgibGbXXL1x3ukb2KB7hExMVr80t6Dmeaj-Bxv2r3vovDRwPHaWP0&_nc_zt=23&_nc_ht=scontent.frun3-2.fna&_nc_gid=50w3QXgwe56h316Tpvy_zw&_nc_ss=7a3a8&oh=00_Af0VZ_Ec_1_Op4pqG3mlQwc-bxUA9yLQ1eX0U80bk6J5vA&oe=69E0C986",
  },

  // --- SEPTEMBRE 2026 ---
  {
    id: 2620,
    nom: "Atelier Cuisine",
    type: "Atelier",
    date: "2026-09-05",
    lieux: "Centre LGBT Nord Réunion",
    description: "Cuisine solidaire et partage de recettes.",
    image: cuisine,
  },
  {
    id: 2621,
    nom: "Global Black Pride",
    type: "Marche",
    date: "2026-09-09",
    horaires: "5 jours",
    lieux: "Paris",
    description: "Participation à l'événement mondial de la Black Pride.",
    image: gbp,
  },

  // --- OCTOBRE 2026 ---
  {
    id: 2623,
    nom: "Atelier Cuisine",
    type: "Atelier",
    date: "2026-10-03",
    lieux: "Centre LGBT Nord Réunion",
    description: "Atelier gourmand mensuel.",
    image: cuisine2,
  },
  {
    id: 2624,
    nom: "la conférence des papas",
    type: "Éducation",
    date: "2026-10-15",
    horaires: "09h-20h",
    lieux: "Université",
    description:
      "Village associatif la journée et conférence des papas le soir.",
    image:
      "https://i.postimg.cc/d3MK5kRq/pexels-juicemitapfelndrin-30561676.jpg",
  },
  {
    id: 2625,
    nom: "Soirée Halloween",
    type: "Fête",
    date: "2026-10-31",
    lieux: "Centre LGBT",
    description: "Le rendez-vous incontournable pour fêter Halloween ensemble.",
    image: "https://i.postimg.cc/L6tm0Tb9/pexels-cottonbro-5435309.jpg",
  },

  // --- NOVEMBRE 2026 ---
  {
    id: 2626,
    nom: "Semaine du Vivre Ensemble",
    type: "Culture",
    date: "2026-11-09",
    horaires: "7 jours",
    lieux: "Académie des Camélias",
    description:
      "Construction d'un drapeau géant en fleurs de papier et spectacle sur les discriminations.",
    image:
      "https://i.postimg.cc/N0Sh09zM/574083840-17970134495981441-501040680738718956-n.jpg",
  },
  {
    id: 2627,
    nom: "Séjour à Maurice",
    type: "Voyage",
    date: "2026-11-19",
    horaires: "4 jours",
    lieux: "Maurice",
    description:
      "Organisation du traditionnel pique-nique arc-en-ciel mauricien.",
    image:
      "https://i.postimg.cc/GpgvxYZ7/Whats-App-Image-2024-10-22-21-39-58-b1c6b8b2-1-1.jpg",
  },

  // --- DÉCEMBRE 2026 ---
  {
    id: 2628,
    nom: "Fête Kaf",
    type: "Culture",
    date: "2026-12-20",
    lieux: "Saint-Denis",
    organisateur: "Académie des Camélias",
    description: "Défilé de commémoration avec nos partenaires.",
    image: maloya,
  },
  {
    id: 2629,
    nom: "Repas de Noël des bénévoles",
    type: "Fête",
    date: "2026-12-27",
    lieux: "Centre LGBT Nord Réunion",
    description: "Moment de partage et de remerciement pour l'équipe bénévole.",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543",
  },

  {
    id: 2511,
    nom: "Tour de l’île Arc-en-ciel - 2ème édition",
    type: "Tournée",
    date: "2025-05-03",
    lieux: "Toute l'île (Car Jaune)",
    organisateur: "Pilon",
    description:
      "Lancement du Mois des Fiertés avec un tour de l'île inclusif et intergénérationnel pour porter haut les couleurs de la diversité.",
    lien: "https://www.linfo.re/la-reunion/societe/mois-des-fiertes-lgbt-le-tour-de-l-ile-arc-en-ciel-revient-pour-une-seconde-edition",
    image: "https://i.postimg.cc/LX5KL9Zx/IMG-9315.jpg",
  },
  {
    id: 2512,
    nom: "Brunch Intergénérationnel",
    type: "Brunch",
    date: "2025-06-01",
    horaires: "11h",
    lieux: "Saint-Denis",
    organisateur: "Pilon",
    description:
      "Un moment de partage entre les générations pour briser la solitude et célébrer l'amour sous toutes ses formes.",
    lien: "https://freedom.fr/un-brunch-intergenerationnel-pour-briser-la-solitude-et-celebrer-lamour-sous-toutes-ses-formes-le-1er-juin-a-saint-denis/",
    image: "https://i.postimg.cc/9FrGdD8j/25-tourile-reunion-146.jpg",
  },
  {
    id: 2513,
    nom: "La Fête Arc-en-Ciel",
    type: "Fête",
    date: "2025-06-07",
    lieux: "Débarcadère, Saint-Paul",
    organisateur: "Pilon",
    description:
      "Événement inédit illuminant le front de mer de Saint-Paul, placé sous le signe de la fierté et de la visibilité LGBT+.",
    lien: "https://imazpress.com/zoom/saint-paul-la-fete-de-l-arc-en-ciel-illumine-le-debarcadere",
    image: maloya,
  },
  {
    id: 2514,
    nom: "Pique-nique Arc-en-ciel - 3ème édition",
    type: "Pique-Nique",
    date: "2025-06-21",
    lieux: "Front de mer, Le Port",
    organisateur: "Pilon / Ville du Port",
    description:
      "Clôture du mois des visibilités avec un grand rassemblement convivial sur le front de mer du Port.",
    lien: "https://www.zinfos974.com/clap-de-fin-pour-le-mois-des-fiertes-lgbt-une-troisieme-edition-du-pique-nique-arc-en-ciel-au-port/",
    image:
      "https://i.postimg.cc/Hk89grX2/zinfos974-clap-de-fin-pour-le-mois-des-fiertes-lgbt-une-troisieme-edition-du-pique-nique-arc-en-ciel.webp",
  },
  {
    id: 2515,
    nom: "Ron’Kozé Ban Gramoun",
    type: "Éducation",
    date: "2025-10-04",
    lieux: "Université de La Réunion",
    organisateur: "Pilon",
    description:
      "Conférence inédite où les séniors prennent la parole sur les thématiques LGBT+ pour sensibiliser le public universitaire.",
    lien: "https://imazpress.com/actus-reunion/ron-koze-ban-gramoun-les-seniors-parlent-de-lgbt-a-l-universite",
    image:
      "https://i.postimg.cc/7ZBMWwRv/Whats-App-Image-2025-05-21-08-58-01-65468dcb.jpg",
  },
  {
    id: 2516,
    nom: "Grand Week-end du Vivre Ensemble",
    type: "Culture",
    date: "2025-11-14",
    horaires: "2 jours",
    lieux: "Saint-Denis / Académie des Camélias",
    organisateur: "Pilon / Académie des Camélias",
    description:
      "Événement citoyen invitant les Réunionnais à composer ensemble un drapeau géant, symbole de tolérance et de cohésion.",
    lien: "https://www.memento.fr/article_05-11-2025-le-grand-week-end-du-vivre-ensemble-deux-jours-pour-redefinir-la-tolerance-a-la-reunion",
    image:
      "https://i.postimg.cc/N0Sh09zM/574083840-17970134495981441-501040680738718956-n.jpg",
  },
  {
    id: 2517,
    nom: "Pique-nique Arc-en-ciel à Maurice - 2ème édition",
    type: "Voyage",
    date: "2025-11-23",
    lieux: "Maurice",
    organisateur: "Pilon",
    description:
      "Exportation du concept de pique-nique solidaire à l'île Maurice pour renforcer les liens régionaux de la communauté.",
    lien: "https://freedom.fr/lgbt-pilon-a-exporte-la-seconde-edition-du-pique-nique-arc-en-ciel-a-maurice-photos/",
    image: "https://i.postimg.cc/qRcbbNwP/IMG-9422.jpg",
  },
  {
    id: 2620,
    nom: "Atelier Cuisine",
    type: "Atelier",
    date: "2026-03-14",
    lieux: "Centre LGBT Nord Réunion",
    description: "Cuisine solidaire et partage de recettes.",
    image: cuisine,
  },
  {
    id: 2620,
    nom: "Atelier Cuisine",
    type: "Atelier",
    date: "2026-02-07",
    lieux: "Centre LGBT Nord Réunion",
    description: "Cuisine solidaire et partage de recettes.",
    image: cuisine,
  },
  {
    id: 2620,
    nom: "Atelier Cuisine",
    type: "Atelier",
    date: "2026-01-10",
    lieux: "Centre LGBT Nord Réunion",
    description: "Cuisine solidaire et partage de recettes.",
    image: cuisine,
  },
  {
    id: 2608,
    nom: "Atelier Couture",
    type: "Atelier",
    date: "2026-03-21",
    horaires: "14h",
    lieux: "Centre LGBT Nord Réunion",
    description: "Confection et partage autour de la couture.",
    image: couture,
  },
  {
    id: 2608,
    nom: "Atelier Couture",
    type: "Atelier",
    date: "2026-02-21",
    horaires: "14h",
    lieux: "Centre LGBT Nord Réunion",
    description: "Confection et partage autour de la couture.",
    image: couture,
  },
  {
    id: 2608,
    nom: "Atelier Couture",
    type: "Atelier",
    date: "2026-01-24",
    horaires: "14h",
    lieux: "Centre LGBT Nord Réunion",
    description: "Confection et partage autour de la couture.",
    image: couture,
  },
];

export default agendaData;
