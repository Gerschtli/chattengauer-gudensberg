<script lang="ts">
	import type { SliderAsset } from './types';

	interface Props {
		class?: string;
		assets: SliderAsset[];
	}

	const { class: className, assets }: Props = $props();

	const gap = 8;
	let clientWidth = $state(0);
	const elementWidth = $derived(clientWidth + gap);

	let currentIndex = $state(0);
	let slider: HTMLDivElement;

	function scrollToSlide(index: number) {
		slider.scrollTo({ left: elementWidth * index, behavior: 'smooth' });
	}

	function onscroll() {
		currentIndex = Math.floor((slider.scrollLeft + elementWidth / 2) / elementWidth);
	}
</script>

<div class="grid {className}">
	<div class="slider grid-1" style:--gap="{gap}px" bind:this={slider} bind:clientWidth {onscroll}>
		{#each assets as { type, uri }}
			{#if type === 'image'}
				<div><img src={uri} alt="" loading="lazy" /></div>
			{/if}
		{/each}
	</div>
	<div class="grid-1 mb-4 self-end justify-self-center">
		<div class="flex gap-2">
			{#each assets as _, i}
				<button class="rounded-full p-1" onclick={() => scrollToSlide(i)}>
					<span
						class="block size-5 rounded-full border-4 border-white shadow-sm shadow-black/30"
						class:bg-white={currentIndex !== i}
						class:bg-accent={currentIndex === i}
					></span>
					<span class="sr-only">Gehe zum nächsten Bild</span>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.slider {
		display: flex;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		gap: var(--gap);
		scroll-snap-type: x mandatory;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.slider > div {
		flex-shrink: 0;
		aspect-ratio: 16 / 9;
		width: 100%;
		overflow: hidden;
		scroll-snap-align: center;
		scroll-snap-stop: always;
	}
</style>
