import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Mr & Mrs Prompt",
  description: "L’art de parler aux intelligences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="header">
          <div className="container inner">
            <Link href="/" className="logo">
              <span className="logo-badge" />
              <span>Mr &amp; Mrs Prompt</span>
            </Link>
            <nav className="nav" style={{display:"flex", gap:16}}>
              <Link href="/manifesto">Manifesto</Link>
              <Link href="/prompt-du-jour">Prompt du jour</Link>
              <Link href="/pricing">Tarifs</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container subtle">
            © {new Date().getFullYear()} Mr &amp; Mrs Prompt — L’art de parler aux intelligences. •
            <span> Résultats IA à visée exploratoire — vérification humaine requise.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
