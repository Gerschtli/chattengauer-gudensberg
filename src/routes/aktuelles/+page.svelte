<script lang="ts">
	import { setEvents } from '$lib/components/richtext/events/context';
	import { setEnsembleMap, setNewsList } from '$lib/components/richtext/newsList/context';
	import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';

	let { data } = $props();

	setEvents(data.events);
	setNewsList(data.newsList);
	setEnsembleMap(data.ensembleMap);
</script>

<StoryblokInit story={data.story} />
