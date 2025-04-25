<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';

	import type { TextAndLeaderStoryblok } from '$lib/component-types-storyblok';

	import Richtext from '../Richtext.svelte';

	let { blok }: { blok: TextAndLeaderStoryblok } = $props();

	const focus = $derived(blok.image.focus ? `filters:focal(${blok.image.focus})` : 'smart');
</script>

<div class="clear-both" use:storyblokEditable={blok}>
	<figure class="float-right flex flex-col items-center gap-2 pb-4 pl-4">
		<img
			src="{blok.image.filename}/m/300x300/{focus}"
			class="size-[150px] rounded-full"
			loading="lazy"
			alt={blok.image.alt}
			title={blok.image.title}
		/>

		<figcaption class="flex flex-col items-center">
			<span class="text-xs tracking-tighter text-slate-500 uppercase">Musikalische Leitung:</span>
			{blok.name}
		</figcaption>
	</figure>

	<Richtext blok={blok.text} class="space-y-4" />
</div>
