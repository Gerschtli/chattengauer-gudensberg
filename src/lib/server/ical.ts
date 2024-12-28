import ICAL from 'ical.js';

import type { GigData } from '$lib/types';

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

function splitDescriptionRaw(descriptionRaw: string | undefined) {
	if (!descriptionRaw) return { description: undefined, ensembles: [] };

	const matchesEnsembles = descriptionRaw.match(/\nEnsembles:(.+)[\s\S]?/);
	let ensembles: string[] = [];
	if (matchesEnsembles) {
		ensembles = matchesEnsembles[1].split(',').map((x) => x.trim());
	}

	const matchesDescription = descriptionRaw.match(/\nWebsite Beschreibung:([\s\S]+)/);
	let description: string | undefined = undefined;
	if (matchesDescription) {
		description = matchesDescription[1].trim();
	}

	return {
		description,
		ensembles,
	};
}

export async function parseIcalData(data: string) {
	const jcalData = await ICAL.parse(data);
	const comp = new ICAL.Component(jcalData);

	const icalEvents: GigData[] = [];
	for (const elem of comp.getAllSubcomponents()) {
		if (elem.name !== 'vevent') continue;

		const day = getDate(elem, 'dtstart');
		const start = getDateTime(elem, 'dtstart');
		const end = getDateTime(elem, 'dtend');
		const title = getText(elem, 'summary');
		const descriptionRaw = getText(elem, 'description');
		const location = getText(elem, 'location');

		let time: GigData['time'] | undefined;
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

		if (!title || !time) continue;

		const { description, ensembles } = splitDescriptionRaw(descriptionRaw);

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
