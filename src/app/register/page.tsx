"use client";

import { useState } from "react";

export default function RegisterPage({ onRegister }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Implement Register logic

    if (password !== passwordConfirm) {
      alert("Sua senha está incorreta");
      return;
    }
    onRegister({ name, email, telephone, password });
  };

  return (
    <div className="flex flex-col items-center gap-3 py-10">
      <form className="flex gap-20" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <label className="mt-3 flex flex-col gap-2 text-xl">
            Nome:
            <input
              className="h-10 w-72 rounded-lg border border-stone-200 bg-stone-100 px-2 text-xs text-stone-900 outline-none"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

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
            Confirme seu Email:
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
            Telefone:
            <input
              className="h-10 w-72 rounded-lg border border-stone-200 bg-stone-100 px-2 text-xs text-stone-900 outline-none"
              placeholder="(XX) XXXXX-XXXX"
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="flex flex-col gap-5">
          <label className="mt-3 flex flex-col gap-2 text-xl">
            Senha:
            <input
              className="h-10 w-72 rounded-lg border border-stone-200 bg-stone-100 px-2 text-xs text-stone-900 outline-none"
              placeholder="Crie uma senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label className="mt-3 flex flex-col gap-2 text-xl">
            Confirme sua Senha:
            <input
              className="h-10 w-72 rounded-lg border border-stone-200 bg-stone-100 px-2 text-xs text-stone-900 outline-none"
              placeholder="Confirme sua senha"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
          </label>

          <button
            className="mt-3 w-72 rounded-xl bg-stone-800 py-3 text-base text-stone-100 transition-all duration-300 ease-linear hover:bg-stone-600 hover:text-stone-50"
            type="submit"
          >
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
}
