<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		title: string;
		children: Snippet;
	}

	let { class: className, title, children }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="content-grid gap-y-6 pb-4 {className}">{@render children()}</main>
