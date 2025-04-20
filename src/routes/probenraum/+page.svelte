<script lang="ts">
	import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';

	let { data } = $props();
</script>

<StoryblokInit story={data.story} />
