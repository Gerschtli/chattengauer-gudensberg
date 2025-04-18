import type { AssetStoryblok } from '$lib/component-types-storyblok';

export function getDimensionsOfImageUrl(asset: AssetStoryblok) {
	const result = asset.filename?.match('^https://a\\.storyblok\\.com/f/\\d+/(\\d+)x(\\d+)/');

	if (result?.length !== 3) return {};

	return { width: result[1], height: result[2] };
}

export function getAspectRatio(asset: AssetStoryblok) {
	const dimensions = getDimensionsOfImageUrl(asset);

	return `${dimensions.width} / ${dimensions.height}`;
}
