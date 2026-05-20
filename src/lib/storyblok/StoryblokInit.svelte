<script lang="ts">
	import { type ISbStoryData, StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	import type { Page } from '$storyblok/335007/storyblok-components';

	let { story, visualEditor }: { story: ISbStoryData<Page>; visualEditor: boolean } = $props();

	onMount(() => {
		if (!visualEditor) return;

		useStoryblokBridge(story.id, (newStory) => (story = newStory), {
			preventClicks: true,
		});
	});
</script>

<StoryblokComponent blok={story.content} />
