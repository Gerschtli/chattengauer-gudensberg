<script lang="ts">
	import { useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	import { SimpleLayout } from '$lib/simpleLayout';
	import Richtext from '$lib/storyblok/Richtext.svelte';

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
	{#if story.content.content[0].component === 'default'}
		{@const content = story.content.content[0]}

		<SimpleLayout.Section class="content-grid gap-y-4">
			<Richtext data={content.text} />
		</SimpleLayout.Section>
	{/if}
</SimpleLayout.Root>
