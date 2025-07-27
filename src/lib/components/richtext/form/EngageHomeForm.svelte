<script lang="ts">
	import { Control, Description, Field, FieldErrors, Fieldset, Label } from 'formsnap';
	import { AsteriskIcon, CheckIcon, LoaderCircleIcon, XIcon } from 'lucide-svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { instruments } from '$lib/instruments';

	import Potty from './Potty.svelte';
	import { IntentionEnum, type SuperValidatedEngageHome, schemaEngageHome } from './schema';

	let { superValidated }: { superValidated: SuperValidatedEngageHome } = $props();

	const form = superForm(superValidated, {
		validators: zodClient(schemaEngageHome),
	});
	const { form: formData, enhance, delayed, message } = form;
</script>

<form method="POST" action="?/engage" use:enhance class="form flex flex-col gap-y-4">
	<div class="flex flex-col gap-y-1">
		<Fieldset {form} name="intention">
			<div class="intention-set mt-1">
				<Control>
					{#snippet children({ props })}
						<input
							{...props}
							class="cursor-pointer"
							type="radio"
							bind:group={$formData.intention}
							value={IntentionEnum.enum.join}
						/>
						<Label class="cursor-pointer font-bold">Mach mit!</Label>
						<Description>
							Möchtest du ein Instrument lernen oder dich als Musiker in eins unserer Orchester
							einbringen? Dann wird es höchste Zeit, dass wir uns kennenlernen!
						</Description>
					{/snippet}
				</Control>
				<Control>
					{#snippet children({ props })}
						<input
							{...props}
							class="cursor-pointer"
							type="radio"
							bind:group={$formData.intention}
							value={IntentionEnum.enum.apply}
						/>
						<Label class="cursor-pointer font-bold">Sei dabei!</Label>
						<Description>
							Du bist Instrumentallehrer, Dirigent oder hast eine Fortbildung zum Bläserklassenleiter
							absolviert? <br />
							Wenn auch für dich Teamgeist und Spaß an der Musik an erster Stelle stehen und du dein Wissen
							und Können gerne bei uns einbringen möchtest, dann zögere nicht und schick uns eine Nachricht!
						</Description>
					{/snippet}
				</Control>
				<Control>
					{#snippet children({ props })}
						<input
							{...props}
							class="cursor-pointer"
							type="radio"
							bind:group={$formData.intention}
							value={IntentionEnum.enum.support}
						/>
						<Label class="cursor-pointer font-bold">Unterstütze uns!</Label>
						<Description class="grid gap-1">
							<p>Hilf uns dabei, noch mehr zu bewegen:</p>

							<h3 class="font-bold">Spenden</h3>
							<p>
								Du bist begeistert von unserem Verein und willst spenden? Egal, ob kleine oder große
								Beiträge - um unsere Projekte und den Nachwuchs zu fördern sind wir über deine
								Unterstützung sehr dankbar.
							</p>

							<h3 class="font-bold">Fördermitgliedschaft</h3>
							<p>
								Für alle, die Teil unserer Gemeinschaft sein und uns finanziell unterstützen möchten,
								ohne aktiv mitzuspielen.
							</p>
						</Description>
					{/snippet}
				</Control>
			</div>
			<FieldErrors class="text-xs text-red-600" />
		</Fieldset>
	</div>

	{#if $formData.intention === IntentionEnum.Enum.join}
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
							list="instruments"
							bind:value={$formData.instrument}
						/>
						<datalist id="instruments">
							{#each instruments as instrument (instrument)}
								<option value={instrument}></option>
							{/each}
						</datalist>
					{/snippet}
				</Control>
				<FieldErrors class="text-xs text-red-600" />
				<Description class="text-sm text-neutral-500">Welche(s) Instrument(e) spielst du?</Description>
			</Field>
		</div>
	{:else if $formData.intention === IntentionEnum.Enum.apply}
		<div class="flex flex-col gap-y-1">
			<Field {form} name="experience">
				<Control>
					{#snippet children({ props })}
						<Label class="text-sm">
							Deine Vorerfahrungen
							{#if props['aria-required']}
								<AsteriskIcon class="inline align-top text-slate-500" strokeWidth={1} size={12} />
							{/if}
						</Label>
						<input
							{...props}
							class="w-full rounded-md border border-slate-300 px-3 py-2"
							type="text"
							bind:value={$formData.experience}
						/>
					{/snippet}
				</Control>
				<FieldErrors class="text-xs text-red-600" />
				<Description class="text-sm text-neutral-500">Hast du schon einmal dirigiert?</Description>
			</Field>
		</div>
	{/if}
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

	.intention-set {
		display: grid;
		grid-template-columns: min-content 1fr;
		column-gap: calc(var(--spacing) * 4);
		row-gap: var(--spacing);
		align-items: center;

		:global([data-fs-description]) {
			grid-column: 2;
			color: var(--color-slate-700);
		}

		input:global([data-fs-error]) {
			filter: drop-shadow(0 0 4px var(--color-accent));
		}
	}
</style>
