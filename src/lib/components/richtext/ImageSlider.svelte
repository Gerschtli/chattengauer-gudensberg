<script lang="ts">
	import type { ImageSlider } from '#lib/storyblok/types.js';
	import { storyblokEditable } from '#lib/storyblok/util.ts';

	import ImageSliderInternal from './ImageSliderInternal.svelte';

	const { blok }: { blok: ImageSlider } = $props();
</script>

<div class="content-grid__breakout" use:storyblokEditable={blok}>
	<ImageSliderInternal multiasset={blok.images} />
</div>
