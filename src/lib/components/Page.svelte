<script lang="ts">
	import { StoryblokComponent } from '@storyblok/svelte';

	import { storyblokEditable } from '$lib/storyblok/util';
	import type { Page } from '$storyblok/335007/storyblok-components';

	import Richtext from './Richtext.svelte';

	let { blok }: { blok: Page } = $props();

	const banner = $derived(blok.banner?.[0]);
</script>

<svelte:head>
	<title>{blok.title}</title>
	{#if blok.description}
		<meta name="description" content={blok.description} />
	{/if}
</svelte:head>

{#key blok}
	<div use:storyblokEditable={blok}>
		{#if banner}
			<StoryblokComponent blok={banner} />
		{/if}

		<main class={['content-grid gap-y-4 pb-8', !banner && 'pt-4']}>
			<Richtext blok={blok.content} />
		</main>
	</div>
{/key}
