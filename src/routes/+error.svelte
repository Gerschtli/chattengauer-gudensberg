<script lang="ts">
	import { page } from '$app/state';

	const isNotFoundError = $derived(page.status === 404);
	const title = $derived(isNotFoundError ? 'Seite nicht gefunden!' : 'Unerwarteter Fehler!');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="content-grid gap-y-4 pt-4 pb-8">
	<h1 class="heading-1">
		<span>{title}</span>
		&nbsp;
		<span></span>
	</h1>

	{#if isNotFoundError}
		<!-- prettier-ignore -->
		<p>
			Diese Seite haben wir nicht gefunden, vielleicht findest du, was du gesucht hast, auf
			<a href="/" class="underline decoration-from-font underline-offset-2 hover:text-accent">
				unserer Startseite
			</a>!
		</p>
	{:else}
		<!-- prettier-ignore -->
		<p>
			Leider ist ein unerwarteter Fehler aufgetreten, das tut uns leid! Bitte versuche es später noch einmal. Wenn
			das Problem weiterhin besteht, kontaktiere uns gerne unter
			<a
				href="mailto:{page.data.config.content.contactEmail}"
				class="underline decoration-from-font underline-offset-2 hover:text-accent"
			>
				{page.data.config.content.contactEmail}
			</a>.
		</p>
	{/if}
</main>
