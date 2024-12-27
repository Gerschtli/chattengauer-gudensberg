import type { SliderAsset } from '$lib/types';

export type GigData = {
	start: Date;
	end: Date;
	title: string;
	description?: string;
	location: string;
	ensembles: string[];
};

export type NewsData = {
	date: Date;
	title: string;
	description?: string;
	ensembles: string[];
	assets: SliderAsset[];
};
