<script lang="ts">
	import ensembleImage from '$lib/assets/ensembleImage.jpg';
	import { SimpleLayout } from '$lib/simpleLayout';
	import { ChevronRightIcon } from 'lucide-svelte';

	const ensembles = [
		{
			name: 'Hauptorchester',
			link: '/hauptorchester',
		},
		{
			name: 'Jugendorchester',
			link: '/jugendorchester',
		},
		{
			name: 'Bläserklassen',
			link: '/blaeserklassen',
		},
		{
			name: 'Eltern Ensemble',
			link: '/eltern-ensemble',
		},
	];
</script>

<SimpleLayout.Section class="grid grid-cols-1 gap-px px-4 xs:grid-cols-2 lg:grid-cols-4">
	{#each ensembles as ensemble}
		<a
			href={ensemble.link}
			class="group grid aspect-[2.5/1] overflow-hidden xs:aspect-[1.5/1] sm:aspect-[2/1] lg:aspect-[1/1]"
		>
			<span
				style="background-image: url('{ensembleImage}')"
				class="relative col-[1] row-[1] bg-cover bg-center object-cover transition-all group-hover:scale-105"
			/>
			<span
				class="relative col-[1] row-[1] bg-gradient-to-t from-black/70 to-transparent transition-all group-hover:to-black/20"
			/>
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
</SimpleLayout.Section>
