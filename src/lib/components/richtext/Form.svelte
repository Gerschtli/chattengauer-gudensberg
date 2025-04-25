<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';

	import type { FormStoryblok } from '$lib/component-types-storyblok';

	import BookingForm from './form/BookingForm.svelte';
	import EngageEnsembleForm from './form/EngageEnsembleForm.svelte';
	import EngageHomeForm from './form/EngageHomeForm.svelte';
	import {
		getSuperValidatedBooking,
		getSuperValidatedEngageEnsemble,
		getSuperValidatedEngageHome,
	} from './form/context';

	let { blok }: { blok: FormStoryblok } = $props();
</script>

<div use:storyblokEditable={blok}>
	{#if blok.type === 'engage-home'}
		<EngageHomeForm superValidated={getSuperValidatedEngageHome()} />
	{:else if blok.type === 'engage-ensemble'}
		<EngageEnsembleForm superValidated={getSuperValidatedEngageEnsemble()} />
	{:else if blok.type === 'booking'}
		<BookingForm superValidated={getSuperValidatedBooking()} />
	{/if}
</div>
