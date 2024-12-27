<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		banner?: Snippet;
		class?: string;
		title: string;
		children: Snippet;
	}

	let { banner, class: className, title, children }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Chattengauer - Musikverein in Nordhessen!" />
</svelte:head>

<main class={['content-grid gap-y-8 pb-8', className, banner === undefined && 'pt-8']}>
	{#if banner !== undefined}
		<div class="content-grid -mb-4">
			{@render banner()}
		</div>
	{/if}

	{@render children()}
</main>
