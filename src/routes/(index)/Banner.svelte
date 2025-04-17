<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';

	import type { BannerImageStoryblok } from '$lib/component-types-storyblok';

	let { data = $bindable() }: { data: BannerImageStoryblok } = $props();
</script>

<section class="content-grid__full-width grid">
	<div class="grid-1">
		<img
			class="image h-[40vh] w-full object-cover"
			style:--position-x="{data.positionX}%"
			style:--position-y="{data.positionY}%"
			src={data.image.filename}
			alt=""
			fetchpriority="high"
			loading="eager"
		/>
	</div>

	<div class="grid-1 content-grid place-content-end">
		<p class="mb-4 text-right">
			<a
				class="font-accent font-accent-bold inline-block bg-white/80 px-4 py-1 text-lg shadow-xs shadow-black/50 transition-all hover:bg-white/90 hover:shadow-lg"
				href="/aktuelles"
			>
				Aktuelle Termine und News <ChevronRightIcon class="text-accent inline-block align-middle" size={20} />
			</a>
		</p>
	</div>
</section>

<style>
	.image {
		object-position: var(--position-x) var(--position-y);
	}
</style>
