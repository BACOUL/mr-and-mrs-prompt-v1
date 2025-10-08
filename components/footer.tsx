'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="border-t border-secondary-200 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <Link
              href={`/${locale}/${locale === 'fr' ? 'mentions-legales' : 'legal-notice'}`}
              className="text-sm text-secondary-600 hover:text-primary transition-colors"
            >
              {t('footer.legalNotice')}
            </Link>
            <Link
              href={`/${locale}/${locale === 'fr' ? 'confidentialite' : 'privacy'}`}
              className="text-sm text-secondary-600 hover:text-primary transition-colors"
            >
              {t('footer.privacy')}
            </Link>
          </div>
          <p className="text-center text-xs text-secondary-500 max-w-2xl">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
