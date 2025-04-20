import type { ISbStoryData } from '@storyblok/svelte';
import { getContext, setContext } from 'svelte';

import type { NewsStoryblok } from '$lib/component-types-storyblok';

type EnsembleList = { uuid: string; url: string; name: string }[];

export function setEnsembleList(ensembleList: EnsembleList) {
	setContext<EnsembleList>('ensemble-list', ensembleList);
}

export function getEnsembleList() {
	return getContext<EnsembleList>('ensemble-list');
}

export function setNewsList(newsList: ISbStoryData<NewsStoryblok>[]) {
	setContext<ISbStoryData<NewsStoryblok>[]>('news-list', newsList);
}

export function getNewsList() {
	return getContext<ISbStoryData<NewsStoryblok>[]>('news-list');
}
