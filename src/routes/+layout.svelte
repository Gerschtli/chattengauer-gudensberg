<script lang="ts">
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	import '@fontsource/open-sans';
	import '../app.css';
</script>

<Header />

<slot />

<Footer />
