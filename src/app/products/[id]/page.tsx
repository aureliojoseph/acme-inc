"use client";

import Loading from "@/components/Loading";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  value: string;
  url: string;
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`@/services/api/products/${id}`)
      .then((res) => res.json())
      .then((data: Product) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div>
      <h1>PÁGINA DO PRODUTO</h1>
    </div>
  );
}
