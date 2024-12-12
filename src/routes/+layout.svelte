<script lang="ts">
	import type { Snippet } from 'svelte';

	import '../app.css';

	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<Header />

{@render children?.()}

<Footer />
