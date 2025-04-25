import type { ConfigStoryblok } from '$lib/component-types-storyblok';
import { initStoryblokApi, loadStory } from '$lib/storyblok/setup';

export async function load({ url }) {
	const storyblokApi = initStoryblokApi();
	const storyblokVisualEditor = url.searchParams.has('_storyblok');

	const config = await loadStory<ConfigStoryblok>(storyblokApi, storyblokVisualEditor, 'konfiguration');

	return { storyblokApi, config, storyblokVisualEditor };
}
