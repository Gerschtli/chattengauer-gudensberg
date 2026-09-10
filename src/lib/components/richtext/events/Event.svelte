<script lang="ts">
	import { HashIcon, MapPinIcon } from 'lucide-svelte';

	import { renderRichText } from '$lib/storyblok/richtext';
	import { buildUrl, getLinkName } from '$lib/storyblok/util';
	import { TIME_ZONE } from '$lib/time';
	import type { EventData } from '$lib/types';

	interface Props {
		event: EventData;
	}

	let { event }: Props = $props();

	const timeFormatted = $derived.by(() => {
		if (event.time.type === 'all-day') {
			return new Intl.DateTimeFormat('de-DE', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				timeZone: TIME_ZONE,
			}).format(new Date(event.time.day));
		}

		if (!event.time.end) {
			return new Intl.DateTimeFormat('de-DE', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				timeZone: TIME_ZONE,
			})
				.format(new Date(event.time.start))
				.replace('\u2013', ' \u2013 ')
				.replace(' Uhr', '');
		}

		return new Intl.DateTimeFormat('de-DE', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			timeZone: TIME_ZONE,
		})
			.formatRange(event.time.start, event.time.end)
			.replace('\u2013', ' \u2013 ')
			.replace(' Uhr', '');
	});
</script>

<div class="event grid">
	<div class="bg-accent ml-1 aspect-square h-2 self-center rounded-xs"></div>
	<p class="text-sm text-slate-600">{timeFormatted}</p>
	<h3 class="font-accent font-accent-bold text-lg">{event.title}</h3>

	{#if event.description}
		<div class="mb-0.5 grid gap-y-2 leading-tight">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html renderRichText(event.description)}
		</div>
	{/if}

	{#if event.location}
		<p class="text-sm text-slate-600">
			<MapPinIcon class="inline" strokeWidth={1.5} size={20} />
			<a
				href="https://www.google.com/maps/search/?api=1&query={encodeURIComponent(event.location)}"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-accent underline decoration-from-font underline-offset-2"
			>
				{event.location}
			</a>
		</p>
	{/if}

	{#if event.ensembles?.length}
		<p class="text-sm text-slate-600">
			<HashIcon class="inline" strokeWidth={1.5} size={20} />
			{#each event.ensembles as ensemble, i (i)}
				{#if i !== 0},{/if}
				<a
					href={buildUrl(ensemble.ensemble)}
					class="hover:text-accent underline decoration-from-font underline-offset-2"
				>
					{getLinkName(ensemble.ensemble)}
				</a>
			{/each}
		</p>
	{/if}
</div>

<style>
	.event {
		grid-template-columns: 1.5rem 1fr;

		> :not(:first-child) {
			grid-column: 2;
		}
	}
</style>
