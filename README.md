# Mr and Mrs Prompt | Plateforme de Prompts IA

[🇫🇷 Français](#français) | [🇺🇸 English](#english)

---

## Français

**Mr and Mrs Prompt** est une plateforme bilingual (FR/EN) de création et d'optimisation de prompts pour l'intelligence artificielle. Construit avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

### 🚀 Fonctionnalités

- ✨ **Interface bilingue** : Français et Anglais avec changement de langue dynamique
- 🎨 **Design moderne** : Interface élégante et minimaliste avec animations fluides
- 📱 **Responsive** : Optimisé pour tous les appareils
- 🔥 **Prompt du jour** : Un nouveau prompt professionnel chaque jour
- 💬 **Formulaire de contact** : Avec validation côté client (React Hook Form + Zod)
- 📊 **Plans tarifaires** : 4 formules adaptées à tous les besoins
- 🎯 **SEO optimisé** : Sitemap, robots.txt, métadonnées dynamiques

### 📦 Stack Technique

- **Framework** : Next.js 15 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Internationalisation** : next-intl
- **Validation** : Zod + React Hook Form
- **Markdown** : gray-matter

### 🛠️ Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/BACOUL/mr-and-mrs-prompt-v1.git
   cd mr-and-mrs-prompt-v1
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env.local
   ```
   
   Éditez `.env.local` et ajoutez votre URL de webhook :
   ```
   WEBHOOK_URL=https://your-webhook-url.com
   ```

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir le navigateur**
   
   Visitez [http://localhost:3000](http://localhost:3000)

### 📁 Structure du Projet

```
├── app/
│   ├── [locale]/          # Pages localisées (fr/en)
│   │   ├── layout.tsx     # Layout global avec header/footer
│   │   ├── page.tsx       # Page d'accueil
│   │   ├── pricing/       # Page tarifs
│   │   ├── contact/       # Page contact
│   │   ├── prompt-du-jour/ # Prompt quotidien
│   │   └── mentions-legales/ # Pages légales
│   └── api/
│       └── contact/       # API endpoint pour le formulaire
├── components/            # Composants réutilisables
│   ├── Header.tsx
│   └── Footer.tsx
├── messages/             # Fichiers de traduction
│   ├── fr.json
│   └── en.json
├── content/
│   └── prompts/          # Prompts Markdown
├── public/               # Assets statiques
└── styles/
    └── globals.css       # Styles globaux
```

### 🎨 Palette de Couleurs

- **Primary** : Indigo (#4F46E5)
- **Secondary** : Slate (#1E293B)
- **Background** : White (#FFFFFF)

### 🚢 Déploiement sur Vercel

1. **Push vers GitHub**
   ```bash
   git add .
   git commit -m "feat: complete website implementation"
   git push origin main
   ```

2. **Connecter à Vercel**
   - Visitez [vercel.com](https://vercel.com)
   - Importez votre repository GitHub
   - Configurez les variables d'environnement :
     - `WEBHOOK_URL` : URL de votre webhook pour le formulaire de contact

3. **Déployer**
   
   Vercel déploie automatiquement à chaque push sur `main`

### 📝 Ajouter un Nouveau Prompt

Créez un fichier Markdown dans `content/prompts/` :

```markdown
---
title: "Titre du prompt"
target_model: "GPT-4, Claude"
tags: ["tag1", "tag2"]
date: "2025-01-15"
---

Contenu du prompt ici...
```

### 🔧 Scripts Disponibles

- `npm run dev` : Lancer le serveur de développement
- `npm run build` : Construire pour la production
- `npm run start` : Lancer le serveur de production

---

## English

**Mr and Mrs Prompt** is a bilingual (FR/EN) platform for creating and optimizing AI prompts. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

### 🚀 Features

- ✨ **Bilingual Interface**: French and English with dynamic language switching
- 🎨 **Modern Design**: Elegant and minimalist interface with smooth animations
- 📱 **Responsive**: Optimized for all devices
- 🔥 **Daily Prompt**: A new professional prompt every day
- 💬 **Contact Form**: With client-side validation (React Hook Form + Zod)
- 📊 **Pricing Plans**: 4 plans adapted to all needs
- 🎯 **SEO Optimized**: Sitemap, robots.txt, dynamic metadata

### 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Validation**: Zod + React Hook Form
- **Markdown**: gray-matter

### 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BACOUL/mr-and-mrs-prompt-v1.git
   cd mr-and-mrs-prompt-v1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your webhook URL:
   ```
   WEBHOOK_URL=https://your-webhook-url.com
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Visit [http://localhost:3000](http://localhost:3000)

### 📁 Project Structure

```
├── app/
│   ├── [locale]/          # Localized pages (fr/en)
│   │   ├── layout.tsx     # Global layout with header/footer
│   │   ├── page.tsx       # Home page
│   │   ├── pricing/       # Pricing page
│   │   ├── contact/       # Contact page
│   │   ├── prompt-du-jour/ # Daily prompt
│   │   └── legal-notice/  # Legal pages
│   └── api/
│       └── contact/       # API endpoint for form
├── components/            # Reusable components
│   ├── Header.tsx
│   └── Footer.tsx
├── messages/             # Translation files
│   ├── fr.json
│   └── en.json
├── content/
│   └── prompts/          # Markdown prompts
├── public/               # Static assets
└── styles/
    └── globals.css       # Global styles
```

### 🎨 Color Palette

- **Primary**: Indigo (#4F46E5)
- **Secondary**: Slate (#1E293B)
- **Background**: White (#FFFFFF)

### 🚢 Deployment on Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: complete website implementation"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables:
     - `WEBHOOK_URL`: URL of your webhook for the contact form

3. **Deploy**
   
   Vercel automatically deploys on every push to `main`

### 📝 Adding a New Prompt

Create a Markdown file in `content/prompts/`:

```markdown
---
title: "Prompt title"
target_model: "GPT-4, Claude"
tags: ["tag1", "tag2"]
date: "2025-01-15"
---

Prompt content here...
```

### 🔧 Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build for production
- `npm run start`: Start the production server

---

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or support, please use the contact form on the website.

---

Made with ❤️ by Mr and Mrs Prompt Team
