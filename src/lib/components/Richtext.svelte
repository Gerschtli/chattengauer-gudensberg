<script lang="ts">
	import { StoryblokComponent, renderRichText } from '@storyblok/svelte';

	import type { RichtextStoryblok } from '$lib/component-types-storyblok';

	const { blok, class: className }: { blok: RichtextStoryblok; class?: string } = $props();
</script>

{#if blok.content && blok.content?.length > 0}
	<div class="prose contents {className}">
		{#each blok.content as item, i (i)}
			{#if item.type === 'blok'}
				{#each item.attrs.body as itemInner, i (i)}
					<StoryblokComponent blok={itemInner} />
				{/each}
			{:else if item.type === 'heading'}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html renderRichText({ type: 'doc', content: [item] })
					?.replace(/<h(\d)>/, '<h$1 class="heading-$1">')
					?.replace(/\s*(<\/h\d>)/, '<span></span>$1')}
			{:else}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html renderRichText({ type: 'doc', content: [item] })}
			{/if}
		{/each}
	</div>
{/if}
