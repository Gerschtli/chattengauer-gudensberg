<script lang="ts">
	import type { MultiassetStoryblok } from './component-types-storyblok';
	import { getDimensionsOfImageUrl } from './storyblok/util';

	interface Props {
		class?: string;
		multiasset: MultiassetStoryblok;
	}

	const { class: className, multiasset }: Props = $props();

	const gap = 8;
	const aspectRatio = 3 / 2;

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

{#snippet picture(asset: MultiassetStoryblok[number], isBlur: boolean)}
	{@const dimensions = getDimensionsOfImageUrl(asset)}
	{@const isLandscape =
		!dimensions.width || !dimensions.height || dimensions.width / dimensions.height >= aspectRatio}
	{@const dimensionBuilder = (width: number) => (isLandscape ? `${width}x0` : `0x${Math.floor(width / aspectRatio)}`)}

	<picture>
		<source
			media="(max-width: 400px)"
			srcset="{asset.filename}/m/{dimensionBuilder(400)} 1x, {asset.filename}/m/{dimensionBuilder(800)} 2x"
		/>
		<source
			media="(min-width: 401px)"
			srcset="{asset.filename}/m/{dimensionBuilder(800)} 1x, {asset.filename}/m/{dimensionBuilder(1600)} 2x"
		/>

		<img
			class={{ image: !isBlur, 'blur-image': isBlur }}
			src="{asset.filename}/m/{dimensionBuilder(800)}"
			loading="lazy"
			alt={asset.alt}
			title={asset.title}
		/>
	</picture>
{/snippet}

<div class="grid {className}">
	<div class="slider grid-1" style:--gap="{gap}px" bind:this={slider} bind:clientWidth {onscroll}>
		{#each multiasset as asset (asset.id)}
			<div class="item">
				<div class="background">
					{@render picture(asset, true)}
				</div>
				<div class="content">
					{@render picture(asset, false)}
				</div>
			</div>
		{/each}
	</div>
	<div class="grid-1 z-0 mb-4 self-end justify-self-center">
		<div class="flex gap-2">
			{#each multiasset as _, i (i)}
				<button class="rounded-full p-1" onclick={() => scrollToSlide(i)}>
					<span
						class="block size-3 rounded-full border-2 border-white shadow-md shadow-black/60"
						class:bg-white={currentIndex !== i}
						class:bg-accent={currentIndex === i}
					></span>
					<span class="sr-only">Gehe zu Bild Nummer {i + 1}</span>
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

	.item {
		display: grid;
		flex-shrink: 0;
		width: 100%;
		overflow: hidden;
		scroll-snap-align: center;
		scroll-snap-stop: always;
	}

	.background,
	.content {
		grid-row: 1;
		grid-column: 1;
		aspect-ratio: var(--aspect-media);
	}

	.image,
	.blur-image {
		width: 100%;
		height: 100%;
		object-position: center;
	}

	.blur-image {
		scale: 1.5;
		filter: blur(10px) brightness(120%);
		object-fit: cover;
	}

	.image {
		position: relative;
		filter: drop-shadow(0 0 1px var(--color-slate-600));
		object-fit: contain;
	}
</style>
