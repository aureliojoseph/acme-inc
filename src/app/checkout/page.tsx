"use client";

import { useContext } from "react";
import { ShopContext } from "@/services/providers/ShopContext";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
  const { bag, setBag } = useContext(ShopContext);

  const handleDelete = (productToDelete: any) => {
    const newBag = bag.filter(
      (product: any) => product.id !== productToDelete.id,
    );
    setBag(newBag);
    localStorage.setItem("bag", JSON.stringify(newBag));
  };

  const totalPrice = bag.reduce(
    (total: number, product: any) => total + parseFloat(product.price),
    0,
  );

  return (
    <main className="p-10">
      <h2 className="mb-10 text-left text-2xl">Minha Sacola:</h2>
      <div className="relative flex gap-10">
        <div>
          {bag.map((product: any) => (
            <>
              <div className="mb-5 flex items-start gap-10 drop-shadow-lg">
                <div
                  key={product.id}
                  className="flex gap-10 rounded-md border border-solid border-stone-200 bg-stone-200 p-5"
                >
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="flex cursor-pointer justify-evenly gap-4 py-1"
                  >
                    <Image
                      key={product.id}
                      className="aspect-square"
                      width={80}
                      height={40}
                      src={product.url}
                      alt={"Random image for random product"}
                    />
                  </Link>

                  <div className="flex flex-col items-start gap-2">
                    <Link key={product.id} href={`/products/${product.id}`}>
                      <p className="cursor-pointer text-xl">{product.name}</p>
                    </Link>

                    <button
                      onClick={() => handleDelete(product)}
                      className="text-sm text-stone-500 hover:text-stone-700 hover:underline"
                    >
                      Excluir
                    </button>
                  </div>

                  <p className="text-xl font-bold">R$ {product.price}</p>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="absolute left-2/3 top-0 flex w-96 flex-col gap-10 rounded-md border border-solid border-stone-200 bg-stone-200 px-5 py-10 drop-shadow-lg">
          <div>
            <h3 className="pb-4">Resumo da Compra:</h3>
            <hr className="border border-solid border-stone-500/20" />
          </div>

          <div className="flex justify-between">
            <p className="text-base">{`${
              bag.length !== 1 ? "Produtos " + `(${bag.length})` : "Produto "
            }`}</p>
            <p className="text-base">R$ {totalPrice.toFixed(2)}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <p className="text-2xl font-bold">R$ {totalPrice.toFixed(2)}</p>
          </div>

          <Link href={`${!bag ? "" : "/checkout/payment"}`}>
            <button className="w-full gap-3 rounded-xl bg-stone-800 py-3 text-base text-stone-100 transition-all duration-300 ease-linear hover:bg-stone-600 hover:text-stone-50">
              Comprar
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
