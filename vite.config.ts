import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Consult https://kit.svelte.dev/docs/integrations#preprocessors
			// for more information about preprocessors
			preprocess: vitePreprocess(),
			adapter: adapter({ runtime: 'nodejs24.x', regions: ['fra1'] }),
			alias: {
				// an alias ending /* will only match
				// the contents of a directory, not the directory itself
				'$storyblok/*': '.storyblok/types/*',
			},
		}),
		basicSsl(),
	],
	server: { https: {} },
});
