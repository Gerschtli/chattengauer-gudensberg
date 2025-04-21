import type { AssetStoryblok, MultilinkStoryblok } from '$lib/component-types-storyblok';

export function getDimensionsOfImageUrl(asset: AssetStoryblok) {
	const result = asset.filename?.match('^https://a\\.storyblok\\.com/f/\\d+/(\\d+)x(\\d+)/');

	if (result?.length !== 3) return {};

	return { width: parseInt(result[1]), height: parseInt(result[2]) };
}

export function getAspectRatio(asset: AssetStoryblok) {
	const dimensions = getDimensionsOfImageUrl(asset);

	return `${dimensions.width} / ${dimensions.height}`;
}

export function buildUrl(link: Exclude<MultilinkStoryblok, { linktype?: 'email' } | { linktype?: 'asset' }>) {
	let url = '/';
	if (link.cached_url !== 'home') url += link.cached_url;

	let anchorSuffix = '';
	if (link.anchor) anchorSuffix = `#${link.anchor}`;

	return url + anchorSuffix;
}
