<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';

	import type { ImageStoryblok } from '$lib/component-types-storyblok';

	import ImageInternal from './ImageInternal.svelte';

	const { blok }: { blok: ImageStoryblok } = $props();
</script>

<div class="content-grid__breakout" use:storyblokEditable={blok}>
	<ImageInternal asset={blok.image} />
</div>
