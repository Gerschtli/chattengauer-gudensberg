import { type SbBlokData, storyblokEditable as storyblokEditableOriginal } from '@storyblok/svelte';

import type { StoryblokAsset, StoryblokMultilink } from '$storyblok/storyblok';

export function getDimensionsOfImageUrl(asset: StoryblokAsset) {
	const result = asset.filename?.match('^https://a\\.storyblok\\.com/f/\\d+/(\\d+)x(\\d+)/');

	if (result?.length !== 3) return {};

	return { width: parseInt(result[1]), height: parseInt(result[2]) };
}

export function getAspectRatio(asset: StoryblokAsset) {
	const dimensions = getDimensionsOfImageUrl(asset);

	return `${dimensions.width} / ${dimensions.height}`;
}

export function buildUrl(link: Exclude<StoryblokMultilink, { linktype?: 'email' } | { linktype?: 'asset' }>) {
	let url = link.url;
	if (link.linktype === 'story' && link.story && 'url' in link.story && link.story.url) {
		url = link.story.url.startsWith('/') ? link.story.url : `/${link.story.url}`;
	}

	let anchorSuffix = '';
	if (link.anchor) anchorSuffix = `#${link.anchor}`;

	return url + anchorSuffix;
}

type RemoveIndex<T> = {
	[K in keyof T as string extends K ? never : number extends K ? never : symbol extends K ? never : K]: T[K];
};

export function storyblokEditable(node: HTMLElement, value: RemoveIndex<SbBlokData>) {
	return storyblokEditableOriginal(node, value);
}
