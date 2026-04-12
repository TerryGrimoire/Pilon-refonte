import centre from "../assets/lecentre.jpg";
import psy from "../assets/psy.jpg";
import depistage from "../assets/depistage.jpg";
import formation from "../assets/formation.jpg";

const centreLGBT = [
  {
    id: 1,
    titre: "Les centres LGBT de La Réunion",
    description:
      "A La Réunion, il existe deux centres LGBT : celui du Nord, porté par l'association Pilon et celui du sud porté par Le Planning Familial. Chaque centre LGBT réunit plusieurs associations qui gouvernent ensemble. Dans le Nord, les associations sont Pilon, Timizé, Requeer et Kwir Mouvman.",
    image: centre,
    lien: "/centre",
  },
  {
    id: 2,
    titre: "Le club des mamies",
    description:
      "Un club des mamies isolées et qui souhaitent sociabiliser directement intégré et mélangé au public LGBT dans une optique de créer un échange intergénérationnel.",
    image: psy,
    lien: "/Mamies",
  },
  {
    id: 3,
    titre: "Une foire aux questions",
    description:
      "Que vous soyez vous même LGBT ou si vous avez un proche LGBT, on se pose souvent des questions. Notre foire aux questions a été conçue dans l'espoir de pouvoir répondre à ces questions qu'on se pose et dont on a du mal à trouver la réponse. ",
    image: depistage,
    lien: "/FAQ",
  },
  {
    id: 4,
    titre: "Des articles dans les médias",
    description:
      "La plupart de nos événements sont médiatisés dans la presse écrite et/ou à la télévision. Vous pouvez retrouver l'intégralité des articles de presse sur notre site internet. Nos passages à la télévision sont à retrouver sur notre page Youtube.",
    image: formation,
    lien: "/Presse",
  },
];

export default centreLGBT;
