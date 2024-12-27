<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';

	import Slider from '$lib/Slider.svelte';
	import ensembleImage from '$lib/assets/ensembleImage.jpg';
	import example1 from '$lib/assets/example1.avif';
	import example2 from '$lib/assets/example2.avif';
	import { SimpleLayout } from '$lib/simpleLayout';
	import type { SliderAsset } from '$lib/types';

	const ensembles = [
		{
			name: 'Hauptorchester',
			link: '/ensembles/hauptorchester',
			assets: [
				{ type: 'image', uri: ensembleImage },
				{ type: 'image', uri: example1 },
				{ type: 'image', uri: example2 },
			] satisfies SliderAsset[],
		},
		{
			name: 'Jugendorchester',
			link: '/ensembles/jugendorchester',
			assets: [
				{ type: 'image', uri: example1 },
				{ type: 'image', uri: example2 },
				{ type: 'image', uri: ensembleImage },
			] satisfies SliderAsset[],
		},
		{
			name: 'Bläserklassen',
			link: '/ensembles/blaeserklassen',
			assets: [
				{ type: 'image', uri: example2 },
				{ type: 'image', uri: example1 },
				{ type: 'image', uri: ensembleImage },
			] satisfies SliderAsset[],
		},
		{
			name: 'Eltern Orchester',
			link: '/ensembles/eltern-orchester',
			assets: [
				{ type: 'image', uri: example1 },
				{ type: 'image', uri: example2 },
			] satisfies SliderAsset[],
		},
	];
</script>

<SimpleLayout.Section class="content-grid gap-y-4">
	<SimpleLayout.H2>Ensembles</SimpleLayout.H2>

	<div class="content-grid gap-y-4 md:gap-y-0">
		{#each ensembles as ensemble, i}
			{@const even = i % 2 === 0}

			<article
				class={[
					'content-grid--raw content-grid__full-width md:py-4',
					even || 'bg-slate-800 py-4 text-slate-200',
				]}
			>
				<div class={['place-content-center', even ? 'breakout-left' : 'breakout-right md:order-2']}>
					<Slider assets={ensemble.assets} />
				</div>

				<div
					class={[
						'flex h-full flex-col gap-y-2 py-4',
						even ? 'content-right md:pl-4' : 'content-left md:order-1 md:pr-4',
					]}
				>
					<h2 class="font-accent text-xl">{ensemble.name}</h2>

					<p class="text-sm">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, aut? Nemo omnis quis debitis at
						ad nesciunt dolorem, consequuntur libero officiis nam iusto, facere quo beatae deleniti. Quod,
						excepturi harum.
					</p>

					<footer class="flex-grow place-content-end text-right text-sm">
						<a href={ensemble.link} class={['font-bold', even ? 'text-accent' : 'text-rose-400']}>
							Mehr Infos zum {ensemble.name}
							<ChevronRightIcon class="inline align-middle" size={16} />
						</a>
					</footer>
				</div>
			</article>
		{/each}
	</div>
</SimpleLayout.Section>

<style>
	.breakout-left,
	.breakout-right {
		grid-column: breakout;
	}

	.content-left,
	.content-right {
		grid-column: content;
	}

	@media (width >= theme('screens.md')) {
		.breakout-left {
			grid-column: breakout-start / center;
		}

		.breakout-right {
			grid-column: center / breakout-end;
		}

		.content-left {
			grid-column: content-start / center;
		}

		.content-right {
			grid-column: center / content-end;
		}
	}
</style>
