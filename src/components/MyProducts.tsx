"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Thumb from "@/assets/headphones.jpeg";

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
      <div className="grid grid-cols-4 items-center gap-10">
        {myProducts.slice(0, displayRows * 4).map((product: any) => (
          <div
            className="flex flex-col justify-between gap-4 pb-5"
            key={product.id}
          >
            <Link href={""}>
              <Image src={Thumb} alt={"Headphones photo"} />
            </Link>
            <p className="text-left text-lg font-medium">{product.name}</p>

            {/* <p className="text-center text-base font-medium sm:text-left sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {product.description}
          </p> */}

            <p className="text-left text-lg">R$ {product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-10">
        {myProducts.length > 0 && displayRows * 4 < myProducts.length && (
          <button
            className="rounded bg-gray-800 px-4 py-2 text-sm text-white transition-all duration-300 ease-linear hover:bg-gray-600 dark:bg-gray-400 dark:text-gray-950 dark:hover:bg-gray-200 dark:hover:text-black sm:text-base md:w-60 md:px-6 md:py-3 md:text-lg lg:text-xl xl:w-72 xl:px-8 xl:py-4 xl:text-2xl 2xl:w-96 2xl:px-10 2xl:py-5 2xl:text-3xl"
            onClick={loadMore}
          >
            Load more
          </button>
        )}

        <button
          className="rounded bg-gray-800 px-4 py-2 text-sm text-white transition-all duration-300 ease-linear hover:bg-gray-600 dark:bg-gray-400 dark:text-gray-950 dark:hover:bg-gray-200 dark:hover:text-black sm:text-base md:w-60 md:px-6 md:py-3 md:text-lg lg:text-xl xl:w-72 xl:px-8 xl:py-4 xl:text-2xl 2xl:w-96 2xl:px-10 2xl:py-5 2xl:text-3xl"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      </div>
    </>
  );
}
