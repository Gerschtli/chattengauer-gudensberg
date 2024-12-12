<script lang="ts">
	interface Props {
		title: string;
		children?: import('svelte').Snippet;
	}

	let { title, children }: Props = $props();
</script>

<svelte:head>
	<title>{title} - Musik aus der Region</title>
</svelte:head>

<main class="container space-y-8 py-4">{@render children?.()}</main>
