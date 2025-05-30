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
	ensembles?: string[];
};
