import { loadStory } from '#lib/storyblok/setup.js';

export async function load({ parent, params }) {
	const { storyblokApi, storyblokVisualEditor } = await parent();

	return {
		story: await loadStory(storyblokApi, storyblokVisualEditor, params.slug),
	};
}
