<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<header class="flex flex-col pt-4">
	<h2 class="font-accent text-lg font-semibold uppercase text-slate-800">
		<span class="border-b-2 border-accent pb-1 pr-4">
			{@render children()}
			<span class="ml-1 inline-block h-2 w-2 rounded-sm bg-accent"></span>
		</span>
	</h2>
</header>
