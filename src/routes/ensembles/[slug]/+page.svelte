<script lang="ts">
	import { ensembles } from '$lib/ensembles';
	import { SimpleLayout } from '$lib/simpleLayout';

	import Banner from './Banner.svelte';
	import Engage from './Engage.svelte';
	import Facts from './Facts.svelte';
	import Infos from './Infos.svelte';

	let { data } = $props();
</script>

<SimpleLayout.Root title={ensembles[data.slug].name}>
	{#snippet banner()}
		<Banner {data} />
	{/snippet}

	<Infos {data} />

	<Facts {data} />

	<Engage {data} />
</SimpleLayout.Root>
