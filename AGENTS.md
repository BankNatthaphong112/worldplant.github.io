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

## MUI 9 gotchas

- `useTheme` must be imported from `@mui/material/styles`, not `@mui/material/useTheme` (no such export)
- `useMediaQuery` is a separate package export at `@mui/material/useMediaQuery`
- `Grid` uses Grid2 API: `size={{ xs: 12, md: 4 }}` (not `xs={12}`)
- No CSS files in the project — all styling via `sx` prop, MUI theme, and `CssBaseline`
- Theme defined in `src/theme/index.js`, global wrappers in `src/main.jsx`
- MUI icons import from `@mui/icons-material/IconName`

## Routing

- React Router v7 with `catch-all` route at `path="*"` rendering `Expo2026`
- `src/pages/` — route-level components
- `src/components/` — shared components
- `src/components/sections/` — page-section components

## Expo2026 page

- Route root `/` -> `src/pages/Expo2026.jsx`
- 3-language translations (TH/EN/CN) in `src/pages/expoTranslations.js`
- All text reactive to `language` state; every section component receives `t` prop
- Has real-time countdown to Nov 1, 2026
- Uses `scrollIntoView({ behavior: 'smooth' })` for nav anchor links
