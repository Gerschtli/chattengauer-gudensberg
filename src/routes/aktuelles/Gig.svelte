<script lang="ts">
	import { HashIcon, MapPinIcon } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import type { GigData } from './types';

	interface Props {
		class?: HTMLAttributes<EventTarget>['class'];
		gig: GigData;
	}

	let { class: className, gig }: Props = $props();

	const timeFormatted = $derived.by(() =>
		new Intl.DateTimeFormat('de-DE', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
		})
			.formatRange(gig.start, gig.end)
			.replace('\u2013', ' \u2013 ')
			.replace(' Uhr', ''),
	);
</script>

<div class={['gig grid', className]}>
	<div class="ml-1 aspect-square h-2 self-center rounded-sm bg-accent"></div>
	<p class="text-sm text-slate-600">{timeFormatted}</p>
	<p class="text-lg font-semibold">{gig.title}</p>
	{#if gig.description}
		<p class="mb-0.5 leading-tight">{gig.description}</p>
	{/if}
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
	<p class="text-sm text-slate-600">
		<HashIcon class="inline" strokeWidth={1.5} size={20} />
		{#each gig.ensembles as ensemble, i}
			{#if i !== 0},{/if}
			<a href="/ensembles/{ensemble}" class="underline decoration-from-font underline-offset-2 hover:text-accent">
				{ensemble}
			</a>
		{/each}
	</p>
</div>

<style>
	.gig {
		grid-template-columns: 1.5rem 1fr;

		p {
			grid-column: 2;
		}
	}
</style>
