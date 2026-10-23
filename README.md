# Gopika S S — Portfolio

A personal portfolio site for Gopika S S, Teaching Associate in Artificial
Intelligence & Machine Learning at Christ University. Built with React, Vite,
TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm install
npm run build
```

The production build is written to `dist/`.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In the repo settings, go to **Pages** and set the source to **GitHub
   Actions**.
3. Push to `main` — `.github/workflows/deploy.yml` builds the project and
   publishes `dist/` automatically.

Vite's `base` is set to `'./'` in `vite.config.ts`, so the build uses
relative asset paths and works at any subpath
(`https://username.github.io/repo-name/`) without edits.

## Structure

```
src/
  assets/
    images/        hero + about portraits
    video/          opening intro video
  components/       one component per section
  App.tsx           page orchestration (intro → site)
  main.tsx
  index.css
```

## Notes

- The opening video autoplays muted; if the browser blocks autoplay, a
  "Tap to begin" prompt appears.
- `prefers-reduced-motion: reduce` skips the cinematic intro and shows the
  hero directly.
- No content beyond what was supplied (experience, education,
  publications, certifications) has been invented.
