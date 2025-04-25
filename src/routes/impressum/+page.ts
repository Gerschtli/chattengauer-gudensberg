import { loadStory } from '$lib/storyblok/setup';

export async function load({ parent }) {
	const { storyblokApi, storyblokVisualEditor } = await parent();
	const story = await loadStory(storyblokApi, storyblokVisualEditor, 'impressum');

	return { story };
}
