<script lang="ts">
	import { useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	import { SimpleLayout } from '$lib/simpleLayout';

	import Events from './Events.svelte';
	import News from './News.svelte';

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
	{#if story.content.content[0].component === 'news'}
		<!-- {@const content = story.content.content[0]} -->

		<Events events={data.events} />

		<News news={data.news} />
	{/if}
</SimpleLayout.Root>
