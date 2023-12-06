"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthenticationPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleRegistration = (user: any) => {
    // handle registration logic here
    setIsRegistered(true);
  };

  const handleLogin = (user: any) => {
    // handle login logic here
    setIsRegistered(true);
  };

  return (
    <section className="flex flex-col items-center gap-3 py-20">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold">Bem-vindo(a)!</h1>
        <p className="text-xl">Entre com sua conta</p>
      </div>

      <Link href={"/login"}>
        <button
          className="w-72 rounded-xl bg-stone-800 py-3 text-base text-stone-100 transition-all duration-300 ease-linear hover:bg-stone-600 hover:text-stone-50"
          onClick={() => setIsLoginOpen(true)}
        >
          Fazer Login
        </button>
      </Link>

      <p className="pt-5 text-lg">Não possui uma conta?</p>

      <Link href={"/register"}>
        <button
          className="w-72 rounded-xl bg-stone-300 py-3 text-base text-stone-900 transition-all duration-300 ease-linear hover:bg-stone-200"
          onClick={() => setIsRegistered(true)}
        >
          Criar conta
        </button>
      </Link>
    </section>
  );
}
