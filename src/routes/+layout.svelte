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

	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="Chattengauer" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<Header />

<Navigation />

{@render children()}

<Footer />
