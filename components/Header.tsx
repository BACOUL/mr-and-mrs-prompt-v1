'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    return newPath;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-soft">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Mr and Mrs Prompt" className="h-10 w-10" />
            <span className="text-xl font-display font-bold text-primary">
              Mr & Mrs Prompt
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${locale}#vision`}
              className="text-secondary hover:text-primary transition-colors"
            >
              {t('nav.vision')}
            </Link>
            <Link
              href={`/${locale}#products`}
              className="text-secondary hover:text-primary transition-colors"
            >
              {t('nav.products')}
            </Link>
            <Link
              href={`/${locale}/pricing`}
              className="text-secondary hover:text-primary transition-colors"
            >
              {t('nav.pricing')}
            </Link>
            <Link
              href={`/${locale}/prompt-du-jour`}
              className="text-secondary hover:text-primary transition-colors"
            >
              {t('nav.dailyPrompt')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-secondary hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </div>

          <Link
            href={switchLocale()}
            className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <span className="text-sm font-medium">
              {locale === 'fr' ? '🇺🇸 EN' : '🇫🇷 FR'}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
