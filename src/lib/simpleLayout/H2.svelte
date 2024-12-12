<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<header class="flex flex-col px-4 pt-4">
	<h2 class="font-accent text-lg font-semibold uppercase text-slate-800">
		{@render children()}
		<span class="ml-1 inline-block h-2 w-2 rounded-sm bg-accent"></span>
	</h2>
	<div class="my-1 w-1/3 border-b-2 border-accent"></div>
</header>
