<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';

	import example2 from '$lib/assets/example2.avif';
</script>

<section class="content-grid__full-width grid h-48 grid-cols-1 grid-rows-1 overflow-hidden">
	<img class="grid-1 h-full w-full object-cover object-[center_35%]" src={example2} alt="" />
	<p class="grid-1 grid place-content-center">
		<a
			class="bg-white/80 px-4 py-2 font-accent text-lg shadow-sm shadow-black/50 transition-all hover:bg-white/90 hover:shadow-lg"
			href="/aktuelles"
		>
			Aktuelle Termine und News <ChevronRightIcon class="inline-block align-middle text-accent" size={20} />
		</a>
	</p>
</section>
