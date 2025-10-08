'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 mb-10 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="gradient-pulse">
                  <Link href={`/${locale}/contact`}>{t('hero.ctaTry')}</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" variant="outline">
                  <Link href={`/${locale}/contact`}>{t('hero.ctaDemo')}</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              {t('vision.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('vision.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-900 mb-12 text-center">
              {t('products.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <CardTitle className="mb-4">
                      {t('products.mrAndMrsPrompt.title')}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t('products.mrAndMrsPrompt.description')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <CardTitle className="mb-4">
                      {t('products.tagos.title')}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t('products.tagos.description')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <CardTitle className="mb-4">
                      {t('products.digitalMeve.title')}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t('products.digitalMeve.description')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-900 mb-12 text-center">
              {t('howItWorks.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  {t('howItWorks.step1.title')}
                </h3>
                <p className="text-secondary-600">
                  {t('howItWorks.step1.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  {t('howItWorks.step2.title')}
                </h3>
                <p className="text-secondary-600">
                  {t('howItWorks.step2.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  {t('howItWorks.step3.title')}
                </h3>
                <p className="text-secondary-600">
                  {t('howItWorks.step3.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-900 mb-12 text-center">
              {t('testimonials.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-secondary-700 mb-4 italic">
                    &quot;{t('testimonials.quote1.text')}&quot;
                  </p>
                  <div>
                    <p className="font-semibold">{t('testimonials.quote1.author')}</p>
                    <p className="text-sm text-secondary-600">{t('testimonials.quote1.role')}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-secondary-700 mb-4 italic">
                    &quot;{t('testimonials.quote2.text')}&quot;
                  </p>
                  <div>
                    <p className="font-semibold">{t('testimonials.quote2.author')}</p>
                    <p className="text-sm text-secondary-600">{t('testimonials.quote2.role')}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-secondary-700 mb-4 italic">
                    &quot;{t('testimonials.quote3.text')}&quot;
                  </p>
                  <div>
                    <p className="font-semibold">{t('testimonials.quote3.author')}</p>
                    <p className="text-sm text-secondary-600">{t('testimonials.quote3.role')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              {t('finalCta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {t('finalCta.subtitle')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-secondary-50">
                <Link href={`/${locale}/pricing`}>{t('finalCta.button')}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
