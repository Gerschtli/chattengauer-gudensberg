<script lang="ts">
	import { ChevronDownIcon } from 'lucide-svelte';

	import { storyblokEditable } from '$lib/storyblok/util';
	import { TIME_ZONE, getStart } from '$lib/time';
	import type { EventData } from '$lib/types';
	import type { Events } from '$storyblok/335007/storyblok-components';

	import { getEnsembleList } from '../newsList/context';

	import { SvelteMap } from 'svelte/reactivity';
	import { getEvents } from './context';
	import Event from './Event.svelte';

	let { blok }: { blok: Events } = $props();

	const events = getEvents();
	const ensembleMap = Object.fromEntries(getEnsembleList().map((e) => [e.url, e.name]));

	const showMax = $derived(parseInt(blok.showMax));
	let expandAll = $state(false);

	const eventsGrouped = $derived.by(() => {
		const map = new SvelteMap<string, EventData[]>();
		for (const [i, event] of events.entries()) {
			if (!expandAll && i + 1 > showMax) break;

			const separator = new Intl.DateTimeFormat('de-DE', {
				month: 'long',
				year: 'numeric',
				timeZone: TIME_ZONE,
			}).format(getStart(event.time));

			const eventsMonth = map.get(separator) ?? [];
			eventsMonth.push(event);

			map.set(separator, eventsMonth);
		}

		return map;
	});
</script>

<div class="grid gap-y-4" use:storyblokEditable={blok}>
	{#if events.length === 0}
		<p class="text-slate-600">{blok.emptyText}</p>
	{:else}
		{#each eventsGrouped.entries() as [separator, eventList], i (i)}
			<h2 class="text-xs font-bold text-slate-700 uppercase">
				{separator}
			</h2>
			{#each eventList as event, j (j)}
				<Event {event} {ensembleMap} />
			{/each}
		{/each}
	{/if}

	{#if !expandAll && events.length > showMax}
		<footer class="text-right text-sm">
			<button class="group text-accent font-bold" onclick={() => (expandAll = true)}>
				<span class="decoration-from-font underline-offset-2 group-hover:underline group-focus:underline">
					{blok.buttonText}
				</span>
				<ChevronDownIcon class="inline align-middle" size={16} />
			</button>
		</footer>
	{/if}
</div>
