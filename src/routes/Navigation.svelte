<script lang="ts">
	import { XIcon } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

	function closeNav() {
		history.back();
	}

	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && page.state.showNav) closeNav();
	}

	afterNavigate(() => {
		if (page.state.showNav) closeNav();
	});
</script>

<svelte:window {onkeydown} />

{#if page.state.showNav}
	<div class="fixed inset-0 z-20 bg-white/75" transition:fade>
		<nav
			class="fixed inset-0 left-[15%] overflow-y-auto bg-white/90 p-4 shadow-lg shadow-black/40"
			transition:fly={{ x: '100%' }}
		>
			<button class="float-right" aria-label="Menü schließen" onclick={closeNav}>
				<XIcon size={32} />
			</button>

			{#snippet link(href: string, label: string)}
				<a {href} class="underline decoration-from-font underline-offset-2 hover:text-accent">
					{label}
				</a>
			{/snippet}

			<ul class="mx-auto max-w-[450px] space-y-4 p-4">
				<li>{@render link('/', 'Startseite')}</li>
				<li class="space-y-2">
					<span>Ensembles</span>
					<ul class="space-y-2 pl-8">
						<li>{@render link('/ensembles/hauptorchester', 'Hauptorchester')}</li>
						<li>{@render link('/ensembles/jugendorchester', 'Jugendorchester')}</li>
						<li>{@render link('/ensembles/blaeserklassen', 'Bläserklassen')}</li>
					</ul>
				</li>
				<li>{@render link('/aktuelles', 'Aktuelle Termine und News')}</li>
				<li>{@render link('/', 'Kontakt')}</li>
			</ul>
		</nav>
	</div>
{/if}
