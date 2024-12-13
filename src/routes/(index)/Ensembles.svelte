<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';

	import ensembleImage from '$lib/assets/ensembleImage.jpg';
	import { SimpleLayout } from '$lib/simpleLayout';

	const ensembles = [
		{
			name: 'Hauptorchester',
			link: '/ensembles/hauptorchester',
		},
		{
			name: 'Jugendorchester',
			link: '/ensembles/jugendorchester',
		},
		{
			name: 'Bläserklassen',
			link: '/ensembles/blaeserklassen',
		},
		{
			name: 'Eltern Orchester',
			link: '/ensembles/eltern-orchester',
		},
	];
</script>

<SimpleLayout.Section class="space-y-2">
	<SimpleLayout.H1>Ensembles</SimpleLayout.H1>

	<div class="grid grid-cols-1 gap-px xs:grid-cols-2 lg:grid-cols-4">
		{#each ensembles as ensemble}
			<a
				href={ensemble.link}
				class="group grid aspect-[2.5/1] overflow-hidden xs:aspect-[1.5/1] sm:aspect-[2/1] lg:aspect-[1/1]"
			>
				<span
					style="background-image: url('{ensembleImage}')"
					class="relative col-[1] row-[1] bg-cover bg-center object-cover transition-all group-hover:scale-105"
				></span>
				<span
					class="relative col-[1] row-[1] bg-gradient-to-t from-black/70 to-transparent transition-all group-hover:to-black/20"
				></span>
				<span
					class="relative col-[1] row-[1] flex items-end justify-between space-y-2 p-4 text-white transition-all group-hover:pb-8"
				>
					<span class="text-xl">
						{ensemble.name}
					</span>
					<span class="translate-y-[200%] text-xl transition-all group-hover:translate-y-0">
						<ChevronRightIcon size={32} />
					</span>
				</span>
			</a>
		{/each}
	</div>
</SimpleLayout.Section>
