import { nouns, adjectives } from "@/utils/words";

export function generateProductNames(): string[] {
  const productNames = new Set<string>();

  nouns.forEach((verb: string) => {
    adjectives.forEach((adjective: string) => {
      productNames.add(`${verb} ${adjective}`);
    });
  });

  return Array.from(productNames);
}

const productNames: string[] = generateProductNames();

export function generateRandomDescription(
  minLength: number = 150,
  maxLength: number = 500,
): string {
  let text: string = "";

  while (text.length < minLength || text.length > maxLength) {
    const verb: string = nouns[Math.floor(Math.random() * nouns.length)];
    const adjective: string =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    text += `${verb} ${adjective} `;
  }

  return text.trim();
}

export function generatePrice(): string {
  const name: string =
    generateProductNames()[
      Math.floor(Math.random() * generateProductNames().length)
    ];
  const description: string = generateRandomDescription();
  const nameLength: number = name.split(" ").length;
  const descrLength: number = description.length;
  const price: number =
    10 + nameLength * ((500 - descrLength) / (4 - nameLength));
  return price.toFixed(2);
}

const randomPhotos = (): string => {
  const randomWidth: number = Math.floor(Math.random() * 500) + 200;
  const randomHeight: number = Math.floor(Math.random() * 500) + 220;
  const randomImageUrl = `https://picsum.photos/${randomWidth}/${randomHeight}`;

  return randomImageUrl;
};

let myProducts: {
  id: number;
  name: string;
  description: string;
  price: string;
  url: string;
}[] = [];

for (let i = 0; i < productNames.length; i++) {
  const name: string = productNames[i];
  const description: string = generateRandomDescription();
  const price: string = generatePrice();
  const url: string = randomPhotos();

  const product = {
    id: i + 1,
    name: name,
    description: description,
    price: price,
    url: url,
  };

  myProducts.push(product);
}

export default myProducts;

const fs = require("fs");

fs.writeFile("public/data.json", JSON.stringify(myProducts), (err: any) => {
  if (err) throw err;
  console.log("Data written to file");
});
