import Link from "next/link";
import Image from "next/image";
import { HiTrash } from "react-icons/hi2";
import { ShopContext } from "@/services/providers/ShopContext";
import { useContext } from "react";

export default function Favorite({ setIsFavoriteOpen }: any) {
  const context = useContext(ShopContext);

  if (!context) return null;

  const { favorite, setFavorite } = context;

  const handleCloseFavorite = () => {
    setIsFavoriteOpen(false);
  };

  const handleUnfavorite = (productToUnfavorite: any) => {
    const newFavotire = favorite.filter(
      (product: any) => product.id !== productToUnfavorite.id,
    );
    setFavorite(newFavotire);
    localStorage.setItem("favorite", JSON.stringify(newFavotire));
  };

  return (
    <div
      onMouseLeave={handleCloseFavorite}
      className="absolute right-24 top-10 w-96 rounded-lg bg-stone-400 p-4"
    >
      <h2 className=" text-sm">Favoritos:</h2>

      <hr className="my-2 border border-solid border-stone-50/20" />

      {favorite.map((product: any) => (
        <div
          key={product.id}
          className="flex items-center justify-evenly gap-4 py-1"
        >
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            onClick={handleCloseFavorite}
            className="flex cursor-pointer items-center justify-evenly gap-4 py-1"
          >
            <Image
              key={product.id}
              className="aspect-square"
              width={100}
              height={50}
              src={product.url}
              alt={"Random image for random product"}
            />

            <div>
              <p className="cursor-pointer text-base text-black">
                {product.name}
              </p>

              <p className="text-xl font-bold text-black">R$ {product.price}</p>
            </div>
          </Link>

          <button onClick={() => handleUnfavorite(product)}>
            <HiTrash className="cursor-pointer rounded-full p-1 text-3xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-300" />
          </button>
        </div>
      ))}
    </div>
  );
}
