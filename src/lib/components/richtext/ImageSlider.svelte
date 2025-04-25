<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';

	import type { ImageSliderStoryblok } from '$lib/component-types-storyblok';

	import ImageSliderInternal from './ImageSliderInternal.svelte';

	const { blok }: { blok: ImageSliderStoryblok } = $props();
</script>

<div class="content-grid__breakout" use:storyblokEditable={blok}>
	<ImageSliderInternal multiasset={blok.images} />
</div>
