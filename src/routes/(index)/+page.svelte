<script lang="ts">
	import { useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	import { SimpleLayout } from '$lib/simpleLayout';
	import Richtext from '$lib/storyblok/Richtext.svelte';

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
			<SimpleLayout.Section class="content-grid gap-y-4">
				<Richtext data={contentHome.intro} />
			</SimpleLayout.Section>
		{/if}

		<Ensembles {contentHome} />

		<Engage {data} />

		<Booking {data} />
	{/if}
</SimpleLayout.Root>
