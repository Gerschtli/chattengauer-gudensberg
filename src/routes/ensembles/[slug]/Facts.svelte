<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';

	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<SimpleLayout.Section class="content-grid gap-y-2">
	<h2 class="heading-2">Das Wichtigste in Kürze</h2>

	<ul role="list" class="list-disc pl-4">
		{#if data.slug === 'grosses-orchester'}
			<li>
				<strong>Mitmachen:</strong>
				jeder, der fortgeschrittenen Kenntnisse auf seinem Instrument hat und dieses mindestens 5 Jahre aktiv spielt
			</li>
			<li>
				<strong>Repertoire:</strong>
				bunt gemischt aus traditionellen Blasorchester-Klassikern, Swing und die besten Hits aus den 60ern, 70ern
				und 80ern
			</li>
			<li>
				<strong>Einstieg:</strong>
				jederzeit möglich
			</li>
			<li>
				<strong>Laufzeit:</strong>
				unbegrenzt
			</li>
			<li>
				<strong>Probezeiten:</strong>
				freitags von 20-22 Uhr im
				<a href="/probenraum" class="underline decoration-from-font underline-offset-2 hover:text-accent">
					G1 (Grabenweg 1)
				</a>
			</li>
			<li>
				<strong>Kosten:</strong>
				jährlicher Mitgliedsbeitrag im Verein
			</li>
			<li>
				<strong>Instrumente:</strong>
				Flöte, Oboe, Fagott, Klarinette, Saxophon, Trompete, Flügelhorn, Horn, Posaune, Tenorhorn, Bariton, Euphonium,
				Tuba, Schlagwerk, E-Bass
			</li>
		{:else if data.slug === 'blaeserklassen'}
			<li>
				<strong>Mitmachen:</strong>
				Kinder ab 8 Jahren, ohne vorherige Kenntnisse
			</li>
			<li>
				<strong>Repertoire:</strong>
				moderne Anfängerstücke
			</li>
			<li>
				<strong>Einstieg:</strong>
				nach den Sommerferien
			</li>
			<li>
				<strong>Laufzeit:</strong>
				2 Jahre
			</li>
			<li>
				<strong>Probezeiten:</strong>
				freitags von 14.30-15.30 Uhr im
				<a href="/probenraum" class="underline decoration-from-font underline-offset-2 hover:text-accent">
					G1 (Grabenweg 1)
				</a>
				im ersten Jahr und freitags von 16.00-17.00 Uhr im
				<a href="/probenraum" class="underline decoration-from-font underline-offset-2 hover:text-accent">
					G1 (Grabenweg 1)
				</a>
				im zweiten Jahr
			</li>
			<li>
				<strong>Kosten:</strong>
				45 € pro Monat (darin sind enthalten: Instrumentalunterricht in Kleingruppen, Bläserklassenunterricht, Miete
				für das Leihinstrument, Mitgliedsbeitrag im Verein, Versicherung)
			</li>
			<li>
				<strong>Instrumente:</strong>
				Flöte, Klarinette, Saxophon, Trompete, Horn, Posaune, Euphonium, Schlagwerk
			</li>
		{:else if data.slug === 'jugendorchester'}
			<li>
				<strong>Mitmachen:</strong>
				jeder von 11-25 Jahren, der fortgeschrittene Kenntnisse auf seinem Instrument hat und dieses mindestens 2
				Jahre aktiv spielt
			</li>
			<li>
				<strong>Repertoire:</strong>
				bunt gemischt aus Filmmusik, Musicals und aktuelle Hits
			</li>
			<li>
				<strong>Einstieg:</strong>
				jederzeit möglich
			</li>
			<li>
				<strong>Laufzeit:</strong>
				unbegrenzt
			</li>
			<li>
				<strong>Probezeiten:</strong>
				freitags von 18-20 Uhr im
				<a href="/probenraum" class="underline decoration-from-font underline-offset-2 hover:text-accent">
					G1 (Grabenweg 1)
				</a>
			</li>
			<li>
				<strong>Kosten:</strong>
				jährlicher Mitgliedsbeitrag im Verein, umfasst die Teilnahme am Jugendorchester. Begleitender Instrumentalunterricht
				wird von uns empfohlen &ndash; wir vermitteln gerne.
			</li>
			<li>
				<strong>Instrumente:</strong>
				Flöte, Oboe, Fagott, Klarinette, Saxophon, Trompete, Horn, Posaune, Euphonium, Tuba, Schlagwerk, E-Bass
			</li>
		{:else if data.slug === 'brass-und-spass'}
			<li>
				<strong>Mitmachen:</strong>
				jeder Erwachsene
			</li>
			<li>
				<strong>Repertoire:</strong>
				Von leichten Stücken bis hin zu bekannten Melodien &ndash; wir spielen, was uns Spaß macht!
			</li>
			<li>
				<strong>Einstieg:</strong>
				jederzeit möglich
			</li>
			<li>
				<strong>Laufzeit:</strong>
				unbegrenzt
			</li>
			<li>
				<strong>Probezeiten:</strong>
				dienstags von 19-20.30 Uhr im
				<a href="/probenraum" class="underline decoration-from-font underline-offset-2 hover:text-accent">
					G1 (Grabenweg 1)
				</a>
			</li>
			<li>
				<strong>Kosten:</strong>
				10 € pro Monat (darin sind enthalten: Teilnahme bei Brass & Spaß, Mitgliedsbeitrag im Verein, Versicherung).
				Begleitender Instrumentalunterricht wird von uns empfohlen &ndash; wir vermitteln gerne.
			</li>
			<li>
				<strong>Instrumente:</strong>
				Flöte, Oboe, Fagott, Klarinette, Saxophon, Trompete, Flügelhorn, Horn, Posaune, Tenorhorn, Bariton, Euphonium,
				Tuba, Schlagwerk, Harfe, Gitarre, E-Bass, Klavier
			</li>
		{/if}
	</ul>
</SimpleLayout.Section>
