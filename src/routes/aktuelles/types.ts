import type { SliderAsset } from '$lib/types';

export type NewsData = {
	date: Date;
	title: string;
	description?: string;
	ensembles: string[];
	assets: SliderAsset[];
};
