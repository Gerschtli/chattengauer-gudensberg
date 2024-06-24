<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	<title>{title} - Musik aus der Region</title>
</svelte:head>

<main class="container space-y-4 py-4"><slot /></main>
