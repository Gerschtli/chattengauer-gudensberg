<script lang="ts">
	import Image from '$lib/Image.svelte';
	import type { ImageStoryblok } from '$lib/component-types-storyblok';

	const { blok }: { blok: ImageStoryblok } = $props();
</script>

<div class="content-grid__breakout">
	<Image asset={blok.image} />
</div>
