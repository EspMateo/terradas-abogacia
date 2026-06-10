# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Serve the production build locally
npm run lint      # ESLint (flat config, eslint.config.js)
```

No test runner configured. No Prettier configured.

## Architecture

Single-page landing page for law firm "Lucía Terradas Abogada" (Uruguay). No router — all sections live on one scrollable page with anchor links (`#inicio`, `#sobre-nosotros`, `#servicios`, `#consulta`, `#contacto`).

**Component → CSS pairing:** every component in `src/components/` has a 1:1 CSS file in `src/styles/` imported directly inside the component. Global variables and resets live in `src/styles/global.css`, imported once in `App.jsx`.

**State:** minimal — `Navbar` tracks scroll position to swap between transparent and white background; `Appointment` manages a controlled form that sends email via EmailJS on submit.

**Adding a component:** create `src/components/MyComp.jsx` + `src/styles/MyComp.css`, import the CSS inside the component, add it to `App.jsx`.

## Brand / Design constraints

CSS custom properties defined in `global.css` must be respected across all components:

| Variable | Value | Role |
|---|---|---|
| `--plum` | `#54384E` | Primary dark |
| `--burgundy` | `#663052` | Secondary |
| `--sage` | `#B0BEAD` | Muted accent |
| `--cream` / `--cream-light` | `#DBDBD3` / `#EBEBE6` | Backgrounds |
| `--gold` / `--gold-light` | `#C9A96E` / `#DFC08C` | Gold accent |

Fonts: **Cormorant Garamond** (headings) + **Inter** (body) — loaded via Google Fonts in `global.css`.

**CSS conventions:** class names use kebab-case. No BEM. No CSS framework (no Tailwind, no Bootstrap).

## Responsiveness

Mobile-first. Main breakpoints used in existing components: `768px` (tablet/mobile split) and `1024px` (desktop). Always check both views when editing layout.

## Static assets

Images live in `public/assets/` and are referenced as `/assets/<filename>` (not imported as modules):
- `lucia-desk.jpg` — hero background
- `lucia-standing.jpg` — about section
- `logo-negro.png`, `logo-blanco.png`, `icono-plum.png`, `icono-blanco.png`

The Navbar swaps logo visibility via CSS filter (`brightness(0) invert(1)` when transparent, none when scrolled).

## Email — Appointment form (EmailJS)

The appointment form sends a real email via EmailJS (`@emailjs/browser`). Credentials are in `.env` (gitignored):

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

**To activate:** set up account at emailjs.com, connect Gmail (`mateesp5@gmail.com`), create a template using these variables: `{{nombre}}`, `{{telefono}}`, `{{email}}`, `{{motivo}}`, `{{fecha}}`, `{{hora}}`. Fill in the three keys in `.env`.

Destination email (real, private): `mateesp5@gmail.com`
Display email (shown on site): `abogada.terradaslucia@gmail.com`

## Contact data

WhatsApp: `098 139 198` → `https://wa.me/59898139198`
Instagram: `@terradasabogacia`
Display email: `abogada.terradaslucia@gmail.com`

## Do NOT

- Use CSS frameworks (Bootstrap, Tailwind, etc.)
- Import images as JS modules — use `/assets/filename` paths
- Add a router or multiple pages
- Add a backend — this is a fully static site
- Commit `.env` — it contains private EmailJS keys

## Deploy target

TBD — pending decision between Vercel, Netlify, or manual hosting. Build output is `dist/`.

## SEO / meta

Check `index.html` for `<meta>` description, OG tags, and canonical URL — update before going live.
