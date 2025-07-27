import { type RequestEvent } from '@sveltejs/kit';

import { LINK_ICAL } from '$env/static/private';

import { parseIcalData } from '$lib/server/ical';

import { getEnd, getStart } from '$lib/time';

async function fetchEvents(fetch: RequestEvent['fetch']) {
	console.time('ical processing');
	const response = await fetch(LINK_ICAL);
	console.timeLog('ical processing', 'fetch finished');
	const data = await response.text();

	const events = await parseIcalData(data);
	console.timeEnd('ical processing');

	return events
		.filter((event) => getEnd(event.time) >= new Date())
		.toSorted((a, b) => getStart(a.time).getTime() - getStart(b.time).getTime());
}

export async function load({ fetch }) {
	const events = await fetchEvents(fetch);

	return { events };
}
