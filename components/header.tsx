'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = locale === 'fr' ? 'en' : 'fr';
  const currentPath = pathname.replace(`/${locale}`, '');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Mr and Mrs Prompt" width={40} height={40} />
          <span className="font-display text-xl font-bold text-primary">
            Mr & Mrs Prompt
          </span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href={`/${locale}#vision`}
            className="text-sm font-medium text-secondary-700 hover:text-primary transition-colors"
          >
            {t('nav.vision')}
          </Link>
          <Link
            href={`/${locale}#products`}
            className="text-sm font-medium text-secondary-700 hover:text-primary transition-colors"
          >
            {t('nav.products')}
          </Link>
          <Link
            href={`/${locale}/pricing`}
            className="text-sm font-medium text-secondary-700 hover:text-primary transition-colors"
          >
            {t('nav.pricing')}
          </Link>
          <Link
            href={`/${locale}/prompt-du-jour`}
            className="text-sm font-medium text-secondary-700 hover:text-primary transition-colors"
          >
            {t('nav.dailyPrompt')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="text-sm font-medium text-secondary-700 hover:text-primary transition-colors"
          >
            {t('nav.contact')}
          </Link>

          <Link
            href={`/${switchLocale}${currentPath}`}
            className="flex items-center space-x-1 text-sm font-medium text-secondary-700 hover:text-primary transition-colors"
          >
            <span>{switchLocale === 'fr' ? '🇫🇷 FR' : '🇺🇸 EN'}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
