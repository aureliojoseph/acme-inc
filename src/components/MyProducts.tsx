"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MyProducts({ myProducts }: any) {
  const [displayRows, setDisplayRows] = useState(4);

  const loadMore = () => {
    setDisplayRows(displayRows + 4);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="grid grid-cols-4 items-center gap-10 pb-10">
        {myProducts.slice(0, displayRows * 4).map((product: any) => (
          <div
            className="flex flex-col justify-between gap-4 pb-5"
            key={product.id}
          >
            <Link key={product.id} href={`/products/${product.id}`}>
              <Image
                className="aspect-square"
                width={300}
                height={200}
                src={product.url}
                alt={"Random image for random product"}
                priority
              />
            </Link>
            <p className="text-left text-lg font-medium">{product.name}</p>

            <p className="text-left text-lg">R$ {product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-evenly">
        {myProducts.length > 0 && displayRows * 4 < myProducts.length && (
          <button
            className="flex w-72 items-center justify-center gap-3 rounded-xl bg-stone-800 py-3 text-base text-stone-100 transition-all duration-300 ease-linear hover:bg-stone-600 hover:text-stone-50"
            onClick={loadMore}
          >
            Carregar mais
          </button>
        )}

        <button
          className="flex w-72 items-center justify-center gap-3 rounded-xl bg-stone-300 py-3 text-base text-stone-900 transition-all duration-300 ease-linear hover:bg-stone-200"
          onClick={scrollToTop}
        >
          Voltar ao topo
        </button>
      </div>
    </>
  );
}
