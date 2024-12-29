import dedentRaw from 'dedent';
import { describe, expect, it } from 'vitest';

import { parseIcalData } from './ical';

const dedent = dedentRaw.withOptions({ escapeSpecialCharacters: false });

describe('parseIcalData', () => {
	it('parses full event', async () => {
		const ical = buildIcal(dedent`
			BEGIN:VEVENT
			UID:2513f5f0-c552-11ef-8256-275ce817640b
			CREATED:20241228T201839Z
			DTSTART;TZID=Europe/Berlin:20241228T210000
			DTEND;TZID=Europe/Berlin:20241228T220000
			SUMMARY:Tobias Test
			LOCATION:Musterstraße 123, 12345 Musterstadt
			DESCRIPTION:Beschreibung für Intern\n\nWebsite: Ja\nEnsembles: Jugendorchester\, Bläserklasse\nWebsite Beschreibung: Beschreibung für Öffentlichkeit\nsome content\n\nLeerzeile hier drüber\nsome content
			DTSTAMP:20241228T201849Z
			END:VEVENT
		`);

		const gigData = await parseIcalData(ical);

		expect.soft(gigData).toHaveLength(1);
		expect.soft(gigData[0]).toStrictEqual({
			time: {
				type: 'range',
				start: new Date('2024-12-28T20:00:00.000Z'),
				end: new Date('2024-12-28T21:00:00.000Z'),
			},
			title: 'Tobias Test',
			description: dedent`
				Beschreibung für Öffentlichkeit
				some content

				Leerzeile hier drüber
				some content
			`,
			location: 'Musterstraße 123, 12345 Musterstadt',
			ensembles: ['Jugendorchester', 'Bläserklasse'],
		});
	});

	it('parses event without location and description values', async () => {
		const ical = buildIcal(dedent`
			BEGIN:VEVENT
			UID:8cfd96e0-c55b-11ef-8256-275ce817640b
			CREATED:20241228T204028Z
			DTSTART;TZID=Europe/Berlin:20250131T223000
			DTEND;TZID=Europe/Berlin:20250131T233000
			SUMMARY:Tobias Test Minimal
			DESCRIPTION:Website: Ja
			DTSTAMP:20241228T204212Z
			END:VEVENT
		`);

		const gigData = await parseIcalData(ical);

		expect.soft(gigData).toHaveLength(1);
		expect.soft(gigData[0]).toStrictEqual({
			time: {
				type: 'range',
				start: new Date('2025-01-31T21:30:00.000Z'),
				end: new Date('2025-01-31T22:30:00.000Z'),
			},
			title: 'Tobias Test Minimal',
			description: undefined,
			location: undefined,
			ensembles: [],
		});
	});

	it('parses all day event', async () => {
		const ical = buildIcal(dedent`
			BEGIN:VEVENT
			UID:df3bd1b0-c55b-11ef-8256-275ce817640b
			CREATED:20241228T204015Z
			DTSTART;VALUE=DATE:20250131
			SUMMARY:Tobias Test Ganztägig
			DESCRIPTION:Website: Ja
			DTSTAMP:20241228T204212Z
			END:VEVENT
		`);

		const gigData = await parseIcalData(ical);

		expect.soft(gigData).toHaveLength(1);
		expect.soft(gigData[0]).toStrictEqual({
			time: {
				type: 'all-day',
				day: '2025-01-31',
			},
			title: 'Tobias Test Ganztägig',
			description: undefined,
			location: undefined,
			ensembles: [],
		});
	});

	it('parses recurring event into only first occurence', async () => {
		const ical = buildIcal(dedent`
			BEGIN:VEVENT
			UID:249e9350-c55c-11ef-8256-275ce817640b
			CREATED:20241228T204141Z
			DTSTART;TZID=Europe/Berlin:20250131T120000
			DTEND;TZID=Europe/Berlin:20250131T153500
			SUMMARY:Tobias Test Wiederkehrend
			DESCRIPTION:Website: Ja
			RRULE:FREQ=WEEKLY;INTERVAL=1;UNTIL=20250214T225959Z;BYDAY=FR;
			DTSTAMP:20241228T204212Z
			END:VEVENT
		`);

		const gigData = await parseIcalData(ical);

		expect.soft(gigData).toHaveLength(1);
		expect.soft(gigData[0]).toStrictEqual({
			time: {
				type: 'range',
				start: new Date('2025-01-31T11:00:00.000Z'),
				end: new Date('2025-01-31T14:35:00.000Z'),
			},
			title: 'Tobias Test Wiederkehrend',
			description: undefined,
			location: undefined,
			ensembles: [],
		});
	});

	it.each([
		{
			description: 'no summary',
			event: dedent`
				BEGIN:VEVENT
				UID:2513f5f0-c552-11ef-8256-275ce817640b
				CREATED:20241228T201839Z
				DTSTART;TZID=Europe/Berlin:20241228T210000
				DTEND;TZID=Europe/Berlin:20241228T220000
				DESCRIPTION:Website: Ja
				DTSTAMP:20241228T201849Z
				END:VEVENT
			`,
		},
		{
			description: 'no start time',
			event: dedent`
				BEGIN:VEVENT
				UID:2513f5f0-c552-11ef-8256-275ce817640b
				CREATED:20241228T201839Z
				DTEND;TZID=Europe/Berlin:20241228T220000
				SUMMARY:Tobias Test
				DESCRIPTION:Website: Ja
				DTSTAMP:20241228T201849Z
				END:VEVENT
			`,
		},
		{
			description: 'no end time when start is date-time',
			event: dedent`
				BEGIN:VEVENT
				UID:2513f5f0-c552-11ef-8256-275ce817640b
				CREATED:20241228T201839Z
				DTSTART;TZID=Europe/Berlin:20241228T210000
				SUMMARY:Tobias Test
				DESCRIPTION:Website: Ja
				DTSTAMP:20241228T201849Z
				END:VEVENT
			`,
		},
		{
			description: 'no start or end time',
			event: dedent`
				BEGIN:VEVENT
				UID:2513f5f0-c552-11ef-8256-275ce817640b
				CREATED:20241228T201839Z
				SUMMARY:Tobias Test
				DESCRIPTION:Website: Ja
				DTSTAMP:20241228T201849Z
				END:VEVENT
			`,
		},
		{
			description: 'cancelled',
			event: dedent`
				BEGIN:VEVENT
				UID:2513f5f0-c552-11ef-8256-275ce817640b
				CREATED:20241228T201839Z
				DTSTART;TZID=Europe/Berlin:20241228T210000
				DTEND;TZID=Europe/Berlin:20241228T220000
				SUMMARY:Tobias Test
				DESCRIPTION:Website: Ja
				STATUS:CANCELLED
				DTSTAMP:20241228T201849Z
				END:VEVENT
			`,
		},
		{
			description: 'no description',
			event: dedent`
				BEGIN:VEVENT
				UID:2513f5f0-c552-11ef-8256-275ce817640b
				CREATED:20241228T201839Z
				DTSTART;TZID=Europe/Berlin:20241228T210000
				DTEND;TZID=Europe/Berlin:20241228T220000
				SUMMARY:Tobias Test
				DTSTAMP:20241228T201849Z
				END:VEVENT
			`,
		},
		{
			description: 'no marker in description',
			event: dedent`
				BEGIN:VEVENT
				UID:2513f5f0-c552-11ef-8256-275ce817640b
				CREATED:20241228T201839Z
				DTSTART;TZID=Europe/Berlin:20241228T210000
				DTEND;TZID=Europe/Berlin:20241228T220000
				SUMMARY:Tobias Test
				DESCRIPTION:abc
				DTSTAMP:20241228T201849Z
				END:VEVENT
			`,
		},
	])('skips events when $description', async ({ event }) => {
		const ical = buildIcal(event);

		const gigData = await parseIcalData(ical);

		expect.soft(gigData).toHaveLength(0);
	});
});

function buildIcal(vevent: string) {
	return dedent`
		BEGIN:VCALENDAR
		VERSION:2.0
		PRODID:-//klubraum//Calendar//EN
		CALSCALE:GREGORIAN
		BEGIN:VTIMEZONE
		TZID:Europe/Berlin
		X-LIC-LOCATION:Europe/Berlin
		BEGIN:DAYLIGHT
		TZOFFSETFROM:+0100
		TZOFFSETTO:+0200
		TZNAME:CET
		DTSTART:19700329T020000
		RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
		END:DAYLIGHT
		BEGIN:STANDARD
		TZOFFSETFROM:+0200
		TZOFFSETTO:+0100
		TZNAME:CET
		DTSTART:19701025T030000
		RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
		END:STANDARD
		END:VTIMEZONE
		${vevent}
		END:VCALENDAR
	`;
}
