<script lang="ts">
	import type { SectionStoryblok } from '$lib/component-types-storyblok';

	import Richtext from './Richtext.svelte';

	let { blok }: { blok: SectionStoryblok } = $props();
</script>

<section class="content-grid gap-y-4">
	<Richtext blok={blok.content} />
</section>
