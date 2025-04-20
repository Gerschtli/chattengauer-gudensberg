<script lang="ts">
	import SliderStoryblok from '$lib/SliderStoryblok.svelte';
	import type { ImageSliderStoryblok } from '$lib/component-types-storyblok';

	const { blok }: { blok: ImageSliderStoryblok } = $props();
</script>

<div class="content-grid__breakout">
	<SliderStoryblok multiasset={blok.images} />
</div>
