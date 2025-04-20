import { type ISbStoryData, apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

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

export async function loadStory(storyblokApi: ReturnType<typeof initStoryblokApi>, story: string) {
	const dataStory = await storyblokApi.get(`cdn/stories/${story}`, {
		version: dev ? 'draft' : 'published',
	});

	return dataStory.data.story as ISbStoryData<PageStoryblok>;
}
