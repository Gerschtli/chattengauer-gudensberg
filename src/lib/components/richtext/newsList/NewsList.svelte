<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import { HashIcon } from 'lucide-svelte';

	import type { NewsListStoryblok } from '$lib/component-types-storyblok';
	import Richtext from '$lib/components/Richtext.svelte';
	import { TIME_ZONE } from '$lib/time';

	import { getEnsembleList, getNewsList } from './context';

	const { blok }: { blok: NewsListStoryblok } = $props();

	const newsList = getNewsList();
	const ensembleMap = Object.fromEntries(getEnsembleList().map((e) => [e.uuid, e]));

	const dateTimeFormat = new Intl.DateTimeFormat('de-DE', { dateStyle: 'full', timeZone: TIME_ZONE });
</script>

<div class="content-grid gap-y-8" use:storyblokEditable={blok}>
	{#each newsList as news (news.id)}
		<article class="content-grid gap-y-2" use:storyblokEditable={news.content}>
			<header>
				<p class="text-xs text-slate-600">
					{dateTimeFormat.format(new Date(news.content.date))}
				</p>
				<h3 class="font-accent font-accent-bold text-2xl">{news.content.title}</h3>
				{#if news.content.ensembles && news.content.ensembles.length > 0}
					<p class="text-sm text-slate-600">
						<HashIcon class="-ml-0.5 inline" strokeWidth={1.5} size={16} />
						{#each news.content.ensembles as ensembleId, i (ensembleId)}
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
