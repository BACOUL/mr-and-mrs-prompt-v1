'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-secondary text-white py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="Mr and Mrs Prompt" className="h-10 w-10 brightness-0 invert" />
              <span className="text-xl font-display font-bold">
                Mr & Mrs Prompt
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/${locale === 'fr' ? 'mentions-legales' : 'legal-notice'}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.legalNotice')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/${locale === 'fr' ? 'confidentialite' : 'privacy'}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <p className="text-gray-300 text-sm">
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
