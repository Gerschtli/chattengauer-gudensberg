import { getContext, setContext } from 'svelte';

import type { EventData } from '$lib/types';

export function setEvents(events: EventData[]) {
	setContext<EventData[]>('events', events);
}

export function getEvents() {
	return getContext<EventData[]>('events');
}
