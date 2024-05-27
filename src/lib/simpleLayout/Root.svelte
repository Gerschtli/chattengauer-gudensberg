<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	<title>{title} - Musik aus der Region</title>
</svelte:head>

<main class="container space-y-4 pb-8"><slot /></main>
