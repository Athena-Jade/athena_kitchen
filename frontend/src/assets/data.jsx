import img_header from "./img_header.jpg";
import brioche from "./brioche.jpg";
import cake_choco from "./cake_choco.jpg";
import cake_marbre from "./cake_marbre.jpg";
import fondant_choco from "./fondant_choco.jpg";
import mousse_choco from "./mousse_choco.jpg";
import curry from "./curry.jpg";
import spaghetti from "./spaghetti.jpg";
import crepe_salee from "./crepe_salee.jpg";
import gauffre_salee from "./gauffre_salee.jpg";
import quiche from "./quiche.jpg";

import pic_1 from "./pic_1.png"
import propos from "./propos.jpg"
import contact from "./contact.jpg"

import cat_sucrees from "./cat_sucrees.jpg";
import cat_salees from "./cat_salees.jpg";

export const data = {
  img_header,
  brioche,
  cake_choco,
  cake_marbre,
  fondant_choco,
  mousse_choco,

  curry,
  spaghetti,
  crepe_salee,
  gauffre_salee,
  quiche,
  pic_1,
  propos,
  contact,

  cat_salees,
  cat_sucrees,
};

//le filtre ok
export const menu_list = [
  {
    menu_name: "Sucrées", //category
    image: cat_sucrees,
  },
  {
    menu_name: "Salées",
    image: cat_salees,
  },
];

// la liste images
export const img_recipe = [
  {
    image: cake_choco,
    name: "cake chocolat",
  },
  {
    image: cake_marbre,
    name: "cake marbre",
  },
  {
    image: fondant_choco,
    name: "fondant chocolat",
  },
  {
    image: mousse_choco,
    name: "mousse chocolat",
  },
  {
    image: brioche,
    name: "brioche",
  },
];


//les détails d'une recette
export const recipe_details = [
  {
    _id: "1",
    name: "cake chocolat",
    nombre: 5,
    image: cake_choco,
    preparation: 37,
    cuisson: 18,
    thermostat: 165,
    ingredient1:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient2:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient3:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient4:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient5:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient6:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient7:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    description1:
      "Préchauffage four th 6 (200°),Faites fondre le chocolat avec le beurre environ ",
    description2:
      "Préchauffage four th ule à manqué de 20 cm, Versez la préparation ",
    description3: "Préchauffage four th 6 (200°),Faites fondre le chocolat ",
    description4: "Préchauffage four th 6 (200°),Faites fondre le chocolat",
    description5: "Préchauffage four th 6 (200°),Faites fondre le chocolat",
    description6: "Préchauffage four th 6 (200°),Faites fondre le chocolat ",
    description7: "Préchauffage four th 6 (200°),Faites fondre le ",
    category: "Sucrées",
  },

  {
    _id: "2",
    name: " cake_marbre",
    nombre: 5,
    image: cake_marbre,
    preparation: 10,
    cuisson: 50,
    thermostat: 165,
    ingredient1:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient2:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient3:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient4:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient5:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient6:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient7:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    description1:
      "Préchauffage four th 6 (200°),Faites fondre le chocolat avec le beurre environ ",
    description2:
      "Préchauffage four th ule à manqué de 20 cm, Versez la préparation ",
    description3: "Préchauffage four th 6 (200°),Faites fondre le chocolat ",
    description4: "Préchauffage four th 6 (200°),Faites fondre le chocolat",
    description5: "Préchauffage four th 6 (200°),Faites fondre le chocolat",
    description6: "Préchauffage four th 6 (200°),Faites fondre le chocolat ",
    description7: "Préchauffage four th 6 (200°),Faites fondre le ",

    category: "Sucrées",
  },

  {
    _id: "3",
    name: "fondant_choco,",
    nombre: 5,
    image: fondant_choco,
    preparation: 10,
    cuisson: 50,
    thermostat: 165,
    ingredient1:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient2:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient3:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient4:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient5:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient6:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    ingredient7:
      "120g farine, 120g beurre, 4 oeufs, 80g sucre, 1 sachet levure",
    description1:
      "Préchauffage four th 6 (200°),Faites fondre le chocolat avec le beurre environ ",
    description2:
      "Préchauffage four th ule à manqué de 20 cm, Versez la préparation ",
    description3: "Préchauffage four th 6 (200°),Faites fondre le chocolat ",
    description4: "Préchauffage four th 6 (200°),Faites fondre le chocolat",
    description5: "Préchauffage four th 6 (200°),Faites fondre le chocolat",
    description6: "Préchauffage four th 6 (200°),Faites fondre le chocolat ",
    description7: "Préchauffage four th 6 (200°),Faites fondre le chocolat",

    category: "Salées",
  },
];


export const data_qui=[
  {     
    name:"Athena",  
    image:pic_1,
    descr1:"Je vis en Région Parisienne ,et souhaite vous partager mes intérêts pour la cuisine.",
    descr2:"J'ai appris à cuisiner en regardant mes parents, et lors de mes différents voyages à l'étranger.", 
    descr3:"Cuisiner de bons petits plats, c'est ce que je vous propose sur mon site toutes les semaines, je publierai une recette.",
    descr4:"Alors, n'hésitez pas à me laisser un message pour me donner votre avis."
  }
]