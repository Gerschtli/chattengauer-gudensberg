<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';

	import { buildUrl, storyblokEditable } from '$lib/storyblok/util';
	import type { Banner } from '$storyblok/335007/storyblok-components';

	let { blok }: { blok: Banner } = $props();

	const filter = $derived(blok.image.focus ? `filters:focal(${blok.image.focus})` : 'smart');
</script>

{#snippet source(width: number, height: number, media: boolean = true)}
	<source
		media={media ? `(max-width: ${width - 1}px)` : undefined}
		srcset="
			{blok.image.filename}/m/{width}x{height}/{filter} 1x,
			{blok.image.filename}/m/{width * 2}x{height * 2}/{filter} 2x
		"
	/>
{/snippet}

{#snippet picture()}
	<picture>
		{#each [400, 600, 800] as size (size)}
			{@render source(size, 300)}
		{/each}
		{#each [1000, 1200, 1600, 2000] as size (size)}
			{@render source(size, 375)}
		{/each}
		{#each [2400, 2800, 3200, 3600] as size (size)}
			{@render source(size, 450)}
		{/each}
		{@render source(4000, 450, false)}

		<img
			src={blok.image.filename}
			class="banner w-full object-cover object-center transition-all"
			fetchpriority="high"
			loading="eager"
			alt={blok.image.alt}
			title={blok.image.title}
		/>
	</picture>
{/snippet}

<section class={['content-grid__full-width', blok.link && blok.linkText && 'grid']} use:storyblokEditable={blok}>
	{#if blok.link && blok.linkText}
		<div class="grid-1">
			{@render picture()}
		</div>

		<div class="grid-1 content-grid place-content-end">
			<p class="link-wrapper mb-4 text-right">
				<a class="font-accent font-accent-bold text-lg" href={buildUrl(blok.link)}>
					{blok.linkText}
					<ChevronRightIcon class="text-accent inline-block align-middle" size={20} />
				</a>
			</p>
		</div>
	{:else}
		{@render picture()}
	{/if}
</section>

<style lang="postcss">
	@reference "../../app.css";

	.banner {
		height: 300px;

		@media (min-width: 1000px) {
			height: 375px;
		}

		@media (min-width: 2000px) {
			height: 450px;
		}
	}

	@supports (anchor-name: --foo) {
		.link-wrapper {
			--_padding-x: 1rem;
			--_padding-y: 0.25rem;

			position: relative;
			isolation: isolate;
			padding: var(--_padding-y) var(--_padding-x);
			text-wrap: balance;

			& > a {
				anchor-name: --anchor;
			}

			&::after {
				@apply bg-white/80 shadow-xs shadow-black/50;

				position: absolute;
				position-anchor: --anchor;
				z-index: -1;
				transition-property: background, box-shadow;
				inset: calc(anchor(inside) - var(--_padding-y)) calc(anchor(inside) - var(--_padding-x));
				content: '';
			}

			&:hover::after {
				@apply bg-white/90 shadow-md;
			}
		}
	}

	@supports (not (anchor-name: --foo)) {
		.link-wrapper {
			@apply bg-white/80 shadow-xs shadow-black/50 transition-all hover:bg-white/90 hover:shadow-md;

			& > a {
				@apply inline-block px-4 py-1;
			}
		}
	}
</style>
