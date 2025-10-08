"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="container py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Mr and Mrs Prompt — <span className="text-indigo-600">le cerveau du cerveau</span>
        </h1>
        <p className="mt-5 text-lg text-zinc-600">
          L’art de transformer votre intention en prompts impeccables — toujours un temps d’avance sur les IA.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/prompt-du-jour"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold"
          >
            Voir le prompt du jour
          </Link>
          <Link
            href="/pricing"
            className="rounded-xl border px-4 py-2 font-semibold"
          >
            Tarifs
          </Link>
        </div>
      </section>

      {/* Vision */}
      <section className="container py-12">
        <h2 className="text-2xl font-semibold mb-3">Vision</h2>
        <p className="text-zinc-700">
          Nous créons une couche d’intelligence méta qui comprend votre intention et parle aux autres IA à votre place.
          Vous décrivez, nous optimisons, les modèles exécutent.
        </p>
      </section>

      {/* Produits */}
      <section className="container py-12">
        <h2 className="text-2xl font-semibold mb-6">Produits</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-6 bg-white/70 dark:bg-white/5">
            <h3 className="font-semibold">Mr and Mrs Prompt</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Le générateur méta qui transforme votre intention en prompt optimal pour chaque modèle.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white/70 dark:bg-white/5">
            <h3 className="font-semibold">Tagos</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Référencement d’images (ALT, JSON-LD, sitemaps) — visibilité immédiate.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white/70 dark:bg-white/5">
            <h3 className="font-semibold">Digital Meve</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Preuve d’antériorité horodatée, vérification locale, traçabilité.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="container py-16 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border p-8">
          <h3 className="text-xl font-semibold">
            Passez à l’ère du prompt parfait.
          </h3>
          <Link
            href="/contact"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold"
          >
            Demander une démo
          </Link>
        </div>
      </section>
    </main>
  );
}
