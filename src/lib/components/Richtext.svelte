<script lang="ts">
	import { StoryblokComponent } from '@storyblok/svelte';

	import { renderRichText } from '$lib/storyblok/richtext';
	import type { StoryblokRichtext } from '$storyblok/storyblok';

	const { blok, class: className }: { blok: StoryblokRichtext; class?: string } = $props();
</script>

{#if blok.content && blok.content?.length > 0}
	<div class="prose contents {className}">
		{#each blok.content as item, i (i)}
			{#if item.type === 'blok'}
				{#if item.attrs}
					{#each item.attrs['body'] as itemInner, i (i)}
						<StoryblokComponent blok={itemInner} />
					{/each}
				{/if}
			{:else}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html renderRichText({ type: 'doc', content: [item] })}
			{/if}
		{/each}
	</div>
{/if}
