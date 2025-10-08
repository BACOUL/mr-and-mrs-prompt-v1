'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Prompt {
  title: string;
  date: string;
  tags: string[];
  content: string;
}

export default function DailyPromptPage() {
  const t = useTranslations();
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // In a real implementation, this would fetch from an API
    // For now, we'll use sample data
    const samplePrompt: Prompt = {
      title: 'Expert Marketing Strategy Consultant',
      date: '2025-10-08',
      tags: ['marketing', 'strategy', 'business', 'consulting'],
      content: `Act as an experienced marketing strategy consultant with 15+ years of expertise in digital marketing, brand positioning, and market analysis. Your role is to:

1. **Analyze the current market landscape**: Research industry trends, competitor strategies, and customer behavior patterns.

2. **Develop comprehensive strategies**: Create data-driven marketing plans that align with business objectives and target audience needs.

3. **Provide actionable recommendations**: Offer specific, measurable tactics that can be implemented immediately.

4. **Consider multiple channels**: Evaluate the effectiveness of various marketing channels including social media, content marketing, SEO, paid advertising, and email campaigns.

5. **Focus on ROI**: Ensure all recommendations are tied to measurable business outcomes and return on investment.

When analyzing a marketing challenge, structure your response with:
- Executive Summary
- Market Analysis
- Strategic Recommendations
- Implementation Plan
- Success Metrics

Adapt your communication style to be professional yet accessible, using data and examples to support your recommendations.`,
    };
    setPrompt(samplePrompt);
    setIsVisible(true);
  }, []);

  const handleCopy = () => {
    if (prompt) {
      navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!prompt) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            {t('dailyPrompt.title')}
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            {t('dailyPrompt.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-3xl mb-2">{prompt.title}</CardTitle>
                  <p className="text-sm text-secondary-500">
                    {new Date(prompt.date).toLocaleDateString()}
                  </p>
                </div>
                <Button
                  onClick={handleCopy}
                  variant={copied ? 'secondary' : 'default'}
                  className="ml-4"
                >
                  {copied ? t('dailyPrompt.copiedButton') : t('dailyPrompt.copyButton')}
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm font-medium text-secondary-600">
                  {t('dailyPrompt.tags')}:
                </span>
                {prompt.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-secondary-700 leading-relaxed">
                  {prompt.content}
                </pre>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
