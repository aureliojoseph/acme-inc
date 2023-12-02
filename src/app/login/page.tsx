"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage({ onLogin, onClose }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="flex flex-col items-center gap-3 py-10">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <label className="mt-3 flex flex-col gap-2 text-xl">
          Email:
          <input
            className="h-10 w-72 rounded-lg border border-stone-200 bg-stone-100 px-2 text-xs text-stone-900 outline-none"
            placeholder="email@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="mt-3 flex flex-col gap-2 text-xl">
          Password:
          <input
            className="h-10 w-72 rounded-lg border border-stone-200 bg-stone-100 px-2 text-xs text-stone-900 outline-none"
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <Link
          className="text-sm text-sky-700 transition-all duration-300 ease-in hover:text-stone-500"
          href={"/"}
        >
          <p>Esqueceu sua senha?</p>
        </Link>

        <button
          className="w-72 rounded-xl bg-stone-800 py-3 text-base text-stone-100 transition-all duration-300 ease-linear hover:bg-stone-600 hover:text-stone-50"
          onClick={onClose}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
