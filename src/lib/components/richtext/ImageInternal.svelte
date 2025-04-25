<script lang="ts">
	import type { AssetStoryblok } from '../../component-types-storyblok';
	import { getAspectRatio, getDimensionsOfImageUrl } from '../../storyblok/util';

	interface Props {
		asset: AssetStoryblok;
		fixedSize?: true;
		class?: string;
	}

	const { asset, fixedSize, class: className }: Props = $props();

	const aspectRatio = 3 / 2;

	const dimensions = $derived(getDimensionsOfImageUrl(asset));
	const isLandscape = $derived(
		!dimensions.width || !dimensions.height || dimensions.width / dimensions.height >= aspectRatio,
	);

	function dimensionBuilder(width: number) {
		return isLandscape ? `${width}x0` : `0x${width}`;
	}
</script>

<picture>
	<source
		media="(max-width: 400px)"
		srcset="{asset.filename}/m/{dimensionBuilder(400)} 1x, {asset.filename}/m/{dimensionBuilder(800)} 2x"
	/>
	<source
		media="(min-width: 401px)"
		srcset="{asset.filename}/m/{dimensionBuilder(800)} 1x, {asset.filename}/m/{dimensionBuilder(1600)} 2x"
	/>

	<img
		src="{asset.filename}/m/{dimensionBuilder(800)}"
		style:aspect-ratio={!fixedSize && isLandscape ? getAspectRatio(asset) : undefined}
		class={[className, !fixedSize && !isLandscape && 'aspect-media w-full object-contain']}
		loading="lazy"
		alt={asset.alt}
		title={asset.title}
	/>
</picture>
