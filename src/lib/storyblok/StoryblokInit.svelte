<script lang="ts">
	import { type ISbStoryData, StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	import type { PageStoryblok } from '$lib/component-types-storyblok';

	let { story }: { story: ISbStoryData<PageStoryblok> } = $props();

	onMount(() => {
		useStoryblokBridge(story.id, (newStory) => (story = newStory), {
			preventClicks: true,
		});
	});
</script>

<StoryblokComponent blok={story.content} />
