<script>
	import NewsEntry from './NewsEntry.svelte';

	const news = [
		{
			color: 'bg-red-200',
			id: 'news0',
		},
		{
			color: 'bg-slate-200',
			id: 'news1',
		},
		{
			color: 'bg-slate-100',
			id: 'news2',
		},
	];
</script>

<section class="mt-3 space-y-2">
	<header class="flex flex-col items-center px-4 pt-4">
		<h1 class="text-md text-center font-semibold uppercase text-slate-700">
			Aktuelles & Ankündigungen
			<span class="ml-1 inline-block h-2 w-2 rounded-sm bg-red-500" />
		</h1>
		<div class="my-1 w-1/3 border-b-2 border-red-500" />
	</header>

	{#each news as newsEntry}
		<NewsEntry color={newsEntry.color} id={newsEntry.id} />
	{/each}
</section>
