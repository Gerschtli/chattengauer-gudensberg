import dedent from 'dedent';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { CONTACT_EMAIL, CONTACT_NAME, SENDER_EMAIL, SENDER_NAME } from '$env/static/private';

import { sendMail } from '$lib/server/mail';

import { schemaEngageEnsemble } from '$lib/components/richtext/form/schema';

export async function load() {
	return { form: await superValidate(zod(schemaEngageEnsemble)) };
}

export const actions = {
	async default({ request, params }) {
		const formData = await request.formData();
		const form = await superValidate(formData, zod(schemaEngageEnsemble));

		if (formData.get('code') !== '' || !form.valid) return fail(400, { form });

		const success = await sendMail({
			from: { name: SENDER_NAME, address: SENDER_EMAIL },
			to: { name: CONTACT_NAME, address: CONTACT_EMAIL },
			replyTo: { name: form.data.name, address: form.data.email },
			subject: `Kontaktformular: Mach mit! bei ${params.slug}`,
			text: dedent`
				Name: ${form.data.name}
				Intention: Mach mit! bei ${params.slug}
				Instrument: ${form.data.instrument ?? 'N/A'}

				${form.data.message}
			`,
		});

		if (success) {
			return message(form, { type: 'success', text: 'Nachricht wurde gesendet, wir melden uns!' });
		}

		return message(
			form,
			{ type: 'error', text: 'Etwas ist schief gelaufen, bitte versuche es noch einmal.' },
			{ status: 500 },
		);
	},
};
