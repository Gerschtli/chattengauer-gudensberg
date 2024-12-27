<script lang="ts">
	import { HashIcon } from 'lucide-svelte';

	import ImageSlider from '$lib/ImageSlider.svelte';
	import { SimpleLayout } from '$lib/simpleLayout';

	import type { NewsData } from './types';

	interface Props {
		news: NewsData[];
	}

	let { news }: Props = $props();
</script>

<SimpleLayout.Section class="content-grid gap-y-4">
	<SimpleLayout.H1>News</SimpleLayout.H1>

	<div class="content-grid gap-y-8">
		{#each news as entry}
			<article class="content-grid gap-y-2">
				<header>
					<p class="text-xs text-slate-600">
						{new Intl.DateTimeFormat('de-DE', { dateStyle: 'full' }).format(entry.date)}
					</p>
					<h3 class="text-2xl font-bold">{entry.title}</h3>
					<p class="text-sm text-slate-600">
						<HashIcon class="-ml-0.5 inline" strokeWidth={1.5} size={16} />
						{#each entry.ensembles as ensemble, i}
							{#if i !== 0},{/if}
							<a href="/ensembles/{ensemble}" class="underline hover:text-accent">{ensemble}</a>
						{/each}
					</p>
				</header>

				{#if entry.description}
					<p>{entry.description}</p>
				{/if}

				<ImageSlider class="content-grid__breakout" images={entry.images} />
			</article>
		{/each}
	</div>
</SimpleLayout.Section>
