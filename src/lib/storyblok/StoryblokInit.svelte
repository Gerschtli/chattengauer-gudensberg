<script lang="ts">
	import { type ISbStoryData, StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	import type { PageStoryblok } from '$lib/component-types-storyblok';

	let { story, visualEditor }: { story: ISbStoryData<PageStoryblok>; visualEditor: boolean } = $props();

	onMount(() => {
		if (!visualEditor) return;

		useStoryblokBridge(story.id, (newStory) => (story = newStory), {
			preventClicks: true,
		});
	});
</script>

<StoryblokComponent blok={story.content} />
