import { error } from '@sveltejs/kit';

export async function load({ params }) {
	if (['konfiguration', 'terminliste'].includes(params.slug)) error(404, 'Not found');
}
