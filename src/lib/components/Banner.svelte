<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';

	import type { BannerStoryblok } from '$lib/component-types-storyblok';
	import { buildUrl } from '$lib/storyblok/util';

	let { blok }: { blok: BannerStoryblok } = $props();

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

<section class={['content-grid__full-width', blok.link && blok.linkText && 'grid']}>
	{#if blok.link && blok.linkText}
		<div class="grid-1">
			{@render picture()}
		</div>

		<div class="grid-1 content-grid place-content-end">
			<p class="mb-4 text-right">
				<a
					class="font-accent font-accent-bold inline-block bg-white/80 px-4 py-1 text-lg shadow-xs shadow-black/50 transition-all hover:bg-white/90 hover:shadow-lg"
					href={buildUrl(blok.link)}
				>
					{blok.linkText}
					<ChevronRightIcon class="text-accent inline-block align-middle" size={20} />
				</a>
			</p>
		</div>
	{:else}
		{@render picture()}
	{/if}
</section>

<style>
	.banner {
		height: 300px;

		@media (min-width: 1000px) {
			height: 375px;
		}

		@media (min-width: 2000px) {
			height: 450px;
		}
	}
</style>
