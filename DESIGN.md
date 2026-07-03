# Udon Thani Horticultural Expo 2026 — Design System

> Auto-generated from `src/` source code analysis.

---

## 1. Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| UI Library | MUI 9 (Material-UI) |
| Icons | MUI Icons 9 (`@mui/icons-material`) |
| Animation | Framer Motion (`framer-motion`) |
| Routing | React Router v7 |
| Language | Custom Context-based i18n (TH / EN / CN) |
| Styling | MUI `sx` prop, global CSS, MUI theme overrides |

---

## 2. Architecture

### 2.1 File Structure

```
src/
├── assets/images/          # Local image imports (Vite asset bundling)
├── components/             # Section components (Hero, About, Highlights, etc.)
├── data/                   # Translations index
├── hooks/                  # useLanguage hook (React Context)
├── layouts/                # MainLayout wrapper
├── locales/                # JSON translation files (th/en/zh)
├── pages/                  # Route-level page components (Home)
├── App.jsx                 # Root component: ThemeProvider → LanguageProvider → Router
├── global.css              # Base resets, animations, utility classes
├── theme.js                # MUI theme configuration
└── main.jsx                # App entry point
```

### 2.2 Component Hierarchy

```
App
├── ThemeProvider (MUI)
│   ├── CssBaseline
│   └── LanguageProvider
│       └── MainLayout
│           ├── ScrollToTop
│           ├── ScrollProgress      ← fixed top scroll indicator
│           ├── Navbar              ← sticky, glass on scroll
│           │   └── LanguageSwitcher
│           ├── <main>              ← page content
│           │   └── Home (catch-all route)
│           │       ├── Hero        ← above-fold, eager loaded
│           │       ├── About       ← lazy Suspense
│           │       ├── Highlights  ← lazy Suspense
│           │       ├── Attractions ← lazy Suspense
│           │       ├── Statistics  ← lazy Suspense
│           │       ├── Timeline    ← lazy Suspense
│           │       ├── Gallery     ← lazy Suspense
│           │       ├── VisitorInfo ← lazy Suspense
│           │       └── FAQ         ← lazy Suspense
│           ├── Footer
│           └── BackToTop           ← floating FAB
```

### 2.3 Performance Patterns

- **Hero component** is loaded eagerly (above-the-fold)
- **All other sections** are lazy-loaded via `React.lazy()` + `Suspense` with a `SectionFallback` placeholder
- Scroll event listeners use `{ passive: true }` for better scrolling performance
- Images are imported as Vite assets (`import img from '../assets/images/x.jpg'`) for automatic hashing and optimization

---

## 3. Theme Tokens

### 3.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `primary.main` | `#2E7D32` | Primary buttons, links, accents |
| `primary.dark` | `#1B5E20` | Footer background, hover states |
| `primary.light` | `#388E3C` | Hover/active variations |
| `secondary.main` | `#66BB6A` | Secondary elements, decorative accents |
| `secondary.light` | `#81C784` | Hover states |
| `accent` / `divider` | `#C8E6C9` | Borders, dividers |
| `gold` | `#D4AF37` | Gold accents, CTA buttons, highlights |
| `gold.light` | `#F4E4A0` | Gold hover/tag backgrounds |
| `background.default` | `#F6FFF8` | Page background |
| `background.paper` | `#FFFFFF` | Cards, surfaces |
| `background.light` | `#E8F5E9` | Highlights section background |
| `text.primary` | `#1B1B1B` | Body text |
| `text.secondary` | `#5A5A5A` | Secondary text |
| `glassBg` | `rgba(255, 255, 255, 0.75)` | Glassmorphism card backgrounds |
| `glassBorder` | `rgba(255, 255, 255, 0.3)` | Glassmorphism borders |

### 3.2 Typography

| Variant | Weight | Letter Spacing | Description |
|---|---|---|---|
| `h1` | 800 | `-0.04em` | Hero title (5.5rem max) |
| `h2` | 800 | `-0.03em` | Section headings (3rem max) |
| `h3` | 700 | `-0.02em` | Sub-section headings |
| `h4` | 700 | `-0.01em` | Card titles |
| `h5` | 600 | default | Highlight titles |
| `h6` | 600 | default | Card labels |
| `body1` | 400 | `0.01em` | Body text, lh 1.7 |
| `body2` | 400 | default | Secondary text, lh 1.6 |
| `button` | 600 | `0.03em` | Buttons (no uppercase) |

**Font Families (per language):**

| Language | Font Stack |
|---|---|
| Thai (th) | `"Noto Sans Thai", "Prompt", sans-serif` |
| English (en) | `"Poppins", "Noto Sans Thai", sans-serif` |
| Chinese (zh) | `"Noto Sans SC", sans-serif` |

The theme uses `responsiveFontSizes()` for auto-scaling across breakpoints.

### 3.3 Shape & Spacing

| Token | Value |
|---|---|
| `shape.borderRadius` | 12 (base) |
| Buttons | 50 (pill) |
| Cards | 20 |
| Accordions | 16 |
| Chips | 8 |

### 3.4 Shadows

| Element | Shadow |
|---|---|
| Cards (rest) | `0 8px 32px rgba(0, 0, 0, 0.08)` |
| Cards (hover) | `0 16px 48px rgba(46, 125, 50, 0.15)` |
| Buttons | `0 4px 15px rgba(46, 125, 50, 0.2)` |
| Buttons (hover) | `0 8px 25px rgba(46, 125, 50, 0.3)` |
| FAB | `0 4px 20px rgba(0, 0, 0, 0.15)` |

---

## 4. Styling Patterns

### 4.1 Glassmorphism (Primary Pattern)

Used across all cards, accordions, and the Navbar.

```css
.glass {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### 4.2 Gradient Utilities (from `global.css`)

```css
.gradient-text {
  background: linear-gradient(135deg, #2E7D32, #66BB6A, #D4AF37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gold-gradient {
  background: linear-gradient(135deg, #D4AF37, #F4E4A0, #D4AF37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 4.3 Section Background Patterns

Each section uses a distinct background treatment:

| Section | Background |
|---|---|
| Hero | Image + dark green overlay gradient |
| About | `background.default` (#F6FFF8) + radial gradient decorations |
| Highlights | Linear gradient: #F6FFF8 → #E8F5E9 → #F6FFF8 |
| Attractions | `background.default` (#F6FFF8) |
| Statistics | Dark green (#1B5E20) with radial gradient overlays |
| Timeline | `background.default` (#F6FFF8) |
| Gallery | #F6FFF8 |
| VisitorInfo | `background.light` (#E8F5E9) |
| FAQ | `background.default` (#F6FFF8) |
| Footer | `#1B5E20` (dark green) with gold accent top bar |

### 4.4 Transitions & Easing

All interactive elements use:
```
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

Cards and highlights use a slower variant:
```
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 5. Animation System

### 5.1 Framer Motion Variants

**fadeInUp** — Used in: Hero, Highlights, Gallery, Attractions
```js
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  }),
};
```

**scrollReveal** — Used in: About, Statistics, Timeline, VisitorInfo, FAQ
```js
const scrollReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};
```

**staggerContainer** — Used in: Hero
```js
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};
```

**cardVariants** — Used in: About (staggered cards)
```js
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  }),
};
```

### 5.2 CSS Animations (from `global.css`)

| Name | Purpose |
|---|---|
| `fadeInUp` | Generic entrance animation |
| `gradientShift` | Animated gradient backgrounds |
| `float` | Gentle floating effect (up/down) |
| `shimmer` | Shimmer loading effect |
| `counterGlow` | Glowing text shadow pulse |

### 5.3 Scroll-Triggered Patterns

All sections use `whileInView` with `viewport={{ once: true, margin: '-100px' }}` to trigger animations once when the section enters the viewport.

### 5.4 Hover Effects

| Element | Effect |
|---|---|
| Cards | `translateY(-8px)`, shadow increase |
| Highlight cards | `translateY(-12px)`, border color change |
| Buttons | `translateY(-2px)`, shadow increase |
| Nav links | Underline (`::after` width 0→60%) + bgcolor |
| Gallery images | Scale 1.08 + overlay fade-in |
| Social icons | Scale 1.15, bgcolor gold |

---

## 6. Component Patterns

### 6.1 Section Components

Every section component follows this structure:

```jsx
<Box id="section-id" component="section" sx={{ py: { xs: 8, md: 14 }, ...background }}>
  <Container maxWidth="lg">
    {/* Section Header */}
    <Box component={motion.div} whileInView="visible" variants={...}>
      <Chip label={t.section?.title} />
      <Typography variant="h2">...</Typography>
    </Box>
    {/* Content */}
  </Container>
</Box>
```

### 6.2 Navbar Pattern

| State | Background | Text Color | Border |
|---|---|---|---|
| Top (scrolled = false) | `transparent` | White | Transparent |
| Scrolled (scrolled = true) | `rgba(255,255,255,0.85)` + blur(20px) | Text primary | Green tinted |

Active section is tracked via scroll position and highlighted with an underline indicator.

### 6.3 Card Pattern

Common card structure (glassmorphism):

```jsx
<Box sx={{
  p: { xs: 3, md: 4 },
  borderRadius: 4,
  background: 'rgba(255, 255, 255, 0.75)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(46, 125, 50, 0.15)',
  },
}}>
  {/* Icon + Title + Description */}
</Box>
```

### 6.4 Lazy Loading Pattern

```jsx
// Top of Home.jsx
const About = lazy(() => import('../components/About'));

// In JSX
<Suspense fallback={<SectionFallback />}>
  <About />
</Suspense>
```

---

## 7. Language / i18n System

### 7.1 Architecture

- **Context Provider**: `LanguageProvider` in `src/hooks/useLanguage.jsx`
- **Hook**: `useLanguage()` returns `{ language, setLanguage, t }`
- **Default language**: `th` (Thai)
- **Storage**: JSON files in `src/locales/{th,en,zh}/translation.json`
- **Index**: `src/data/translations.js` imports and consolidates all locales

### 7.2 Usage Pattern

```jsx
const { t } = useLanguage();
// Access keys: t.hero.title, t.hero.subtitle, t.about.description, etc.
// All text uses fallback values: t.section?.key || 'Default text'
```

### 7.3 Translation Key Structure

```
nav: { home, about, highlights, attractions, statistics, timeline, gallery, visitorInfo, faq }
hero: { tag, title, subtitle, date, location, cta, explore }
about: { title, subtitle, description, history, vision, mission, objectives, importance }
highlights: { title, subtitle, flowers, innovation, wetlands, pavilion, smartAgri }
attractions: { title, subtitle, botanicalGarden, culturalVillage, innovationHub, flowerGarden, wetlandPark }
statistics: { title, subtitle, visitors, species, countries, events }
timeline: { title, subtitle, events[] }
gallery: { title, subtitle }
visitorInfo: { title, subtitle, hours, transportation, parking, tickets, contact }
faq: { title, subtitle, items[] }
footer: { quickLinks, contact, copyright, privacy, terms }
```

---

## 8. Responsive Breakpoints

The site uses MUI's default breakpoints:

| Breakpoint | Width | Usage |
|---|---|---|
| `xs` | 0+ | Mobile-first base styles |
| `sm` | 600+ | Small adjustments, single column → two columns |
| `md` | 900+ | Desktop nav, multi-column grids |
| `lg` | 1200+ | Max container width (`maxWidth="lg"`) |
| `xl` | 1536+ | Navbar container (`maxWidth="xl"`) |

Common responsive patterns:
- `{ xs: 8, md: 14 }` — spacing / padding
- `{ xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' }` — typography
- `{ xs: 200, md: 400 }` — image heights
- `{ xs: 'column', sm: 'row' }` — flex direction
- `{ xs: 'scroll', md: 'fixed' }` — background attachment

---

## 9. Accessibility

- `focus-visible` outline: 3px solid `#2E7D32`
- `prefers-reduced-motion` media query: disables CSS and JS animations
- HTML `lang` attribute updated dynamically on language change
- ARIA labels on interactive elements (FAB, scroll indicators, lightbox controls, social links)
- Selection color: green-tinted
- Semantic HTML: `section`, `header`, `footer`, `main` elements
