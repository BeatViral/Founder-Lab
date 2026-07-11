# Founder Lab

Founder Lab is Beat Viral's founder portfolio dashboard for startup experiments, apps, prototypes, and products built from real-world problems.

## Run Locally

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
```

## Edit Projects

Project cards are stored in `src/data/projects.ts`. Add or edit objects in the `projects` array to update names, URLs, categories, statuses, next steps, and featured cards.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the Vite app and publishes `dist` to GitHub Pages when `main` is pushed.
