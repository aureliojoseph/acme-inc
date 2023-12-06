import React from "react";
import { Product } from "@/utils/product";

interface ShopContextType {
  favorite: Product[];
  setFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
  bag: Product[];
  setBag: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ShopContext = React.createContext<ShopContextType | undefined>(
  undefined,
);
