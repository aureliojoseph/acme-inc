import ProductsList from "@/components/ProductsList";
import products from "@/services/api/productsApi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>All Products ({products.length})</h2>

      <ProductsList products={products} />
    </main>
  );
}
