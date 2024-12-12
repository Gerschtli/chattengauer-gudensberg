<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';

	import Ensembles from './Ensembles.svelte';
	import Gigs from './Gigs.svelte';
	import News from './News.svelte';
</script>

<SimpleLayout.Root title="Chattengauer">
	<News />

	<Ensembles />

	<Gigs />
</SimpleLayout.Root>
