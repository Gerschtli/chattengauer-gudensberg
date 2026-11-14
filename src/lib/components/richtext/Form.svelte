<script lang="ts">
	import type { Form } from '#lib/storyblok/types.js';
	import { storyblokEditable } from '#lib/storyblok/util.ts';

	import BookingForm from './form/BookingForm.svelte';
	import EngageEnsembleForm from './form/EngageEnsembleForm.svelte';
	import EngageHomeForm from './form/EngageHomeForm.svelte';
	import {
		getSuperValidatedBooking,
		getSuperValidatedEngageEnsemble,
		getSuperValidatedEngageHome,
	} from './form/context';

	let { blok }: { blok: Form } = $props();
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
