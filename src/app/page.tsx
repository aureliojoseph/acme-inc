"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import MyProducts from "@/components/MyProducts";

export default function Home() {
  const [myProducts, setMyProducts] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((myProducts: any) => setMyProducts(myProducts));
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      {!myProducts ? (
        <Loading />
      ) : (
        <>
          <h2 className="mb-10 text-left text-2xl">Todos os produtos</h2>

          <MyProducts myProducts={myProducts} />
        </>
      )}
    </main>
  );
}
