import { loadStory } from '$lib/storyblok/setup';

export async function load({ parent, data, params }) {
	const { storyblokApi } = await parent();
	const story = await loadStory(storyblokApi, `ensembles/${params.slug}`);

	return { ...data, story };
}
