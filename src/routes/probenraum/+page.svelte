<script lang="ts">
	import { useStoryblokBridge } from '@storyblok/svelte';
	import { MapPinIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';

	import { env } from '$env/dynamic/public';

	import placeholder from '$lib/assets/placeholder-google-maps.jpg';
	import { SimpleLayout } from '$lib/simpleLayout';
	import Richtext from '$lib/storyblok/Richtext.svelte';

	let { data } = $props();

	let story = $derived(data.story);

	onMount(() => {
		useStoryblokBridge(story.id, (newStory) => (story = newStory), {
			preventClicks: true,
			resolveLinks: 'url',
		});
	});

	let mapsEnabled = $state(false);
</script>

<SimpleLayout.Root title={story.content.title} description={story.content.description}>
	{#if story.content.content[0].component === 'default'}
		{@const content = story.content.content[0]}

		<SimpleLayout.Section class="content-grid gap-y-4">
			<Richtext data={content.text} />

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
				Ausreichend Park- und Fahrradstellplätze vorhanden. Die nächste Bushaltestelle ist Gudensberg-Rathaus,
				ca. 300 m entfernt.
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
	{/if}
</SimpleLayout.Root>
