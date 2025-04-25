import { loadStory } from '$lib/storyblok/setup';

export async function load({ parent, data }) {
	const { storyblokApi, storyblokVisualEditor } = await parent();
	const story = await loadStory(storyblokApi, storyblokVisualEditor, 'home');

	return { ...data, story };
}
