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
            <h2>Éditeur du site</h2>
            <p>
              Mr and Mrs Prompt<br />
              Société par actions simplifiée<br />
              Capital social : 10 000 €<br />
              Siège social : Paris, France<br />
              RCS Paris XXX XXX XXX
            </p>

            <h2>Directeur de la publication</h2>
            <p>
              Le directeur de la publication du site est le représentant légal de la société.
            </p>

            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, etc.) est la propriété exclusive 
              de Mr and Mrs Prompt ou de ses partenaires. Toute reproduction, même partielle, est interdite 
              sans autorisation préalable.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression 
              de vos données personnelles. Pour exercer ces droits, contactez-nous via le formulaire de contact.
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
              En continuant votre navigation, vous acceptez leur utilisation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
