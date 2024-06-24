<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';
	import Gigs from './Gigs.svelte';
	import Intro from './Intro.svelte';
	import News from './News.svelte';
</script>

<SimpleLayout.Root title="Chattengauer">
	<Intro />

	<News />

	<Gigs />
</SimpleLayout.Root>
