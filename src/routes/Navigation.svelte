<script lang="ts">
	import { XIcon } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

	import { ensembles } from '$lib/ensembles';

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
					<span>Unsere Ensembles</span>
					<ul role="list" class="space-y-2 pl-8">
						{#each Object.entries(ensembles) as [slug, { name }]}
							<li>{@render link(`/ensembles/${slug}`, name)}</li>
						{/each}
					</ul>
				</li>
				<li>{@render link('/aktuelles', 'Aktuelle Termine und News')}</li>
				<li>{@render link('/#kontakt', 'Werde Teil der Chattengauer')}</li>
			</ul>
		</nav>
	</div>
{/if}
