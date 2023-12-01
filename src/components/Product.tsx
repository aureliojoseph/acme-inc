export default function Product({ product }: any) {
  return (
    <div>
      <p>Image {product.url}</p>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.value}</p>
    </div>
  );
}
