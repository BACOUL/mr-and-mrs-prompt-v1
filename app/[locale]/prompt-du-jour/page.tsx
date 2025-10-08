'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DailyPromptPage() {
  const t = useTranslations();
  const [copied, setCopied] = useState(false);
  const [promptData, setPromptData] = useState<any>(null);

  useEffect(() => {
    // In a real implementation, this would fetch the latest prompt from the API
    // For now, we'll use mock data
    setPromptData({
      title: 'Sample Daily Prompt',
      tags: ['marketing', 'content', 'social-media'],
      content: `You are an expert social media content creator. Help me create engaging posts for Instagram that will increase audience engagement.

Please provide:
1. A catchy headline
2. Main content (150-200 words)
3. Relevant hashtags
4. Call-to-action

Topic: [Your topic here]
Target audience: [Your audience here]`,
    });
  }, []);

  const copyToClipboard = () => {
    if (promptData?.content) {
      navigator.clipboard.writeText(promptData.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!promptData) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-display font-bold text-secondary mb-4 text-center">
            {t('dailyPrompt.title')}
          </h1>

          <div className="bg-white rounded-2xl shadow-soft p-8 mb-6">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              {promptData.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm font-semibold text-gray-600">
                {t('dailyPrompt.tags')}:
              </span>
              {promptData.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <pre className="whitespace-pre-wrap text-gray-700 font-mono text-sm">
                {promptData.content}
              </pre>
            </div>

            <motion.button
              onClick={copyToClipboard}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}
            >
              {copied ? t('dailyPrompt.copied') : t('dailyPrompt.copyButton')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
