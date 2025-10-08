# Miss & Mr Prompt - Site Web Premium Multilingue / Premium Multilingual Website

[English version below](#english-version)

## Version Française

### À propos du projet

Site web premium pour **Miss & Mr Prompt**, construit avec les dernières technologies web pour offrir une expérience utilisateur exceptionnelle. Le projet met l'accent sur le multilinguisme, les animations fluides, le SEO optimisé et l'intégration d'une API de contact.

### Technologies utilisées

- **Next.js 14** (App Router) - Framework React pour la production
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI réutilisables
- **Framer Motion** - Bibliothèque d'animations
- **next-intl** - Internationalisation (i18n)

### Installation

```bash
npm install && npm run dev
```

Le serveur de développement démarre sur [http://localhost:3000](http://localhost:3000).

### Configuration de l'internationalisation

Le projet utilise **next-intl** pour gérer plusieurs langues. Les fichiers de traduction se trouvent dans :

- `/messages/fr.json` - Traductions en français (langue par défaut)
- `/messages/en.json` - Traductions en anglais (optionnel)

Le français est la langue par défaut, l'anglais est une langue optionnelle.

### API Contact

L'API de contact accepte les requêtes POST à l'endpoint `/api/contact` avec le payload JSON suivant :

```json
{
  "name": "Nom de l'utilisateur",
  "email": "email@exemple.com",
  "message": "Message de l'utilisateur"
}
```

L'API transmet les données au webhook configuré dans la variable d'environnement `WEBHOOK_URL` et retourne `{ok: true}` en cas de succès.

#### Configuration

Créez un fichier `.env.local` à la racine du projet et ajoutez votre URL de webhook :

```
WEBHOOK_URL=https://votre-webhook-url.com
```

### Déploiement sur Vercel

La façon la plus simple de déployer votre application Next.js est d'utiliser la [plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), créée par les développeurs de Next.js.

N'oubliez pas de configurer la variable d'environnement `WEBHOOK_URL` dans les paramètres de votre projet Vercel.

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

### Licence

MIT

---

## English Version

### About the Project

Premium website for **Miss & Mr Prompt**, built with the latest web technologies to deliver an exceptional user experience. The project focuses on multilingualism, smooth animations, optimized SEO, and contact API integration.

### Technologies Used

- **Next.js 14** (App Router) - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components
- **Framer Motion** - Animation library
- **next-intl** - Internationalization (i18n)

### Installation

```bash
npm install && npm run dev
```

The development server starts on [http://localhost:3000](http://localhost:3000).

### Internationalization Setup

The project uses **next-intl** to manage multiple languages. Translation files are located in:

- `/messages/fr.json` - French translations (default language)
- `/messages/en.json` - English translations (optional)

French is the default language, English is an optional language.

### API Contact

The contact API accepts POST requests to the `/api/contact` endpoint with the following JSON payload:

```json
{
  "name": "User's name",
  "email": "email@example.com",
  "message": "User's message"
}
```

The API forwards the data to the webhook configured in the `WEBHOOK_URL` environment variable and returns `{ok: true}` on success.

#### Configuration

Create a `.env.local` file at the root of the project and add your webhook URL:

```
WEBHOOK_URL=https://your-webhook-url.com
```

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), created by the developers of Next.js.

Don't forget to configure the `WEBHOOK_URL` environment variable in your Vercel project settings.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### License

MIT
