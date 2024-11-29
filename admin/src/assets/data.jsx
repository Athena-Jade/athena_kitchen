import img_header from "./img_header.jpg";
import brioche from "./brioche.jpg";
import cake_choco from "./cake_choco.jpg";
import cake_marbre from "./cake_marbre.jpg";
import fondant_choco from "./fondant_choco.jpg";
import mousse_choco from "./mousse_choco.jpg";

import cat_breakfast from "./cat_breakfast.jpg";
import cat_dessert from "./cat_dessert.jpg";

export const data = {
  img_header,
  brioche,
  cake_choco,
  cake_marbre,
  fondant_choco,
  mousse_choco,

  cat_breakfast,
  cat_dessert,
};

//le filtre ok
export const menu_list = [
  {
    menu_name: "Dessert", //category
    image: cat_dessert,
  },
  {
    menu_name: "Breakfast",
    image: cat_breakfast,
  },
];

// la liste images
export const img_recipe = [
  {
    image: cake_choco,
    cat_name: "cake chocolat",
  },
  {
    image: cake_marbre,
    cat_name: "cake marbre",
  },
  {
    image: fondant_choco,
    cat_name: "fondant chocolat",
  },
  {
    image: mousse_choco,
    cat_name: "mousse chocolat",
  },
  {
    image: brioche,
    cat_name: "brioche",
  },
];

//les détails d'une recette
export const recipe_details = [
  {
    _id: "1",
    nb_person: 10,
    cat_name: "cake chocolat",
    img: cake_choco,
    temps_cuisson: "18",
    temps_preparation: "37",
    ingred_1: "120g farine",
    ingred_2: "120g beurre",
    ingred_3: "4 oeufs",
    ingred_4: "80g sucre",
    ingred_5: "1 sachet levure",
    step_1: "Préchauffage four th 6 (200°)",
    step_2:
      "Faites fondre le chocolat avec le beurre environ 2 minutes au four à micro-ondes à 500W.",
    step_3:
      "Dans un saladier, mélangez les œufs, le sucre, la farine et la levure. Ajoutez le beurre et le chocolat fondus. Mélangez.",
    step_4:
      "Beurrez et farinez un moule à manqué de 20 cm. ",
    step_5:"Versez la préparation et faites cuire entre 18-20 minutes dans votre four.",
      category: "Dessert",
  },
  {
    _id: "2",
    nb_person: 8,
    cat_name: "cake marbre",
    img: cake_marbre,
    temps_cuisson: 30,
    temps_preparation: 105,
    ingred_1: "4 oeufs",
    ingred_2: "100g chocoloat noir",
    ingred_3: "170g sucre",
    ingred_4: "120g beurre",
    ingred_5: "150g farine",
    ingred_6: "100g crème liquide",
    ingred_7: "1 cuillère café levure chimique",
    step_1:
      "Faites fondre le beurre. Ajoutez la farine, le sucre, les oeufs et la levure",
    step_2:
      "Séparez la pâte en deux. Dans une moitié, ajoutez le chocolat noir fondu et dans la seconde, les pistaches mixées.",
    step_3:
      "Alternez les pâtes dans un moule à cake beurré et fariné. Faites cuire 30 à 35 minutes à 180°C en chaleur tournante",
    step_4:
      "Laissez refroidir. Faites fondre le chocolat noisettes avec la crème. Nappez le gâteau. ",
    step_5:"Placez au frais 1 heure.",
      category: "Dessert",
  },

  {
    _id: "3",
    nb_person: 8,
    cat_name: "fondant chocolat",
    img: fondant_choco,
    temps_preparation: 35,
    ingred_1: "1 tablette chocolat noir",
    ingred_2: "4 oeufs",
    ingred_3: "100g beurre",
    ingred_4: "60g sucre en poudre",
    ingred_5: "50g farine",
    step_1: "Préchauffez votre four Th.6/7 (200°C) en mode traditionnel.",
    step_2:
      "Dans une casserole, faites fondre le chocolat et le beurre coupé en morceaux au micro-ondes 2 minutes à 500Watts.",
    step_3:
      "Dans un saladier, ajoutez le sucre, les œufs, la farine et le chocolat. Mélangez bien.",
    step_4:
      "Beurrez, farinez votre moule et versez la pâte puis ",
    step_5:"cuire au four environ 10 minutes",
    category: "Dessert",
  },

  {
    _id: "4",
    nb_person: 6,
    cat_name: "mousse chocolat",
    img: mousse_choco,
    temps_preparation: 205,
    ingred_1: "1 tablette chocolat",
    ingred_2: "6 oeufs",
    ingred_3: "1 pincée sel",
    step_1:
      "Faites fondre le chocolat cassé en petits morceaux au bain-marie ou à feu doux. Lorsqu'il est complètement fondu, remuez délicatement pour obtenir une pâte lisse. Retirez du feu et laissez tiédir.",
    step_2:
      "Cassez les œufs en séparant les jaunes des blancs. Ajoutez le sel dans les blancs et battez-les en neige très ferme.",
    step_3:
      "Versez peu à peu le chocolat fondu sur les jaunes d'œufs en mélangeant énergiquement.",
    step_4:
      "Incorporez délicatement avec une spatule 1/3 des blancs d'œufs battus puis ajoutez le reste progressivement en soulevant la préparation de bas en haut pour bien répartir le chocolat sans faire tomber les blancs. Répartissez dans 6 verrines",
    step_5:
      "Faites prendre la mousse au chocolat 3 heures minimum au réfrigérateur. Servez bien frais.",
    category: "Dessert",
  },

  {
    _id: "5",
    nb_person: 2,
    cat_name: "brioche",
    img: brioche,
    temps_cuisson: 15,
    temps_preparation: 15,
    repos: 90,
    ingred_1: "250 g lait",
    ingred_2: "70g sucre",
    ingred_3: "1 cube levure boulangère fraîche",
    ingred_4: "110g margarine",
    ingred_5: "2 oeufs",
    ingred_6: "500g farine",
    ingred_7: "3gr sel",
    ingred_8: "1 cuillère soupe farine",
    ingred_9: "1 cuillère soupe eau",
    step_1:
      " Dans votre robot, verser le lait, le sucre et la levure émiettée. Programmer 6 minutes à 37°C vitesse 2.",
    step_2:
      " Ajouter la margarine, l'oeuf et programmer 3 minutes à 37°C, vitesse 2. Ajouter la farine et le sel",
    step_3:
      "Laisser lever dans votre rebot à couvert pendant 1h30. Sur un plan de travail fariné, déposer la pâte et la dégazer.",
    step_4:
      "Déposer la pâte dans un moule huilé. Couvrir d'un torchon et laisser poser 45 minutes à 1 heure.",
    step_5:
      "Placer la brioche dans un four FROID (très important) puis allumer le four à 180°C. Une fois la chaleur atteinte, laisser les brioches cuire encore 15 minutes.",   
    category: "Breakfast",
  },

  
];
