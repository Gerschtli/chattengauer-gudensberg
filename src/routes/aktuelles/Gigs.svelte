<script lang="ts">
	import { ChevronDownIcon } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	import { SimpleLayout } from '$lib/simpleLayout';

	import Gig from './Gig.svelte';
	import type { GigData } from './types';

	interface Props {
		gigs: GigData[];
	}

	let { gigs }: Props = $props();

	const slideDuration = 500;
	const showMax = 3;
	let expandGigs = $state(false);

	const set = new Set<string>();

	function buildSeparator(gig: GigData) {
		const rendered = new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric' }).format(gig.start);

		if (set.has(rendered)) return undefined;

		set.add(rendered);

		return rendered;
	}
</script>

{#snippet gigWithSeparator(gig: GigData)}
	{@const separator = buildSeparator(gig)}
	{#if separator}
		<h2 class="text-xs font-semibold uppercase text-slate-700">
			{separator}
		</h2>
	{/if}
	<Gig {gig} />
{/snippet}

<SimpleLayout.Section class="grid gap-y-4">
	<SimpleLayout.H1>Aktuelle Termine</SimpleLayout.H1>

	{#each gigs.slice(0, showMax) as gig}
		{@render gigWithSeparator(gig)}
	{/each}

	{#if expandGigs}
		<div class="grid gap-y-4" in:slide={{ duration: slideDuration }}>
			{#each gigs.slice(showMax) as gig}
				{@render gigWithSeparator(gig)}
			{/each}
		</div>
	{/if}

	{#if !expandGigs && gigs.length > showMax}
		<footer class="text-right text-sm" out:slide={{ duration: slideDuration / 2 }}>
			<button class="font-bold text-accent" onclick={() => (expandGigs = true)}>
				Alle Termine aufklappen
				<ChevronDownIcon class="inline align-middle" size={16} />
			</button>
		</footer>
	{/if}
</SimpleLayout.Section>
