<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		class: string;
	}

	let { children, class: className }: Props = $props();
</script>

<section class={className}>{@render children?.()}</section>
