<script lang="ts">
	import { HashIcon } from 'lucide-svelte';

	import Slider from '$lib/Slider.svelte';
	import { SimpleLayout } from '$lib/simpleLayout';
	import { TIME_ZONE } from '$lib/time';

	import type { NewsData } from './types';

	interface Props {
		news: NewsData[];
	}

	let { news }: Props = $props();
</script>

<SimpleLayout.Section class="content-grid gap-y-4">
	<h2 class="heading-1">
		News
		<span></span>
	</h2>

	<div class="content-grid gap-y-8">
		{#each news as entry, i (i)}
			<article class="content-grid gap-y-2">
				<header>
					<p class="text-xs text-slate-600">
						{new Intl.DateTimeFormat('de-DE', { dateStyle: 'full', timeZone: TIME_ZONE }).format(
							entry.date,
						)}
					</p>
					<h3 class="font-accent text-2xl font-accent-bold">{entry.title}</h3>
					<p class="text-sm text-slate-600">
						<HashIcon class="-ml-0.5 inline" strokeWidth={1.5} size={16} />
						{#each entry.ensembles as ensemble, i (i)}
							{#if i !== 0},{/if}
							<a href="/ensembles/{ensemble}" class="underline hover:text-accent">{ensemble}</a>
						{/each}
					</p>
				</header>

				{#if entry.description}
					<p>{entry.description}</p>
				{/if}

				<Slider class="content-grid__breakout" assets={entry.assets} />
			</article>
		{/each}
	</div>
</SimpleLayout.Section>
