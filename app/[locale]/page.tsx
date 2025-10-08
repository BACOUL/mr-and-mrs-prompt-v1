'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-pulse opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-secondary mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/pricing`}
                className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-soft"
              >
                {t('hero.cta1')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-2xl font-semibold hover:bg-primary/5 transition-all"
              >
                {t('hero.cta2')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-display font-bold text-secondary mb-6">
              {t('vision.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('vision.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-secondary text-center mb-12">
            {t('products.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t('products.mrAndMrsPrompt.name'),
                description: t('products.mrAndMrsPrompt.description'),
              },
              {
                name: t('products.tagos.name'),
                description: t('products.tagos.description'),
              },
              {
                name: t('products.digitalMeve.name'),
                description: t('products.digitalMeve.description'),
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-secondary text-center mb-12">
            {t('howItWorks.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: t('howItWorks.step1.title'),
                description: t('howItWorks.step1.description'),
              },
              {
                title: t('howItWorks.step2.title'),
                description: t('howItWorks.step2.description'),
              },
              {
                title: t('howItWorks.step3.title'),
                description: t('howItWorks.step3.description'),
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-secondary text-center mb-12">
            {t('testimonials.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: t('testimonials.testimonial1.quote'),
                author: t('testimonials.testimonial1.author'),
              },
              {
                quote: t('testimonials.testimonial2.quote'),
                author: t('testimonials.testimonial2.author'),
              },
              {
                quote: t('testimonials.testimonial3.quote'),
                author: t('testimonials.testimonial3.author'),
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-soft"
              >
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-secondary">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              {t('finalCta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('finalCta.description')}
            </p>
            <Link
              href={`/${locale}/pricing`}
              className="inline-block px-8 py-4 bg-white text-primary rounded-2xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              {t('finalCta.cta')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
