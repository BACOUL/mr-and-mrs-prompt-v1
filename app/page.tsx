"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero container">
        <div className="badge"><i/> Nouvelle ère du langage · FR/EN</div>
        <h1 className="h1" style={{marginTop:16}}>
          L’art de parler aux intelligences
        </h1>
        <p className="lead">
          Exprimez votre intention, recevez un résultat impeccable — orchestré pour chaque IA.
          Une couche méta qui marie <strong>raison</strong> (Mr) et <strong>intuition</strong> (Mrs).
        </p>
        <div className="cta">
          <Link href="/prompt-du-jour" className="btn btn-primary">Essayer maintenant</Link>
          <Link href="/pricing" className="btn">Découvrir les offres</Link>
        </div>
        <div className="kpis">
          <div className="kpi"><strong>+200%</strong><span className="subtle">Efficacité créative</span></div>
          <div className="kpi"><strong>-60%</strong><span className="subtle">Allers-retours</span></div>
          <div className="kpi"><strong>Multi-IA</strong><span className="subtle">Texte · Image · Vidéo</span></div>
        </div>
      </section>

      {/* VALEUR */}
      <section className="section container">
        <div className="grid grid-3">
          <div className="card">
            <h3>Comprendre</h3>
            <p>Analyse de l’intention (contexte, ton, objectif) — compréhension profonde avant exécution.</p>
          </div>
          <div className="card">
            <h3>Traduire</h3>
            <p>Adaptation logique + intuitive pour chaque modèle (GPT, Claude, image, vidéo, code).</p>
          </div>
          <div className="card">
            <h3>Obtenir</h3>
            <p>Résultats premium, cohérents et réutilisables. Moins d’essais, plus d’impact.</p>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section className="section container">
        <h2 className="subtle" style={{marginBottom:12}}>Ils en parlent</h2>
        <div className="testi">
          <div className="quote">“Nos équipes ont gagné 2 h/jour. Le duo Mr/Mrs est un révélateur d’intentions.”</div>
          <div className="quote">“Dès le premier essai, le ton est juste. On a l’impression d’être compris.”</div>
          <div className="quote">“C’est une boussole de langage. Le résultat est plus clair, plus humain.”</div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section" style={{paddingTop:24, paddingBottom:100}}>
        <div className="container" style={{textAlign:"center"}}>
          <h3 style={{margin:"0 0 12px 0"}}>Passez à l’ère du langage universel</h3>
          <p className="subtle">Toujours un pas d’avance sur l’évolution des modèles.</p>
          <div className="cta" style={{marginTop:18}}>
            <Link href="/contact" className="btn btn-primary">Demander une démo</Link>
            <Link href="/manifesto" className="btn">Lire le manifeste</Link>
          </div>
        </div>
      </section>
    </main>
  );
      }
