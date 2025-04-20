<script lang="ts">
	import { StoryblokComponent } from '@storyblok/svelte';

	import type { PageStoryblok } from '$lib/component-types-storyblok';

	import Richtext from './Richtext.svelte';

	let { blok }: { blok: PageStoryblok } = $props();

	const banner = $derived(blok.banner?.[0]);
</script>

<svelte:head>
	<title>{blok.title}</title>
	{#if blok.description}
		<meta name="description" content={blok.description} />
	{/if}
</svelte:head>

{#if banner}
	<StoryblokComponent blok={banner} />
{/if}

<main class={['content-grid gap-y-4 pb-8', !banner && 'pt-4']}>
	<Richtext blok={blok.content} />
</main>
