<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';

	import bannerImage from '$lib/assets/homepage-banner.jpg?enhanced';
</script>

<section class="content-grid__full-width grid">
	<div class="grid-1">
		<enhanced:img
			class="h-[40vh] object-cover object-[center_50%]"
			src={bannerImage}
			alt=""
			fetchpriority="high"
			loading="eager"
			sizes="100vw"
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
