<script lang="ts">
	interface Props {
		class?: string;
		images: string[];
	}

	const { class: className, images }: Props = $props();

	let currentIndex = $state(0);
	let slider: HTMLDivElement;

	function scrollToSlide(index: number) {
		slider.scrollLeft = 300 * index;
	}
</script>

<div class="grid {className}">
	<div
		class="slider grid-1"
		bind:this={slider}
		onscroll={(e) => {
			console.log(slider?.scrollLeft);
		}}
	>
		{#each images as image}
			<div class="mr-1"><img src={image} alt="" /></div>
		{/each}
	</div>
	<div class="grid-1 self-end justify-self-center mb-4">
		<div class="gap-2 flex">
			{#each images as _, i}
				<!-- TODO: fix a11y here -->
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button
					class="h-3 w-3 shadow-sm shadow-black/30 rounded-full border border-white b-1"
					class:bg-white={currentIndex !== i}
					class:bg-accent={currentIndex === i}
					onclick={() => scrollToSlide(i)}
				></button>
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
	}
	.slider > div {
		scroll-snap-stop: always;
		flex-shrink: 0;
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		scroll-snap-align: center;
	}
</style>
