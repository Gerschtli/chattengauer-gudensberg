<script lang="ts">
	import type { Image } from '#lib/storyblok/types.js';
	import { storyblokEditable } from '#lib/storyblok/util.ts';

	import ImageInternal from './ImageInternal.svelte';

	const { blok }: { blok: Image } = $props();
</script>

<div class="content-grid__breakout" use:storyblokEditable={blok}>
	<ImageInternal asset={blok.image} />
</div>
