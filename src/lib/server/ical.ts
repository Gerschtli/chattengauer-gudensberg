import ICAL from 'ical.js';

import type { EventData } from '$lib/types';

function getDateTime(component: ICAL.Component, name: string) {
	const property = component.getFirstProperty(name);

	if (property?.toJSON()[2] !== 'date-time') return undefined;

	const value = property.getFirstValue();
	if (!(value instanceof ICAL.Time)) return undefined;

	return value.toJSDate();
}

function getDate(component: ICAL.Component, name: string) {
	const property = component.getFirstProperty(name);

	if (property?.toJSON()[2] !== 'date') return undefined;

	const value = property.getFirstValue();
	if (!(value instanceof ICAL.Time)) return undefined;

	return value.toString();
}

function getText(component: ICAL.Component, name: string) {
	const property = component.getFirstProperty(name);

	if (property?.toJSON()[2] !== 'text') return undefined;

	const value = property.getFirstValue();
	if (typeof value !== 'string') return undefined;

	return value;
}

function splitDescriptionRaw(descriptionRaw: string) {
	const matchesMarker = descriptionRaw.match(/(?:\s|^)Website: ?Ja\s?/);
	if (!matchesMarker) {
		return { marker: false } as const;
	}

	const matchesEnsembles = descriptionRaw.match(/(?:\s|^)Ensembles:(.+)\s?/);
	let ensembles: string[] = [];
	if (matchesEnsembles) {
		ensembles = matchesEnsembles[1].split(',').map((x) => x.trim());
	}

	const matchesDescription = descriptionRaw.match(/(?:\s|^)Website Beschreibung:([\s\S]+)/);
	let description: string | undefined = undefined;
	if (matchesDescription) {
		description = matchesDescription[1].trim();
	}

	return {
		marker: true,
		description,
		ensembles,
	} as const;
}

export async function parseIcalData(data: string) {
	const jcalData = await ICAL.parse(data);
	const comp = new ICAL.Component(jcalData);

	console.timeLog('ical processing', `count of elements: ${comp.getAllSubcomponents().length}`);

	const icalEvents: EventData[] = [];
	for (const elem of comp.getAllSubcomponents()) {
		if (elem.name !== 'vevent') continue;

		const day = getDate(elem, 'dtstart');
		const start = getDateTime(elem, 'dtstart');
		const end = getDateTime(elem, 'dtend');
		const title = getText(elem, 'summary');
		const status = getText(elem, 'status');
		const descriptionRaw = getText(elem, 'description');
		const location = getText(elem, 'location');

		let time: EventData['time'] | undefined;
		if (day) {
			time = {
				type: 'all-day',
				day,
			};
		} else if (start && end) {
			time = {
				type: 'range',
				start,
				end,
			};
		}

		if (!title || !time || !descriptionRaw || status === 'CANCELLED') continue;

		const { marker, description, ensembles } = splitDescriptionRaw(descriptionRaw);

		if (!marker) continue;

		icalEvents.push({
			time,
			title,
			description,
			location,
			ensembles,
		});
	}

	return icalEvents;
}
