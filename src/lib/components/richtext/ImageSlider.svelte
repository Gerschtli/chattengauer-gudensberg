<script lang="ts">
	import { storyblokEditable } from '$lib/storyblok/util';
	import type { ImageSlider } from '$storyblok/335007/storyblok-components';

	import ImageSliderInternal from './ImageSliderInternal.svelte';

	const { blok }: { blok: ImageSlider } = $props();
</script>

<div class="content-grid__breakout" use:storyblokEditable={blok}>
	<ImageSliderInternal multiasset={blok.images} />
</div>
