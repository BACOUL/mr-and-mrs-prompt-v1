import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import '@/styles/globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return {
    title: {
      default: 'Mr and Mrs Prompt - AI Prompt Optimization Platform',
      template: '%s | Mr and Mrs Prompt',
    },
    description:
      locale === 'fr'
        ? 'Optimisez vos prompts IA pour des résultats professionnels et précis. Plateforme complète de création et gestion de prompts.'
        : 'Optimize your AI prompts for professional and precise results. Complete platform for prompt creation and management.',
    keywords: ['AI', 'Prompts', 'ChatGPT', 'Optimization', 'IA', 'Optimisation'],
    authors: [{ name: 'Mr and Mrs Prompt' }],
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: `https://mrandmrsprompt.com/${locale}`,
      siteName: 'Mr and Mrs Prompt',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Mr and Mrs Prompt',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mr and Mrs Prompt',
      description:
        locale === 'fr'
          ? 'Optimisez vos prompts IA'
          : 'Optimize your AI prompts',
      images: ['/og-image.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
