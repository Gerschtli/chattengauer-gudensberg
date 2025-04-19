<script lang="ts">
	import type { AssetStoryblok } from '$lib/component-types-storyblok';

	let { image = $bindable() }: { image: AssetStoryblok } = $props();

	const filter = $derived(image.focus ? `filters:focal(${image.focus})` : 'smart');
</script>

<section class="content-grid__full-width">
	<picture>
		{#each [400, 600, 800, 1000, 1200, 1600, 2000] as size (size)}
			<source
				media="(max-width: {size}px)"
				srcset="{image.filename}/m/{size}x300/{filter} 1x, {image.filename}/m/{size * 2}x600/{filter} 2x"
			/>
		{/each}
		<source srcset="{image.filename}/m/4000x0/{filter}" />

		<img
			src={image.filename}
			class="image h-[300px] w-full object-cover object-center"
			fetchpriority="high"
			loading="eager"
			alt={image.alt}
			title={image.title}
		/>
	</picture>
</section>
