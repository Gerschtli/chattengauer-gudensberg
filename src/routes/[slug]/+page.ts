import { error } from '@sveltejs/kit';

import { loadStory } from '$lib/storyblok/setup';

const allowedRoutes = ['datenschutz', 'impressum', 'probenraum', 'vorstand'];

export async function load({ parent, params }) {
	const { storyblokApi, storyblokVisualEditor } = await parent();

	if (!allowedRoutes.includes(params.slug)) error(404);

	return {
		story: await loadStory(storyblokApi, storyblokVisualEditor, params.slug),
	};
}
