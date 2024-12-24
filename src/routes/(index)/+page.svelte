<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';

	import Banner from './Banner.svelte';
	import Ensembles from './Ensembles.svelte';
	import Intro from './Intro.svelte';
</script>

<SimpleLayout.Root title="Chattengauer">
	<Banner />

	<Intro />

	<Ensembles />
</SimpleLayout.Root>
