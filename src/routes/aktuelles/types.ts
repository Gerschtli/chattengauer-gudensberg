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
	images: string[];
};
