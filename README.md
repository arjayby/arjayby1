# arjayby1

A minimal developer portfolio built with Astro, React, Tailwind CSS, and shadcn.

## Local development

```sh
pnpm install
pnpm dev
```

The site includes Home, Writing, and Finance pages. Content is placeholder copy for now.

## Commit Mono

The project expects these local font files:

```text
public/fonts/private/CommitMono-Regular.ttf
public/fonts/private/CommitMono-Bold.ttf
```

The files in that directory are ignored by Git. The current copies are licensed only for private and unpublished use. Replace them with appropriately licensed webfont files and update the `@font-face` sources in `src/styles/global.css` before public deployment.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the production site |
| `pnpm preview` | Preview the production build |
| `pnpm check` | Check Astro and TypeScript files |
