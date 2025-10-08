"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Mr &amp; Mrs Prompt
        </h1>
        <p className="mt-4 text-lg md:text-xl text-zinc-700 max-w-2xl mx-auto">
          L’art de parler aux intelligences : exprimez une intention, recevez un résultat impeccable — pour n’importe quelle IA.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/prompt-du-jour" className="rounded-xl bg-indigo-600 px-5 py-2.5 text-white font-semibold">
            Essayer maintenant
          </Link>
          <Link href="/pricing" className="rounded-xl border px-5 py-2.5 font-semibold">
            Tarifs
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-6 md:grid-cols-3">
        {[
          { title: "Comprendre", text: "Analyse de l’intention (contexte, ton, objectif) pour guider les IA." },
          { title: "Traduire", text: "Adaptation logique + intuitive vers les modèles (texte, image, vidéo, code)." },
          { title: "Obtenir", text: "Résultats clairs et fiables, sans itérations interminables." },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border p-6 bg-white">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-zinc-700">{c.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border p-8 bg-white">
          <h3 className="text-xl font-semibold">Passez à l’ère du langage entre les mondes</h3>
          <Link href="/contact" className="rounded-xl bg-indigo-600 px-5 py-2.5 text-white font-semibold">
            Demander une démo
          </Link>
        </div>
      </section>
    </main>
  );
}
