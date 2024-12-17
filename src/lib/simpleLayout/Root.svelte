<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<svelte:head>
	<title>{title} - Musik aus der Region</title>
</svelte:head>

<main class="container space-y-8 pb-4">{@render children()}</main>
