import type { ISbStoryData } from '@storyblok/svelte';
import { getContext, setContext } from 'svelte';

import type { News } from '$storyblok/335007/storyblok-components';

type EnsembleList = { uuid: string; url: string; name: string }[];

export function setEnsembleList(ensembleList: EnsembleList) {
	setContext<EnsembleList>('ensemble-list', ensembleList);
}

export function getEnsembleList() {
	return getContext<EnsembleList>('ensemble-list');
}

export function setNewsList(newsList: ISbStoryData<News>[]) {
	setContext<ISbStoryData<News>[]>('news-list', newsList);
}

export function getNewsList() {
	return getContext<ISbStoryData<News>[]>('news-list');
}
