<script lang="ts">
	import { storyblokEditable } from '$lib/storyblok/util';
	import type { Image } from '$storyblok/335007/storyblok-components';

	import ImageInternal from './ImageInternal.svelte';

	const { blok }: { blok: Image } = $props();
</script>

<div class="content-grid__breakout" use:storyblokEditable={blok}>
	<ImageInternal asset={blok.image} />
</div>
