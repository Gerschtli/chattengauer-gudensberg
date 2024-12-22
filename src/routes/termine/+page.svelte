<script lang="ts">
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

<SimpleLayout.Root title="Auftritte & Veranstaltungen" class="pt-6">
	<SimpleLayout.Section class="space-y-2">
		<SimpleLayout.H1>Auftritte & Veranstaltungen</SimpleLayout.H1>

		<article>
			<h2 class="my-3 text-xs font-semibold uppercase text-slate-700">November 2022</h2>
			{#each gigs as gig}
				<Gig {gig} />
			{/each}

			<h2 class="my-3 text-xs font-semibold uppercase text-slate-700">Dezember 2022</h2>
			{#each gigs as gig}
				<Gig {gig} />
			{/each}
		</article>
	</SimpleLayout.Section>
</SimpleLayout.Root>
