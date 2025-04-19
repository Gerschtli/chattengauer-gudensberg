import type { Ensemble } from './ensembles';

export type EventData = {
	time:
		| {
				type: 'all-day';
				day: string;
		  }
		| {
				type: 'range';
				start: Date;
				end: Date;
		  };
	title: string;
	description?: string;
	location?: string;
	ensembles?: Ensemble[];
};

export type SliderAsset = { type: 'image'; uri: string };
