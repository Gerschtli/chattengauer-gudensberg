import type { ConfigStoryblok } from '$lib/component-types-storyblok';
import { initStoryblokApi, loadStory } from '$lib/storyblok/setup';

export async function load({ url }) {
	const storyblokApi = initStoryblokApi();
	const config = await loadStory<ConfigStoryblok>(storyblokApi, 'konfiguration');
	const storyblokVisualEditor = url.searchParams.has('_storyblok');

	return { storyblokApi, config, storyblokVisualEditor };
}
