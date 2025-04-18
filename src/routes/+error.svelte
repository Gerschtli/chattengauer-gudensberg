<script lang="ts">
	import { page } from '$app/state';

	import { SimpleLayout } from '$lib/simpleLayout';

	const isNotFoundError = $derived(page.status === 4094);
	const title = $derived(isNotFoundError ? 'Seite nicht gefunden!' : 'Unerwarteter Fehler!');
</script>

<SimpleLayout.Root {title} class="content-grid gap-y-4">
	<h1 class="heading-1">
		{title}
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
				href="mailto:original.chattengauer@gmx.de"
				class="underline decoration-from-font underline-offset-2 hover:text-accent"
			>
				original.chattengauer@gmx.de
			</a>.
		</p>
	{/if}
</SimpleLayout.Root>
