import { LINK_ICAL } from '$env/static/private';

import { parseIcalData } from '$lib/server/ical';

import ensembleImage from '$lib/assets/ensembleImage.jpg';
import example1 from '$lib/assets/example1.avif';
import example2 from '$lib/assets/example2.avif';
import { getEnd, getStart } from '$lib/time';

import type { NewsData } from './types';

export async function load({ fetch }) {
	console.time('ical processing');
	const response = await fetch(LINK_ICAL);
	console.timeLog('ical processing', 'fetch finished');
	const data = await response.text();

	const gigs = await parseIcalData(data);
	console.timeEnd('ical processing');

	const news = [
		{
			date: new Date('2025-12-21T20:00+01:00'),
			title: 'Weihnachskonzert',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores praesentium porro deleniti officia eos accusantium consequuntur et esse quibusdam in?',
			ensembles: ['Jugendorchester', 'Bläserklasse'],
			assets: [
				{ type: 'image', uri: ensembleImage },
				{ type: 'image', uri: example1 },
				{ type: 'image', uri: example2 },
			],
		},
		{
			date: new Date('2025-06-12T12:00+01:00'),
			title: 'Sensensteinfahrt',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores praesentium porro deleniti officia eos accusantium consequuntur et esse quibusdam in?',
			ensembles: ['Jugendorchester', 'Bläserklasse'],
			assets: [
				{ type: 'image', uri: ensembleImage },
				{ type: 'image', uri: example1 },
				{ type: 'image', uri: example2 },
			],
		},
	] satisfies NewsData[];

	return {
		gigs: gigs
			.filter((gig) => getEnd(gig.time) >= new Date())
			.toSorted((a, b) => getStart(a.time).getTime() - getStart(b.time).getTime()),
		news: news.toSorted((a, b) => b.date.getTime() - a.date.getTime()),
	};
}
