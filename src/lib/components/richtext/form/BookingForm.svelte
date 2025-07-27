<script lang="ts">
	import { Control, Description, Field, FieldErrors, Label } from 'formsnap';
	import { AsteriskIcon, CheckIcon, LoaderCircleIcon, XIcon } from 'lucide-svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import Potty from './Potty.svelte';
	import { type SuperValidatedBooking, schemaBooking } from './schema';

	let { superValidated }: { superValidated: SuperValidatedBooking } = $props();

	const form = superForm(superValidated, {
		validators: zodClient(schemaBooking),
	});
	const { form: formData, enhance, delayed, message } = form;
</script>

<form method="POST" action="?/booking" use:enhance class="form flex flex-col gap-y-4">
	<div class="flex flex-col gap-y-1">
		<Field {form} name="name">
			<Control>
				{#snippet children({ props })}
					<Label class="text-sm">
						Dein Name
						{#if props['aria-required']}
							<AsteriskIcon class="inline align-top text-slate-500" strokeWidth={1} size={12} />
						{/if}
					</Label>
					<input
						{...props}
						class="w-full rounded-md border border-slate-300 px-3 py-2"
						type="name"
						bind:value={$formData.name}
					/>
				{/snippet}
			</Control>
			<FieldErrors class="text-xs text-red-600" />
			<Description class="text-sm text-neutral-500">
				Dein Name wird ausschließlich zur direkten Kontaktaufnahme verwendet.
			</Description>
		</Field>
	</div>
	<div class="flex flex-col gap-y-1">
		<Field {form} name="email">
			<Control>
				{#snippet children({ props })}
					<Label class="text-sm">
						Deine E-Mail Adresse
						{#if props['aria-required']}
							<AsteriskIcon class="inline align-top text-slate-500" strokeWidth={1} size={12} />
						{/if}
					</Label>
					<input
						{...props}
						class="w-full rounded-md border border-slate-300 px-3 py-2"
						type="email"
						bind:value={$formData.email}
					/>
				{/snippet}
			</Control>
			<FieldErrors class="text-xs text-red-600" />
			<Description class="text-sm text-neutral-500">
				Wie können wir dich erreichen? Deine E-Mail Adresse wird ausschließlich zur direkten Kontaktaufnahme
				verwendet.
			</Description>
		</Field>
	</div>
	<div class="flex flex-col gap-y-1">
		<Field {form} name="message">
			<Control>
				{#snippet children({ props })}
					<Label class="text-sm">
						Deine Nachricht
						{#if props['aria-required']}
							<AsteriskIcon class="inline align-top text-slate-500" strokeWidth={1} size={12} />
						{/if}
					</Label>
					<textarea
						{...props}
						class="h-32 w-full rounded-md border border-slate-300 px-3 py-2"
						bind:value={$formData.message}
					></textarea>
				{/snippet}
			</Control>
			<FieldErrors class="text-xs text-red-600" />
		</Field>
	</div>
	<Potty />
	<div class="flex items-center gap-4">
		<button
			class="bg-accent rounded-md px-4 py-2 text-sm text-white shadow-xs transition-colors hover:brightness-105 focus:brightness-110 active:brightness-90"
		>
			Absenden
		</button>

		{#if $delayed}<LoaderCircleIcon class="shrink-0 animate-spin" />{/if}
		{#if $message?.type === 'error'}
			<XIcon class="shrink-0 text-red-700" size={24} strokeWidth={3} />
			<p class="text-pretty text-red-700">{$message.text}</p>
		{:else if $message?.type === 'success'}
			<CheckIcon class="shrink-0 text-green-700" size={24} strokeWidth={3} />
			<p class="text-pretty text-green-700">{$message.text}</p>
		{/if}
	</div>
</form>

<style>
	form :global([aria-invalid='true']) {
		border-color: var(--color-red-700);
	}
</style>
