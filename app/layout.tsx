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
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold">Mr &amp; Mrs Prompt</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/manifesto">Manifesto</Link>
              <Link href="/prompt-du-jour">Prompt du jour</Link>
              <Link href="/pricing">Tarifs</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600">
            <p>© {new Date().getFullYear()} Mr &amp; Mrs Prompt — L’art de parler aux intelligences.</p>
            <p className="mt-2">
              Résultat généré par IA à visée exploratoire. Vérification humaine requise.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
