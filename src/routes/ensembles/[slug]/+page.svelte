<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';

	import Engage from './Engage.svelte';
	import Facts from './Facts.svelte';
	import Infos from './Infos.svelte';

	let { data } = $props();
</script>

<SimpleLayout.Root title="Ensemble {data.slug}">
	<Infos {data} />

	<Facts />

	<Engage {data} />
</SimpleLayout.Root>
