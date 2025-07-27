<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import { MapPinIcon } from 'lucide-svelte';

	import placeholder from '$lib/assets/placeholder-google-maps.jpg';
	import type { DirectionsStoryblok } from '$lib/component-types-storyblok';

	let { blok }: { blok: DirectionsStoryblok } = $props();
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

	<div
		class="content-grid__breakout aspect-media grid place-content-center"
		style:background-image="url('{placeholder}')"
	>
		<a
			href="https://www.google.com/maps/search/?api=1&query={encodeURIComponent(blok.googleSearch)}"
			target="_blank"
			rel="noopener noreferrer"
			class="rounded-md bg-slate-700/90 p-4 text-white no-underline shadow-xs transition-colors hover:brightness-105 focus:brightness-110 active:brightness-90"
		>
			{blok.buttonText}
		</a>
	</div>
</div>
