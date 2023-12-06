import Link from "next/link";

export default function PaymentPage() {
  return (
    <main className="p-10">
      <h2 className="mb-5 text-center text-4xl">Página em Desenvolvimento</h2>
      <Link
        className="text-center text-sm text-sky-700 transition-all duration-300 ease-in hover:text-stone-500"
        href={"/"}
      >
        <p>Retornar para Home</p>
      </Link>
    </main>
  );
}
