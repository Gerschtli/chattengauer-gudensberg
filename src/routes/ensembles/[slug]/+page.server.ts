import { error } from '@sveltejs/kit';
import dedent from 'dedent';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { CONTACT_EMAIL, CONTACT_NAME, SENDER_EMAIL, SENDER_NAME } from '$env/static/private';

import { sendMail } from '$lib/server/mail';

import { isEnsemble } from '$lib/ensembles';

import { schema } from './schema';

export async function load({ params }) {
	if (!isEnsemble(params.slug)) error(404);

	return {
		form: await superValidate(zod(schema)),
		slug: params.slug,
	};
}

export const actions = {
	async default({ request, params }) {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) return fail(400, { form });

		const success = await sendMail({
			from: { name: SENDER_NAME, address: SENDER_EMAIL },
			to: { name: CONTACT_NAME, address: CONTACT_EMAIL },
			replyTo: { name: form.data.name, address: form.data.email },
			subject: `Kontaktformular: join via ${params.slug}`,
			text: dedent`
				Name: ${form.data.name}
				Intention: join via ${params.slug}
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
