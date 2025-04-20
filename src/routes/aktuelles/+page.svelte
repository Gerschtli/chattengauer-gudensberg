<script lang="ts">
	import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';

	import Events from './Events.svelte';
	import News from './News.svelte';

	let { data } = $props();
</script>

<StoryblokInit story={data.story} />

<div class="content-grid gap-y-4">
	<Events events={data.events} />

	<News news={data.news} />
</div>
