<script lang="ts">
	import { Control, Field, FieldErrors, Label } from 'formsnap';
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

	<form method="POST" use:enhance class="flex flex-col gap-y-2">
		<Field {form} name="intention">
			<Control>
				{#snippet children({ props })}
					<div>
						<Label class="text-xs font-bold uppercase tracking-wider text-neutral-600">Ich möchxte</Label>
						<select
							{...props}
							class="block w-full rounded-md border-b border-slate-500 bg-slate-100 px-3 py-2"
							bind:value={$formData.intention}
						>
							<option value={IntentionEnum.enum.none}>Bitte wählen</option>
							<option value={IntentionEnum.enum.join}>Mitmachen</option>
							<option value={IntentionEnum.enum.apply}>Dirigent*in werden</option>
							<option value={IntentionEnum.enum.support}>Unterstützen</option>
						</select>
					</div>
				{/snippet}
			</Control>
			<FieldErrors class="text-xs text-red-600" />
		</Field>
		<Field {form} name="email">
			<Control>
				{#snippet children({ props })}
					<div>
						<Label class="text-xs font-bold uppercase tracking-wider text-neutral-600">Email</Label>
						<input
							{...props}
							class="block w-full rounded-md border-b border-slate-500 bg-slate-100 px-3 py-2"
							type="email"
							bind:value={$formData.email}
						/>
					</div>
				{/snippet}
			</Control>
			<FieldErrors class="text-xs text-red-600" />
		</Field>
		<Field {form} name="name">
			<Control>
				{#snippet children({ props })}
					<div>
						<Label class="text-xs font-bold uppercase tracking-wider text-neutral-600">Name</Label>
						<input
							{...props}
							class="block w-full rounded-md border-b border-slate-500 bg-slate-100 px-3 py-2"
							type="name"
							bind:value={$formData.name}
						/>
					</div>
				{/snippet}
			</Control>
			<FieldErrors class="text-xs text-red-600" />
		</Field>
		<Field {form} name="message">
			<Control>
				{#snippet children({ props })}
					<div>
						<Label class="text-xs font-bold uppercase tracking-wider text-neutral-600">Nachricht</Label>
						<textarea
							{...props}
							class="block w-full rounded-md border-b border-slate-500 bg-slate-100 px-3 py-2"
							bind:value={$formData.message}
						></textarea>
					</div>
				{/snippet}
			</Control>
			<FieldErrors class="text-xs text-red-600" />
		</Field>
		<button
			class="flex w-full items-center justify-center rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
		>
			Absenden
		</button>
	</form>
</SimpleLayout.Section>
