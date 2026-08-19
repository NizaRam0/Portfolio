# Portfolio

Angular 19 (standalone components) portfolio site for Nizar Ramadan.

## Run locally

```bash
npm install
npm start        # ng serve, open http://localhost:4200
```

## Build for production

```bash
npm run build     # outputs to dist/portfolio/browser
```

## Structure

- `src/app/components/nav` — sticky top nav
- `src/app/components/hero` — name, tagline, "build manifest" signature panel
- `src/app/components/projects` — project cards (edit the `projects` array in `projects.component.ts` to add/change projects — real repo links are placeholders pointing at your GitHub profile, swap in per-repo URLs when ready)
- `src/app/components/about` — bio section
- `src/app/components/skills` — grouped skill tags
- `src/app/components/contact` — email / GitHub / LinkedIn / phone + footer

## Design tokens

All colors, type, spacing live in `src/styles.scss` as CSS custom properties
(`--bg`, `--accent`, `--font-display`, etc.) — change them there to re-theme
the whole site at once.

## Deploy

Free options: Vercel, Netlify, or GitHub Pages (via `angular-cli-ghpages`).
