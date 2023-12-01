import { verbs, adjectives } from "./words";

export function randomName() {
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  return `${randomVerb} ${randomAdjective}`;
}

export function randomDescription() {
  const characters =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Sit ipsam eligendi quaerat Eveniet maiores doloremque quam illo minima similique expedita quae voluptate perferendis cumque Officia corrupti ratione repellat necessitatibus architecto";
  const words = characters.split(" ");
  const length = Math.floor(Math.random() * (500 - 20 + 1)) + 20;
  const shuffledWords = shuffleArray(words);
  let description = shuffledWords.slice(0, length).join(" ");

  description = description.charAt(0).toUpperCase() + description.slice(1);

  return description;
}

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function calculatePrice() {
  const productName = randomName();
  const productDescription = randomDescription();

  const nameLength = productName.split(" ").length;
  const descriptionLength = productDescription.length;
  const price =
    10 + nameLength * ((500 - descriptionLength) / (4 - nameLength));
  return price.toFixed(2);
}
