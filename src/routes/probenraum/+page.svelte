<script lang="ts">
	import { MapPinIcon } from 'lucide-svelte';

	import { env } from '$env/dynamic/public';

	import Slider from '$lib/Slider.svelte';
	import placeholder from '$lib/assets/placeholder-google-maps.jpg';
	import erdgeschossG1Beschriftet from '$lib/assets/probenraum/erdgeschoss-g1-beschriftet.jpg?enhanced';
	import g1Visualsierung from '$lib/assets/probenraum/g1-visualsierung.jpg?enhanced';
	import probe1 from '$lib/assets/probenraum/probe1.jpg?enhanced';
	import probe2 from '$lib/assets/probenraum/probe2.jpg?enhanced';
	import probe3 from '$lib/assets/probenraum/probe3.jpg?enhanced';
	import probe4 from '$lib/assets/probenraum/probe4.jpg?enhanced';
	import probe5 from '$lib/assets/probenraum/probe5.jpg?enhanced';
	import probe6 from '$lib/assets/probenraum/probe6.jpg?enhanced';
	import probe7 from '$lib/assets/probenraum/probe7.jpg?enhanced';
	import probe8 from '$lib/assets/probenraum/probe8.png?enhanced';
	import { SimpleLayout } from '$lib/simpleLayout';

	let mapsEnabled = $state(false);
</script>

<SimpleLayout.Root title="Unser Probenraum">
	<SimpleLayout.Section class="content-grid gap-y-4">
		<h1 class="heading-1">
			Unser Probenraum
			<span></span>
		</h1>

		<p>
			Seit September 2024 verfügt die Stadt Gudensberg mit dem G1 über ein neues Kommunikations- und
			Begegnungszentrum im Herzen der Stadt.
		</p>

		<Slider
			class="content-grid__breakout"
			assets={[g1Visualsierung, erdgeschossG1Beschriftet].map((uri) => ({ type: 'image', uri }))}
		/>

		<p>
			In multifunktionalen Räumen haben auch wir ein lichtdurchflutetes und modernes Zuhause gefunden. Im großen
			Probensaal haben wir viel Platz für unsere Orchesterproben und in den 4 kleineren Proberäumen finden
			Instrumentalunterricht oder Registerproben statt. Nach den Proben lädt das gemütliche Café im Foyer zum
			geselligen Zusammensein ein.
		</p>

		<Slider
			class="content-grid__breakout"
			assets={[probe1, probe2, probe3, probe4, probe5, probe6, probe7, probe8].map((uri) => ({
				type: 'image',
				uri,
			}))}
		/>

		<p>
			Wir freuen uns sehr, dass die Stadt Gudensberg uns diese Räume zur Verfügung stellt und wir uns musikalisch
			entfalten und als Verein wachsen können.
		</p>

		<h2 class="heading-3">
			Anfahrt
			<span></span>
		</h2>

		<p>
			<MapPinIcon class="inline" strokeWidth={1.5} size={20} />
			<a
				href="https://www.google.com/maps/search/?api=1&query=G1,+Grabenweg+1,+34281+Gudensberg"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-accent underline decoration-from-font underline-offset-2"
			>
				G1, Grabenweg 1, 34281 Gudensberg
			</a>
		</p>

		<p>
			Ausreichend Park- und Fahrradstellplätze vorhanden. Die nächste Bushaltestelle ist Gudensberg-Rathaus, ca.
			300 m entfernt.
		</p>

		{#if mapsEnabled}
			<iframe
				class="content-grid__breakout aspect-media w-full"
				title="Google Maps zur Adresse des G1"
				style="border:0"
				loading="lazy"
				allowfullscreen
				referrerpolicy="no-referrer-when-downgrade"
				src="https://www.google.com/maps/embed/v1/place?key={env.PUBLIC_GOOGLE_MAPS_API_KEY}&q=G1+-+Gemeinsam+Eins+-+Kommunikations-+und+Begegnungszentrum"
			></iframe>
		{:else}
			<div
				class="content-grid__breakout aspect-media grid place-content-center"
				style:background-image="url('{placeholder}')"
			>
				<button
					class="rounded-md bg-slate-700/90 p-4 text-white shadow-xs transition-colors hover:brightness-105 focus:brightness-110 active:brightness-90"
					onclick={() => (mapsEnabled = true)}
				>
					Karte zur Anfahrt via Google Maps anzeigen
				</button>
			</div>
		{/if}
	</SimpleLayout.Section>
</SimpleLayout.Root>
