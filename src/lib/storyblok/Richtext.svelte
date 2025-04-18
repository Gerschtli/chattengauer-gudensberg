<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';
	import type { Snippet } from 'svelte';

	import type { ImageStoryblok, RichtextStoryblok } from '$lib/component-types-storyblok';
	import { getAspectRatio, getDimensionsOfImageUrl } from '$lib/storyblok/util';

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
					{@const dimensions = getDimensionsOfImageUrl(blok.image)}
					{@const isLandscape =
						!dimensions.width || !dimensions.height || dimensions.width / dimensions.height >= 3 / 2}
					{@const dimensionBuilder = (width: number) => (isLandscape ? `${width}x0` : `0x${width}`)}

					<div class="content-grid__breakout">
						<picture>
							<source
								media="(max-width: 400px)"
								srcset="{blok.image.filename}/m/{dimensionBuilder(400)} 1x, {blok.image
									.filename}/m/{dimensionBuilder(800)} 2x"
							/>
							<source
								media="(min-width: 401px)"
								srcset="{blok.image.filename}/m/{dimensionBuilder(800)} 1x, {blok.image
									.filename}/m/{dimensionBuilder(1600)} 2x"
							/>

							<img
								src="{blok.image.filename}/m/{dimensionBuilder(800)}"
								style:aspect-ratio={isLandscape ? getAspectRatio(blok.image) : undefined}
								class={[!isLandscape && 'aspect-media w-full object-contain']}
								loading="lazy"
								alt={blok.image.alt}
								title={blok.image.title}
							/>
						</picture>
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
