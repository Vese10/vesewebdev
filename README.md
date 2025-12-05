# 💼 Portfolio Professionale - Programmatore Freelance

Sito web portfolio moderno e ottimizzato SEO per programmatore freelance, sviluppato con Next.js 15, TypeScript e Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwind-css)

## 🌟 Features

### Homepage Completa
- ✅ **Hero Section** con animazioni Framer Motion e statistiche dinamiche
- ✅ **Chi Sono** con presentazione professionale e features
- ✅ **Servizi** con 2 card linkabili (Aziende/Privati e Web Agency)
- ✅ **Portfolio Preview** con progetti in evidenza
- ✅ **Contatti** con form funzionante e validazione

### Pagine Dedicate
- 📄 **Servizi per Aziende e Privati** - Dettaglio offerte (siti web, gestionali, web app, AI)
- 📄 **Servizi per Web Agency** - Competenze tecniche e modalità di collaborazione
- 📄 **Portfolio** - Struttura base pronta per espansione

### Design & UX
- 🎨 **Design Moderno** con gradienti, glassmorphism e micro-animazioni
- 📱 **Responsive** mobile-first su tutti i dispositivi
- ⚡ **Performance** ottimizzate con lazy loading e code splitting
- 🌈 **Palette Colori** vibrante e professionale
- ✨ **Animazioni** fluide con Framer Motion

### SEO Optimization
- 🔍 **Metadata completi** su tutte le pagine
- 🗺️ **Sitemap dinamica** generata automaticamente
- 🤖 **robots.txt** configurato
- 📍 **Targeting locale** per Ferrara, Bologna e Emilia-Romagna
- 🏷️ **Schema JSON-LD** per LocalBusiness
- 📊 **Open Graph** per social sharing

---

## 🚀 Quick Start

### Prerequisiti
- Node.js 18+ 
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone <repository-url>
cd vesewebdev

# Installa le dipendenze
npm install

# Avvia il dev server
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

---

## 📦 Stack Tecnologico

| Tecnologia | Versione | Utilizzo |
|------------|----------|----------|
| [Next.js](https://nextjs.org/) | 16.0.7 | Framework React con App Router |
| [React](https://react.dev/) | 19.2.0 | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type Safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Styling & Design System |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animazioni |
| [React Hook Form](https://react-hook-form.com/) | 7.x | Gestione Form |
| [Lucide React](https://lucide.dev/) | 0.555.0 | Icons Set |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | - | Utility CSS |

---

## 📁 Struttura Progetto

```
vesewebdev/
├── app/
│   ├── layout.tsx              # Root layout con SEO metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Design system e variabili CSS
│   ├── sitemap.ts              # Sitemap dinamica
│   ├── robots.ts               # robots.txt config
│   ├── servizi/
│   │   ├── aziende-privati/
│   │   │   └── page.tsx        # Pagina servizi B2C
│   │   └── web-agency/
│   │       └── page.tsx        # Pagina servizi B2B
│   └── portfolio/
│       └── page.tsx            # Portfolio (placeholder)
├── components/
│   ├── Navbar.tsx              # Navigation bar responsive
│   ├── Footer.tsx              # Footer con links e contatti
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ChiSono.tsx         # About section
│   │   ├── Servizi.tsx         # Services section
│   │   ├── PortfolioPreview.tsx # Portfolio preview
│   │   └── Contatti.tsx        # Contact form section
│   └── ui/                     # Componenti UI riutilizzabili
├── lib/
│   └── utils.ts                # Utility functions (cn)
└── public/                     # Asset statici
```

---

## 🛠️ Comandi Disponibili

```bash
# Development
npm run dev          # Avvia dev server (http://localhost:3000)

# Production
npm run build        # Build per produzione
npm run start        # Avvia server di produzione

# Code Quality
npm run lint         # Esegue ESLint
```

---

## 🎨 Design System

### Colori Principali

Il design system è definito in `app/globals.css`:

- **Primary**: `#6366f1` (Indigo)
- **Accent**: `#ec4899` (Pink)
- **Gradienti**: Primary → Accent per CTA e highlights

### Componenti Chiave

#### Navbar
- Fixed con effetto glassmorphism allo scroll
- Menu mobile hamburger con animazioni
- Smooth scroll navigation

#### Footer
- 4 colonne responsive
- Link rapidi e informazioni contatto
- Social media icons
- SEO-friendly con keywords locali

#### Form Contatti
- Validazione real-time con React Hook Form
- Stati di loading e success
- Email pattern validation
- Messaggi di errore user-friendly

---

## 🔍 SEO Features

### Metadata Globale

Configurati in `app/layout.tsx`:

```typescript
title: "Programmatore Freelance Ferrara Bologna | Sviluppo Web, App & AI"
keywords: ["programmatore Ferrara", "sviluppatore web Bologna", ...]
```

### Targeting Locale

Il sito è ottimizzato per posizionarsi su:
- 🎯 **Ferrara** (città principale)
- 🎯 **Bologna** (città secondaria)  
- 🎯 **Emilia-Romagna** (regione)

### Schema Markup

JSON-LD `LocalBusiness` schema con:
- Area servita geografica
- Indirizzo sede
- Tipi di servizi offerti
- Informazioni di contatto

### Files SEO

- **sitemap.xml**: Generato automaticamente da `app/sitemap.ts`
- **robots.txt**: Configurato in `app/robots.ts`

---

## 🚀 Deploy su Vercel

### Deploy Automatico via GitHub

1. **Push su GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connetti a Vercel**:
   - Vai su [vercel.com](https://vercel.com)
   - Importa repository GitHub
   - Click "Deploy"
   - ✅ Done! Vercel configura automaticamente Next.js

### Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Environment Variables

Se necessario, aggiungi variabili d'ambiente nel dashboard Vercel:
- Settings → Environment Variables

---

## ✏️ Personalizzazione

### 1. Informazioni di Contatto

Aggiorna i tuoi dati reali in:

**`app/layout.tsx`** (Schema JSON-LD):
```typescript
telephone: "+39-XXX-XXXXXXX",  // ← Il tuo numero
email: "info@vesewebdev.com",  // ← La tua email
```

**`components/Footer.tsx`**:
```typescript
// Aggiorna telefono, email, sede
```

**`components/sections/Contatti.tsx`**:
```typescript
// Aggiorna i campi di contatto visualizzati
```

### 2. Foto Profilo

Sostituisci il placeholder in `components/sections/ChiSono.tsx`:

```tsx
// Sostituisci questo:
<User className="w-64 h-64 text-primary/30" />

// Con:
<Image 
  src="/profile.jpg" 
  alt="Profile" 
  fill 
  className="object-cover rounded-2xl" 
/>
```

Carica la tua foto in `public/profile.jpg` (800x800px consigliato).

### 3. Contenuti Testo

Modifica i testi nelle sezioni per riflettere la tua esperienza:
- `components/sections/Hero.tsx` - Statistiche e intro
- `components/sections/ChiSono.tsx` - Biografia
- `app/servizi/aziende-privati/page.tsx` - Dettagli servizi
- `app/servizi/web-agency/page.tsx` - Competenze tecniche

### 4. Portfolio

Espandi `app/portfolio/page.tsx` aggiungendo:
- Grid di progetti reali
- Screenshot progetti
- Descrizioni dettagliate
- Link ai siti live o repository

### 5. Google Verification

In `app/layout.tsx`, sostituisci:
```typescript
verification: {
  google: "your-google-site-verification-code",
}
```

Con il codice ottenuto da Google Search Console.

---

## 📊 Analytics e Monitoraggio

### Google Analytics (Opzionale)

Aggiungi in `app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Google Search Console

1. Verifica proprietà sito dopo deploy
2. Submit sitemap: `https://tuosito.com/sitemap.xml`
3. Monitora indicizzazione e performance

---

## 🐛 Troubleshooting

### Build Warning

Se vedi warning durante `npm run build`, sono normali:
- Warning su `@theme` in CSS → Tailwind v4 syntax
- Il dev server (`npm run dev`) funziona perfettamente
- Il deploy su Vercel funziona correttamente

### Dev Server non si Avvia

```bash
# Pulisci cache e reinstalla
rm -rf .next node_modules
npm install
npm run dev
```

### Errori TypeScript

```bash
# Verifica che TypeScript sia installato
npm install --save-dev typescript @types/react @types/node
```

---

## 📚 Risorse Utili

- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS v4 Docs](https://tailwindcss.com/docs/v4-beta)
- ✨ [Framer Motion Docs](https://www.framer.com/motion/)
- 🚀 [Vercel Deploy Docs](https://vercel.com/docs)
- 🔍 [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)

---

## 📝 TODO / Roadmap

- [ ] Completare pagina Portfolio con progetti reali
- [ ] Integrare servizio email per form contatti (es. Resend, SendGrid)
- [ ] Aggiungere sezione Blog per contenuti SEO
- [ ] Implementare Dark Mode
- [ ] Aggiungere sezione Testimonials
- [ ] Multi-lingua (IT/EN)
- [ ] Setup Google Analytics
- [ ] Ottimizzare immagini con next/image

---

## 🤝 Supporto

Per domande o supporto:
- 📧 Email: [La tua email]
- 💼 LinkedIn: [Il tuo profilo]
- 🐙 GitHub: [Il tuo profilo]

---

## 📄 Licenza

Questo progetto è proprietario. Tutti i diritti riservati.

---

<div align="center">

**Sviluppato con ❤️ a Ferrara**

[⭐ Se ti piace il progetto, lascia una stella!](#)

</div>
