import burger from "./images/burger-small.jpg";
import pizza from "./images/pizza-small.jpg";
import pasta from "./images/pasta-small.jpg";
import cheesesteak from "./images/cheesesteak.jpg";
import coke from "./images/coke.jpg";
import burgerAnimated from "./images/burger-animated.png";
import drinkAnimated from "./images/drink-animated.png";
import pastaAnimated from "./images/pasta-animated.jpg";
import pizzaAnimated from "./images/pizzaslice1-animated.png";
import sandwichAnimated from "./images/sandwich-animated.png";
import whitePasta from "./images/whitepasta-small.jpg";
import clubSandwich from "./images/clubsandwich.jpg";

export const HOMEPAGEITEMS = [
  {
    id: 0,
    name: "Classic Burger",
    image: burger,
    description:
      "A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled.",
    featured: true,
    price: 8.99,
    category: "burger",
    categoryImg: burgerAnimated,
  },
  {
    id: 1,
    name: "Cheese Pizza",
    image: pizza,
    description:
      "Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.",
    featured: true,
    price: 15.99,
    category: "pizza",
    categoryImg: pizzaAnimated,
  },
  {
    id: 2,
    name: "Classic Pasta",
    image: pasta,
    description:
      "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. It is also commonly used to refer to the variety of pasta dishes.",
    featured: true,
    price: 12.99,
    category: "pasta",
    categoryImg: pastaAnimated,
  },
  {
    id: 3,
    name: "Cheese Steak",
    image: cheesesteak,
    description:
      "Cheesesteak, also known as a Philly cheesesteak and by the portmanteau cheesesteak sandwich, is a sandwich made from thinly sliced pieces of beefsteak and melted cheese in a long hoagie roll.",
    featured: false,
    price: 10.99,
    category: "sandwich",
    categoryImg: sandwichAnimated,
  },
  {
    id: 4,
    name: "Coke",
    image: coke,
    description:
      "Coca-Cola is a carbonated soft drink manufactured by The Coca-Cola Company.",
    featured: false,
    price: 4.99,
    category: "drink",
    categoryImg: drinkAnimated,
  },
  {
    id: 5,
    name: "White Pasta",
    image: whitePasta,
    description:
      "White pasta is a type of pasta that is made with a white sauce. The sauce is usually made with milk, butter, and flour. The sauce is usually made with milk, butter, and flour.",
    featured: false,
    price: 12.99,
    category: "pasta",
    categoryImg: pastaAnimated,
  },
  {
    id: 6,
    name: "Chicken Club",
    image: clubSandwich,
    description:
      "A chicken club sandwich is a sandwich made with chicken, bacon, lettuce, and tomato.",
    featured: false,
    price: 10.99,
    category: "sandwich",
    categoryImg: sandwichAnimated,
  },
];
