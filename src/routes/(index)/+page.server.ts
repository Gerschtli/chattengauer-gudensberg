import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { schema } from './schema';

export async function load() {
	return {
		form: await superValidate(zod(schema)),
	};
}

export const actions = {
	async default({ request }) {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) return fail(400, { form });

		console.log(form.data);

		return message(form, { type: 'success', text: 'Nachricht wurde gesendet, wir melden uns!' });
	},
};
