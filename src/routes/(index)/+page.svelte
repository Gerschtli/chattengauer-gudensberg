<script lang="ts">
	import Banner from '$lib/Banner.svelte';
	import { SimpleLayout } from '$lib/simpleLayout';
	import Gigs from './Gigs.svelte';
	import Intro from './Intro.svelte';
	import News from './News.svelte';
</script>

<SimpleLayout.Root title="Chattengauer">
	<Banner />

	<Intro />

	<News />

	<Gigs />
</SimpleLayout.Root>
