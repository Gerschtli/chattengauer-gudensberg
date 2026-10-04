import { initStoryblokApi, loadStory } from '#lib/storyblok/setup.js';
import type { Config } from '#storyblok/335007/storyblok-components.js';

export async function load({ url }) {
	const storyblokApi = initStoryblokApi();
	const storyblokVisualEditor = url.searchParams.has('_storyblok');

	const config = await loadStory<Config>(storyblokApi, storyblokVisualEditor, 'konfiguration');

	return { storyblokApi, config, storyblokVisualEditor };
}
