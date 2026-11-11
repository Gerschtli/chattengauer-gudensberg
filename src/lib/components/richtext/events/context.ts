import type { EventData } from '#lib/types.ts';
import { getContext, setContext } from 'svelte';

export function setEvents(events: EventData[]) {
	setContext<EventData[]>('events', events);
}

export function getEvents() {
	return getContext<EventData[]>('events');
}
