# marten-mrfc.is-a.dev

My personal site — [marten-mrfc.is-a.dev](https://marten-mrfc.is-a.dev). Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Principles

- **Fast**: static HTML, ~0 kB of JavaScript, self-hosted subset fonts with metric-matched fallbacks, inlined CSS, viewport prefetching.
- **Accessible**: WCAG 2.2 AA contrast in both themes, skip link, visible focus rings, semantic landmarks, `prefers-reduced-motion` respected.
- **Hand-designed**: single-column typographic layout, IBM Plex Sans + Mono, one accent color, no card grids.

## Development

```sh
npm install
npm run dev      # dev server
npm run build    # static build to dist/
npm run preview  # preview the build
```

## Content

- Projects live in `src/content/projects/*.md`
- Blog posts live in `src/content/blog/*.md`

Add a markdown file with the right frontmatter (see `src/content.config.ts`) and it shows up.
