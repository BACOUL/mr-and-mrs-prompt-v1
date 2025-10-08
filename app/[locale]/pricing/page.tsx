"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function PricingPage() {
  const t = useTranslations("pricing");

  const plans = [
    { key: "free", popular: false },
    { key: "pro", popular: true },
    { key: "studio", popular: false },
    { key: "enterprise", popular: false },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-lg text-foreground/70">{t("description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative p-6 border rounded-lg flex flex-col ${
                plan.popular
                  ? "border-foreground shadow-xl scale-105"
                  : "border-foreground/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-sm font-semibold">
                  {t(`${plan.key}.badge`)}
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{t(`${plan.key}.name`)}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{t(`${plan.key}.price`)}</span>
                  {plan.key !== "enterprise" && (
                    <span className="text-foreground/60 ml-1">
                      {t(`${plan.key}.period`)}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mb-8 space-y-3 flex-grow">
                {[0, 1, 2].map((i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-foreground/70">
                      {t(`${plan.key}.features.${i}`)}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/"
                className={`block text-center py-3 px-6 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? "bg-foreground text-background hover:opacity-90"
                    : "border-2 border-foreground hover:bg-foreground/5"
                }`}
              >
                {t(`${plan.key}.cta`)}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
