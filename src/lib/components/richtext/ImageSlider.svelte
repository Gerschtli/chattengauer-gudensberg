<script lang="ts">
	import type { ImageSliderStoryblok } from '$lib/component-types-storyblok';

	import ImageSliderInternal from './ImageSliderInternal.svelte';

	const { blok }: { blok: ImageSliderStoryblok } = $props();
</script>

<div class="content-grid__breakout">
	<ImageSliderInternal multiasset={blok.images} />
</div>
