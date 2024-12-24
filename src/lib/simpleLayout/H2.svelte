<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<header class="pt-8">
	<h2 class="font-accent text-2xl font-semibold uppercase text-slate-800">
		<span
			class="border-b-2 border-accent pr-2 after:ml-2 after:inline-block after:h-2 after:w-2 after:rounded-sm after:bg-accent"
		>
			{@render children()}
		</span>
	</h2>
</header>
