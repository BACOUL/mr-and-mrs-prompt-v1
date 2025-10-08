"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-foreground/5 border-t border-foreground/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:underline hover:underline-offset-4">
              {t("legal")}
            </Link>
            <Link href="/" className="hover:underline hover:underline-offset-4">
              {t("privacy")}
            </Link>
            <Link href="/" className="hover:underline hover:underline-offset-4">
              {t("terms")}
            </Link>
          </div>
          <div className="text-sm text-foreground/60">{t("disclaimer")}</div>
        </div>
      </div>
    </footer>
  );
}
