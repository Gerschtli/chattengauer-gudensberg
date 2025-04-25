<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import { MapPinIcon } from 'lucide-svelte';

	import { env } from '$env/dynamic/public';

	import placeholder from '$lib/assets/placeholder-google-maps.jpg';
	import type { DirectionsStoryblok } from '$lib/component-types-storyblok';

	let { blok }: { blok: DirectionsStoryblok } = $props();

	let mapsEnabled = $state(false);
</script>

<div class="content-grid gap-y-4" use:storyblokEditable={blok}>
	<p>
		<MapPinIcon class="inline" strokeWidth={1.5} size={20} />
		<a
			href="https://www.google.com/maps/search/?api=1&query={encodeURIComponent(blok.googleSearch)}"
			target="_blank"
			rel="noopener noreferrer"
			class="hover:text-accent underline decoration-from-font underline-offset-2"
		>
			{blok.address}
		</a>
	</p>

	{#if mapsEnabled}
		<iframe
			class="content-grid__breakout aspect-media w-full"
			title="Google Maps zur Adresse des G1"
			style="border:0"
			loading="lazy"
			allowfullscreen
			referrerpolicy="no-referrer-when-downgrade"
			src="https://www.google.com/maps/embed/v1/place?key={env.PUBLIC_GOOGLE_MAPS_API_KEY}&q={encodeURIComponent(
				blok.googleSearch,
			)}"
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
				{blok.buttonText}
			</button>
		</div>
	{/if}
</div>
