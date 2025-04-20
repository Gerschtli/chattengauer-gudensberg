import dedent from 'dedent';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { CONTACT_EMAIL, CONTACT_NAME, SENDER_EMAIL, SENDER_NAME } from '$env/static/private';

import { sendMail } from '$lib/server/mail';

import { schemaBooking, schemaEngageHome } from '$lib/components/richtext/form/schema';

export async function load() {
	return {
		formBooking: await superValidate(zod(schemaBooking)),
		formEngage: await superValidate(zod(schemaEngageHome)),
	};
}

export const actions = {
	async booking({ request }) {
		const formBooking = await superValidate(request, zod(schemaBooking));

		if (!formBooking.valid) return fail(400, { formBooking });

		const success = await sendMail({
			from: { name: SENDER_NAME, address: SENDER_EMAIL },
			to: { name: CONTACT_NAME, address: CONTACT_EMAIL },
			replyTo: { name: formBooking.data.name, address: formBooking.data.email },
			subject: `Kontaktformular: Buchen`,
			text: dedent`
				Name: ${formBooking.data.name}
				Intention: Buchen

				${formBooking.data.message}
			`,
		});

		if (success) {
			return message(formBooking, { type: 'success', text: 'Nachricht wurde gesendet, wir melden uns!' });
		}

		return message(
			formBooking,
			{ type: 'error', text: 'Etwas ist schief gelaufen, bitte versuche es noch einmal.' },
			{ status: 500 },
		);
	},

	async engage({ request }) {
		const formEngage = await superValidate(request, zod(schemaEngageHome));

		if (!formEngage.valid) return fail(400, { formEngage });

		let intention: string;
		switch (formEngage.data.intention) {
			case 'join':
				intention = 'Mach mit!';
				break;
			case 'apply':
				intention = 'Sei dabei!';
				break;
			case 'support':
				intention = 'Unterstütze uns!';
				break;
		}

		const success = await sendMail({
			from: { name: SENDER_NAME, address: SENDER_EMAIL },
			to: { name: CONTACT_NAME, address: CONTACT_EMAIL },
			replyTo: { name: formEngage.data.name, address: formEngage.data.email },
			subject: `Kontaktformular: ${intention}`,
			text: dedent`
				Name: ${formEngage.data.name}
				Intention: ${intention}
				Erfahrung: ${formEngage.data.experience ?? 'N/A'}
				Instrument: ${formEngage.data.instrument ?? 'N/A'}

				${formEngage.data.message}
			`,
		});

		if (success) {
			return message(formEngage, { type: 'success', text: 'Nachricht wurde gesendet, wir melden uns!' });
		}

		return message(
			formEngage,
			{ type: 'error', text: 'Etwas ist schief gelaufen, bitte versuche es noch einmal.' },
			{ status: 500 },
		);
	},
};
