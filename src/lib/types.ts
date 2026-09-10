import type { EnsembleLink } from '$storyblok/335007/storyblok-components';
import type { StoryblokRichTextDoc } from '$storyblok/storyblok';

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
