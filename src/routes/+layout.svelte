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

<Header />

<Navigation />

{@render children()}

<Footer />
