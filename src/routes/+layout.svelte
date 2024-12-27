<script lang="ts">
	import type { Snippet } from 'svelte';

	import '../app.css';

	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Navigation from './Navigation.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link
		rel="preload"
		href="/fonts/trade-gothic-lt-std-58a78e64434a9.woff"
		as="font"
		crossorigin="anonymous"
		fetchpriority="high"
	/>
	<link
		rel="preload"
		href="/fonts/trade-gothic-lt-std-bold-condensed-no-20-5872def1d27d8.woff"
		as="font"
		crossorigin="anonymous"
		fetchpriority="high"
	/>
</svelte:head>

<Header />

<Navigation />

{@render children()}

<Footer />
