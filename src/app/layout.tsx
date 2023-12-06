import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ShopProvider } from "@/services/providers/ShopProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme Inc",
  description:
    "A Acme Inc é uma empresa que comercializa produtos genéricos e preza pela qualidade de suas soluções e está sempre um passo à frente do mercado no uso de tecnologia e design de suas aplicações.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShopProvider>
          <NavBar />
          {children}
        </ShopProvider>
      </body>
    </html>
  );
}
