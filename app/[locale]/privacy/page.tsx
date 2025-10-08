'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPage() {
  const t = useTranslations();

  return (
    <div className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-secondary-900 mb-6 text-center">
            {t('privacy.title')}
          </h1>
          <p className="text-xl text-secondary-600 text-center mb-12">
            {t('privacy.intro')}
          </p>

          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  {t('privacy.dataCollection.title')}
                </h2>
                <p className="text-secondary-700">
                  {t('privacy.dataCollection.content')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  {t('privacy.dataUsage.title')}
                </h2>
                <p className="text-secondary-700">
                  {t('privacy.dataUsage.content')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  {t('privacy.dataProtection.title')}
                </h2>
                <p className="text-secondary-700">
                  {t('privacy.dataProtection.content')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  {t('privacy.rights.title')}
                </h2>
                <p className="text-secondary-700">
                  {t('privacy.rights.content')}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
