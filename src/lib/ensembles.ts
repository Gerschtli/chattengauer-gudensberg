export type Ensemble = keyof typeof ensembles;

export function isEnsemble(slug: string): slug is Ensemble {
	return slug in ensembles;
}

export const ensembles = {
	'grosses-orchester': {
		name: 'Großes Orchester',
	},
	blaeserklassen: {
		name: 'Bläserklassen Kid.Chatts',
	},
	jugendorchester: {
		name: 'Jugendorchester',
	},
	'brass-und-spass': {
		name: 'Brass & Spaß',
	},
};
