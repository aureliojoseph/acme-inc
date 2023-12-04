import Image from "next/image";

export default function Product({ product }: any) {
  const randomImage = "https://picsum.photos/200";

  return (
    <div>
      <Image
        src={randomImage}
        alt={"Random image"}
        width={432}
        height={230}
        priority={true}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.value}</p>
    </div>
  );
}
