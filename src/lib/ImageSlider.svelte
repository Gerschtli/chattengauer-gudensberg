<script lang="ts">
	interface Props {
		class?: string;
		images: string[];
	}

	const { class: className, images }: Props = $props();

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
		{#each images as image}
			<div><img src={image} alt="" loading="lazy" /></div>
		{/each}
	</div>
	<div class="grid-1 mb-4 self-end justify-self-center">
		<div class="flex gap-2">
			{#each images as _, i}
				<button
					class="b-1 h-3 w-3 rounded-full border border-white shadow-sm shadow-black/30"
					class:bg-white={currentIndex !== i}
					class:bg-accent={currentIndex === i}
					onclick={() => scrollToSlide(i)}
				>
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
		scroll-snap-type: x mandatory;
		scrollbar-width: none;
		gap: var(--gap);

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.slider > div {
		flex-shrink: 0;
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		scroll-snap-stop: always;
		scroll-snap-align: center;
	}
</style>
