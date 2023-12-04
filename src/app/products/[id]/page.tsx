"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Link from "next/link";
import { HiHeart, HiOutlineHeart, HiShoppingBag } from "react-icons/hi2";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  url: string;
}

export default function ProductDisplayPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const index = data.findIndex((product) => product.id === Number(id));
        const product = data.at(index) || null;
        setProduct(product);
      });
  }, [id]);

  const [isIconClicked, setIsIconClicked] = useState(false);

  const toggleIconClick = () => {
    setIsIconClicked(!isIconClicked);
  };

  if (!product) {
    return <Loading />;
  }

  if (product) {
    return (
      <div className="flex items-center justify-evenly p-10">
        <img
          key={product.id}
          className="aspect-square"
          width={400}
          height={200}
          src={product.url}
          alt={"Random image for random product"}
        />

        <div className="flex flex-col gap-2 sm:justify-center md:max-w-lg lg:max-w-xl lg:gap-3 xl:max-w-2xl 2xl:max-w-4xl 2xl:gap-5">
          <h2 className="text-center text-xl font-medium text-gray-900 sm:text-2xl md:text-left md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            {product.name}
          </h2>

          <p className="pb-4 text-center text-base sm:text-lg md:text-start md:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl">
            {product.description.charAt(0).toUpperCase() +
              product.description.substring(1)}
          </p>

          <div className="flex items-center justify-between pb-4">
            <p className="text-center text-4xl font-bold">R$ {product.price}</p>
            <button onClick={toggleIconClick}>
              {isIconClicked ? (
                <HiHeart className="cursor-pointer rounded-full p-1 text-4xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-400/80" />
              ) : (
                <HiOutlineHeart className="cursor-pointer rounded-full p-1 text-4xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-400/80" />
              )}
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <Link href={"/cart"}>
              <button className="flex w-72 items-center justify-center gap-3 rounded-xl bg-stone-800 py-3 text-base text-stone-100 transition-all duration-300 ease-linear hover:bg-stone-600 hover:text-stone-50">
                Comprar
              </button>
            </Link>

            <Link href={"/cart"}>
              <button className="flex w-72 items-center justify-center gap-3 rounded-xl bg-stone-300 py-3 text-base text-stone-900 transition-all duration-300 ease-linear hover:bg-stone-200">
                Adicionar à sacola
                <span>
                  <HiShoppingBag />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
