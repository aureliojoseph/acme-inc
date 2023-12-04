import { verbs, adjectives } from "@/utils/words";

export function generateProductNames(): string[] {
  const productNames = new Set<string>();

  verbs.forEach((verb) => {
    adjectives.forEach((adjective) => {
      productNames.add(`${verb} ${adjective}`);
    });
  });

  return Array.from(productNames);
}

const productNames = generateProductNames();

export function generateRandomDescription(
  minLength: number = 20,
  maxLength: number = 500,
): string {
  let text = "";

  while (text.length < minLength || text.length > maxLength) {
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    text += `${verb} ${adjective} `;
  }

  return text.trim();
}

export function generatePrice() {
  const name =
    generateProductNames()[
      Math.floor(Math.random() * generateProductNames().length)
    ];
  const description = generateRandomDescription();
  const nameLength = name.split(" ").length;
  const descrLength = description.length;
  const price = 10 + nameLength * ((500 - descrLength) / (4 - nameLength));
  return price.toFixed(2);
}

let myProducts: {
  id: number;
  name: string;
  description: string;
  price: string;
  url: string;
}[] = [];

for (let i = 0; i < productNames.length; i++) {
  const name = productNames[i];
  const description = generateRandomDescription();
  const price = generatePrice();
  const url = "https://test-api.com";

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
