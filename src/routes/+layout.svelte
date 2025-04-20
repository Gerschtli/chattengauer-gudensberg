<script lang="ts">
	import type { Snippet } from 'svelte';

	import '../app.css';

	import type { LayoutData } from './$types';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Navigation from './Navigation.svelte';

	interface Props {
		children: Snippet;
		data: LayoutData;
	}

	let { children, data }: Props = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="Chattengauer" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<Header />

<Navigation blok={data.config.content.navigation} />

{@render children()}

<Footer blok={data.config.content} />
