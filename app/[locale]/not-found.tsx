'use client';

import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations();
  
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
          Page not found
        </h2>
        <p className="text-secondary-600">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}
