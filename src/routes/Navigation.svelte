<script lang="ts">
	import { XIcon } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

	let navRef: HTMLElement | undefined;

	function closeNav() {
		history.back();
	}

	function onkeydown(e: KeyboardEvent) {
		if (!page.state.showNav) return;
		if (e.key !== 'Escape') return;
		closeNav();
	}

	function onclick(e: MouseEvent) {
		if (!page.state.showNav) return;
		if (navRef?.contains(e.target as HTMLElement)) return;
		closeNav();
	}

	afterNavigate(() => {
		if (!page.state.showNav) return;
		closeNav();
	});
</script>

<svelte:window {onkeydown} {onclick} />

{#if page.state.showNav}
	<div class="fixed inset-0 z-20 bg-white/75" transition:fade>
		<nav
			bind:this={navRef}
			class="fixed right-0 h-full w-[600px] max-w-[90%] overflow-y-auto bg-white/90 p-4 text-lg shadow-lg shadow-black/40"
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

			<ul role="list" class="mx-auto max-w-[450px] space-y-4 p-4">
				<li>{@render link('/', 'Startseite')}</li>
				<li class="space-y-2">
					<span>Ensembles</span>
					<ul role="list" class="space-y-2 pl-8">
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
