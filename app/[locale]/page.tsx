"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-2xl md:text-3xl text-foreground/60 mb-6"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-foreground/70 mb-8"
          >
            {t("hero.description")}
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/pricing"
              className="px-8 py-3 bg-foreground text-background rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              {t("hero.cta1")}
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3 border-2 border-foreground rounded-full font-semibold hover:bg-foreground/5 transition-colors"
            >
              {t("hero.cta2")}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="bg-foreground/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("vision.title")}
            </h2>
            <p className="text-lg text-foreground/70">{t("vision.description")}</p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t("products.title")}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {["mrAndMrsPrompt", "tagos", "digitalMeve"].map((product, index) => (
              <motion.div
                key={product}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-foreground/10 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3">
                  {t(`products.${product}.name`)}
                </h3>
                <p className="text-foreground/70">
                  {t(`products.${product}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-foreground/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t("howItWorks.title")}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["step1", "step2", "step3"].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t(`howItWorks.${step}.title`)}
                </h3>
                <p className="text-foreground/70">
                  {t(`howItWorks.${step}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t("testimonials.title")}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {["quote1", "quote2"].map((quote, index) => (
              <motion.div
                key={quote}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-foreground/10 rounded-lg"
              >
                <p className="text-lg mb-4 italic">
                  "{t(`testimonials.${quote}.text`)}"
                </p>
                <p className="text-sm text-foreground/60">
                  — {t(`testimonials.${quote}.author`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <Link
              href="/pricing"
              className="inline-block px-8 py-3 bg-background text-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              {t("cta.button")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
