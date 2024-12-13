<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';

	import Gig from '$lib/Gig.svelte';
	import { SimpleLayout } from '$lib/simpleLayout';

	const gigs: {
		weekday: string;
		day: string;
		start: string;
		end: string;
		description: string;
		location: string;
	}[] = [
		{
			weekday: 'Mi',
			day: '14.12.2022',
			start: '17:00',
			end: '18:00',
			description: 'Kid.Chatts (2021 und 2022) Grundschul-Weihnachtskonzert',
			location: 'Bürgerhaus Gudensberg, Rathausgasse, 34281 Gudensberg',
		},
		{
			weekday: 'Fr',
			day: '16.12.2022',
			start: '20:00',
			end: '22:00',
			description: 'Mitgliederversammlung F26',
			location: 'F26, Fritzlarer Str. 26, 34281 Gudensberg',
		},
		{
			weekday: 'Mo',
			day: '19.12.2022',
			start: '17:00',
			end: '18:00',
			description: 'Kid.Chatts (2021 und 2022) Grundschul-Weihnachtskonzert',
			location: 'Grundschule Gudensberg, Holzweg 20, 34281 Gudensberg',
		},
	];
</script>

<SimpleLayout.Section class="space-y-2">
	<SimpleLayout.H1>Auftritte & Veranstaltungen</SimpleLayout.H1>

	<article class="px-4">
		{#each gigs as gig}
			<Gig {gig} />
		{/each}

		<footer class="text-right text-sm">
			<a href="/termine" class="font-bold text-accent">
				Alle Termine <ChevronRight class="inline-block align-middle" size={16} />
			</a>
		</footer>
	</article>
</SimpleLayout.Section>
