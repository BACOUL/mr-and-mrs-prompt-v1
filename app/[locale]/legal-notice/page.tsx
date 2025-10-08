'use client';

import { useTranslations } from 'next-intl';

export default function LegalNoticePage() {
  const t = useTranslations();

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-display font-bold text-secondary mb-8">
            {t('legal.title')}
          </h1>
          
          <div className="bg-white rounded-2xl shadow-soft p-8 prose max-w-none">
            <h2>Site Publisher</h2>
            <p>
              Mr and Mrs Prompt<br />
              Simplified joint-stock company<br />
              Share capital: €10,000<br />
              Registered office: Paris, France<br />
              RCS Paris XXX XXX XXX
            </p>

            <h2>Publication Director</h2>
            <p>
              The publication director of the site is the legal representative of the company.
            </p>

            <h2>Hosting</h2>
            <p>
              This site is hosted by Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              United States
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this site (texts, images, logos, etc.) is the exclusive property 
              of Mr and Mrs Prompt or its partners. Any reproduction, even partial, is prohibited 
              without prior authorization.
            </p>

            <h2>Personal Data</h2>
            <p>
              In accordance with GDPR, you have the right to access, rectify and delete 
              your personal data. To exercise these rights, contact us via the contact form.
            </p>

            <h2>Cookies</h2>
            <p>
              This site uses cookies to improve user experience and analyze traffic. 
              By continuing your navigation, you accept their use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
