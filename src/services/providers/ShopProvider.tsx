"use client";

import { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
import { Product } from "@/utils/product";

export const ShopProvider = ({ children }: any) => {
  const [favorite, setFavorite] = useState<Product[]>(
    JSON.parse(localStorage.getItem("favorite") || "[]"),
  );

  const [bag, setBag] = useState<Product[]>(
    JSON.parse(localStorage.getItem("bag") || "[]"),
  );

  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem("favorite") || "[]"));
    setBag(JSON.parse(localStorage.getItem("bag") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [favorite, bag]);

  return (
    <ShopContext.Provider value={{ favorite, setFavorite, bag, setBag }}>
      {children}
    </ShopContext.Provider>
  );
};
