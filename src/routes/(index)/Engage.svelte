<script lang="ts">
	import { Control, Description, Field, FieldErrors, Fieldset, Label, Legend } from 'formsnap';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { dev } from '$app/environment';

	import { SimpleLayout } from '$lib/simpleLayout';

	import type { PageData } from './$types';
	import { IntentionEnum, schema } from './schema.js';

	let { data }: { data: PageData } = $props();

	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance } = form;
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
		<div>
			<Fieldset {form} name="intention">
				<Legend class="text-sm">Du möchtest</Legend>
				<div class="intention-set mt-1">
					<Control>
						{#snippet children({ props })}
							<input
								{...props}
								type="radio"
								bind:group={$formData.intention}
								value={IntentionEnum.enum.join}
							/>
							<Label>Mitmachen</Label>
							<Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellendus cum
								exercitationem!
							</Description>
						{/snippet}
					</Control>
					<Control>
						{#snippet children({ props })}
							<input
								{...props}
								type="radio"
								bind:group={$formData.intention}
								value={IntentionEnum.enum.apply}
							/>
							<Label>Dirigent*in werden</Label>
							<Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellendus cum
								exercitationem!
							</Description>
						{/snippet}
					</Control>
					<Control>
						{#snippet children({ props })}
							<input
								{...props}
								type="radio"
								bind:group={$formData.intention}
								value={IntentionEnum.enum.support}
							/>
							<Label>Unterstützen</Label>
							<Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellendus cum
								exercitationem!
							</Description>
						{/snippet}
					</Control>
				</div>
				<FieldErrors class="text-xs text-red-600" />
			</Fieldset>
		</div>

		{#if $formData.intention === IntentionEnum.Enum.join}
			<div>
				<Field {form} name="instrument">
					<Control>
						{#snippet children({ props })}
							<Label class="text-sm">Dein Instrument</Label>
							<input
								{...props}
								class="w-full rounded-md border border-slate-300 px-3 py-2"
								type="text"
								bind:value={$formData.instrument}
							/>
						{/snippet}
					</Control>
					<Description class="text-sm text-neutral-400">Welches Instrument spielst du?</Description>
					<FieldErrors class="text-xs text-red-600" />
				</Field>
			</div>
		{:else if $formData.intention === IntentionEnum.Enum.apply}
			<div>
				<Field {form} name="experience">
					<Control>
						{#snippet children({ props })}
							<Label class="text-sm">Deine Vorerfahrungen</Label>
							<input
								{...props}
								class="w-full rounded-md border border-slate-300 px-3 py-2"
								type="text"
								bind:value={$formData.experience}
							/>
						{/snippet}
					</Control>
					<Description class="text-sm text-neutral-400">Hast du schon einmal dirigiert?</Description>
					<FieldErrors class="text-xs text-red-600" />
				</Field>
			</div>
		{:else if $formData.intention === IntentionEnum.Enum.support}
			<p>
				Du kannst Fördermitglied werden oder uns etwas spenden! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Perferendis rerum autem impedit earum quae dolor, optio corrupti delectus quasi
				maiores.
			</p>
		{/if}
		{#if $formData.intention}
			<div>
				<Field {form} name="name">
					<Control>
						{#snippet children({ props })}
							<Label class="text-sm">Dein Name</Label>
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
			<div>
				<Field {form} name="email">
					<Control>
						{#snippet children({ props })}
							<Label class="text-sm">Deine E-Mail Adresse</Label>
							<input
								{...props}
								class="w-full rounded-md border border-slate-300 px-3 py-2"
								type="email"
								bind:value={$formData.email}
							/>
						{/snippet}
					</Control>
					<Description class="text-sm text-neutral-400">
						Wie können wir dich erreichen? Wird ausschließlich zur direkten Kontaktaufnahme verwendet.
					</Description>
					<FieldErrors class="text-xs text-red-600" />
				</Field>
			</div>
			<div>
				<Field {form} name="message">
					<Control>
						{#snippet children({ props })}
							<Label class="text-sm">Deine Nachricht</Label>
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
			<div>
				<button class="rounded-md bg-accent px-4 py-2 text-sm text-white shadow-sm">Absenden</button>
			</div>
		{/if}
	</form>
</SimpleLayout.Section>

<style lang="postcss">
	form :global([aria-invalid='true']) {
		@apply border-red-700;
	}

	.intention-set {
		display: grid;
		grid-template-columns: min-content 1fr;
		column-gap: theme('spacing.4');
		row-gap: theme('spacing.1');

		:global([data-fs-description]) {
			grid-column: 2;
			font-style: italic;
			font-size: theme('fontSize.sm');
		}
	}
</style>
