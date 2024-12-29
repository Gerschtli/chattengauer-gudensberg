<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';

	import Events from './Events.svelte';
	import News from './News.svelte';

	let { data } = $props();
</script>

<SimpleLayout.Root title="Aktuelles">
	<Events events={data.events} />

	<News news={data.news} />
</SimpleLayout.Root>
