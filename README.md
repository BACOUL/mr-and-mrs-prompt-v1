# Mr and Mrs Prompt

[🇫🇷 Français](#français) | [🇺🇸 English](#english)

---

## Français

### 🚀 À propos

**Mr and Mrs Prompt** est une plateforme complète d'optimisation de prompts IA construite avec Next.js 14, offrant une expérience bilingue (FR/EN) élégante et moderne.

### ✨ Fonctionnalités

- 🌐 **Multilingue** : Support complet français et anglais avec next-intl
- 🎨 **Design moderne** : Interface élégante avec Tailwind CSS et Framer Motion
- 📱 **Responsive** : Expérience optimale sur mobile et desktop
- ⚡ **Performance** : Built avec Next.js 14 App Router et Turbopack
- 🎯 **SEO optimisé** : Métadonnées dynamiques et sitemap complet
- 📝 **Gestion de contenu** : Prompts quotidiens en Markdown
- 📨 **Formulaire de contact** : Validation avec react-hook-form et zod

### 🛠 Technologies

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS, shadcn/ui
- **Animation** : Framer Motion
- **i18n** : next-intl
- **Validation** : react-hook-form, zod
- **Contenu** : gray-matter (Markdown)
- **SEO** : next-seo

### 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/BACOUL/mr-and-mrs-prompt-v1.git
cd mr-and-mrs-prompt-v1

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

### 🔧 Configuration

Créez un fichier `.env` à la racine du projet avec :

```env
WEBHOOK_URL=https://your-webhook-url.com/contact
```

### 📁 Structure du projet

```
mr-and-mrs-prompt-v1/
├── app/
│   ├── [locale]/              # Pages localisées
│   │   ├── layout.tsx         # Layout global
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── pricing/           # Page tarifs
│   │   ├── contact/           # Page contact
│   │   ├── prompt-du-jour/    # Page prompt quotidien
│   │   ├── mentions-legales/  # Mentions légales (FR)
│   │   ├── confidentialite/   # Confidentialité (FR)
│   │   ├── legal-notice/      # Legal notice (EN)
│   │   └── privacy/           # Privacy (EN)
│   └── api/
│       └── contact/           # API formulaire contact
├── components/
│   ├── ui/                    # Composants UI réutilisables
│   ├── header.tsx             # En-tête avec navigation
│   └── footer.tsx             # Pied de page
├── content/
│   └── prompts/               # Fichiers Markdown des prompts
├── messages/
│   ├── fr.json                # Traductions françaises
│   └── en.json                # Traductions anglaises
├── lib/                       # Utilitaires
├── public/                    # Assets statiques
└── styles/                    # Styles globaux
```

### 🚀 Déploiement sur Vercel

1. **Créer un compte Vercel** : [vercel.com](https://vercel.com)

2. **Importer le projet** :
   - Connectez votre repository GitHub
   - Sélectionnez le projet
   - Vercel détectera automatiquement Next.js

3. **Configurer les variables d'environnement** :
   - Ajoutez `WEBHOOK_URL` dans les paramètres du projet

4. **Déployer** :
   ```bash
   npm run build  # Test local
   git push       # Déploiement automatique sur Vercel
   ```

### 📝 Ajouter un nouveau prompt

Créez un fichier dans `content/prompts/` :

```markdown
---
title: "Titre du prompt"
date: "2025-10-08"
tags: ["tag1", "tag2"]
---

Contenu du prompt ici...
```

### 🎨 Personnalisation

Les couleurs et styles peuvent être modifiés dans :
- `tailwind.config.ts` : Configuration Tailwind
- `styles/globals.css` : Styles globaux

### 📄 Licence

© 2025 Mr and Mrs Prompt. Tous droits réservés.

---

## English

### 🚀 About

**Mr and Mrs Prompt** is a complete AI prompt optimization platform built with Next.js 14, offering an elegant and modern bilingual experience (FR/EN).

### ✨ Features

- 🌐 **Multilingual** : Full French and English support with next-intl
- 🎨 **Modern Design** : Elegant interface with Tailwind CSS and Framer Motion
- 📱 **Responsive** : Optimal experience on mobile and desktop
- ⚡ **Performance** : Built with Next.js 14 App Router and Turbopack
- 🎯 **SEO Optimized** : Dynamic metadata and complete sitemap
- 📝 **Content Management** : Daily prompts in Markdown
- 📨 **Contact Form** : Validation with react-hook-form and zod

### 🛠 Technologies

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS, shadcn/ui
- **Animation** : Framer Motion
- **i18n** : next-intl
- **Validation** : react-hook-form, zod
- **Content** : gray-matter (Markdown)
- **SEO** : next-seo

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/BACOUL/mr-and-mrs-prompt-v1.git
cd mr-and-mrs-prompt-v1

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### 🔧 Configuration

Create a `.env` file at the root of the project with:

```env
WEBHOOK_URL=https://your-webhook-url.com/contact
```

### 📁 Project Structure

```
mr-and-mrs-prompt-v1/
├── app/
│   ├── [locale]/              # Localized pages
│   │   ├── layout.tsx         # Global layout
│   │   ├── page.tsx           # Home page
│   │   ├── pricing/           # Pricing page
│   │   ├── contact/           # Contact page
│   │   ├── prompt-du-jour/    # Daily prompt page
│   │   ├── mentions-legales/  # Legal notice (FR)
│   │   ├── confidentialite/   # Privacy (FR)
│   │   ├── legal-notice/      # Legal notice (EN)
│   │   └── privacy/           # Privacy (EN)
│   └── api/
│       └── contact/           # Contact form API
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── header.tsx             # Header with navigation
│   └── footer.tsx             # Footer
├── content/
│   └── prompts/               # Markdown prompt files
├── messages/
│   ├── fr.json                # French translations
│   └── en.json                # English translations
├── lib/                       # Utilities
├── public/                    # Static assets
└── styles/                    # Global styles
```

### 🚀 Deploy on Vercel

1. **Create a Vercel account** : [vercel.com](https://vercel.com)

2. **Import the project** :
   - Connect your GitHub repository
   - Select the project
   - Vercel will automatically detect Next.js

3. **Configure environment variables** :
   - Add `WEBHOOK_URL` in project settings

4. **Deploy** :
   ```bash
   npm run build  # Local test
   git push       # Automatic deployment on Vercel
   ```

### 📝 Add a New Prompt

Create a file in `content/prompts/` :

```markdown
---
title: "Prompt title"
date: "2025-10-08"
tags: ["tag1", "tag2"]
---

Prompt content here...
```

### 🎨 Customization

Colors and styles can be modified in:
- `tailwind.config.ts` : Tailwind configuration
- `styles/globals.css` : Global styles

### 📄 License

© 2025 Mr and Mrs Prompt. All rights reserved.
