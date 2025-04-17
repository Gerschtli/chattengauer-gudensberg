import { initStoryblokApi } from '$lib/storyblok/setup';

export async function load() {
	const storyblokApi = initStoryblokApi();

	return { storyblokApi };
}
