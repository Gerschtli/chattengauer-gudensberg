import { type RequestEvent } from '@sveltejs/kit';

import { LINK_ICAL } from '$env/static/private';

import { parseIcalData } from '$lib/server/ical';

import { getEnd, getStart } from '$lib/time';
import type { EventData } from '$lib/types';

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
	const events = [
		{
			time: {
				type: 'range',
				start: new Date('2026-09-15T19:00:00'),
				end: new Date('2026-09-15T21:00:00'),
			},
			title: 'Gemeinsame Probe',
			description: 'Vorbereitung auf das Herbstkonzert.',
			location: 'Vereinsheim Gudensberg',
			ensembles: ['jugendorchester', 'blaeserklassen'],
		},
		{
			time: {
				type: 'range',
				start: new Date('2026-09-20T14:00:00'),
				end: new Date('2026-09-20T18:00:00'),
			},
			title: 'Auftritt beim Straßenfest',
			description: 'Musikalische Begleitung des jährlichen Straßenfests.',
			location: 'Innenstadt Gudensberg',
			ensembles: ['blaeserklassen'],
		},
		{
			time: {
				type: 'range',
				start: new Date('2026-10-03T19:00:00'),
				end: new Date('2026-10-03T21:30:00'),
			},
			title: 'Herbstkonzert',
			description:
				'Unser traditionelles Herbstkonzert mit Stücken aus Klassik, Filmmusik und Pop.\nEinlass ab 18:30 Uhr.',
			location: 'Stadthalle Gudensberg',
			ensembles: ['jugendorchester', 'blaeserklassen'],
		},
		{
			time: {
				type: 'all-day',
				day: '2026-10-17',
			},
			title: 'Instrumentenschnuppertag',
			description: 'Kinder und Jugendliche können verschiedene Instrumente ausprobieren.',
			location: 'Vereinsheim Gudensberg',
			ensembles: ['jugendorchester'],
		},
		{
			time: {
				type: 'range',
				start: new Date('2026-11-07T19:00:00'),
				end: new Date('2026-11-07T21:00:00'),
			},
			title: 'Notenlesen-Workshop',
			description: 'Workshop für Neueinsteiger rund um Notenlesen und Rhythmik.',
			location: 'Vereinsheim Gudensberg',
			ensembles: ['jugendorchester'],
		},
		{
			time: {
				type: 'all-day',
				day: '2026-11-14',
			},
			title: 'Probenwochenende',
			description: 'Gemeinsames Probenwochenende zur Vorbereitung auf das Weihnachtskonzert.',
			location: 'Jugendherberge Frankenau',
			ensembles: ['jugendorchester'],
		},
		{
			time: {
				type: 'range',
				start: new Date('2026-11-28T15:00:00'),
				end: new Date('2026-11-28T18:00:00'),
			},
			title: 'Adventsbasar-Auftritt',
			description: 'Kurzes Konzert auf dem Adventsbasar der Gemeinde.',
			location: 'Gemeindehaus Gudensberg',
			ensembles: ['blaeserklassen'],
		},
		{
			time: {
				type: 'range',
				start: new Date('2026-12-06T15:00:00'),
				end: new Date('2026-12-06T17:00:00'),
			},
			title: 'Weihnachtsmarkt-Auftritt',
			description: 'Musikalische Umrahmung des Weihnachtsmarkts auf dem Marktplatz.',
			location: 'Marktplatz Gudensberg',
			ensembles: ['blaeserklassen'],
		},
		{
			time: {
				type: 'range',
				start: new Date('2026-12-19T18:00:00'),
				end: new Date('2026-12-19T20:00:00'),
			},
			title: 'Weihnachtskonzert',
			description: 'Besinnliches Konzert mit weihnachtlichen Stücken für die ganze Familie.',
			location: 'Stadtkirche Gudensberg',
			ensembles: ['jugendorchester', 'blaeserklassen'],
		},
		{
			time: {
				type: 'range',
				start: new Date('2027-01-10T19:30:00'),
				end: new Date('2027-01-10T21:00:00'),
			},
			title: 'Neujahrsempfang',
			description: 'Geselliges Beisammensein mit musikalischer Begleitung zum Jahresauftakt.',
			location: 'Vereinsheim Gudensberg',
			ensembles: ['blaeserklassen'],
		},
		{
			time: {
				type: 'range',
				start: new Date('2027-01-17T19:00:00'),
				end: new Date('2027-01-17T21:00:00'),
			},
			title: 'Gemeinsame Probe',
			description: 'Erste Probe im neuen Jahr, Einstieg ins neue Notenprogramm.',
			location: 'Vereinsheim Gudensberg',
			ensembles: ['jugendorchester', 'blaeserklassen'],
		},
		{
			time: {
				type: 'range',
				start: new Date('2027-01-24T19:30:00'),
				end: new Date('2027-01-24T22:00:00'),
			},
			title: 'Jahreshauptversammlung',
			description: 'Rückblick auf das vergangene Jahr, Neuwahlen und Ausblick auf 2027.',
			location: 'Vereinsheim Gudensberg',
		},
	] satisfies EventData[];

	return {
		events: events
			.filter((event) => getEnd(event.time) >= new Date())
			.toSorted((a, b) => getStart(a.time).getTime() - getStart(b.time).getTime()),
	};
}
