import type { ConfigStoryblok } from '$lib/component-types-storyblok';
import { initStoryblokApi, loadStory } from '$lib/storyblok/setup';

export async function load() {
	const storyblokApi = initStoryblokApi();
	const config = await loadStory<ConfigStoryblok>(storyblokApi, 'konfiguration');

	return { storyblokApi, config };
}
