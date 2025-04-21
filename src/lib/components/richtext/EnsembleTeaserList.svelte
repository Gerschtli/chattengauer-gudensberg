<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';

	import type { EnsembleTeaserListStoryblok } from '$lib/component-types-storyblok';
	import { renderRichText } from '$lib/storyblok/richtext';
	import { buildUrl } from '$lib/storyblok/util';

	import ImageSliderInternal from './ImageSliderInternal.svelte';

	const { blok = $bindable() }: { blok: EnsembleTeaserListStoryblok } = $props();
</script>

<div class="content-grid gap-y-4 md:gap-y-0">
	{#each blok.list as ensemble, i (ensemble.title)}
		{@const lightBg = i % 2 === 0}

		<article
			class={[
				'content-grid--raw content-grid__full-width md:py-4 md:first-of-type:pt-0',
				lightBg || 'bg-slate-800 py-4 text-slate-200',
			]}
		>
			<div class={['place-content-center', lightBg ? 'breakout-left' : 'breakout-right md:order-2']}>
				<ImageSliderInternal multiasset={ensemble.images} />
			</div>

			<div
				class={[
					'flex h-full flex-col gap-y-2 py-4',
					lightBg ? 'content-right md:pl-4' : 'content-left md:order-1 md:pr-4',
				]}
			>
				<h3 class="font-accent font-accent-bold text-xl">{ensemble.title}</h3>

				<div class="prose contents text-sm">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html renderRichText(ensemble.description)}
				</div>

				<footer class="grow place-content-end text-right text-sm">
					<a
						href={buildUrl(ensemble.link)}
						class={['group font-bold no-underline', lightBg ? 'text-accent' : 'text-rose-400']}
					>
						<span class="group-hover:underline group-focus:underline">Mehr Infos</span>
						<ChevronRightIcon class="inline align-middle" size={16} />
					</a>
				</footer>
			</div>
		</article>
	{/each}
</div>

<style>
	/* @reference "../../app.css"; */

	.breakout-left,
	.breakout-right {
		grid-column: breakout;
	}

	.content-left,
	.content-right {
		grid-column: content;
	}

	/* TODO: @media (width >= theme(--breakpoint-md)) { */
	@media (width >= 768px) {
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
