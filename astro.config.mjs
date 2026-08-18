// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://marten-mrfc.is-a.dev',
	integrations: [sitemap()],
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport'
	},
	build: {
		inlineStylesheets: 'always'
	},
	vite: {
		build: {
			// lightningcss folds animation-timeline into the animation shorthand,
			// which is invalid (timeline is reset-only there) and kills the
			// scroll-driven animations. esbuild leaves the longhands alone.
			cssMinify: 'esbuild'
		}
	},
	experimental: {
		// Upgrades prefetch to real prerendering via the Speculation Rules API
		// on Chromium; degrades to normal prefetch elsewhere.
		clientPrerender: true
	},
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark'
			}
		}
	},
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'IBM Plex Sans',
			cssVariable: '--font-sans',
			weights: [400, 600],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
			fallbacks: ['sans-serif']
		},
		{
			provider: fontProviders.fontsource(),
			name: 'IBM Plex Mono',
			cssVariable: '--font-mono',
			weights: [400],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['monospace']
		}
	]
});
