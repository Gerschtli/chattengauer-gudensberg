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
	<h1 class="heading-1">{ensemble.name} &ndash; {ensemble.claim}</h1>

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
			<p>
				<strong>Du möchtest mitspielen?</strong>
				Wir freuen uns immer über neue Talente, die unser Team bereichern. Probier&lsquo; es aus &ndash; wir heißen
				dich herzlich willkommen!
			</p>
		{:else if data.slug === 'blaeserklassen'}
			<p class="!mt-0">
				Für Kinder zwischen 8 und 10 Jahren sind die Bläserklassen der perfekte Start in die Welt der Musik. In
				lockerer Atmosphäre und mit viel Geduld lernen die Kleinsten ihr Instrument kennen &ndash; von Trompete
				über Klarinette bis hin zu Schlagzeug.
			</p>
			<p>
				<strong>Warum Bläserklasse?</strong>
				Weil Spaß und Erfolg Hand in Hand gehen! Gemeinsam werden kleine Konzerte gespielt und erste Erfolge gefeiert.
			</p>
			<p>
				<strong>Mach mit!</strong>
				Dein Kind möchte ein Instrument lernen? Jetzt ist die Gelegenheit! Melde dich bei uns und starte die musikalische
				Reise.
			</p>
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
			<p>
				<strong>Neugierig geworden?</strong>
				Schau vorbei und erlebe, wie cool Musik & mehr in der Gruppe sein kann.
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
				passt unser Trainer die Musikstücke gezielt an das Können jedes Einzelnen. So entsteht Musik, die alle begeistert!
				Hier steht der Spaß im Vordergrund &ndash; ohne Druck, dafür mit umso mehr guter Laune!
			</p>
			<p>
				<strong>Komm vorbei!</strong>
				Wir freuen uns auf neue Gesichter und frische Klänge.
			</p>
		{/if}
	</div>

	<Slider class="content-grid__breakout" assets={ensemble.images.map((image) => ({ type: 'image', uri: image }))} />
</SimpleLayout.Section>
