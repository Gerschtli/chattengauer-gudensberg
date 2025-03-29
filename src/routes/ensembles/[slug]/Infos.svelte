<script lang="ts">
	import Slider from '$lib/Slider.svelte';
	import { ensembles } from '$lib/ensembles';
	import { SimpleLayout } from '$lib/simpleLayout';

	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const ensemble = $derived(ensembles[data.slug]);
</script>

<SimpleLayout.Section class="content-grid gap-y-2">
	<h1 class="heading-1">
		{ensemble.name} &ndash; {ensemble.claim}
		<span></span>
	</h1>

	<div class="clear-both space-y-2">
		<figure class="float-right flex flex-col items-center gap-2 pb-4 pl-4">
			<img src="https://placehold.co/300" class="size-[150px] rounded-full" alt="" />
			<figcaption class="flex flex-col items-center">
				<span class="text-xs uppercase tracking-tighter text-slate-500">Musikalischer Leiter:</span>
				XXX
			</figcaption>
		</figure>

		{#if data.slug === 'grosses-orchester'}
			<p class="!mt-0">
				Willkommen in unserem Herzstück! Das Große Orchester vereint fortgeschrittene Musiker, die ihr Können in
				ein vielseitiges Repertoire einbringen: Von traditioneller Blasmusik wie Polka, Marsch oder Walzer über
				mitreißenden Swing bis hin zu den Klassikern der 60er, 70er und 80er Jahre.
			</p>
			<p>
				<strong>Was dich erwartet:</strong>
				Inspirierende Proben, spannende Konzertauftritte und eine Gemeinschaft, die den Spaß an der Musik teilt.
			</p>
		{:else if data.slug === 'blaeserklassen'}
			<p class="!mt-0">
				Du willst Trompete, Klarinette, Posaune, Horn, Flöte, Euphonium, Tuba, Saxophon oder Schlagzeug lernen?
			</p>
			<p>Du möchtest gemeinsam mit anderen viel Spaß haben?</p>
			<p>Dann komm in unsere Bläserklasse „Kid.Chatts“ - für Kinder ab dem 3. Schuljahr!</p>
			<p>
				Ohne Vorkenntnisse lernst du in einer Kleingruppe von 3 bis 4 Kids auf deinem Lieblingsinstrument zu
				spielen. Dazu hast du an einem Nachmittag in der Woche qualifizierten Unterricht bei einem ausgebildeten
				Musiklehrer.
			</p>
			<p>
				An einem zweiten Nachmittag lernst du in der Bläserklasse, wie toll es klingt, wenn du zusammen mit den
				anderen Instrumenten in eurem Orchester spielst!
			</p>
			<p>
				<strong>Warum Bläserklasse?</strong>
				Weil Spaß und Erfolg Hand in Hand gehen! Gemeinsam spielen wir kleine Konzerte und feiern erste Erfolge.
			</p>

			<h2 class="heading-3">
				Was ist das Besondere?
				<span></span>
			</h2>

			<p>Jugendliche der Chattengauer werden eure Instrumenten-Paten!</p>
			<p>
				Sie spielen ihr Instrument schon seit ein paar Jahren und besuchen euch in den Übungsstunden und
				unterstützen euch mit ihren eigenen Erfahrungen.
			</p>
			<p>Außerdem planen sie mit euch gemeinsame Patentage und Freizeit-Aktionen!</p>
		{:else if data.slug === 'jugendorchester'}
			<p class="!mt-0">
				Die perfekte Ergänzung zu deinem Instrumentalunterricht: unser Jugendorchester ist der Hotspot für junge
				Musiker zwischen 11 und 25 Jahren. In der Gruppe kannst du dein Können voll entfalten. Hier geht es
				modern und kreativ zu: mitreißende Filmmusik, Musicals und aktuelle Hits stehen auf dem Programm.
			</p>
			<p>
				<strong>Was uns besonders macht:</strong>
				Bei uns werden Freundschaften geknüpft, die weit über die Musik hinausgehen. Proben sind bei uns alles andere
				als langweilig &ndash; sie sind das Highlight der Woche! Und jede Menge Freizeitspaß neben der Musik im Jugendorchester
				ist auch dabei.
			</p>
		{:else if data.slug === 'brass-und-spass'}
			<p class="!mt-0">
				Deine Zeit ist jetzt und du möchtest endlich ein Instrument lernen? Oder du hast früher ein Instrument
				gespielt und möchtest wieder einsteigen oder träumst du davon, ein neues Instrument auszuprobieren? Dann
				ist Brass & Spaß genau das Richtige für dich!
			</p>
			<p>
				<strong>Was wir bieten:</strong>
				Eine lockere Atmosphäre, in der Anfänger und Wiedereinsteiger gemeinsam musizieren. Mit geschultem Blick
				passt unser Trainer die Musikstücke gezielt an das Können jedes Einzelnen an. So entsteht Musik, die alle
				begeistert! Hier steht der Spaß im Vordergrund &ndash; ohne Druck, dafür mit umso mehr guter Laune!
			</p>
		{/if}
	</div>

	<Slider class="content-grid__breakout" assets={ensemble.images.map((image) => ({ type: 'image', uri: image }))} />
</SimpleLayout.Section>
