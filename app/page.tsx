"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,#000,transparent)] bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(79,70,229,0.15),transparent)]" />
        <div className="container mx-auto max-w-5xl px-4 pt-28 pb-16 text-center relative">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            Nouvelle ère du prompt
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
            Mr and Mrs Prompt
          </h1>
          <p className="mt-4 text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            L’art de parler aux intelligences : transformez votre intention en
            prompts impeccables, pour tous les modèles.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/prompt-du-jour"
              className="rounded-xl bg-indigo-600 px-5 py-2.5 text-white font-semibold shadow-sm hover:shadow transition-shadow"
            >
              Essayer maintenant
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border px-5 py-2.5 font-semibold hover:shadow-sm transition-shadow"
            >
              Tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="container mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-3">Vision</h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          Nous construisons une couche d’intelligence méta qui comprend votre
          intention, la structure et la traduit pour chaque IA (texte, image,
          vidéo). Vous décrivez. Nous optimisons. Les IA exécutent.
        </p>
      </section>

      {/* PRODUITS */}
      <section className="container mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Produits</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-6 bg-white/70 dark:bg-white/5 backdrop-blur">
            <h3 className="font-semibold">Mr and Mrs Prompt</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Génération de prompts optimale, adaptée à chaque modèle (GPT, Claude, etc.).
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white/70 dark:bg-white/5 backdrop-blur">
            <h3 className="font-semibold">Tagos</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Référencement d’images : ALT, JSON-LD, sitemap — visibilité immédiate.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white/70 dark:bg-white/5 backdrop-blur">
            <h3 className="font-semibold">Digital Meve</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Horodatage et preuve d’antériorité — traçabilité et vérification locale.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container mx-auto max-w-5xl px-4 py-16 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border p-8 bg-white/60 dark:bg-white/5 backdrop-blur">
          <h3 className="text-xl font-semibold">Passez à l’ère du prompt parfait</h3>
          <Link
            href="/contact"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-white font-semibold shadow-sm hover:shadow transition-shadow"
          >
            Demander une démo
          </Link>
        </div>
      </section>
    </main>
  );
}
