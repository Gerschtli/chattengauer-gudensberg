<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';

	import Banner from './Banner.svelte';
	import Booking from './Booking.svelte';
	import Engage from './Engage.svelte';
	import Ensembles from './Ensembles.svelte';
	import Intro from './Intro.svelte';

	let { data } = $props();
</script>

<SimpleLayout.Root title="Chattengauer">
	{#snippet banner()}
		<Banner />
	{/snippet}

	<Intro />

	<Ensembles />

	<Engage {data} />

	<Booking {data} />
</SimpleLayout.Root>
