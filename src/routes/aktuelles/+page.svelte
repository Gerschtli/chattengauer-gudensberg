<script lang="ts">
	import { setEvents } from '$lib/components/richtext/events/context';
	import { setEnsembleList, setNewsList } from '$lib/components/richtext/newsList/context';
	import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';

	let { data } = $props();

	// svelte-ignore state_referenced_locally
	setEnsembleList(data.ensembleList);
	// svelte-ignore state_referenced_locally
	setEvents(data.events);
	// svelte-ignore state_referenced_locally
	setNewsList(data.newsList);
</script>

<StoryblokInit story={data.story} visualEditor={data.storyblokVisualEditor} />
