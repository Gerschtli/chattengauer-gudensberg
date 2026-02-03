<script lang="ts">
	import { setSuperValidatedEngageEnsemble } from '$lib/components/richtext/form/context';
	import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';

	let { data } = $props();

	// svelte-ignore state_referenced_locally
	setSuperValidatedEngageEnsemble(data.form);
</script>

<StoryblokInit story={data.story} visualEditor={data.storyblokVisualEditor} />
