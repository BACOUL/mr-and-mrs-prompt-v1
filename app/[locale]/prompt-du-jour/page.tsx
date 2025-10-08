"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface PromptData {
  title: string;
  tags: string[];
  content: string;
}

export default function PromptOfTheDayPage() {
  const t = useTranslations("promptOfDay");
  const [promptData, setPromptData] = useState<PromptData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch the latest prompt from the API route
    fetch("/api/latest-prompt")
      .then((res) => res.json())
      .then((data) => setPromptData(data))
      .catch((err) => console.error("Error fetching prompt:", err));
  }, []);

  const handleCopy = async () => {
    if (promptData?.content) {
      await navigator.clipboard.writeText(promptData.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!promptData) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-lg text-foreground/60">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {promptData.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {promptData.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 bg-foreground/10 rounded-full text-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="p-6 bg-foreground/5 rounded-lg border border-foreground/10 mb-6">
              <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                {promptData.content}
              </pre>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleCopy}
                className="px-6 py-3 bg-foreground text-background rounded-full font-semibold hover:opacity-90 transition-opacity relative"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t("copied")}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t("copy")}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
