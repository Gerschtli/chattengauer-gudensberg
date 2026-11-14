import { initStoryblokApi, loadStory } from '#lib/storyblok/setup.ts';
import type { Config } from '#lib/storyblok/types.js';

export async function load({ url }) {
	const storyblokApi = initStoryblokApi();
	const storyblokVisualEditor = url.searchParams.has('_storyblok');

	const config = await loadStory<Config>(storyblokApi, storyblokVisualEditor, 'konfiguration');

	return { storyblokApi, config, storyblokVisualEditor };
}
