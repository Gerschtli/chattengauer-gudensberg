<script lang="ts">
	import { HashIcon, MapPinIcon } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { TIME_ZONE } from '$lib/time';
	import type { EventData } from '$lib/types';

	interface Props {
		class?: HTMLAttributes<EventTarget>['class'];
		event: EventData;
	}

	let { class: className, event }: Props = $props();

	const timeFormatted = $derived.by(() => {
		if (event.time.type === 'all-day') {
			return new Intl.DateTimeFormat('de-DE', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				timeZone: TIME_ZONE,
			}).format(new Date(event.time.day));
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

<div class={['event grid', className]}>
	<div class="ml-1 aspect-square h-2 self-center rounded-sm bg-accent"></div>
	<p class="text-sm text-slate-600">{timeFormatted}</p>
	<h3 class="font-accent text-lg">{event.title}</h3>

	{#if event.description}
		<div class="mb-0.5 grid gap-y-2">
			{#each event.description.split('\n') as line}
				<p class="leading-tight">{line}</p>
			{/each}
		</div>
	{/if}

	{#if event.location}
		<p class="text-sm text-slate-600">
			<MapPinIcon class="inline" strokeWidth={1.5} size={20} />
			<a
				href="https://www.google.com/maps/search/?api=1&query={encodeURIComponent(event.location)}"
				target="_blank"
				rel="noopener noreferrer"
				class="underline decoration-from-font underline-offset-2 hover:text-accent"
			>
				{event.location}
			</a>
		</p>
	{/if}

	{#if event.ensembles?.length}
		<p class="text-sm text-slate-600">
			<HashIcon class="inline" strokeWidth={1.5} size={20} />
			{#each event.ensembles as ensemble, i}
				{#if i !== 0},{/if}
				<a
					href="/ensembles/{ensemble}"
					class="underline decoration-from-font underline-offset-2 hover:text-accent"
				>
					{ensemble}
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
