import type { ISbStoryData } from '@storyblok/svelte';
import { getContext, setContext } from 'svelte';

import type { NewsStoryblok } from '$lib/component-types-storyblok';

export function setEnsembleMap(ensembleMap: Map<string, { url: string; name: string }>) {
	setContext<Map<string, { url: string; name: string }>>('ensemble-map', ensembleMap);
}

export function getEnsembleMap() {
	return getContext<Map<string, { url: string; name: string }>>('ensemble-map');
}

export function setNewsList(newsList: ISbStoryData<NewsStoryblok>[]) {
	setContext<ISbStoryData<NewsStoryblok>[]>('news-list', newsList);
}

export function getNewsList() {
	return getContext<ISbStoryData<NewsStoryblok>[]>('news-list');
}
