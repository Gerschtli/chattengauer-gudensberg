<script lang="ts">
	import { ChevronDownIcon } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	import { SimpleLayout } from '$lib/simpleLayout';
	import { TIME_ZONE, getStart } from '$lib/time';
	import type { EventData } from '$lib/types';

	import Event from './Event.svelte';

	interface Props {
		events: EventData[];
	}

	let { events }: Props = $props();

	const slideDuration = 500;
	const showMax = 3;
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
		<h2 class="text-xs font-bold uppercase text-slate-700">
			{separator}
		</h2>
	{/if}
	<Event {event} />
{/snippet}

<SimpleLayout.Section class="grid gap-y-4">
	<h1 class="heading-1">
		Aktuelle Termine
		<span></span>
	</h1>

	{#if events.length === 0}
		<p class="text-slate-600">Es stehen aktuell keine Termine an.</p>
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
			<button class="font-bold text-accent" onclick={() => (expandAll = true)}>
				Alle Termine aufklappen
				<ChevronDownIcon class="inline align-middle" size={16} />
			</button>
		</footer>
	{/if}
</SimpleLayout.Section>
