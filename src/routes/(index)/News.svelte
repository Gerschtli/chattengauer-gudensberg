<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';
	import { ChevronRightIcon } from 'lucide-svelte';

	const news = [
		{
			link: '/news/news0',
			name: 'Unser Adventskonzert am 17.12.',
			image: 'https://www.original-chattengauer.de/uploads/imgs/221216_adventskonzert_gruppenbild.jpg',
		},
		{
			link: '/news/news1',
			name: 'Schulhofkonzert',
			image: 'https://www.original-chattengauer.de/uploads/imgs/221216_adventskonzert_gruppenbild.jpg',
		},
		{
			link: '/news/news2',
			name: 'Sensensteinfahrt 2024',
			image: 'https://www.original-chattengauer.de/uploads/imgs/221216_adventskonzert_gruppenbild.jpg',
		},
	];
</script>

<SimpleLayout.Section class="space-y-2">
	<SimpleLayout.H1>Aktuelles & Ankündigungen</SimpleLayout.H1>

	<div class="flex flex-col gap-px">
		{#each news as newsEntry}
			<a href={newsEntry.link} class="group grid aspect-[2.5/1] overflow-hidden lg:aspect-[4/1]">
				<span
					style="background-image: url('{newsEntry.image}')"
					class="relative col-[1] row-[1] bg-cover bg-center object-cover transition-all group-hover:scale-105"
				></span>
				<span
					class="relative col-[1] row-[1] bg-gradient-to-t from-black/70 to-transparent transition-all group-hover:to-black/20"
				></span>
				<span
					class="relative col-[1] row-[1] flex items-end justify-between space-y-2 p-4 text-white transition-all group-hover:pb-8"
				>
					<span class="text-xl">
						{newsEntry.name}
					</span>
					<span class="translate-y-[200%] text-xl transition-all group-hover:translate-y-0">
						<ChevronRightIcon size={32} />
					</span>
				</span>
			</a>
		{/each}
	</div>
</SimpleLayout.Section>
