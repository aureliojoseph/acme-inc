"use client";

import { useContext, useState } from "react";
import { ShopContext } from "@/services/providers/ShopContext";
import Link from "next/link";
import Image from "next/image";
import AcmeLogo from "@/assets/acme_logo.png";
import Favorite from "./Favorite";
import {
  HiHome,
  HiUser,
  HiMagnifyingGlass,
  HiHeart,
  HiShoppingBag,
} from "react-icons/hi2";

export default function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);

  const context = useContext(ShopContext);

  if (!context) return null;

  const { favorite } = context;

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-stone-100/90 px-5 py-3">
      <div className="flex items-center gap-3">
        <Link href={"/"}>
          <HiHome className="cursor-pointer rounded-full p-1 text-4xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-400/80" />
        </Link>
        <Image src={AcmeLogo} alt={"Acme Inc logo"} width={200} />
      </div>

      <div className="relative flex items-center gap-3">
        <div className="relative flex items-center gap-1">
          <HiMagnifyingGlass
            onClick={handleSearchClick}
            className="cursor-pointer rounded-full p-1 text-4xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-400/80"
          />

          {isSearchOpen && (
            <input
              className="rounded bg-stone-200 p-1 text-xs text-stone-900 outline-none transition-all duration-500 ease-in"
              type="text"
              placeholder="Search"
            />
          )}
        </div>

        <HiHeart
          onMouseEnter={() => setIsFavoriteOpen(true)}
          onClick={() => setIsFavoriteOpen(false)}
          className="cursor-pointer rounded-full p-1 text-4xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-400/80"
        />

        {isFavoriteOpen && (
          <Favorite setIsFavoriteOpen={setIsFavoriteOpen} favorite={favorite} />
        )}

        <Link href={"/checkout"}>
          <HiShoppingBag className="cursor-pointer rounded-full p-1 text-4xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-400/80" />
        </Link>

        <Link href={"/auth"}>
          <HiUser className="cursor-pointer rounded-full p-1 text-4xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-400/80" />
        </Link>
      </div>
    </nav>
  );
}
