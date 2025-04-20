<script lang="ts">
	import { setSuperValidatedBooking, setSuperValidatedEngageHome } from '$lib/components/richtext/form/context';
	import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';

	let { data } = $props();

	setSuperValidatedEngageHome(data.formEngage);
	setSuperValidatedBooking(data.formBooking);
</script>

<StoryblokInit story={data.story} />
