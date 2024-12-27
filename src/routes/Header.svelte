<script lang="ts">
	import { MenuIcon, XIcon } from 'lucide-svelte';
	import { scrollY } from 'svelte/reactivity/window';
	import { fade, fly } from 'svelte/transition';

	import { browser } from '$app/environment';
	import { pushState } from '$app/navigation';
	import { page } from '$app/state';

	import schrift from '$lib/assets/schrift.svg';
	import wave from '$lib/assets/wave.svg';

	let lastScrollY = $state(0);
	let hideHeader = $state(false);

	$effect(() => {
		if (scrollY.current === undefined || lastScrollY === scrollY.current) return;

		if (scrollY.current <= heightInitial) {
			hideHeader = false;
		} else {
			hideHeader = lastScrollY < scrollY.current;
		}
		lastScrollY = scrollY.current;
	});

	const heightInitial = 100;
	const heightScroll = 70;
	const heightCalculated = $derived.by(() => {
		if ((browser && CSS.supports('(animation-timeline: view())')) || scrollY.current === undefined) {
			return heightInitial;
		}

		return Math.max(heightInitial - scrollY.current, heightScroll);
	});

	function openNav() {
		pushState('', { showNav: true });
	}

	function closeNav() {
		history.back();
	}

	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && page.state.showNav) closeNav();
	}
</script>

<svelte:window {onkeydown} />

<div class="placeholder" style:--height-initial="{heightInitial}px"></div>

<header
	class={['fixed top-0 z-10 w-full bg-white/95 transition-transform duration-500', hideHeader && '-translate-y-full']}
>
	<div
		class="mx-auto flex w-full max-w-[--content-max-width] items-center justify-between px-4"
		style:--height-initial="{heightInitial}px"
		style:--height-scroll="{heightScroll}px"
		style:--height-calculated="{heightCalculated}px"
	>
		<a href="/" class="flex items-center gap-4">
			<img src={schrift} class="h-10" alt="Logo der Chattengauer Gudensberg" />
			<img src={wave} class="h-14" alt="Logo der Chattengauer Gudensberg" />
		</a>

		<button aria-label="Menü öffnen" onclick={openNav}>
			<MenuIcon size={32} />
		</button>
	</div>
</header>

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
				<a
					{href}
					onclick={closeNav}
					class="underline decoration-from-font underline-offset-2 hover:text-accent"
				>
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

<style>
	.placeholder {
		height: var(--height-initial);
	}

	header {
		box-shadow: 0 -16px 16px 16px rgba(0, 0, 0, 0.3);

		& > div {
			height: var(--height-calculated);

			/* https://caniuse.com/mdn-css_properties_scroll-timeline */
			@supports (animation-timeline: view()) {
				animation: header-scroll ease-out forwards;
				animation-timeline: view();
				height: var(--height-initial);
				animation-range: exit;
			}
		}
	}

	@keyframes header-scroll {
		to {
			height: var(--height-scroll);
		}
	}
</style>
