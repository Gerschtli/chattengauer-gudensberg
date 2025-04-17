<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		banner?: Snippet;
		class?: string;
		title: string;
		description?: string;
		children: Snippet;
	}

	let { banner, class: className, title, description, children }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	{#if description}
		<meta name="description" content={description} />
	{/if}
</svelte:head>

<main class={['content-grid gap-y-8 pb-8', className, banner === undefined && 'pt-8']}>
	{#if banner !== undefined}
		<div class="content-grid -mb-4">
			{@render banner()}
		</div>
	{/if}

	{@render children()}
</main>
