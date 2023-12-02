"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AcmeLogo from "@/assets/acme_logo.png";
import {
  HiHome,
  HiUser,
  HiMagnifyingGlass,
  HiHeart,
  HiShoppingBag,
} from "react-icons/hi2";

export default function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="sticky top-0 flex items-center justify-between bg-stone-100/90 px-5 py-3">
      <div className="flex items-center gap-3">
        <Link href={"/"}>
          <HiHome className="cursor-pointer rounded-full p-1 text-4xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-400/80" />
        </Link>
        <Image src={AcmeLogo} alt={"Acme Inc logo"} width={200} />
      </div>

      <div className="flex items-center gap-3">
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

        <HiHeart className="cursor-pointer rounded-full p-1 text-4xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-400/80" />

        <HiShoppingBag className="cursor-pointer rounded-full p-1 text-4xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-400/80" />

        <Link href={"/auth"}>
          <HiUser className="cursor-pointer rounded-full p-1 text-4xl text-stone-700 transition-all duration-300 ease-linear hover:bg-stone-400/80" />
        </Link>
      </div>
    </nav>
  );
}
