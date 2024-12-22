<script lang="ts">
	import { Menu } from 'lucide-svelte';

	import { browser } from '$app/environment';

	import schrift from '$lib/assets/schrift.svg';
	import wave from '$lib/assets/wave.svg';

	let scrollY = $state(0);
	const heightInitial = 100;
	const heightScroll = 70;
	const heightCalculated = $derived.by(() => {
		if (browser && CSS.supports('(animation-timeline: view())')) return heightInitial;

		return Math.max(heightInitial - scrollY, heightScroll);
	});
</script>

<svelte:window bind:scrollY />

<div class="placeholder" style:--height-initial="{heightInitial}px"></div>

<header class="fixed top-0 z-10 w-full bg-white/95">
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

		<div>
			<Menu size={32} />
		</div>
	</div>
</header>

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
