<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<header class="flex flex-col px-4 py-2">
	<h1 class="font-accent text-2xl font-semibold uppercase text-slate-800">
		<span class="pb-1 pr-4 border-b-2 border-accent">
			{@render children()}
			<span class="ml-1 inline-block h-2 w-2 rounded-sm bg-accent"></span>
		</span>
	</h1>
</header>
