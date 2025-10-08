import fr from "@/locales/fr.json";
import en from "@/locales/en.json";
import Link from "next/link";

const dict = { fr, en };

export default function Home({ params: { locale } }: { params: { locale: "fr"|"en" }}) {
  const t = dict[locale];
  return (
    <main>
      <section className="hero container">
        <div className="badge"><i/>{t.badge}</div>
        <h1 className="h1" style={{marginTop:16}}>{t.title}</h1>
        <p className="lead">{t.lead}</p>
        <div className="cta">
          <Link href={`/${locale}/prompt-du-jour`} className="btn btn-primary">{locale==="fr"?"Essayer maintenant":"Try now"}</Link>
          <Link href={`/${locale}/pricing`} className="btn">{locale==="fr"?"Découvrir les offres":"See pricing"}</Link>
        </div>
      </section>
    </main>
  );
}
