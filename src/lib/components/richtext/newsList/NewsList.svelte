<script lang="ts">
	import { type SbBlokData } from '@storyblok/svelte';
	import { HashIcon } from 'lucide-svelte';

	import Richtext from '$lib/components/Richtext.svelte';
	import { storyblokEditable } from '$lib/storyblok/util';
	import { TIME_ZONE } from '$lib/time';
	import type { NewsList } from '$storyblok/335007/storyblok-components';

	import { getEnsembleList, getNewsList } from './context';

	const { blok }: { blok: NewsList } = $props();

	const newsList = getNewsList();
	const ensembleMap = Object.fromEntries(getEnsembleList().map((e) => [e.uuid, e]));

	const dateTimeFormat = new Intl.DateTimeFormat('de-DE', { dateStyle: 'full', timeZone: TIME_ZONE });
</script>

<div class="content-grid gap-y-8" use:storyblokEditable={blok as SbBlokData}>
	{#each newsList as news (news.id)}
		<article class="content-grid gap-y-2" use:storyblokEditable={news.content}>
			<header>
				<p class="text-xs text-slate-600">
					{dateTimeFormat.format(new Date(news.content.date))}
				</p>
				<h3 class="font-accent font-accent-bold text-2xl">{news.content.title}</h3>
				{#if news.content.ensembles && news.content.ensembles.length > 0 && Array.isArray(news.content.ensembles)}
					{@const ensembles = news.content.ensembles as unknown as string[]}
					<p class="text-sm text-slate-600">
						<HashIcon class="-ml-0.5 inline" strokeWidth={1.5} size={16} />
						{#each ensembles as ensembleId, i (ensembleId)}
							{@const ensemble = ensembleMap[ensembleId]}
							{#if i !== 0},{/if}
							<a href={ensemble.url} class="hover:text-accent underline">{ensemble.name}</a>
						{/each}
					</p>
				{/if}
			</header>

			<Richtext blok={news.content.content} />
		</article>
	{/each}
</div>
