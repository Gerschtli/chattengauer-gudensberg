<script lang="ts">
	import { setSuperValidatedBooking, setSuperValidatedEngageHome } from '$lib/components/richtext/form/context';
	import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';

	let { data } = $props();

	// svelte-ignore state_referenced_locally
	setSuperValidatedEngageHome(data.formEngage);
	// svelte-ignore state_referenced_locally
	setSuperValidatedBooking(data.formBooking);
</script>

<StoryblokInit story={data.story} visualEditor={data.storyblokVisualEditor} />
