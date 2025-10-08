"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <div className="badge"><i/> Nouvelle ère du langage · International</div>

        <div style={{position:"relative", overflow:"hidden", borderRadius:18, border:"1px solid rgba(255,255,255,.12)", marginTop:18}}>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/og-image.png"
            style={{width:"100%", height:"auto", display:"block", opacity:.9}}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <h1 className="h1" style={{marginTop:22}}>
          Mr &amp; Mrs Prompt — L’art de parler aux intelligences
        </h1>
        <p className="lead">
          Exprimez une intention. Recevez un résultat impeccable, orchestré pour chaque IA.
          Une couche méta qui marie <strong>raison</strong> (Mr) et <strong>intuition</strong> (Mrs).
        </p>
        <div className="cta">
          <Link href="/prompt-du-jour" className="btn btn-primary">Essayer maintenant</Link>
          <Link href="/pricing" className="btn">Découvrir les offres</Link>
        </div>

        <div className="kpis">
          <div className="kpi"><strong>Multi-IA</strong><span className="subtle">Texte · Image · Vidéo · Code</span></div>
          <div className="kpi"><strong>+ Clarté</strong><span className="subtle">Intention comprise, résultats nets</span></div>
          <div className="kpi"><strong>International</strong><span className="subtle">FR · EN (bientôt)</span></div>
        </div>
      </section>

      <section className="section container">
        <div className="grid grid-3">
          <div className="card"><h3>Ce que c’est</h3><p>Un langage entre humains et IA : nous interprétons l’intention et la traduisons pour chaque modèle.</p></div>
          <div className="card"><h3>Comment</h3><p>Analyse du contexte, style, objectif → prompts optimisés Mr (logique) &amp; Mrs (intuition).</p></div>
          <div className="card"><h3>Pourquoi c’est différent</h3><p>Une boussole de sens, pas une liste de “trucs & astuces”. Toujours un pas d’avance.</p></div>
        </div>
      </section>
    </main>
  );
}
