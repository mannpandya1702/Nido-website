import { photos } from "./images";

export type MenuGroup = { name: string; items: string[] };
export type MenuCategory = {
  id: string;
  title: string;
  blurb: string;
  photo: string;
  groups: MenuGroup[];
};

export const menu: MenuCategory[] = [
  {
    id: "hot",
    title: "Hot Beverages",
    blurb: "Slow mornings and warmer conversations, poured one cup at a time.",
    photo: photos.cappuccino,
    groups: [
      {
        name: "Coffee",
        items: [
          "Espresso",
          "Americano",
          "Cappuccino",
          "Latte",
          "Mocha",
          "Flat White",
          "Spanish Latte",
          "Biscoff Latte",
        ],
      },
      { name: "Chai", items: ["Masala Chai", "Adrak Chai", "Elaichi Chai"] },
      {
        name: "Others",
        items: [
          "Hot Chocolate Bomb",
          "Classic Hot Chocolate",
          "Hazelnut Hot Chocolate",
          "Cinnamon Hot Coffee",
        ],
      },
    ],
  },
  {
    id: "cold",
    title: "Cold Beverages",
    blurb: "Rooftop breeze in a glass — iced, blended and endlessly refreshing.",
    photo: photos.lemonMint,
    groups: [
      {
        name: "Cold Coffee",
        items: [
          "Classic Cold Coffee",
          "Cold Coffee with Ice Cream",
          "Iced Latte",
          "Iced Americano",
          "Affogato",
        ],
      },
      {
        name: "Mocktails & Coolers",
        items: [
          "Aam Panna Fizz",
          "Lemon Mint Mojito",
          "Virgin Mojito",
          "Blue Lagoon",
          "Watermelon Cooler",
          "Peach Iced Tea",
          "Lemon Iced Tea",
          "Smoked Mojito",
          "Teddy Ice Crush",
        ],
      },
      {
        name: "Shakes",
        items: [
          "Oreo Shake",
          "Chocolate Shake",
          "Strawberry Shake",
          "KitKat Shake",
          "Mango Shake",
          "Banana Shake",
          "Apple Shake",
        ],
      },
      {
        name: "Fresh Juices",
        items: [
          "Orange Juice",
          "Watermelon Juice",
          "Pineapple Juice",
          "Mixed Fruit Juice",
        ],
      },
    ],
  },
  {
    id: "bowls",
    title: "Smoothie Bowls",
    blurb: "Bright, wholesome bowls for the days you want to feel good slowly.",
    photo: photos.fruitBowl,
    groups: [
      {
        name: "Bowls",
        items: [
          "Banana & Nut Smoothie Bowl",
          "Berry Smoothie Bowl",
          "Seasonal Fruit Bowl",
        ],
      },
    ],
  },
  {
    id: "small",
    title: "Small Plates",
    blurb: "Something to share while the sun dips and the stories get longer.",
    photo: photos.sandwich,
    groups: [
      {
        name: "Sandwiches & Toasts",
        items: [
          "Veg Grilled Sandwich",
          "Paneer Tikka Sandwich",
          "Veg Cheese Toast",
          "Exotic Veg Open Toast",
          "Paneer Tikka Open Toast",
        ],
      },
      { name: "Garlic Bread", items: ["Garlic Bread", "Cheese Garlic Bread"] },
      {
        name: "Fries",
        items: ["Salted Fries", "Peri-Peri Fries", "Cheesy Fries"],
      },
      { name: "Nachos", items: ["Cheesy Nachos", "Loaded Nachos"] },
      {
        name: "Sides",
        items: ["Cheese Corn Balls", "Cheese Balls", "Popcorn Bowl"],
      },
      {
        name: "Maggi",
        items: [
          "Cheese Chilli Maggi",
          "Butter Masala Maggi",
          "Grilled Onion Maggi",
          "Classic Masala Maggi",
        ],
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    blurb: "Comfort food with a passport — wood-fired, wok-tossed and hearty.",
    photo: photos.pizza,
    groups: [
      {
        name: "Pizza",
        items: [
          "Margherita Pizza",
          "Farmhouse Veg Pizza",
          "Corn & Cheese Pizza",
          "Paneer Tikka Pizza",
        ],
      },
      {
        name: "Large Plates",
        items: ["Hummus with Pita", "Falafel & Hummus Platter", "Mezze Platter"],
      },
      {
        name: "Asian",
        items: [
          "Thai Green Curry with Rice",
          "Thai Red Curry with Rice",
          "Buddha Bowl",
          "Veg Hakka Noodles",
          "Fried Rice",
          "Chilli Paneer with Rice",
          "Chilli Garlic Noodles",
        ],
      },
      {
        name: "Pasta",
        items: ["White Sauce Pasta", "Red Sauce Pasta", "Pink Sauce Pasta"],
      },
      { name: "Add-ons", items: ["Extra Cheese", "Extra Toppings"] },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    blurb: "The sweet, unhurried ending every good evening deserves.",
    photo: photos.waffle,
    groups: [
      {
        name: "Desserts",
        items: [
          "Skillet Cookie with Ice Cream",
          "Brownie with Ice Cream",
          "Kunafa Cups",
          "Chocolate Waffle",
          "Ice Cream — Chocolate / Vanilla / Strawberry",
        ],
      },
    ],
  },
];

export type Signature = {
  name: string;
  note: string;
  photo: string;
};

export const signatures: Signature[] = [
  {
    name: "Biscoff Latte",
    note: "Espresso, steamed milk and warm spiced Biscoff — our most-loved cup.",
    photo: photos.glassLatte,
  },
  {
    name: "Hot Chocolate Bomb",
    note: "A cocoa shell that melts into rich, molten chocolate at the table.",
    photo: photos.hotChocolate,
  },
  {
    name: "Aam Panna Fizz",
    note: "Raw mango, mint and soda — nostalgia in a tall, fizzing glass.",
    photo: photos.mangoCooler,
  },
  {
    name: "Smoked Mojito",
    note: "Lime, mint and a curl of smoke for the golden-hour crowd.",
    photo: photos.mojito,
  },
  {
    name: "Teddy Ice Crush",
    note: "A playful, frosty crush that's as fun to look at as it is to sip.",
    photo: photos.icedCoffee,
  },
];
