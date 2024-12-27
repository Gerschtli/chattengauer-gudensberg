<script lang="ts">
	import { Control, Description, Field, FieldErrors, Label } from 'formsnap';
	import { AsteriskIcon, CheckIcon, LoaderCircleIcon, XIcon } from 'lucide-svelte';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { dev } from '$app/environment';

	import { SimpleLayout } from '$lib/simpleLayout';

	import type { PageData } from './$types';
	import { schema } from './schema.js';

	let { data }: { data: PageData } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance, delayed, message } = form;
</script>

<SimpleLayout.Section class="content-grid gap-y-4">
	<SimpleLayout.H2>Mitmachen!</SimpleLayout.H2>

	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad rem possimus, aliquid magni voluptatem optio
		accusantium adipisci at saepe corrupti ab obcaecati est aut numquam facilis quibusdam beatae eos. Itaque.
	</p>

	{#if dev}
		<SuperDebug data={$formData} />
	{/if}

	<form method="POST" use:enhance class="form flex flex-col gap-y-4">
		<div class="flex flex-col gap-y-1">
			<Field {form} name="instrument">
				<Control>
					{#snippet children({ props })}
						<Label class="text-sm">
							Dein Instrument
							{#if props['aria-required']}
								<AsteriskIcon class="inline align-top text-slate-500" strokeWidth={1} size={12} />
							{/if}
						</Label>
						<input
							{...props}
							class="w-full rounded-md border border-slate-300 px-3 py-2"
							type="text"
							bind:value={$formData.instrument}
						/>
					{/snippet}
				</Control>
				<FieldErrors class="text-xs text-red-600" />
				<Description class="text-sm text-neutral-400">Welches Instrument spielst du?</Description>
			</Field>
		</div>
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
				<Description class="text-sm text-neutral-400">
					Wie können wir dich erreichen? Wird ausschließlich zur direkten Kontaktaufnahme verwendet.
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
		<div class="flex items-center gap-4">
			<button
				class="rounded-md bg-accent px-4 py-2 text-sm text-white shadow-sm transition-colors hover:brightness-105 focus:brightness-110 active:brightness-90"
			>
				Absenden
			</button>

			{#if $delayed}<LoaderCircleIcon class="flex-shrink-0 animate-spin" />{/if}
			{#if $message?.type === 'error'}
				<XIcon class="flex-shrink-0 text-red-700" size={24} strokeWidth={3} />
				<p class="text-pretty text-red-700">{$message.text}</p>
			{:else if $message?.type === 'success'}
				<CheckIcon class="flex-shrink-0 text-green-700" size={24} strokeWidth={3} />
				<p class="text-pretty text-green-700">{$message.text}</p>
			{/if}
		</div>
	</form>
</SimpleLayout.Section>

<style lang="postcss">
	form :global([aria-invalid='true']) {
		@apply border-red-700;
	}
</style>
