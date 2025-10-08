'use client';

import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations();

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-display font-bold text-secondary mb-8">
            {t('privacy.title')}
          </h1>
          
          <div className="bg-white rounded-2xl shadow-soft p-8 prose max-w-none">
            <h2>Introduction</h2>
            <p>
              Mr and Mrs Prompt is committed to protecting the confidentiality of your personal data. 
              This policy explains how we collect, use and protect your information.
            </p>

            <h2>Data Collected</h2>
            <p>
              We collect the following data:
            </p>
            <ul>
              <li>Name and email address (via contact form)</li>
              <li>Browsing data (analytical cookies)</li>
              <li>Platform usage information</li>
            </ul>

            <h2>Use of Data</h2>
            <p>
              Your data is used to:
            </p>
            <ul>
              <li>Respond to your requests</li>
              <li>Improve our services</li>
              <li>Send you information about our products (with your consent)</li>
            </ul>

            <h2>Data Protection</h2>
            <p>
              We implement appropriate technical and organizational security measures 
              to protect your data against unauthorized access, modification, disclosure or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>
              In accordance with GDPR, you have the following rights:
            </p>
            <ul>
              <li>Right to access your data</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to portability</li>
              <li>Right to object</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use cookies to improve your experience. You can configure your 
              browser to refuse cookies, but this may affect some site features.
            </p>

            <h2>Contact</h2>
            <p>
              For any questions regarding this privacy policy, contact us via 
              the contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
