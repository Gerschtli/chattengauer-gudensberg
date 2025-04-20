<script lang="ts">
	import type { ImageStoryblok } from '$lib/component-types-storyblok';

	import ImageInternal from './ImageInternal.svelte';

	const { blok }: { blok: ImageStoryblok } = $props();
</script>

<div class="content-grid__breakout">
	<ImageInternal asset={blok.image} />
</div>
