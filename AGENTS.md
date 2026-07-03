# vite-project — agent instructions

React 19 + Vite 8 + MUI 9 + MUI Icons 9. No TypeScript.

## Commands

```sh
npm run dev      # Vite dev server (HMR)
npm run build    # production build
npm run lint     # oxlint (not ESLint)
npm run preview  # preview production build
```

No test framework configured.

## Build & deploy

- `vite.config.js` sets `base: '/worldplant.github.io/'` — assets assume this path prefix
- GitHub Pages deploy triggers on push to `dev` or `main` branches
- Output goes to `dist/`

## MUI 9 gotchas

- `useTheme` must be imported from `@mui/material/styles`, not `@mui/material/useTheme` (no such export)
- `useMediaQuery` is a separate package export at `@mui/material/useMediaQuery`
- `Grid` uses Grid2 API: `size={{ xs: 12, md: 4 }}` (not `xs={12}`)
- `global.css` exists and is imported in `App.jsx` — but prefer MUI `sx` prop for component styling
- Theme defined in `src/theme.js`, global wrappers in `src/App.jsx`
- MUI icons import from `@mui/icons-material/IconName`

## Routing

- React Router v7 with catch-all route at `path="*"` rendering `Home`
- `src/pages/Home.jsx` — the single page, composes all section components
- `src/layouts/MainLayout.jsx` — layout wrapper
- `src/components/` — section components (Hero, About, Highlights, etc.)
- Below-fold sections are lazy-loaded via `React.lazy()` with `Suspense`

## Language system

- `useLanguage` hook from `src/hooks/useLanguage.jsx` provides `{ language, setLanguage, t }`
- Default language: `th` (Thai)
- `t` is a translations object (not a function) — access keys like `t.hero.title`
- Translations stored as JSON in `src/locales/{th,en,zh}/translation.json`
- `src/data/translations.js` re-exports all three locale JSONs

## Styling

- `src/theme.js` — MUI theme with custom palette (green/gold), responsive fonts (Poppins EN, Noto Sans Thai, Noto Sans SC)
- `src/global.css` — base resets, scrollbar styles, utility classes (`.glass`, `.gradient-text`)
- Component styling via MUI `sx` prop and theme overrides
