import Image from "next/image";
import Link from "next/link";

export default function ProductsList({ displayRows, products }: any) {
  return (
    <div className="flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 sm:justify-items-center sm:gap-x-10 sm:gap-y-20 lg:grid-cols-3 2xl:grid-cols-4">
      {products.slice(0, displayRows * 4).map((product: any) => {
        const randomWidth = Math.floor(Math.random() * 500) + 200;
        const randomHeight = Math.floor(Math.random() * 500) + 220;
        const randomImageUrl = `https://picsum.photos/${randomWidth}/${randomHeight}`;

        return (
          <div
            className="flex flex-col justify-between gap-4 pb-5"
            key={product.id}
          >
            <Link
              className="flex justify-center"
              href={`/products/${product.id}`}
              key={product.id}
            >
              <Image
                className="aspect-auto h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-60"
                src={randomImageUrl}
                alt={"Random image"}
                width={160}
                height={160}
              />
            </Link>

            <p className="text-center text-base font-medium sm:text-left sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              {product.name}
            </p>

            <p className="text-center text-base sm:text-left sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              R$ {product.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
