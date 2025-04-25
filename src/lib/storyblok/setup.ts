import { type ISbStoriesParams, type ISbStoryData, apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import { error } from '@sveltejs/kit';

import { dev } from '$app/environment';
import { PUBLIC_STORYBLOK_ACCESS_TOKEN } from '$env/static/public';

import type { PageStoryblok } from '$lib/component-types-storyblok';
import { components } from '$lib/components';

export function initStoryblokApi() {
	storyblokInit({
		accessToken: PUBLIC_STORYBLOK_ACCESS_TOKEN,
		use: [apiPlugin],
		apiOptions: {
			https: true,
			cache: {
				clear: 'auto',
				type: 'none',
			},
			region: 'eu',
		},
		bridge: true,
		// @ts-expect-error wrong type definition in storyblok sdk
		components,
	});

	return useStoryblokApi();
}

function buildDefaultOptions(storyblokVisualEditor: boolean) {
	return {
		version: dev || storyblokVisualEditor ? 'draft' : 'published',
		resolve_links: 'url',
		cv: 1, // disable cache
	} satisfies ISbStoriesParams;
}

export async function loadStory<T = PageStoryblok>(
	storyblokApi: ReturnType<typeof initStoryblokApi>,
	storyblokVisualEditor: boolean,
	story: string,
) {
	try {
		const dataStory = await storyblokApi.get(`cdn/stories/${story}`, buildDefaultOptions(storyblokVisualEditor));

		return dataStory.data.story as ISbStoryData<T>;
	} catch (e) {
		if (e && typeof e === 'object' && 'status' in e && e.status === 404) error(404);

		throw e;
	}
}

export async function loadStories<T>(
	storyblokApi: ReturnType<typeof initStoryblokApi>,
	storyblokVisualEditor: boolean,
	options: ISbStoriesParams,
) {
	const dataStory = await storyblokApi.get(`cdn/stories`, {
		...buildDefaultOptions(storyblokVisualEditor),
		...options,
	});

	return dataStory.data.stories as ISbStoryData<T>[];
}
