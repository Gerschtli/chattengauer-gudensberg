<script lang="ts">
	import { useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	import { SimpleLayout } from '$lib/simpleLayout';

	import Banner from './Banner.svelte';
	import Booking from './Booking.svelte';
	import Engage from './Engage.svelte';
	import Ensembles from './Ensembles.svelte';
	import Intro from './Intro.svelte';

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
		{#if story.content.banner?.[0]}
			<Banner data={story.content.banner[0]} />
		{/if}
	{/snippet}

	<Intro />

	<Ensembles />

	<Engage {data} />

	<Booking {data} />
</SimpleLayout.Root>
