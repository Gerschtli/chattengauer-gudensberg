import type { EnsembleLink, StoryblokRichTextDoc } from '#lib/storyblok/types.js';

export type EventData = {
	time:
		| {
				type: 'all-day';
				day: string;
		  }
		| {
				type: 'range';
				start: Date;
				end?: Date;
		  };
	title: string;
	description?: StoryblokRichTextDoc;
	location?: string;
	ensembles?: EnsembleLink[];
};
