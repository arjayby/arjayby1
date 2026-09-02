# arjayby1

A minimal developer portfolio built with Astro, React, Tailwind CSS, and shadcn.

## Local development

```sh
pnpm install
pnpm dev
```

The site includes Home, Writing, and Finance pages. Content is placeholder copy for now.

## Commit Mono

Commit Mono is loaded from an Adobe Fonts web project when
`PUBLIC_ADOBE_FONTS_KIT_ID` is set. Copy your web project ID into a local
`.env` file:

```sh
PUBLIC_ADOBE_FONTS_KIT_ID=your-kit-id
```

For offline local development, the project falls back to these private font
files:

```text
public/fonts/private/CommitMono-Regular.ttf
public/fonts/private/CommitMono-Bold.ttf
```

The files in that directory are ignored by Git and are licensed only for private
and unpublished use. Production deployments should use the Adobe Fonts web
project.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the production site |
| `pnpm preview` | Preview the production build |
| `pnpm check` | Check Astro and TypeScript files |
