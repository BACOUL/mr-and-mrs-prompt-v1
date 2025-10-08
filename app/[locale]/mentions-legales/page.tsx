'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function LegalNoticePage() {
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
          <h1 className="font-display text-5xl md:text-6xl font-bold text-secondary-900 mb-12 text-center">
            {t('legalNotice.title')}
          </h1>

          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  {t('legalNotice.editor.title')}
                </h2>
                <div className="text-secondary-700 whitespace-pre-line">
                  {t('legalNotice.editor.content')}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  {t('legalNotice.director.title')}
                </h2>
                <div className="text-secondary-700 whitespace-pre-line">
                  {t('legalNotice.director.content')}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  {t('legalNotice.hosting.title')}
                </h2>
                <div className="text-secondary-700 whitespace-pre-line">
                  {t('legalNotice.hosting.content')}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
