<script lang="ts">
	import { HashIcon, MapPinIcon } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { TIME_ZONE } from '$lib/time';
	import type { GigData } from '$lib/types';

	interface Props {
		class?: HTMLAttributes<EventTarget>['class'];
		gig: GigData;
	}

	let { class: className, gig }: Props = $props();

	const timeFormatted = $derived.by(() => {
		if (gig.time.type === 'all-day') {
			return new Intl.DateTimeFormat('de-DE', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				timeZone: TIME_ZONE,
			}).format(new Date(gig.time.day));
		}

		return new Intl.DateTimeFormat('de-DE', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			timeZone: TIME_ZONE,
		})
			.formatRange(gig.time.start, gig.time.end)
			.replace('\u2013', ' \u2013 ')
			.replace(' Uhr', '');
	});
</script>

<div class={['gig grid', className]}>
	<div class="ml-1 aspect-square h-2 self-center rounded-sm bg-accent"></div>
	<p class="text-sm text-slate-600">{timeFormatted}</p>
	<p class="font-accent text-lg">{gig.title}</p>

	{#if gig.description}
		<div class="mb-0.5 grid gap-y-2">
			{#each gig.description.split('\n') as line}
				<p class="leading-tight">{line}</p>
			{/each}
		</div>
	{/if}

	{#if gig.location}
		<p class="text-sm text-slate-600">
			<MapPinIcon class="inline" strokeWidth={1.5} size={20} />
			<a
				href="https://www.google.com/maps/search/?api=1&query={encodeURIComponent(gig.location)}"
				target="_blank"
				rel="noopener noreferrer"
				class="underline decoration-from-font underline-offset-2 hover:text-accent"
			>
				{gig.location}
			</a>
		</p>
	{/if}

	{#if gig.ensembles?.length}
		<p class="text-sm text-slate-600">
			<HashIcon class="inline" strokeWidth={1.5} size={20} />
			{#each gig.ensembles as ensemble, i}
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
	.gig {
		grid-template-columns: 1.5rem 1fr;

		> :not(:first-child) {
			grid-column: 2;
		}
	}
</style>
