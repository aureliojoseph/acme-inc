import { verbs, adjectives } from "@/utils/words";

// Function to generate all possible combinations of verbs and adjectives
function generateCombinations(verbs: string[], adjectives: string[]) {
  let combinations = [];
  for (let verb of verbs) {
    for (let adjective of adjectives) {
      combinations.push(
        `${verb.charAt(0).toUpperCase() + verb.slice(1)} ${
          adjective.charAt(0).toUpperCase() + adjective.slice(1)
        }`,
      );
    }
  }
  return combinations;
}

// Function to shuffle an array
function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Generate all combinations and shuffle them
let productNames: any = generateCombinations(verbs, adjectives);
productNames = shuffleArray(productNames);

// Function to generate random product description
function randomDescription() {
  const characters =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Sit ipsam eligendi quaerat Eveniet maiores doloremque quam illo minima similique expedita quae voluptate perferendis cumque Officia corrupti ratione repellat necessitatibus architecto";
  const words = characters.split(" ");
  const length = Math.floor(Math.random() * (500 - 20 + 1)) + 20;
  const shuffledWords = shuffleWordsdArray(words);
  let description = shuffledWords.slice(0, length).join(" ");

  description = description.charAt(0).toUpperCase() + description.slice(1);

  return description;
}

function shuffleWordsdArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to generate random product price
function calculatePrice() {
  const productName =
    productNames[Math.floor(Math.random() * productNames.length)];
  const productDescription = randomDescription();

  const nameLength = productName.split(" ").length;
  const descriptionLength = productDescription.length;
  const price =
    10 + nameLength * ((500 - descriptionLength) / (4 - nameLength));
  return price.toFixed(2);
}

// Initialize an empty array to store the products
let products: {
  id: number;
  name: string;
  description: string;
  value: string;
  url: string;
}[] = [];

// Generate the products
for (let i = 0; i < productNames.length; i++) {
  const name = productNames[i];
  const description = randomDescription();
  const value = calculatePrice();
  const url = "";

  // Create a product object
  const product = {
    id: i + 1,
    name: name,
    description: description,
    value: value,
    url: url,
  };

  // Add the product to the products array
  products.push(product);
}

export default products;
