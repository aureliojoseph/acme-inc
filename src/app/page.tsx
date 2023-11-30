import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        id="teste"
        type="submit"
        className="bg-red-100 px-6 py-3 text-4xl text-red-500"
      >
        Teste
      </button>
    </main>
  );
}
