<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';
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

<SimpleLayout.Section class="space-y-2">
	<SimpleLayout.H1>Aktuelles & Ankündigungen</SimpleLayout.H1>

	{#each news as newsEntry}
		<NewsEntry color={newsEntry.color} id={newsEntry.id} />
	{/each}
</SimpleLayout.Section>
