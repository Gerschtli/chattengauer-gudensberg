<script lang="ts">
	import { setEvents } from '$lib/components/richtext/events/context';
	import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';

	import News from './News.svelte';

	let { data } = $props();

	setEvents(data.events);
</script>

<StoryblokInit story={data.story} />

<News news={data.news} />
