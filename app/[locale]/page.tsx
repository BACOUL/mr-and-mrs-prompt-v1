import fr from "../../locales/fr.json";
import en from "../../locales/en.json";
import Link from "next/link";

const dict = { fr, en };

export default function Home({
  params: { locale },
}: {
  params: { locale: "fr" | "en" };
}) {
  const t = dict[locale];
  return (
    <main className="container py-16 text-center">
      <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3 py-1 text-xs text-slate-300">
        <span className="w-2 h-2 rounded-full bg-emerald-400" /> {t.badge}
      </div>
      <h1 className="h1 mt-4">{t.title}</h1>
      <p className="lead mt-3">{t.lead}</p>
      <div className="mt-6 flex justify-center gap-3 flex-wrap">
        <Link href={`/${locale}/prompt-du-jour`} className="btn btn-primary">
          {t.cta_try}
        </Link>
        <Link href={`/${locale}/pricing`} className="btn">
          {t.cta_pricing}
        </Link>
      </div>

      <section className="grid md:grid-cols-3 gap-4 mt-12 text-left">
        <div className="card">
          <h3 className="font-semibold">Comprendre</h3>
          <p>Analyse de l’intention avant exécution.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Traduire</h3>
          <p>Mr = structure. Mrs = intuition. Deux vues sur la même intention.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Obtenir</h3>
          <p>Résultats nets, cohérents, réutilisables pour chaque IA.</p>
        </div>
      </section>
    </main>
  );
}
