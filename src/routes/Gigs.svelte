<script lang="ts">
	import Gig from '$lib/Gig.svelte';
	import { ChevronRight } from 'lucide-svelte';

	const gigs: {
		weekday: string;
		day: string;
		start: string;
		end: string;
		description: string;
	}[] = [
		{
			weekday: 'Mi',
			day: '14.12.2022',
			start: '17:00',
			end: '18:00',
			description: 'Kid.Chatts (2021 und 2022) Grundschul-Weihnachtskonzert',
		},
		{
			weekday: 'Fr',
			day: '16.12.2022',
			start: '20:00',
			end: '22:00',
			description: 'Mitgliederversammlung F 26',
		},
		{
			weekday: 'Mo',
			day: '19.12.2022',
			start: '17:00',
			end: '18:00',
			description: 'Kid.Chatts (2021 und 2022) Grundschul-Weihnachtskonzert',
		},
	];
</script>

<section class="mt-3 space-y-2">
	<header class="flex flex-col items-center px-4 pt-4">
		<h1 class="text-md text-center font-semibold uppercase text-slate-700">
			Auftritte & Veranstaltungen
			<span class="ml-1 inline-block h-2 w-2 rounded-sm bg-red-500" />
		</h1>
		<div class="my-1 w-1/3 border-b-2 border-red-500" />
	</header>

	<article class="px-4">
		{#each gigs as gig}
			<Gig {gig} />
		{/each}

		<footer class="text-right text-sm">
			<a href="/termine" class="font-bold text-red-500">
				Alle Termine <ChevronRight class="inline-block align-middle" size={16} />
			</a>
		</footer>
	</article>
</section>
