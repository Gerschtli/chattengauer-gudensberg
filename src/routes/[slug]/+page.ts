import { loadStory } from '#lib/storyblok/setup.ts';

export async function load({ parent, params }) {
	const { storyblokApi, storyblokVisualEditor } = await parent();

	return {
		story: await loadStory(storyblokApi, storyblokVisualEditor, params.slug),
	};
}
