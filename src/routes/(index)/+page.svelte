<script lang="ts">
	import { renderRichText, useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	import type { ImageStoryblok } from '$lib/component-types-storyblok';
	import { SimpleLayout } from '$lib/simpleLayout';
	import { getAspectRatio } from '$lib/storyblok/util';

	import Banner from './Banner.svelte';
	import Booking from './Booking.svelte';
	import Engage from './Engage.svelte';
	import Ensembles from './Ensembles.svelte';

	let { data } = $props();

	let story = $derived(data.story);

	onMount(() => {
		useStoryblokBridge(story.id, (newStory) => (story = newStory), {
			preventClicks: true,
			resolveLinks: 'url',
		});
	});

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

<SimpleLayout.Root title={story.content.title} description={story.content.description}>
	{#snippet banner()}
		{#if story.content.banner}
			<Banner image={story.content.banner} />
		{/if}
	{/snippet}

	{#if story.content.content[0].component === 'home'}
		{@const contentHome = story.content.content[0]}

		{#if contentHome.intro.content}
			<SimpleLayout.Section class="prose content-grid gap-y-4">
				{#each contentHome.intro.content as item, i (i)}
					{#if item.type === 'heading'}
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html renderRichText({ type: 'doc', content: [item] })?.replace(
							/(<\/h\d>)/,
							'<span></span>$1',
						)}
					{:else if item.type === 'blok'}
						{#each getCustomBloks(item.attrs) as blok (blok._uid)}
							{#if blok.component === 'image'}
								<div class="content-grid__breakout">
									<picture>
										<source
											media="(max-width: 400px)"
											srcset="{blok.image.filename}/m/400x0 1x, {blok.image.filename}/m/800x0 2x"
										/>
										<source
											media="(min-width: 401px)"
											srcset="{blok.image.filename}/m/800x0 1x, {blok.image.filename}/m/1600x0 2x"
										/>

										<img
											src="{blok.image.filename}/m/800x0"
											style:aspect-ratio={getAspectRatio(blok.image)}
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
			</SimpleLayout.Section>
		{/if}
	{/if}

	<Ensembles />

	<Engage {data} />

	<Booking {data} />
</SimpleLayout.Root>
