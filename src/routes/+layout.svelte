<script lang="ts">
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Header />

{@render children?.()}

<Footer />
