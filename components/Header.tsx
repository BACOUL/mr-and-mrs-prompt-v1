"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = locale === "fr" ? "en" : "fr";

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
            Mr & Mrs Prompt
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`hover:text-foreground/80 transition-colors ${
                pathname === "/" ? "font-semibold" : ""
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/pricing"
              className={`hover:text-foreground/80 transition-colors ${
                pathname === "/pricing" ? "font-semibold" : ""
              }`}
            >
              {t("nav.pricing")}
            </Link>
            <Link
              href="/prompt-du-jour"
              className={`hover:text-foreground/80 transition-colors ${
                pathname === "/prompt-du-jour" ? "font-semibold" : ""
              }`}
            >
              {t("nav.promptOfDay")}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href={pathname}
              locale={switchLocale}
              className="px-3 py-1 rounded-md border border-foreground/20 hover:bg-foreground/5 transition-colors text-sm font-medium"
            >
              {switchLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
