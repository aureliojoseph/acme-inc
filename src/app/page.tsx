import MyProducts from "@/components/MyProducts";
import myProducts from "@/services/api/api";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <h2 className="mb-10 text-left text-2xl">
        All Products: ({myProducts.length})
      </h2>

      <MyProducts myProducts={myProducts} />
    </main>
  );
}
