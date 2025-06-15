import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white text-center px-6">
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-serif">
          Page introuvable
        </h2>
        <p className="text-lg text-gray-400 font-sans mb-8">
          Oups. Il semble que cette page n’existe pas ou a été déplacée.
        </p>
       <Link
  href="/"
  className="inline-block px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-black transition"
>
  Revenir à l’accueil
</Link>
      </div>
    </main>
  );
}
