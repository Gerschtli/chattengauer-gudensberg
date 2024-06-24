<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';

	export let color: string;
	export let id: string;
</script>

<article class="{color} p-4">
	<figure class="relative m-3 mb-3 overflow-hidden">
		<img
			src="https://www.original-chattengauer.de/uploads/imgs/221216_adventskonzert_gruppenbild.jpg"
			alt=""
			class="w-full"
		/>
		<figcaption class="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-slate-200 backdrop-blur">
			Unser Adventskonzert am 17.12.
		</figcaption>
	</figure>

	<p class="text-sm text-slate-600">
		Mit einer vollen Kirche konnten wir unser Jahr 2023 gebührend ausklingen lassen. Für unsere jüngsten Mitglieder
		war dies das erste Adventskonzert von vielen, die noch kommen werden!
	</p>

	<footer class="text-right text-sm">
		<a href="/news/{id}" class="font-bold text-accent">
			Mehr Bilder <ChevronRight class="inline-block align-middle" size={16} />
		</a>
	</footer>
</article>
