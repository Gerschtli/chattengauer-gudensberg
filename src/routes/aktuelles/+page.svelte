<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';

	import Gigs from './Gigs.svelte';
	import News from './News.svelte';

	let { data } = $props();
</script>

<SimpleLayout.Root title="Aktuelles">
	<Gigs gigs={data.gigs} />

	<News news={data.news} />
</SimpleLayout.Root>
