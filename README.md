# 🌿 Udon Thani International Horticultural Expo 2026

A single-page landing website for the Udon Thani International Horticultural Expo 2026, built with **React 19 + Vite 8 + MUI 9**.

**[Visit the live site →](https://worldplant.github.io/worldplant.github.io/)**

---

## ✨ Features

- **9 content sections** — Hero, About, Highlights, Attractions, Statistics, Timeline, Gallery, Visitor Info, FAQ
- **3‑language support** — 🇹🇭 Thai (default), 🇬🇧 English, 🇨🇳 Chinese
- **Lazy loading** — Below-fold sections loaded via `React.lazy()` + `Suspense`
- **Glassmorphism design** — Frosted glass cards, green/gold palette, smooth animations
- **Framer Motion** — Scroll-reveal animations, staggered children, hover effects
- **Fully responsive** — Mobile-first with MUI breakpoints
- **Accessible** — Reduced motion, ARIA labels, semantic HTML, focus-visible styles

---

## 🚀 Quick Start

```sh
npm install        # install dependencies
npm run dev        # Vite dev server (HMR at localhost:5173)
npm run build      # production build to dist/
npm run preview    # preview production build
npm run lint       # oxlint (not ESLint)
```

---

## 📁 Project Structure

```
src/
├── assets/images/          # Vite-bundled images
├── components/             # Section components
│   ├── Hero.jsx            # Hero banner (eager loaded)
│   ├── About.jsx
│   ├── Highlights.jsx
│   ├── Attractions.jsx
│   ├── Statistics.jsx
│   ├── Timeline.jsx
│   ├── Gallery.jsx
│   ├── VisitorInfo.jsx
│   ├── FAQ.jsx
│   ├── Navbar.jsx          # Sticky, glass on scroll
│   ├── Footer.jsx
│   ├── LanguageSwitcher.jsx
│   ├── ScrollProgress.jsx  # Top progress bar
│   ├── BackToTop.jsx       # Floating button
│   └── ScrollToTop.jsx     # Route change handler
├── layouts/
│   └── MainLayout.jsx      # Navbar + content + Footer wrapper
├── pages/
│   └── Home.jsx            # Single page, composes all sections
├── hooks/
│   └── useLanguage.jsx     # Language context provider + hook
├── locales/
│   ├── th/translation.json
│   ├── en/translation.json
│   └── zh/translation.json
├── data/
│   └── translations.js     # Consolidated locale imports
├── theme.js                # MUI theme (colors, typography, overrides)
├── global.css              # Base resets, animations, utilities
├── App.jsx                 # Root: ThemeProvider → LanguageProvider → Router
└── main.jsx                # Entry: StrictMode + BrowserRouter
```

---

## 🧩 Tech Stack

| Layer | Library |
|---|---|
| Framework | React 19 |
| Build | Vite 8 |
| UI | MUI 9 (Material-UI) |
| Icons | MUI Icons 9 |
| Animation | Framer Motion 12 |
| Routing | React Router v7 |
| Lint | oxlint |
| CI/CD | GitHub Pages (push to `dev` / `main`) |

No TypeScript — plain JSX throughout.

---

## 🌐 Language System

- **Custom Context API** (not i18next) via `useLanguage` hook
- Default: `th` (Thai)
- Usage: `const { t } = useLanguage()` → `t.hero.title`, `t.about.description`, etc.
- All text has inline fallback defaults: `t.section?.key || 'Fallback text'`
- The `html` `lang` attribute updates dynamically on language switch

---

## 🎨 Design System

See **[DESIGN.md](./DESIGN.md)** for full documentation:

- Color palette, typography, shapes, shadows
- Glassmorphism pattern, gradient utilities
- Framer Motion variants (`fadeInUp`, `scrollReveal`, `staggerContainer`, `cardVariants`)
- CSS animations, scroll-triggered patterns, hover effects
- Component templates (section, card, navbar, lazy loading)
- Responsive breakpoints, accessibility

---

## 🤖 AI Agent Instructions

See **[AGENTS.md](./AGENTS.md)** for setup details, MUI 9 gotchas, routing, and conventions used by AI coding tools.

---

## 🚢 Deployment

- **GitHub Pages** auto-deploys via `.github/workflows/deploy.yml`
- Trigger: push to `dev` or `main` branches
- Output: `dist/` folder
- Base path: `/worldplant.github.io/`

---

## 📄 License

All rights reserved © 2026 Udon Thani International Horticultural Expo.
