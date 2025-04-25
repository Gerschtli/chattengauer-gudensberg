<script lang="ts">
	import { XIcon } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	import { afterNavigate, pushState } from '$app/navigation';
	import { page } from '$app/state';

	import type { NavigationGroupStoryblok, NavigationLinkStoryblok } from '$lib/component-types-storyblok';
	import { buildUrl } from '$lib/storyblok/util';

	const { blok }: { blok: (NavigationLinkStoryblok | NavigationGroupStoryblok)[] } = $props();

	let navRef = $state<HTMLElement | undefined>(undefined);

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

			{#snippet link(link: NavigationLinkStoryblok)}
				{@const url = buildUrl(link.link)}
				<a
					href={url}
					class={[
						'hover:text-accent underline decoration-from-font underline-offset-2',
						url === page.url.pathname && 'text-accent/80',
					]}
					onclick={(e) => {
						if (!url.includes('#')) return;

						const [pathname, id] = url.split('#');
						if (pathname !== page.url.pathname) return;

						e.stopPropagation();

						closeNav();

						pushState(url, { showNav: false });

						setTimeout(() => {
							document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
						}, 0);
					}}
				>
					{link.title}
				</a>
			{/snippet}

			<ul role="list" class="mx-auto max-w-[450px] space-y-4 p-4">
				{#each blok as item (item._uid)}
					{#if item.component === 'navigationLink'}
						<li>{@render link(item)}</li>
					{:else if item.component === 'navigationGroup'}
						<li class="space-y-2">
							<span>{item.title}</span>
							<ul role="list" class="space-y-2 pl-8">
								{#each item.items as subItem (subItem._uid)}
									<li>{@render link(subItem)}</li>
								{/each}
							</ul>
						</li>
					{/if}
				{/each}
			</ul>
		</nav>
	</div>
{/if}
