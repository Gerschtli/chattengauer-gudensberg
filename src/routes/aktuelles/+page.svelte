<script lang="ts">
	import { setEvents } from '$lib/components/richtext/events/context';
	import { setEnsembleList, setNewsList } from '$lib/components/richtext/newsList/context';
	import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';

	let { data } = $props();

	setEnsembleList(data.ensembleList);
	setEvents(data.events);
	setNewsList(data.newsList);
</script>

<StoryblokInit story={data.story} />
