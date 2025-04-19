<script lang="ts">
	import { useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	import SliderStoryblok from '$lib/SliderStoryblok.svelte';
	import { SimpleLayout } from '$lib/simpleLayout';
	import Richtext from '$lib/storyblok/Richtext.svelte';

	import Banner from './Banner.svelte';
	import Engage from './Engage.svelte';

	let { data } = $props();

	let story = $derived(data.story);

	onMount(() => {
		useStoryblokBridge(story.id, (newStory) => (story = newStory), {
			preventClicks: true,
			resolveLinks: 'url',
		});
	});
</script>

<SimpleLayout.Root title={story.content.title} description={story.content.description}>
	{#snippet banner()}
		{#if story.content.banner}
			<Banner image={story.content.banner} />
		{/if}
	{/snippet}

	{#if story.content.content[0].component === 'ensemble'}
		{@const content = story.content.content[0]}

		<SimpleLayout.Section class="content-grid gap-y-4">
			<h1 class="heading-1">
				{content.title}
				{#if content.slogan}
					&ndash; {content.slogan}
				{/if}
				<span></span>
			</h1>

			<div class="clear-both">
				{#if content.leader?.[0]}
					{@const leader = content.leader?.[0]}
					{@const focus = leader.image.focus ? `:focal(${leader.image.focus})` : '/smart'}

					<figure class="float-right flex flex-col items-center gap-2 pb-4 pl-4">
						<img
							src="{leader.image.filename}/m/300x300/filters:round_corner(300,0,0,0,1){focus}"
							class="size-[150px] rounded-full"
							loading="lazy"
							alt={leader.image.alt}
							title={leader.image.title}
						/>

						<figcaption class="flex flex-col items-center">
							<span class="text-xs tracking-tighter text-slate-500 uppercase">Musikalische Leitung:</span>
							{leader.name}
						</figcaption>
					</figure>
				{/if}

				<div class="grid gap-y-2">
					<Richtext data={content.infos} />
				</div>
			</div>

			<SliderStoryblok class="content-grid__breakout" multiasset={content.imageSlider} />
		</SimpleLayout.Section>

		<SimpleLayout.Section class="content-grid gap-y-4">
			<h2 class="heading-2">
				Das Wichtigste in Kürze
				<span></span>
			</h2>

			<Richtext data={content.facts} />
		</SimpleLayout.Section>

		<Engage {data} />
	{/if}
</SimpleLayout.Root>
