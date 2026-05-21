import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			runtime: 'nodejs24.x',
			regions: ['fra1'],
		}),
		alias: {
			// an alias ending /* will only match
			// the contents of a directory, not the directory itself
			'$storyblok/*': '.storyblok/types/*',
		},
	},
};

export default config;
