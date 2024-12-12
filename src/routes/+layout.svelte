<script lang="ts">
	import '../app.css';

	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Header />

{@render children?.()}

<Footer />
