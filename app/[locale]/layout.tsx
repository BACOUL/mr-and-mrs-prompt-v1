import "../globals.css";
import Link from "next/link";

export default function LocaleLayout({
  children, params: { locale }
}: { children: React.ReactNode; params: { locale: "fr"|"en" } }) {
  return (
    <html lang={locale}>
      <body>
        <header className="header">
          <div className="container inner">
            <Link href={`/${locale}`} className="logo"><span className="logo-badge" /><span>Mr &amp; Mrs Prompt</span></Link>
            <nav className="nav" style={{display:"flex", gap:16}}>
              <Link href={`/${locale}/manifesto`}>Manifesto</Link>
              <Link href={`/${locale}/prompt-du-jour`}>Prompt du jour</Link>
              <Link href={`/${locale}/pricing`}>Tarifs</Link>
              <Link href={`/${locale}/contact`}>Contact</Link>
              <span className="subtle">|</span>
              <Link href={locale==="fr"?"/en":"\/fr"}>{locale==="fr"?"EN":"FR"}</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container subtle">© {new Date().getFullYear()} Mr &amp; Mrs Prompt — L’art de parler aux intelligences.</div>
        </footer>
      </body>
    </html>
  );
}
