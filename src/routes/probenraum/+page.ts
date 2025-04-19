import { loadStory } from '$lib/storyblok/setup';

export async function load({ parent }) {
	const { storyblokApi } = await parent();
	const story = await loadStory(storyblokApi, 'probenraum');

	return { story };
}
