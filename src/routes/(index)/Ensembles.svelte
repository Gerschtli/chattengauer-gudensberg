<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';
	import { ChevronRightIcon } from 'lucide-svelte';

	import SliderStoryblok from '$lib/SliderStoryblok.svelte';
	import type { HomeStoryblok } from '$lib/component-types-storyblok';
	import { SimpleLayout } from '$lib/simpleLayout';
	import Richtext from '$lib/storyblok/Richtext.svelte';

	const { contentHome = $bindable() }: { contentHome: HomeStoryblok } = $props();
</script>

<SimpleLayout.Section class="content-grid gap-y-4">
	<Richtext data={contentHome.ensemblesText} />

	<div class="content-grid gap-y-4 md:gap-y-0">
		{#each contentHome.ensembles as ensemble, i (ensemble.title)}
			{@const lightBg = i % 2 === 0}

			<article
				class={[
					'content-grid--raw content-grid__full-width md:py-4 md:first-of-type:pt-0',
					lightBg || 'bg-slate-800 py-4 text-slate-200',
				]}
			>
				<div class={['place-content-center', lightBg ? 'breakout-left' : 'breakout-right md:order-2']}>
					<SliderStoryblok multiasset={ensemble.images} />
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
						<!-- TODO: is cached_url the right field? -->
						<a
							href="/{ensemble.link.cached_url}"
							class={['font-bold', lightBg ? 'text-accent' : 'text-rose-400']}
						>
							Mehr Infos
							<ChevronRightIcon class="inline align-middle" size={16} />
						</a>
					</footer>
				</div>
			</article>
		{/each}
	</div>
</SimpleLayout.Section>

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
