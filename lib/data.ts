export type Recipe = {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Bihari Litti Chokha",
    description:
      "A traditional dish from Bihar made with roasted wheat balls and mashed vegetables.",
    image: "/litti.jpg",
    ingredients: [
      "Wheat flour",
      "Sattu (roasted gram flour)",
      "Mustard oil",
      "Garlic",
      "Tomato",
      "Potato",
    ],
    steps: [
      "Prepare dough using wheat flour",
      "Stuff sattu mixture into balls",
      "Roast over fire or oven",
      "Prepare chokha with mashed vegetables",
      "Serve hot with ghee",
    ],
  },
  {
    id: "2",
    name: "Dal Baati",
    description:
      "A famous Rajasthani dish made with baked wheat balls and lentil curry.",
    image: "/dalbaati.jpg",
    ingredients: [
      "Wheat flour",
      "Ghee",
      "Mixed dal",
      "Spices",
    ],
    steps: [
      "Prepare baati dough",
      "Bake until golden",
      "Cook dal with spices",
      "Serve with ghee",
    ],
  },
];