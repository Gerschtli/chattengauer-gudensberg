import { loadStory } from '$lib/storyblok/setup';

export async function load({ parent, data, params }) {
	const { storyblokApi, storyblokVisualEditor } = await parent();
	const story = await loadStory(storyblokApi, storyblokVisualEditor, `ensembles/${params.slug}`);

	return { ...data, story };
}
