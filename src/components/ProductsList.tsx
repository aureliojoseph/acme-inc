import Product from "./Product";

export default function ProductsList({ products }: any) {
  return (
    <div>
      {products.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
