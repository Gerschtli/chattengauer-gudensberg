<script lang="ts">
	import { ChevronDownIcon } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	import type { EventsStoryblok } from '$lib/component-types-storyblok';
	import { TIME_ZONE, getStart } from '$lib/time';
	import type { EventData } from '$lib/types';

	import Event from './Event.svelte';
	import { getEvents } from './context';

	let { blok }: { blok: EventsStoryblok } = $props();

	const events = getEvents();

	const slideDuration = 500;
	const showMax = $derived(parseInt(blok.showMax));
	let expandAll = $state(false);

	const set = new Set<string>();

	function buildSeparator(event: EventData) {
		const rendered = new Intl.DateTimeFormat('de-DE', {
			month: 'long',
			year: 'numeric',
			timeZone: TIME_ZONE,
		}).format(getStart(event.time));

		if (set.has(rendered)) return undefined;

		set.add(rendered);

		return rendered;
	}
</script>

{#snippet eventWithSeparator(event: EventData)}
	{@const separator = buildSeparator(event)}
	{#if separator}
		<h2 class="text-xs font-bold text-slate-700 uppercase">
			{separator}
		</h2>
	{/if}
	<Event {event} />
{/snippet}

<div class="grid gap-y-4">
	{#if events.length === 0}
		<p class="text-slate-600">{blok.emptyText}</p>
	{/if}

	{#each events.slice(0, showMax) as event, i (i)}
		{@render eventWithSeparator(event)}
	{/each}

	{#if expandAll}
		<div class="grid gap-y-4" in:slide={{ duration: slideDuration }}>
			{#each events.slice(showMax) as event, i (i)}
				{@render eventWithSeparator(event)}
			{/each}
		</div>
	{/if}

	{#if !expandAll && events.length > showMax}
		<footer class="text-right text-sm">
			<button class="group text-accent cursor-pointer font-bold" onclick={() => (expandAll = true)}>
				<span class="decoration-from-font underline-offset-2 group-hover:underline group-focus:underline">
					{blok.buttonText}
				</span>
				<ChevronDownIcon class="inline align-middle" size={16} />
			</button>
		</footer>
	{/if}
</div>
