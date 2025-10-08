'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function PricingPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">{t('pricing.free.name')}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {t('pricing.free.price')}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.free.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.free.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.free.feature3')}</span>
                  </li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href={`/${locale}/contact`}>{t('pricing.free.cta')}</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                {t('pricing.pro.popular')}
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{t('pricing.pro.name')}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {t('pricing.pro.price')}
                  </span>
                  <span className="text-secondary-600">/{t('pricing.monthly')}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.pro.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.pro.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.pro.feature3')}</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href={`/${locale}/contact`}>{t('pricing.pro.cta')}</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Studio Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">{t('pricing.studio.name')}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {t('pricing.studio.price')}
                  </span>
                  <span className="text-secondary-600">/{t('pricing.monthly')}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.studio.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.studio.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.studio.feature3')}</span>
                  </li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href={`/${locale}/contact`}>{t('pricing.studio.cta')}</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">{t('pricing.enterprise.name')}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {t('pricing.enterprise.price')}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.enterprise.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.enterprise.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-secondary-700">{t('pricing.enterprise.feature3')}</span>
                  </li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href={`/${locale}/contact`}>{t('pricing.enterprise.cta')}</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
