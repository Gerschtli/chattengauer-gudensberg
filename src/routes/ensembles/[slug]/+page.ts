import { loadStory } from '$lib/storyblok/setup';

export async function load({ parent, data }) {
	const { storyblokApi } = await parent();
	const story = await loadStory(storyblokApi, `ensembles/${data.slug}`);

	return { ...data, story };
}
