export async function handleError({ error, status }) {
	// do not log 404 errors
	if (status === 404) return;

	console.error('Handling error', error);
}
