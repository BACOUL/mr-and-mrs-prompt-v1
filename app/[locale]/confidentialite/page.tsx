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
              Mr and Mrs Prompt s'engage à protéger la confidentialité de vos données personnelles. 
              Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
            </p>

            <h2>Données collectées</h2>
            <p>
              Nous collectons les données suivantes :
            </p>
            <ul>
              <li>Nom et adresse e-mail (via le formulaire de contact)</li>
              <li>Données de navigation (cookies analytiques)</li>
              <li>Informations d'utilisation de la plateforme</li>
            </ul>

            <h2>Utilisation des données</h2>
            <p>
              Vos données sont utilisées pour :
            </p>
            <ul>
              <li>Répondre à vos demandes</li>
              <li>Améliorer nos services</li>
              <li>Vous envoyer des informations sur nos produits (avec votre consentement)</li>
            </ul>

            <h2>Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées 
              pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés.
            </p>

            <h2>Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez configurer votre 
              navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, contactez-nous via 
              le formulaire de contact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
