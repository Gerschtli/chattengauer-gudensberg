import ensembleImage from '$lib/assets/ensembleImage.jpg';
import example1 from '$lib/assets/example1.avif';
import example2 from '$lib/assets/example2.avif';

import type { GigData, NewsData } from './types';

export async function load() {
	const gigs = [
		{
			start: new Date('2024-12-27T00:00+01:00'),
			end: new Date('2024-12-27T00:38+01:00'),
			title: 'Kid.Chatts Grundschul-Weihnachtskonzert',
			description: 'Hier machen wir Werbung für unsere nächste Bläserklasse!',
			location: 'Bürgerhaus Gudensberg, Rathausgasse, 34281 Gudensberg',
			ensembles: ['Jugendorchester', 'Bläserklasse'],
		},
		{
			start: new Date('2025-11-01T17:00+01:00'),
			end: new Date('2025-11-01T18:00+01:00'),
			title: 'Kid.Chatts Grundschul-Weihnachtskonzert',
			description: 'Hier machen wir Werbung für unsere nächste Bläserklasse!',
			location: 'Bürgerhaus Gudensberg, Rathausgasse, 34281 Gudensberg',
			ensembles: ['Jugendorchester', 'Bläserklasse'],
		},
		{
			start: new Date('2025-11-17T12:00+01:00'),
			end: new Date('2025-11-17T16:00+01:00'),
			title: 'Streuobstwiesenfest',
			location: 'F26, Fritzlarer Str. 26, 34281 Gudensberg',
			ensembles: ['Hauptorchester'],
		},
		{
			start: new Date('2025-12-02T12:00+01:00'),
			end: new Date('2025-12-03T16:00+01:00'),
			title: 'Weihnachtsmarkt Gudensberg',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores praesentium porro deleniti officia eos accusantium consequuntur et esse quibusdam in?',
			location: 'Innenstadt, 34281 Gudensberg',
			ensembles: ['Jugendorchester', 'Hauptorchester'],
		},
		{
			start: new Date('2025-12-15T16:00+01:00'),
			end: new Date('2025-12-15T18:00+01:00'),
			title: 'Adventskonzert',
			location: 'Ev. Stadtkirche, Am Schloßberg 6, 34281 Gudensberg',
			ensembles: ['Hauptorchester'],
		},
		{
			start: new Date('2025-12-21T17:00+01:00'),
			end: new Date('2025-12-21T20:00+01:00'),
			title: 'Weihnachskonzert',
			location: 'Bürgerhaus, Rathausgasse, 34281 Gudensberg',
			ensembles: ['Jugendorchester', 'Bläserklasse'],
		},
	] satisfies GigData[];

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
		gigs: gigs //
			.filter((gig) => gig.end >= new Date())
			.toSorted((a, b) => a.start.getTime() - b.start.getTime()),
		news: news.toSorted((a, b) => b.date.getTime() - a.date.getTime()),
	};
}
