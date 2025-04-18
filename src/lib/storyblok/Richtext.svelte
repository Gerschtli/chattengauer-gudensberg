<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';
	import type { Snippet } from 'svelte';

	import Image from '$lib/Image.svelte';
	import type { ImageStoryblok, RichtextStoryblok } from '$lib/component-types-storyblok';

	interface Props {
		data: RichtextStoryblok;
		children?: Snippet;
	}

	const { data = $bindable(), children }: Props = $props();

	const dataNormalized = $derived(data?.content ?? []);

	type CustomBlok = ImageStoryblok;

	function getCustomBloks(attrs: unknown) {
		if (
			!attrs ||
			typeof attrs !== 'object' ||
			!('body' in attrs) ||
			!Array.isArray(attrs.body) ||
			attrs.body.length === 0
		) {
			return [];
		}

		return attrs.body.filter((x): x is CustomBlok => !!x && typeof x === 'object' && 'component' in x);
	}
</script>

<div class="prose contents">
	{#each dataNormalized as item, i (i)}
		{#if item.type === 'heading'}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html renderRichText({ type: 'doc', content: [item] })?.replace(/(<\/h\d>)/, '<span></span>$1')}
		{:else if item.type === 'blok'}
			{#each getCustomBloks(item.attrs) as blok (blok._uid)}
				{#if blok.component === 'image'}
					<div class="content-grid__breakout">
						<Image asset={blok.image} />
					</div>
				{/if}
			{/each}
		{:else}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html renderRichText({ type: 'doc', content: [item] })}
		{/if}
	{/each}

	{@render children?.()}
</div>
